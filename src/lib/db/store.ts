import fs from 'fs';
import path from 'path';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { INITIAL_EXAMS_SEED } from '../seed/exams-seed';
import { REAL_STUDENTS_SEED } from '../seed/students-seed';
import {
  AttemptStatus,
  ClassLevel,
  Exam,
  ExamAttempt,
  ExamQuestion,
  ProctorEventLog,
  ProctorEventType,
  StudentProfile,
} from '../types';
import { gradeExamAttempt } from '../exam/grading';
import { pushAttemptsToGoogleSheets } from '../integrations/sheets';

export interface AppSettings {
  schoolName: string;
  academicYear: string;
  allowDynamicStudentLogin: boolean;
  appsScriptWebhookUrl: string;
  sheetsWebhookSecret: string;
  defaultMaxViolations: number;
}

interface DatabaseShape {
  settings: AppSettings;
  students: StudentProfile[];
  exams: Exam[];
  questions: ExamQuestion[];
  attempts: ExamAttempt[];
}

const DUMMY_STUDENT_IDS = new Set(['std-1', 'std-2', 'std-3', 'std-4']);

function isLegacyStudentId(id: string): boolean {
  return (
    DUMMY_STUDENT_IDS.has(id) ||
    id.startsWith('std-7-') ||
    id.startsWith('std-8-') ||
    id.startsWith('std-9-')
  );
}

function buildSeedExamsAndQuestions(): { exams: Exam[]; questions: ExamQuestion[] } {
  const exams: Exam[] = [];
  const questions: ExamQuestion[] = [];

  for (const seedExam of INITIAL_EXAMS_SEED) {
    exams.push({
      id: seedExam.id,
      code: seedExam.code,
      title: seedExam.title,
      subject: seedExam.subject,
      classLevel: seedExam.classLevel,
      scheduleText: seedExam.scheduleText,
      dayOrder: seedExam.dayOrder,
      dayLabel: seedExam.dayLabel,
      sessionOrder: seedExam.sessionOrder,
      durationMin: seedExam.durationMin,
      status: seedExam.status,
      shuffleQuestions: seedExam.shuffleQuestions,
      shuffleOptions: seedExam.shuffleOptions,
      maxViolations: 3,
      showResultImmediately: true,
      questionCount: seedExam.questions.length,
    });

    for (const q of seedExam.questions) {
      questions.push({
        id: `${seedExam.id}-q-${q.no}`,
        examId: seedExam.id,
        no: q.no,
        context: q.context,
        imageUrl: q.imageUrl,
        text: q.text,
        options: q.options,
        answerKey: q.answerKey,
      });
    }
  }

  return { exams, questions };
}

function buildInitialDb(): DatabaseShape {
  const { exams, questions } = buildSeedExamsAndQuestions();

  return {
    settings: {
      schoolName: 'MADRASAH TSANAWIYAH ASSIBYAN',
      academicYear: '2026 / 2027',
      allowDynamicStudentLogin: true,
      appsScriptWebhookUrl: process.env.APPS_SCRIPT_EXPORT_URL || '',
      sheetsWebhookSecret:
        process.env.SHEETS_WEBHOOK_SECRET || 'mts-assibyan-cbt-secret-2026',
      defaultMaxViolations: 3,
    },
    students: [...REAL_STUDENTS_SEED],
    exams,
    questions,
    attempts: [],
  };
}

function getLocalDbFilePath(): string {
  const cwdPath = path.join(process.cwd(), '.cbt-local-db.json');
  try {
    fs.accessSync(process.cwd(), fs.constants.W_OK);
    return cwdPath;
  } catch {
    return path.join('/tmp', '.cbt-local-db.json');
  }
}

declare global {
  // eslint-disable-next-line no-var
  var __CBT_DB_CACHE__: DatabaseShape | undefined;
}

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || url.includes('xxxx')) {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseAdmin() !== null;
}

