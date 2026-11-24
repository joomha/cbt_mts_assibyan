import { NextRequest, NextResponse } from 'next/server';
import {
  isSupabaseConfigured,
  loadDb,
  normalizeStudentName,
  saveDb,
  teacherManageAttempt,
} from '@/lib/db/store';
import { pushAttemptsToGoogleSheets } from '@/lib/integrations/sheets';
import { Exam, ExamQuestion, StudentProfile } from '@/lib/types';

export async function GET() {
  const db = loadDb();

  return NextResponse.json({
    ok: true,
    settings: db.settings,
    supabaseConnected: isSupabaseConfigured(),
    sheetsConfigured: Boolean(
      db.settings.appsScriptWebhookUrl &&
        !db.settings.appsScriptWebhookUrl.includes('XXXX')
    ),
    exams: db.exams,
    questions: db.questions,
    students: db.students,
    attempts: [...db.attempts].sort(
      (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
    ),
    serverTime: new Date().toISOString(),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = String(body.action || '');
    const db = loadDb();

    // 1. KONTROL PENGAWAS ATAS SESI PESERTA
    if (action === 'MANAGE_ATTEMPT') {
      const attemptId = String(body.attemptId || '');
      const subAction = body.subAction as
        | 'RESET_VIOLATIONS'
        | 'REOPEN_ATTEMPT'
        | 'FORCE_SUBMIT'
        | 'ADD_TIME_10M';

      const res = await teacherManageAttempt(attemptId, subAction);
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: res.error }, { status: 400 });
      }
      return NextResponse.json({ ok: true, attempt: res.attempt });
    }

    // 2. SINKRONISASI KE GOOGLE SPREADSHEET
    if (action === 'SYNC_SHEETS') {
      const attemptId = body.attemptId ? String(body.attemptId) : null;
      const targetAttempts = attemptId
        ? db.attempts.filter((a) => a.id === attemptId)
        : db.attempts.filter((a) => a.status !== 'IN_PROGRESS');

      if (targetAttempts.length === 0) {
        return NextResponse.json({
          ok: false,
          error: 'Belum ada hasil ujian selesai untuk dikirim ke Google Spreadsheet.',
        });
      }

      const syncRes = await pushAttemptsToGoogleSheets(
        targetAttempts,
        db.settings.appsScriptWebhookUrl,
        db.settings.sheetsWebhookSecret
      );

      for (const att of targetAttempts) {
        att.syncedToSheets = syncRes.ok;
        att.sheetsSyncError = syncRes.ok ? null : syncRes.message;
      }
      saveDb(db);

      return NextResponse.json({
        ok: syncRes.ok,
        message: syncRes.message,
        syncedCount: syncRes.syncedCount,
      });
    }

    // 3. SIMPAN PENGATURAN SISTEM & WEBHOOK SPREADSHEET
    if (action === 'UPDATE_SETTINGS') {
      if (typeof body.schoolName === 'string') {
        db.settings.schoolName = body.schoolName.trim() || 'MADRASAH TSANAWIYAH ASSIBYAN';
      }
      if (typeof body.academicYear === 'string') {
        db.settings.academicYear = body.academicYear.trim() || '2025 / 2026';
      }
      if (typeof body.allowDynamicStudentLogin === 'boolean') {
        db.settings.allowDynamicStudentLogin = body.allowDynamicStudentLogin;
      }
      if (typeof body.appsScriptWebhookUrl === 'string') {
        db.settings.appsScriptWebhookUrl = body.appsScriptWebhookUrl.trim();
      }
      if (typeof body.sheetsWebhookSecret === 'string') {
        db.settings.sheetsWebhookSecret =
          body.sheetsWebhookSecret.trim() || 'mts-assibyan-cbt-secret-2026';
      }
      saveDb(db);
      return NextResponse.json({
        ok: true,
        settings: db.settings,
        message: 'Pengaturan sistem berhasil disimpan.',
      });
    }

    // 4. IMPOR / TAMBAH PESERTA (NAMA KAPITAL + NOMOR PESERTA + KELAS)
    if (action === 'IMPORT_STUDENTS') {
      const items = Array.isArray(body.students) ? body.students : [];
      let added = 0;
      let updated = 0;

      for (const item of items) {
        const fullName = normalizeStudentName(String(item.fullName || ''));
        const participantNumber = String(item.participantNumber || '').trim();
        const rawClass = String(item.className || '').toUpperCase().trim();
        const className: 'VII' | 'VIII' | 'IX' =
          rawClass.includes('IX') || rawClass === '9'
            ? 'IX'
            : rawClass.includes('VIII') || rawClass === '8'
            ? 'VIII'
            : 'VII';

        if (!fullName || !participantNumber) continue;

        const existing = db.students.find(
          (s) => s.participantNumber.toLowerCase() === participantNumber.toLowerCase()
        );

        if (existing) {
          existing.fullName = fullName;
          existing.className = className;
          updated++;
        } else {
          const newStd: StudentProfile = {
            id: `std-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            fullName,
            participantNumber,
            className,
            createdAt: new Date().toISOString(),
          };
          db.students.push(newStd);
          added++;
        }
      }

      saveDb(db);
      return NextResponse.json({
        ok: true,
        added,
        updated,
        students: db.students,
        message: `Berhasil memproses data peserta (${added} baru, ${updated} diperbarui).`,
      });
    }

    // 5. HAPUS PESERTA
    if (action === 'DELETE_STUDENT') {
      const studentId = String(body.studentId || '');
      db.students = db.students.filter((s) => s.id !== studentId);
      saveDb(db);
      return NextResponse.json({ ok: true, students: db.students });
    }

    // 6. UPDATE / TAMBAH UJIAN
    if (action === 'SAVE_EXAM') {
      const examData = body.exam as Partial<Exam>;
      if (!examData || !examData.title) {
        return NextResponse.json(
          { ok: false, error: 'Judul ujian wajib diisi.' },
          { status: 400 }
        );
      }

      const existing = db.exams.find((e) => e.id === examData.id);
      if (existing) {
        existing.title = examData.title;
        existing.subject = examData.subject || existing.subject;
        existing.code = examData.code || existing.code;
        existing.classLevel = examData.classLevel || existing.classLevel;
        existing.durationMin = Number(examData.durationMin) || existing.durationMin;
        existing.scheduleText = examData.scheduleText ?? existing.scheduleText;
        existing.status = examData.status || existing.status;
        existing.shuffleQuestions =
          examData.shuffleQuestions ?? existing.shuffleQuestions;
        existing.shuffleOptions = examData.shuffleOptions ?? existing.shuffleOptions;
        existing.showResultImmediately =
          examData.showResultImmediately ?? existing.showResultImmediately;
      } else {
        const newId = `exam-${Date.now()}`;
        db.exams.push({
          id: newId,
          code: examData.code || `ASAS-${Date.now().toString().slice(-4)}`,
          title: examData.title,
          subject: examData.subject || 'Umum',
          classLevel: examData.classLevel || 'ALL',
          scheduleText: examData.scheduleText || 'Sesuai Jadwal',
          durationMin: Number(examData.durationMin) || 90,
          status: examData.status || 'published',
          shuffleQuestions: examData.shuffleQuestions ?? true,
          shuffleOptions: examData.shuffleOptions ?? true,
          maxViolations: 3,
          showResultImmediately: examData.showResultImmediately ?? true,
          questionCount: 0,
        });
      }

      saveDb(db);
      return NextResponse.json({ ok: true, exams: db.exams });
    }

    // 7. SIMPAN / EDIT SOAL DI BANK SOAL
    if (action === 'SAVE_QUESTION') {
      const qData = body.question as Partial<ExamQuestion>;
      if (!qData || !qData.examId || !qData.text) {
        return NextResponse.json(
          { ok: false, error: 'Teks soal dan ID ujian wajib diisi.' },
          { status: 400 }
        );
      }

      const existing = db.questions.find((q) => q.id === qData.id);
      if (existing) {
        existing.text = qData.text;
        existing.context = qData.context;
        existing.imageUrl = qData.imageUrl;
        existing.options = qData.options || existing.options;
        existing.answerKey = qData.answerKey || existing.answerKey;
      } else {
        const examQuestions = db.questions.filter((q) => q.examId === qData.examId);
        const nextNo =
          examQuestions.length > 0
            ? Math.max(...examQuestions.map((q) => q.no)) + 1
            : 1;
        db.questions.push({
          id: `${qData.examId}-q-${Date.now()}`,
          examId: qData.examId,
          no: nextNo,
          context: qData.context,
          imageUrl: qData.imageUrl,
          text: qData.text,
          options: qData.options || [
            { key: 'A', text: 'Opsi A' },
            { key: 'B', text: 'Opsi B' },
            { key: 'C', text: 'Opsi C' },
            { key: 'D', text: 'Opsi D' },
          ],
          answerKey: qData.answerKey || 'A',
        });

        const exam = db.exams.find((e) => e.id === qData.examId);
        if (exam) {
          exam.questionCount = db.questions.filter((q) => q.examId === exam.id).length;
        }
      }

      saveDb(db);
      return NextResponse.json({
        ok: true,
        questions: db.questions,
        exams: db.exams,
      });
    }

    // 8. HAPUS SOAL
    if (action === 'DELETE_QUESTION') {
      const questionId = String(body.questionId || '');
      const target = db.questions.find((q) => q.id === questionId);
      if (target) {
        db.questions = db.questions.filter((q) => q.id !== questionId);
        // Re-number questions in that exam
        const remaining = db.questions
          .filter((q) => q.examId === target.examId)
          .sort((a, b) => a.no - b.no);
        remaining.forEach((q, idx) => {
          q.no = idx + 1;
        });
        const exam = db.exams.find((e) => e.id === target.examId);
        if (exam) {
          exam.questionCount = remaining.length;
        }
        saveDb(db);
      }
      return NextResponse.json({
        ok: true,
        questions: db.questions,
        exams: db.exams,
      });
    }

    return NextResponse.json(
      { ok: false, error: 'Aksi admin tidak dikenali.' },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Gagal memproses aksi admin.',
      },
      { status: 500 }
    );
  }
}