export function loadDb(): DatabaseShape {
  if (global.__CBT_DB_CACHE__) {
    return global.__CBT_DB_CACHE__;
  }

  const { exams: seedExams, questions: seedQuestions } = buildSeedExamsAndQuestions();
  const filePath = getLocalDbFilePath();

  if (fs.existsSync(filePath)) {
    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(raw) as DatabaseShape;
      if (parsed && Array.isArray(parsed.exams)) {
        // Selalu sinkronkan paket soal & daftar 51 siswa resmi Kartu Peserta PAS 2026/2027
        const existingStudents = Array.isArray(parsed.students)
          ? parsed.students.filter((s) => !isLegacyStudentId(s.id))
          : [];
        const studentMap = new Map<string, StudentProfile>();
        for (const s of REAL_STUDENTS_SEED) {
          studentMap.set(s.id, { ...s });
        }
        for (const s of existingStudents) {
          if (!studentMap.has(s.id)) {
            studentMap.set(s.id, s);
          }
        }

        // Pertahankan status draft/published/closed jika guru sempat mengubahnya di Admin
        const statusOverrides = new Map<string, Exam['status']>();
        for (const e of parsed.exams) {
          if (e && e.id && e.status) {
            statusOverrides.set(e.id, e.status);
          }
        }

        const mergedExams = seedExams.map((e) => ({
          ...e,
          status: statusOverrides.get(e.id) || e.status,
        }));

        const mergedDb: DatabaseShape = {
          settings: {
            schoolName: parsed.settings?.schoolName || 'MADRASAH TSANAWIYAH ASSIBYAN',
            academicYear: '2026 / 2027',
            allowDynamicStudentLogin: parsed.settings?.allowDynamicStudentLogin ?? true,
            appsScriptWebhookUrl:
              parsed.settings?.appsScriptWebhookUrl ||
              process.env.APPS_SCRIPT_EXPORT_URL ||
              '',
            sheetsWebhookSecret:
              parsed.settings?.sheetsWebhookSecret ||
              process.env.SHEETS_WEBHOOK_SECRET ||
              'mts-assibyan-cbt-secret-2026',
            defaultMaxViolations: parsed.settings?.defaultMaxViolations || 3,
          },
          students: Array.from(studentMap.values()),
          exams: mergedExams,
          questions: seedQuestions,
          attempts: Array.isArray(parsed.attempts)
            ? parsed.attempts.filter((a) => !DUMMY_STUDENT_IDS.has(a.studentId))
            : [],
        };

        global.__CBT_DB_CACHE__ = mergedDb;
        return mergedDb;
      }
    } catch {
      // fallback to initial seed
    }
  }

  const initial = buildInitialDb();
  global.__CBT_DB_CACHE__ = initial;
  saveDb(initial);
  return initial;
}

export function saveDb(db: DatabaseShape): void {
  global.__CBT_DB_CACHE__ = db;
  const filePath = getLocalDbFilePath();
  try {
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2), 'utf8');
  } catch {
    // ignore read-only fs errors in serverless environments
  }
}

/**
 * Normalisasi Nama Siswa menjadi HURUF KAPITAL rapi tanpa spasi ganda
 */
export function normalizeStudentName(name: string): string {
  return name.trim().replace(/\s+/g, ' ').toUpperCase();
}

/**
 * Normalisasi longgar untuk pencocokan nama (mengabaikan titik, tanda hubung, tanda petik, serta variasi MUHAMMAD/MUHAMAD)
 */
function looseNameKey(name: string): string {
  return normalizeStudentName(name)
    .replace(/[^A-Z0-9 ]/g, ' ')
    .replace(/\bMUHAMMAD\b/g, 'MUHAMAD')
    .replace(/\bMOHAMMAD\b/g, 'MUHAMAD')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesStudentName(student: StudentProfile, rawInputName: string): boolean {
  const targetKey = looseNameKey(rawInputName);
  if (!targetKey) return false;
  if (looseNameKey(student.fullName) === targetKey) return true;
  if (Array.isArray(student.aliases)) {
    for (const alias of student.aliases) {
      if (looseNameKey(alias) === targetKey) return true;
    }
  }
  return false;
}

/**
 * Mencocokkan input Nomor Peserta pada Kartu Peserta (contoh: "PAS-2026-001", "001", "2026-001", "1")
 */
function matchesStudentCredential(student: StudentProfile, rawInput: string): boolean {
  const input = rawInput.trim().toUpperCase().replace(/\s+/g, '');
  if (!input) return false;

  const fullCardNo = student.participantNumber.toUpperCase().replace(/\s+/g, ''); // "PAS-2026-001"
  const fullCardCompact = fullCardNo.replace(/[^A-Z0-9]/g, ''); // "PAS2026001"
  const inputCompact = input.replace(/[^A-Z0-9]/g, '');

  if (input === fullCardNo || inputCompact === fullCardCompact) {
    return true;
  }

  // Ambil 3 digit nomor urut siswa (contoh: "001" -> 1)
  const shortStr =
    student.shortNumber ||
    (fullCardNo.match(/(\d{1,3})$/) ? fullCardNo.match(/(\d{1,3})$/)![1].padStart(3, '0') : '');
  const shortNum = parseInt(shortStr, 10);

  if (shortStr) {
    if (
      input === shortStr ||
      inputCompact === `2026${shortStr}` ||
      inputCompact === `PAS${shortStr}`
    ) {
      return true;
    }
    // Jika siswa mengetik "1" untuk "001" atau "PAS-2026-1"
    const tailMatch = input.match(/(?:^|PAS-?2026-?|2026-?)0*(\d{1,3})$/);
    if (tailMatch && parseInt(tailMatch[1], 10) === shortNum) {
      return true;
    }
  }

  return false;
}

/**
 * Autentikasi Siswa menggunakan NAMA PESERTA (KAPITAL) dan NOMOR PESERTA (PAS-2026-XXX) sesuai Kartu Peserta
 */
export async function authenticateStudent(
  rawName: string,
  rawParticipantNumber: string,
  preferredClass?: ClassLevel
): Promise<{ ok: true; student: StudentProfile } | { ok: false; error: string }> {
  const fullName = normalizeStudentName(rawName);
  const participantNumber = rawParticipantNumber.trim().toUpperCase();

  if (!fullName || fullName.length < 2) {
    return {
      ok: false,
      error: 'Masukkan Nama Peserta dengan benar sesuai Kartu Peserta (HURUF KAPITAL).',
    };
  }

  if (!participantNumber || participantNumber.length < 1) {
    return {
      ok: false,
      error: 'Masukkan Nomor Peserta sesuai Kartu Peserta (contoh: PAS-2026-001).',
    };
  }

  const db = loadDb();

  // 1. Cari terlebih dahulu berdasarkan Nama Peserta (prioritaskan kelas yang dipilih bila ada)
  const nameMatches = db.students.filter((s) => matchesStudentName(s, fullName));
  const byName =
    (preferredClass
      ? nameMatches.find((s) => s.className === preferredClass)
      : undefined) || nameMatches[0];

  if (byName) {
    if (!matchesStudentCredential(byName, participantNumber)) {
      return {
        ok: false,
        error: `Nomor Peserta untuk ${byName.fullName} (Kelas ${byName.className} • ${
          byName.roomName || 'RUANG 01'
        }) tidak sesuai. Ketik Nomor Peserta sesuai kartu Anda: ${byName.participantNumber}`,
      };
    }
    return { ok: true, student: byName };
  }

  // 2. Cari berdasarkan Nomor Peserta pada Kelas yang dipilih (karena PAS-2026-001 ada di Kelas VII, VIII, dan IX)
  const credMatches = db.students.filter((s) =>
    matchesStudentCredential(s, participantNumber)
  );
  const byNumberInClass = preferredClass
    ? credMatches.find((s) => s.className === preferredClass)
    : credMatches[0];

  if (byNumberInClass) {
    const namesInAllRooms = credMatches
      .map((s) => `${s.fullName} (Kelas ${s.className})`)
      .join(' / ');
    return {
      ok: false,
      error: `Nomor Peserta ${byNumberInClass.participantNumber} terdaftar untuk: ${namesInAllRooms}. Pastikan ejaan Nama Peserta dan pilihan Kelas Anda sesuai Kartu Peserta.`,
    };
  }

  // 3. Jika belum terdaftar dan mode dynamic login aktif (default: aktif agar siswa susulan tidak pernah terkunci)
  if (!db.settings.allowDynamicStudentLogin) {
    return {
      ok: false,
      error:
        'Data peserta tidak ditemukan. Pastikan Nama Peserta dan Nomor Peserta (PAS-2026-XXX) sesuai dengan Kartu Peserta Anda.',
    };
  }

  const detectedClass: ClassLevel = preferredClass || 'VII';
  const roomMap: Record<ClassLevel, string> = {
    VII: 'RUANG 01',
    VIII: 'RUANG 02',
    IX: 'RUANG 03',
  };
  const formattedNo = /^\d{1,3}$/.test(participantNumber)
    ? `PAS-2026-${participantNumber.padStart(3, '0')}`
    : participantNumber;

  const deterministicId = `std-dyn-${detectedClass}-${looseNameKey(fullName).replace(
    /\s+/g,
    '-'
  )}-${formattedNo.replace(/[^A-Z0-9]/g, '')}`;

  const newStudent: StudentProfile = {
    id: deterministicId,
    fullName,
    participantNumber: formattedNo,
    className: detectedClass,
    roomName: roomMap[detectedClass],
    createdAt: new Date().toISOString(),
  };

  db.students.push(newStudent);
  saveDb(db);

  // Sync ke Supabase bila aktif
  const sb = getSupabaseAdmin();
  if (sb) {
    await sb
      .from('students')
      .upsert({
        id: newStudent.id,
        full_name: newStudent.fullName,
        participant_number: newStudent.participantNumber,
        class_name: newStudent.className,
        created_at: newStudent.createdAt,
      })
      .then(() => {});
  }

  return { ok: true, student: newStudent };
}

/**
 * STATELESS SERVERLESS HYDRATION (VERCEL FREE TIER SAFE):
 * Apabila request masuk ke container/instance Serverless Vercel yang baru (cold start)
 * dan belum memiliki `attempt` di memori, fungsi ini merekonstruksi `ExamAttempt`
 * secara aman dari `attemptSnapshot` yang dikirim oleh client (`localStorage`),
 * sedangkan kunci jawaban & penilaian tetap 100% dihitung di sisi server.
 */
export function hydrateAttemptSnapshot(
  attemptId: string,
  snapshot?: Partial<ExamAttempt> | null
): ExamAttempt | undefined {
  const db = loadDb();
  let existing = db.attempts.find((a) => a.id === attemptId);

  if (!snapshot || typeof snapshot !== 'object' || !snapshot.examId) {
    return existing;
  }

  const exam = db.exams.find((e) => e.id === snapshot.examId);
  if (!exam) {
    return existing;
  }

  if (!existing) {
    const examQuestions = db.questions.filter((q) => q.examId === exam.id);
    const hydrated: ExamAttempt = {
      id: attemptId,
      examId: exam.id,
      examTitle: snapshot.examTitle || exam.title,
      subject: snapshot.subject || exam.subject,
      studentId: snapshot.studentId || 'std-unknown',
      studentName: normalizeStudentName(snapshot.studentName || 'PESERTA UJIAN'),
      participantNumber: snapshot.participantNumber || '-',
      className:
        snapshot.className === 'IX'
          ? 'IX'
          : snapshot.className === 'VIII'
          ? 'VIII'
          : 'VII',
      status:
        snapshot.status &&
        ['IN_PROGRESS', 'SUBMITTED', 'AUTO_SUBMITTED_TIME', 'AUTO_SUBMITTED_VIOLATION'].includes(
          snapshot.status
        )
          ? snapshot.status
          : 'IN_PROGRESS',
      seed: typeof snapshot.seed === 'number' ? snapshot.seed : 123456789,
      startedAt: snapshot.startedAt || new Date().toISOString(),
      endsAt:
        snapshot.endsAt ||
        new Date(Date.now() + exam.durationMin * 60 * 1000).toISOString(),
      submittedAt: snapshot.submittedAt || null,
      lastSeenAt: new Date().toISOString(),
      durationSeconds: snapshot.durationSeconds ?? null,
      durationFormatted: snapshot.durationFormatted ?? null,
      violationCount:
        typeof snapshot.violationCount === 'number' ? snapshot.violationCount : 0,
      maxViolations: exam.maxViolations || 3,
      violationLogs: Array.isArray(snapshot.violationLogs) ? snapshot.violationLogs : [],
      answers:
        snapshot.answers && typeof snapshot.answers === 'object' ? snapshot.answers : {},
      score: snapshot.score ?? null,
      correctCount: snapshot.correctCount ?? null,
      wrongCount: snapshot.wrongCount ?? null,
      emptyCount: snapshot.emptyCount ?? null,
      totalQuestions: examQuestions.length,
      syncedToSheets: Boolean(snapshot.syncedToSheets),
      sheetsSyncError: snapshot.sheetsSyncError ?? null,
      submitReason: snapshot.submitReason ?? null,
    };

    db.attempts.push(hydrated);
    saveDb(db);
    return hydrated;
  }

  // Jika sudah ada di memori, gabungkan jawaban & log pelanggaran dari snapshot bila snapshot lebih lengkap
  if (existing.status === 'IN_PROGRESS') {
    if (snapshot.answers && typeof snapshot.answers === 'object') {
      for (const [qId, ans] of Object.entries(snapshot.answers)) {
        if (!ans) continue;
        const curr = existing.answers[qId];
        if (!curr || new Date(ans.updatedAt || 0) >= new Date(curr.updatedAt || 0)) {
          existing.answers[qId] = ans;
        }
      }
    }
    if (
      typeof snapshot.violationCount === 'number' &&
      snapshot.violationCount > existing.violationCount
    ) {
      existing.violationCount = snapshot.violationCount;
      if (Array.isArray(snapshot.violationLogs)) {
        existing.violationLogs = snapshot.violationLogs;
      }
    }
  }

  return existing;
}

/**
 * Memulai atau melanjutkan sesi ujian (attempt) untuk siswa
 */
export async function startOrResumeAttempt(
  examId: string,
  studentId: string,
  fallbackStudent?: Partial<StudentProfile> | null
): Promise<{ ok: true; attempt: ExamAttempt; exam: Exam } | { ok: false; error: string }> {
  const db = loadDb();
  const exam = db.exams.find((e) => e.id === examId);
  if (!exam) {
    return { ok: false, error: 'Ujian tidak ditemukan.' };
  }
  if (exam.status !== 'published') {
    return { ok: false, error: 'Ujian ini sedang ditutup atau belum diterbitkan.' };
  }

  let student = db.students.find((s) => s.id === studentId);
  if (!student && fallbackStudent && fallbackStudent.fullName) {
    student = {
      id: studentId,
      fullName: normalizeStudentName(fallbackStudent.fullName),
      participantNumber: fallbackStudent.participantNumber || '-',
      className:
        fallbackStudent.className === 'IX'
          ? 'IX'
          : fallbackStudent.className === 'VIII'
          ? 'VIII'
          : 'VII',
      createdAt: fallbackStudent.createdAt || new Date().toISOString(),
    };
    db.students.push(student);
    saveDb(db);
  }

  if (!student) {
    return { ok: false, error: 'Sesi peserta tidak ditemukan. Silakan masuk kembali.' };
  }

  // Periksa apakah sudah ada attempt
  let attempt = db.attempts.find(
    (a) => a.examId === examId && a.studentId === studentId
  );

  if (attempt) {
    if (attempt.status === 'IN_PROGRESS') {
      const nowMs = Date.now();
      const endsMs = new Date(attempt.endsAt).getTime();
      if (nowMs >= endsMs) {
        attempt = await finalizeAttempt(
          attempt.id,
          'AUTO_SUBMITTED_TIME',
          'Waktu ujian telah habis'
        );
      } else {
        attempt.lastSeenAt = new Date().toISOString();
        saveDb(db);
      }
    }
    return { ok: true, attempt, exam };
  }

  const now = new Date();
  const endsAt = new Date(now.getTime() + exam.durationMin * 60 * 1000);
  const examQuestions = db.questions.filter((q) => q.examId === examId);
  const seed = Math.floor(Math.random() * 899999999) + 100000000;

  attempt = {
    id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    examId: exam.id,
    examTitle: exam.title,
    subject: exam.subject,
    studentId: student.id,
    studentName: student.fullName,
    participantNumber: student.participantNumber,
    className: student.className,
    status: 'IN_PROGRESS',
    seed,
    startedAt: now.toISOString(),
    endsAt: endsAt.toISOString(),
    submittedAt: null,
    lastSeenAt: now.toISOString(),
    durationSeconds: null,
    durationFormatted: null,
    violationCount: 0,
    maxViolations: exam.maxViolations || 3,
    violationLogs: [],
    answers: {},
    score: null,
    correctCount: null,
    wrongCount: null,
    emptyCount: null,
    totalQuestions: examQuestions.length,
    syncedToSheets: false,
    sheetsSyncError: null,
    submitReason: null,
  };

  db.attempts.push(attempt);
  saveDb(db);

  syncAttemptToSupabase(attempt).catch(() => {});

  return { ok: true, attempt, exam };
}

/**
 * Menyimpan jawaban siswa (autosave / batch upsert) dengan dukungan Stateless Hydration
 */
export async function saveStudentAnswers(
  attemptId: string,
  incomingAnswers: {
    questionId: string;
    selectedKey: 'A' | 'B' | 'C' | 'D' | null;
    flaggedForReview: boolean;
  }[],
  attemptSnapshot?: Partial<ExamAttempt> | null
): Promise<{ ok: true; attempt: ExamAttempt } | { ok: false; error: string }> {
  hydrateAttemptSnapshot(attemptId, attemptSnapshot);
  const db = loadDb();
  const attempt = db.attempts.find((a) => a.id === attemptId);
  if (!attempt) {
    return { ok: false, error: 'Sesi ujian tidak ditemukan.' };
  }

  if (attempt.status !== 'IN_PROGRESS') {
    return {
      ok: false,
      error: 'Sesi ujian sudah berakhir dan jawaban telah dikunci.',
    };
  }

  const nowIso = new Date().toISOString();
  const nowMs = Date.now();
  const endsMs = new Date(attempt.endsAt).getTime();

  for (const item of incomingAnswers) {
    attempt.answers[item.questionId] = {
      questionId: item.questionId,
      selectedKey: item.selectedKey,
      flaggedForReview: item.flaggedForReview,
      updatedAt: nowIso,
    };
  }

  // Toleransi 15 detik untuk autosave terakhir saat waktu habis
  if (nowMs > endsMs + 15000) {
    const finalized = await finalizeAttempt(
      attempt.id,
      'AUTO_SUBMITTED_TIME',
      'Waktu ujian telah habis'
    );
    return { ok: true, attempt: finalized };
  }

  attempt.lastSeenAt = nowIso;
  saveDb(db);
  syncAttemptToSupabase(attempt).catch(() => {});

  return { ok: true, attempt };
}

/**
 * Mencatat pelanggaran dengan Kebijakan 3-Strike:
 * - Pelanggaran 1: Peringatan Pertama (Kuning/Amber)
 * - Pelanggaran 2: Peringatan Keras "MERAH" (Kesempatan Terakhir)
 * - Pelanggaran 3: Auto-Submit Otomatis!
 */
export async function recordProctorViolation(
  attemptId: string,
  type: ProctorEventType,
  customDescription?: string,
  attemptSnapshot?: Partial<ExamAttempt> | null
): Promise<{
  ok: boolean;
  attempt?: ExamAttempt;
  strikeNumber?: number;
  actionTaken?: 'WARN_1' | 'WARN_2_RED' | 'AUTO_SUBMITTED' | 'IGNORED_DEDUPE';
  error?: string;
}> {
  hydrateAttemptSnapshot(attemptId, attemptSnapshot);
  const db = loadDb();
  const attempt = db.attempts.find((a) => a.id === attemptId);
  if (!attempt) {
    return { ok: false, error: 'Sesi ujian tidak ditemukan.' };
  }

  if (attempt.status !== 'IN_PROGRESS') {
    return {
      ok: true,
      attempt,
      strikeNumber: attempt.violationCount,
      actionTaken: 'AUTO_SUBMITTED',
    };
  }

  const nowMs = Date.now();
  const lastLog = attempt.violationLogs[attempt.violationLogs.length - 1];

  // Dedupe window 4 detik agar 1 insiden pindah tab (blur + visibilitychange) tidak dihitung 2x sekaligus
  if (lastLog && lastLog.type !== 'TEACHER_RESET') {
    const diffMs = nowMs - new Date(lastLog.timestamp).getTime();
    if (diffMs < 4000) {
      return {
        ok: true,
        attempt,
        strikeNumber: attempt.violationCount,
        actionTaken: 'IGNORED_DEDUPE',
      };
    }
  }

  attempt.violationCount += 1;
  const strikeNumber = attempt.violationCount;

  const eventDescriptions: Record<ProctorEventType, string> = {
    PAGE_HIDDEN: 'Keluar dari tab/halaman ujian atau berpindah aplikasi',
    WINDOW_BLUR: 'Layar kehilangan fokus / membuka jendela mengambang (split-screen/notifikasi)',
    VIEWPORT_SHRINK: 'Ukuran layar mengecil mendadak (indikasi mode layar belah / split-screen)',
    FULLSCREEN_EXIT: 'Keluar dari mode layar penuh ujian',
    DUPLICATE_SESSION: 'Akun dibuka pada perangkat atau tab lain',
    TEACHER_RESET: 'Direset oleh Guru Pengawas',
  };

  const logEntry: ProctorEventLog = {
    id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    attemptId: attempt.id,
    type,
    strikeNumber,
    description: customDescription || eventDescriptions[type] || 'Meninggalkan ruang ujian',
    timestamp: new Date(nowMs).toISOString(),
  };

  attempt.violationLogs.push(logEntry);
  attempt.lastSeenAt = new Date(nowMs).toISOString();

  // Jika sudah mencapai pelanggaran ke-3 (atau maxViolations), langsung AUTO-SUBMIT!
  if (strikeNumber >= attempt.maxViolations) {
    const finalized = await finalizeAttempt(
      attempt.id,
      'AUTO_SUBMITTED_VIOLATION',
      `Ujian dikumpulkan otomatis karena melanggar batas keluar halaman ${strikeNumber} kali (${logEntry.description}).`
    );
    return {
      ok: true,
      attempt: finalized,
      strikeNumber,
      actionTaken: 'AUTO_SUBMITTED',
    };
  }

  saveDb(db);
  syncAttemptToSupabase(attempt).catch(() => {});

  return {
    ok: true,
    attempt,
    strikeNumber,
    actionTaken: strikeNumber === 1 ? 'WARN_1' : 'WARN_2_RED',
  };
}

/**
 * Mengakhiri ujian, menghitung nilai akhir & lama waktu mengerjakan,
 * serta mengirim hasil secara sinkron (await) ke Google Spreadsheet
 * agar aman di lingkungan Serverless Vercel.
 */
export async function finalizeAttempt(
  attemptId: string,
  finalStatus: Extract<
    AttemptStatus,
    'SUBMITTED' | 'AUTO_SUBMITTED_TIME' | 'AUTO_SUBMITTED_VIOLATION'
  >,
  reason?: string,
  attemptSnapshot?: Partial<ExamAttempt> | null
): Promise<ExamAttempt> {
  hydrateAttemptSnapshot(attemptId, attemptSnapshot);
  const db = loadDb();
  const attempt = db.attempts.find((a) => a.id === attemptId);
  if (!attempt) {
    throw new Error('Sesi ujian tidak ditemukan.');
  }

  if (attempt.status !== 'IN_PROGRESS' && attempt.score !== null) {
    return attempt;
  }

  const submittedAtIso = new Date().toISOString();
  const examQuestions = db.questions.filter((q) => q.examId === attempt.examId);

  const grading = gradeExamAttempt(
    examQuestions,
    attempt.answers,
    attempt.startedAt,
    submittedAtIso
  );

  attempt.status = finalStatus;
  attempt.submittedAt = submittedAtIso;
  attempt.lastSeenAt = submittedAtIso;
  attempt.score = grading.score;
  attempt.correctCount = grading.correctCount;
  attempt.wrongCount = grading.wrongCount;
  attempt.emptyCount = grading.emptyCount;
  attempt.totalQuestions = grading.totalQuestions;
  attempt.durationSeconds = grading.durationSeconds;
  attempt.durationFormatted = grading.durationFormatted;
  attempt.submitReason =
    reason ||
    (finalStatus === 'SUBMITTED'
      ? 'Dikumpulkan oleh peserta'
      : finalStatus === 'AUTO_SUBMITTED_TIME'
      ? 'Waktu ujian habis'
      : 'Auto-Submit karena pelanggaran ke-3');

  saveDb(db);
  await syncAttemptToSupabase(attempt).catch(() => {});

  // PENTING UNTUK VERCEL SERVERLESS:
  // Gunakan `await` sebelum response HTTP dikembalikan agar Lambda tidak membekukan proses pengiriman ke Google Sheets!
  const webhookUrl =
    db.settings.appsScriptWebhookUrl || process.env.APPS_SCRIPT_EXPORT_URL || '';
  if (webhookUrl) {
    try {
      const res = await pushAttemptsToGoogleSheets(
        [attempt],
        webhookUrl,
        db.settings.sheetsWebhookSecret
      );
      attempt.syncedToSheets = res.ok;
      attempt.sheetsSyncError = res.ok ? null : res.message;
      saveDb(db);
    } catch (err) {
      attempt.syncedToSheets = false;
      attempt.sheetsSyncError =
        err instanceof Error ? err.message : 'Gagal sinkronisasi ke Google Sheets';
      saveDb(db);
    }
  }

  return attempt;
}

/**
 * Kontrol Guru Pengawas: Reset Pelanggaran atau Buka Kembali Sesi Siswa yang Ter-Auto-Submit karena teknis
 */
export async function teacherManageAttempt(
  attemptId: string,
  action: 'RESET_VIOLATIONS' | 'REOPEN_ATTEMPT' | 'FORCE_SUBMIT' | 'ADD_TIME_10M'
): Promise<{ ok: boolean; attempt?: ExamAttempt; error?: string }> {
  const db = loadDb();
  const attempt = db.attempts.find((a) => a.id === attemptId);
  if (!attempt) {
    return { ok: false, error: 'Sesi peserta tidak ditemukan.' };
  }

  const nowIso = new Date().toISOString();

  if (action === 'RESET_VIOLATIONS') {
    attempt.violationCount = 0;
    attempt.violationLogs.push({
      id: `evt-${Date.now()}`,
      attemptId: attempt.id,
      type: 'TEACHER_RESET',
      strikeNumber: 0,
      description: 'Jumlah pelanggaran direset menjadi 0 oleh Guru Pengawas',
      timestamp: nowIso,
    });
    saveDb(db);
    syncAttemptToSupabase(attempt).catch(() => {});
    return { ok: true, attempt };
  }

  if (action === 'REOPEN_ATTEMPT') {
    attempt.status = 'IN_PROGRESS';
    attempt.violationCount = Math.min(attempt.violationCount, 1);
    attempt.submittedAt = null;
    attempt.submitReason = null;
    const remainingMs = new Date(attempt.endsAt).getTime() - Date.now();
    if (remainingMs < 5 * 60 * 1000) {
      attempt.endsAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
    }
    attempt.violationLogs.push({
      id: `evt-${Date.now()}`,
      attemptId: attempt.id,
      type: 'TEACHER_RESET',
      strikeNumber: attempt.violationCount,
      description: 'Sesi ujian dibuka kembali oleh Guru Pengawas',
      timestamp: nowIso,
    });
    saveDb(db);
    syncAttemptToSupabase(attempt).catch(() => {});
    return { ok: true, attempt };
  }

  if (action === 'ADD_TIME_10M') {
    const currentEndMs = Math.max(Date.now(), new Date(attempt.endsAt).getTime());
    attempt.endsAt = new Date(currentEndMs + 10 * 60 * 1000).toISOString();
    saveDb(db);
    syncAttemptToSupabase(attempt).catch(() => {});
    return { ok: true, attempt };
  }

  if (action === 'FORCE_SUBMIT') {
    const finalized = await finalizeAttempt(
      attempt.id,
      'SUBMITTED',
      'Diakhiri oleh Guru Pengawas dari Dashboard'
    );
    return { ok: true, attempt: finalized };
  }

  return { ok: false, error: 'Aksi tidak dikenali.' };
}

async function syncAttemptToSupabase(attempt: ExamAttempt): Promise<void> {
  const sb = getSupabaseAdmin();
  if (!sb) return;

  await sb.from('attempts').upsert({
    id: attempt.id,
    exam_id: attempt.examId,
    exam_title: attempt.examTitle,
    subject: attempt.subject,
    student_id: attempt.studentId,
    student_name: attempt.studentName,
    participant_number: attempt.participantNumber,
    class_name: attempt.className,
    status: attempt.status,
    seed: attempt.seed,
    started_at: attempt.startedAt,
    ends_at: attempt.endsAt,
    submitted_at: attempt.submittedAt,
    last_seen_at: attempt.lastSeenAt,
    duration_seconds: attempt.durationSeconds,
    duration_formatted: attempt.durationFormatted,
    violation_count: attempt.violationCount,
    max_violations: attempt.maxViolations,
    violation_logs: attempt.violationLogs,
    answers: attempt.answers,
    score: attempt.score,
    correct_count: attempt.correctCount,
    wrong_count: attempt.wrongCount,
    empty_count: attempt.emptyCount,
    total_questions: attempt.totalQuestions,
    synced_to_sheets: attempt.syncedToSheets,
    sheets_sync_error: attempt.sheetsSyncError,
    submit_reason: attempt.submitReason,
  });
}
