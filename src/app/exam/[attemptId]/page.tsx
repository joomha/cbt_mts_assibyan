'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  LayoutGrid,
  Lock,
  RefreshCw,
  ShieldAlert,
  Wifi,
  WifiOff,
  X,
  Award,
  Home,
} from 'lucide-react';
import {
  ClientExamQuestion,
  Exam,
  ExamAttempt,
  ProctorEventType,
  StudentAnswer,
} from '@/lib/types';
import { ArabicFormattedText } from '@/components/ui/ArabicFormattedText';
import { OpenBookLogo } from '@/components/ui/GeometricOrnaments';

type SaveState =
  | 'IDLE'
  | 'SAVING'
  | 'SAVED'
  | 'OFFLINE'
  | 'ERROR';

export default function ExamWorkspacePage() {
  const params = useParams<{ attemptId: string }>();
  const router = useRouter();
  const attemptId = params.attemptId;

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [exam, setExam] = useState<Exam | null>(null);
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [questions, setQuestions] = useState<ClientExamQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Local answers map: questionId -> StudentAnswer
  const [answers, setAnswers] = useState<Record<string, StudentAnswer>>({});
  const [saveState, setSaveState] = useState<SaveState>('IDLE');
  const [isOnline, setIsOnline] = useState(true);

  // Server authoritative countdown timer (in seconds)
  const [remainingSec, setRemainingSec] = useState<number>(5400);

  // Mobile bottom sheet navigator state (DESIGN.MD Section 12)
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // End Exam Confirmation Modal (DESIGN.MD Section 7.6)
  const [confirmSubmitOpen, setConfirmSubmitOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // 3-Strike Proctoring Warning Modal State
  const [activeWarningModal, setActiveWarningModal] = useState<{
    strike: 1 | 2;
    reason: string;
  } | null>(null);
  const [strike2Acknowledged, setStrike2Acknowledged] = useState(false);

  // Refs to avoid stale closures in event listeners
  const attemptRef = useRef<ExamAttempt | null>(null);
  const answersRef = useRef<Record<string, StudentAnswer>>({});
  const pendingQueueRef = useRef<
    Record<
      string,
      {
        questionId: string;
        selectedKey: 'A' | 'B' | 'C' | 'D' | null;
        flaggedForReview: boolean;
      }
    >
  >({});
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastViolationClientTsRef = useRef<number>(0);
  const initialViewportHeightRef = useRef<number>(0);
  const submittingRef = useRef<boolean>(false);

  useEffect(() => {
    attemptRef.current = attempt;
    if (attempt) {
      try {
        const snap: ExamAttempt = {
          ...attempt,
          answers: { ...attempt.answers, ...answersRef.current },
        };
        localStorage.setItem(`cbt_attempt_snapshot_${attemptId}`, JSON.stringify(snap));
      } catch {
        // ignore storage quota
      }
    }
  }, [attempt, attemptId]);

  useEffect(() => {
    answersRef.current = answers;
    if (attemptRef.current) {
      try {
        const snap: ExamAttempt = {
          ...attemptRef.current,
          answers: { ...attemptRef.current.answers, ...answers },
        };
        localStorage.setItem(`cbt_attempt_snapshot_${attemptId}`, JSON.stringify(snap));
      } catch {
        // ignore storage quota
      }
    }
  }, [answers, attemptId]);

  const buildClientAttemptSnapshot = useCallback((): ExamAttempt | null => {
    if (attemptRef.current) {
      return {
        ...attemptRef.current,
        answers: { ...attemptRef.current.answers, ...answersRef.current },
      };
    }
    try {
      const raw = localStorage.getItem(`cbt_attempt_snapshot_${attemptId}`);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as ExamAttempt;
      const backupRaw = localStorage.getItem(`cbt_backup_answers_${attemptId}`);
      if (backupRaw) {
        const backupAnswers = JSON.parse(backupRaw) as Record<string, StudentAnswer>;
        parsed.answers = { ...(parsed.answers || {}), ...backupAnswers };
      }
      return parsed;
    } catch {
      return null;
    }
  }, [attemptId]);

  // 1. Load Exam Attempt & Shuffled Questions (with Stateless Vercel Hydration fallback)
  const fetchAttemptData = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      let res = await fetch(`/api/attempts/${attemptId}`);
      let data = await res.json();

      // Jika container Serverless Vercel baru mengalami cold-start (404), hydrate dari snapshot localStorage!
      if (!data.ok) {
        const localSnap = buildClientAttemptSnapshot();
        if (localSnap) {
          res = await fetch(`/api/attempts/${attemptId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'HYDRATE',
              attemptSnapshot: localSnap,
            }),
          });
          data = await res.json();
        }
      }

      if (!data.ok) {
        setLoadError(data.error || 'Gagal memuat ruang ujian.');
        return;
      }

      setExam(data.exam);
      setAttempt(data.attempt);
      setQuestions(data.questions || []);
      setRemainingSec(data.remainingSec ?? 0);

      // Merge server answers with any unsynced local backup in localStorage
      const serverAnswers: Record<string, StudentAnswer> = data.attempt.answers || {};
      const localBackupRaw = localStorage.getItem(`cbt_backup_answers_${attemptId}`);
      let merged = { ...serverAnswers };
      if (localBackupRaw) {
        try {
          const localBackup = JSON.parse(localBackupRaw) as Record<string, StudentAnswer>;
          merged = { ...serverAnswers, ...localBackup };
        } catch {
          // ignore
        }
      }
      setAnswers(merged);
    } catch {
      setLoadError('Tidak dapat terhubung ke server ujian. Periksa koneksi internet Anda.');
    } finally {
      setLoading(false);
    }
  }, [attemptId, buildClientAttemptSnapshot]);

  useEffect(() => {
    fetchAttemptData();
  }, [fetchAttemptData]);

  // 2. Flush pending answers to server (Autosave batch with debounce + Stateless Snapshot)
  const flushPendingAnswers = useCallback(async () => {
    const queueItems = Object.values(pendingQueueRef.current);
    if (queueItems.length === 0) return;
    if (!attemptRef.current || attemptRef.current.status !== 'IN_PROGRESS') return;

    if (!navigator.onLine) {
      setSaveState('OFFLINE');
      return;
    }

    setSaveState('SAVING');
    pendingQueueRef.current = {};

    try {
      const res = await fetch(`/api/attempts/${attemptId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: queueItems,
          attemptSnapshot: buildClientAttemptSnapshot(),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSaveState('SAVED');
        if (typeof data.remainingSec === 'number') {
          setRemainingSec(data.remainingSec);
        }
        if (data.attempt) {
          setAttempt(data.attempt);
        }
      } else {
        setSaveState('ERROR');
      }
    } catch {
      // Put back in queue for retry
      for (const item of queueItems) {
        pendingQueueRef.current[item.questionId] = item;
      }
      setSaveState(navigator.onLine ? 'ERROR' : 'OFFLINE');
    }
  }, [attemptId, buildClientAttemptSnapshot]);

  // 3. Handle Option Selection & Review Flagging
  const updateAnswer = useCallback(
    (
      questionId: string,
      selectedKey: 'A' | 'B' | 'C' | 'D' | null,
      flaggedForReview: boolean
    ) => {
      if (!attemptRef.current || attemptRef.current.status !== 'IN_PROGRESS') return;

      const updatedEntry: StudentAnswer = {
        questionId,
        selectedKey,
        flaggedForReview,
        updatedAt: new Date().toISOString(),
      };

      setAnswers((prev) => {
        const next = { ...prev, [questionId]: updatedEntry };
        try {
          localStorage.setItem(`cbt_backup_answers_${attemptId}`, JSON.stringify(next));
        } catch {
          // ignore storage quota errors
        }
        return next;
      });

      pendingQueueRef.current[questionId] = {
        questionId,
        selectedKey,
        flaggedForReview,
      };

      setSaveState(navigator.onLine ? 'SAVING' : 'OFFLINE');

      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        flushPendingAnswers();
      }, 900);
    },
    [attemptId, flushPendingAnswers, buildClientAttemptSnapshot]
  );

  // 4. Report Violation to Server (3-Strike Policy)
  const triggerViolation = useCallback(
    async (type: ProctorEventType, description: string) => {
      const currAttempt = attemptRef.current;
      if (!currAttempt || currAttempt.status !== 'IN_PROGRESS' || submittingRef.current) {
        return;
      }

      const now = Date.now();
      // Client-side 4-second dedupe so blur + visibilitychange on the same tab switch counts once
      if (now - lastViolationClientTsRef.current < 4000) {
        return;
      }
      lastViolationClientTsRef.current = now;

      // Flush any unsaved answers first so student doesn't lose work if strike 3 auto-submits
      await flushPendingAnswers();

      try {
        const res = await fetch(`/api/attempts/${attemptId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
          body: JSON.stringify({
            action: 'VIOLATION',
            type,
            description,
            attemptSnapshot: buildClientAttemptSnapshot(),
          }),
        });
        const data = await res.json();
        if (!data.ok || !data.attempt) return;

        setAttempt(data.attempt);

        if (data.actionTaken === 'WARN_1') {
          setActiveWarningModal({
            strike: 1,
            reason: description,
          });
        } else if (data.actionTaken === 'WARN_2_RED') {
          setStrike2Acknowledged(false);
          setActiveWarningModal({
            strike: 2,
            reason: description,
          });
        } else if (
          data.actionTaken === 'AUTO_SUBMITTED' ||
          data.attempt.status !== 'IN_PROGRESS'
        ) {
          setActiveWarningModal(null);
          setConfirmSubmitOpen(false);
        }
      } catch {
        // ignore network error during background transition
      }
    },
    [attemptId, flushPendingAnswers, buildClientAttemptSnapshot]
  );

  // 5. Attach Proctoring Detectors (Page Visibility, Window Blur, Split-Screen Viewport Shrink)
  useEffect(() => {
    if (!attempt || attempt.status !== 'IN_PROGRESS') return;

    initialViewportHeightRef.current = window.innerHeight;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        triggerViolation(
          'PAGE_HIDDEN',
          'Keluar dari tab ujian atau membuka aplikasi lain'
        );
      }
    };

    const handleWindowBlur = () => {
      // Avoid double firing if visibilitychange already fired
      setTimeout(() => {
        if (document.visibilityState === 'visible' && !document.hasFocus()) {
          triggerViolation(
            'WINDOW_BLUR',
            'Jendela ujian kehilangan fokus (membuka aplikasi mengambang / panel notifikasi)'
          );
        }
      }, 250);
    };

    const handleResize = () => {
      const baseH = initialViewportHeightRef.current;
      if (baseH > 400 && window.innerHeight < baseH * 0.55) {
        // Check if an input/textarea is focused (virtual keyboard) — we have no text inputs in MCQ exam!
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          triggerViolation(
            'VIEWPORT_SHRINK',
            'Ukuran layar ujian mengecil drastis (terdeteksi mode Split-Screen / Layar Belah)'
          );
        }
      }
    };

    const handleOnline = () => {
      setIsOnline(true);
      flushPendingAnswers();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setSaveState('OFFLINE');
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('resize', handleResize);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [attempt, triggerViolation, flushPendingAnswers]);

  // 6. Countdown Timer & Periodic Heartbeat (Every 15 seconds — Free Tier Friendly)
  useEffect(() => {
    if (!attempt || attempt.status !== 'IN_PROGRESS') return;

    const tickInterval = setInterval(() => {
      setRemainingSec((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const heartbeatInterval = setInterval(async () => {
      if (!navigator.onLine) return;
      try {
        const res = await fetch(`/api/attempts/${attemptId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'HEARTBEAT',
            attemptSnapshot: buildClientAttemptSnapshot(),
          }),
        });
        const data = await res.json();
        if (data.ok) {
          if (typeof data.remainingSec === 'number') {
            setRemainingSec(data.remainingSec);
          }
          if (data.attempt) {
            setAttempt(data.attempt);
          }
        }
      } catch {
        // ignore transient heartbeat failure
      }
    }, 15000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(heartbeatInterval);
    };
  }, [attempt, attemptId, buildClientAttemptSnapshot]);

  // 7. Auto-submit when timer hits 0
  useEffect(() => {
    if (
      attempt &&
      attempt.status === 'IN_PROGRESS' &&
      remainingSec === 0 &&
      !submittingRef.current
    ) {
      handleFinalSubmit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSec, attempt?.status]);

  // 8. Keyboard Navigation (ArrowLeft, ArrowRight, A, B, C, D) — DESIGN.MD Section 13
  useEffect(() => {
    if (!attempt || attempt.status !== 'IN_PROGRESS' || activeWarningModal || confirmSubmitOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      const currQ = questions[currentIdx];
      if (!currQ) return;

      if (e.key === 'ArrowRight' && currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else if (e.key === 'ArrowLeft' && currentIdx > 0) {
        setCurrentIdx((i) => i - 1);
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const label = e.key.toUpperCase() as 'A' | 'B' | 'C' | 'D';
        const matchedOpt = currQ.options.find((o) => o.displayLabel === label);
        if (matchedOpt) {
          const existing = answersRef.current[currQ.id];
          updateAnswer(
            currQ.id,
            matchedOpt.originalKey,
            existing?.flaggedForReview || false
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [attempt, questions, currentIdx, activeWarningModal, confirmSubmitOpen, updateAnswer]);

  // 9. Submit Exam Function
  async function handleFinalSubmit(isAutoTimeExpired = false) {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitting(true);

    try {
      const allAnswersList = Object.values(answersRef.current).map((a) => ({
        questionId: a.questionId,
        selectedKey: a.selectedKey,
        flaggedForReview: a.flaggedForReview,
      }));

      const res = await fetch(`/api/attempts/${attemptId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: isAutoTimeExpired ? 'HEARTBEAT' : 'SUBMIT',
          answers: allAnswersList,
          attemptSnapshot: buildClientAttemptSnapshot(),
        }),
      });
      const data = await res.json();
      if (data.ok && data.attempt) {
        localStorage.removeItem(`cbt_backup_answers_${attemptId}`);
        try {
          localStorage.setItem(
            `cbt_attempt_snapshot_${attemptId}`,
            JSON.stringify(data.attempt)
          );
        } catch {
          // ignore
        }
        setAttempt(data.attempt);
        setConfirmSubmitOpen(false);
      }
    } catch {
      alert('Gagal mengirim jawaban. Pastikan koneksi internet aktif lalu coba lagi.');
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  function formatCountdown(sec: number): string {
    const safe = Math.max(0, sec);
    const h = Math.floor(safe / 3600);
    const m = Math.floor((safe % 3600) / 60);
    const s = safe % 60;
    if (h > 0) {
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(
        s
      ).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // =========================================================================
  // LOADING & ERROR STATES (DESIGN.MD Section 16)
  // =========================================================================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
        <div className="h-16 border-b border-[#E5E9F2] bg-white px-6 flex items-center justify-between">
          <div className="h-6 w-48 rounded bg-[#E5E9F2] animate-pulse" />
          <div className="h-9 w-28 rounded-full bg-[#E5E9F2] animate-pulse" />
        </div>
        <div className="mx-auto w-full max-w-[1240px] p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 h-[460px] rounded-[16px] bg-white border border-[#E5E9F2] p-6 animate-pulse" />
          <div className="lg:col-span-4 h-[360px] rounded-[16px] bg-white border border-[#E5E9F2] p-6 animate-pulse" />
        </div>
      </div>
    );
  }

  if (loadError || !attempt || !exam) {
    return (
      <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-[16px] border border-[#E5E9F2] bg-white p-6 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-[#FFF0F0] text-[#D64545] flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h1 className="text-lg font-bold text-[#172033]">Gagal Memuat Ruang Ujian</h1>
          <p className="text-sm text-[#647089]">
            {loadError || 'Data sesi ujian tidak ditemukan.'}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="rounded-[11px] border border-[#E5E9F2] bg-white px-4 py-2.5 text-sm font-semibold text-[#647089] cursor-pointer"
            >
              Ke Dashboard
            </button>
            <button
              type="button"
              onClick={fetchAttemptData}
              className="rounded-[11px] bg-[#2457D6] text-white px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Coba Lagi</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // HALAMAN HASIL FINAL SETELAH UJIAN SELESAI / AUTO-SUBMIT (Section 7.7)
  // =========================================================================
  if (attempt.status !== 'IN_PROGRESS') {
    const isViolationAutoSubmit = attempt.status === 'AUTO_SUBMITTED_VIOLATION';
    const isTimeAutoSubmit = attempt.status === 'AUTO_SUBMITTED_TIME';

    return (
      <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-4 sm:p-6">
        <div
          className="w-full max-w-xl rounded-[18px] border border-[#E5E9F2] bg-white p-6 sm:p-8 space-y-6"
          style={{ boxShadow: '0 18px 60px rgba(22, 34, 58, 0.08)' }}
        >
          {/* Status Header */}
          {isViolationAutoSubmit ? (
            <div className="rounded-[14px] border-2 border-[#D64545] bg-[#FFF0F0] p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[#D64545] text-white flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="inline-block rounded-full bg-[#D64545] px-2.5 py-0.5 text-[11px] font-bold text-white uppercase">
                  Auto-Submit Otomatis (Pelanggaran 3/3)
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-[#172033]">
                  Ujian Dihentikan & Dikumpulkan Otomatis
                </h1>
                <p className="text-xs sm:text-sm text-[#D64545] leading-relaxed">
                  Anda telah melewati batas maksimal keluar halaman ujian sebanyak{' '}
                  <strong>3 kali</strong>. Sesuai aturan, seluruh jawaban terakhir Anda telah
                  dikumpulkan secara otomatis ke sistem dan Google Spreadsheet.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-[14px] border border-[#16845B]/30 bg-[#E8F7F0] p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[#16845B] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="inline-block rounded-full bg-[#16845B] px-2.5 py-0.5 text-[11px] font-bold text-white uppercase">
                  {isTimeAutoSubmit ? 'Waktu Habis — Terkumpul Otomatis' : 'Ujian Selesai'}
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-[#172033]">
                  Jawaban Anda Berhasil Dikumpulkan
                </h1>
                <p className="text-xs sm:text-sm text-[#16845B]">
                  Terima kasih telah mengerjakan ujian dengan tertib. Data nilai dan lama
                  waktu pengerjaan Anda telah tercatat.
                </p>
              </div>
            </div>
          )}

          {/* Identitas & Mata Pelajaran */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2457D6]">
              {attempt.subject} • Kelas {attempt.className}
            </span>
            <h2 className="text-xl font-bold text-[#172033]">{attempt.examTitle}</h2>
            <p className="text-xs sm:text-sm text-[#647089]">
              Peserta: <strong className="text-[#172033]">{attempt.studentName}</strong> (No.
              Peserta:{' '}
              <strong className="tabular-nums text-[#172033]">
                {attempt.participantNumber}
              </strong>
              )
            </p>
          </div>

          {/* Ringkasan Nilai & Lama Waktu Mengerjakan */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FF] p-4 text-center">
              <span className="text-xs text-[#647089] block">Nilai Akhir</span>
              <span className="text-3xl font-bold text-[#2457D6] tabular-nums mt-1 block">
                {attempt.score ?? 0}
              </span>
            </div>
            <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 text-center">
              <span className="text-xs text-[#647089] block">Jawaban Benar</span>
              <span className="text-xl font-bold text-[#16845B] tabular-nums mt-1.5 block">
                {attempt.correctCount ?? 0} / {attempt.totalQuestions}
              </span>
            </div>
            <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 text-center">
              <span className="text-xs text-[#647089] block">Lama Mengerjakan</span>
              <span className="text-sm font-bold text-[#172033] tabular-nums mt-2 block">
                {attempt.durationFormatted || '-'}
              </span>
            </div>
            <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 text-center">
              <span className="text-xs text-[#647089] block">Pelanggaran</span>
              <span
                className={`text-xl font-bold tabular-nums mt-1.5 block ${
                  attempt.violationCount >= 3
                    ? 'text-[#D64545]'
                    : attempt.violationCount > 0
                    ? 'text-[#B7791F]'
                    : 'text-[#16845B]'
                }`}
              >
                {attempt.violationCount} / {attempt.maxViolations}
              </span>
            </div>
          </div>

          {/* Riwayat Pelanggaran bila ada */}
          {attempt.violationLogs.length > 0 && (
            <div className="rounded-[12px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#647089]">
                Catatan Log Pengawasan ({attempt.violationLogs.length})
              </h3>
              <ul className="space-y-1.5 text-xs text-[#647089]">
                {attempt.violationLogs.map((v) => (
                  <li key={v.id} className="flex items-center justify-between gap-2">
                    <span>
                      <strong className="text-[#172033]">#{v.strikeNumber}:</strong>{' '}
                      {v.description}
                    </span>
                    <span className="tabular-nums text-[11px] text-[#8791A5] shrink-0">
                      {new Date(v.timestamp).toLocaleTimeString('id-ID')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#8791A5]">
              Jika sesi terhenti karena gangguan teknis HP, lapor kepada Pengawas di kelas.
            </span>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full sm:w-auto rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold px-6 py-2.5 text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RUANG UJIAN AKTIF (EXAM WORKSPACE — DESIGN.MD Section 7.4)
  // =========================================================================
  const currentQuestion = questions[currentIdx];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  // Hitung statistik progres soal
  let answeredCount = 0;
  let flaggedCount = 0;
  for (const q of questions) {
    const a = answers[q.id];
    if (a?.selectedKey) answeredCount++;
    if (a?.flaggedForReview) flaggedCount++;
  }
  const unansweredCount = Math.max(0, questions.length - answeredCount);
  const progressPercent =
    questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  // Kondisi warna timer — DESIGN.MD Section 7.5
  const isTimeCritical = remainingSec <= 180; // <= 3 menit
  const isTimeWarning = remainingSec > 180 && remainingSec <= 600; // <= 10 menit

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col select-none">
      {/* Banner Koneksi Terputus (DESIGN.MD Section 14) */}
      {!isOnline && (
        <div
          role="status"
          className="bg-[#FFF6E5] border-b border-[#B7791F]/30 px-4 py-2 text-xs sm:text-sm text-[#B7791F] flex items-center justify-center gap-2 font-medium"
        >
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>
            Koneksi terputus. Jawaban terbaru disimpan di perangkat dan akan disinkronkan saat
            koneksi kembali.
          </span>
        </div>
      )}

      {/* =====================================================================
          HEADER UJIAN (DESIGN.MD Section 7.4)
      ====================================================================== */}
      <header className="sticky top-0 z-20 border-b border-[#E5E9F2] bg-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Logo & Nama Ujian */}
          <div className="flex items-center gap-3 min-w-0">
            <OpenBookLogo className="w-8 h-8 shrink-0 hidden sm:block" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#2457D6] truncate">
                  {exam.subject}
                </span>
                <span className="text-[#E5E9F2]">•</span>
                <span className="text-xs font-medium text-[#647089] truncate hidden sm:inline">
                  {attempt.studentName} ({attempt.participantNumber})
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-[#172033] truncate">
                {exam.title}
              </h1>
            </div>
          </div>

          {/* Center/Right: Status Simpan, Status Pelanggaran, & Timer */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Save Status — DESIGN.MD Section 14 */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-medium">
              {saveState === 'SAVING' ? (
                <span className="inline-flex items-center gap-1.5 text-[#647089]">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#2457D6]" />
                  Menyimpan jawaban...
                </span>
              ) : saveState === 'SAVED' ? (
                <span className="inline-flex items-center gap-1.5 text-[#16845B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Semua perubahan tersimpan
                </span>
              ) : saveState === 'OFFLINE' ? (
                <span className="inline-flex items-center gap-1.5 text-[#B7791F]">
                  <WifiOff className="w-3.5 h-3.5" />
                  Tersimpan lokal (Offline)
                </span>
              ) : saveState === 'ERROR' ? (
                <button
                  type="button"
                  onClick={flushPendingAnswers}
                  className="inline-flex items-center gap-1.5 text-[#D64545] underline cursor-pointer"
                >
                  Gagal menyimpan. Coba lagi
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[#647089]">
                  <Wifi className="w-3.5 h-3.5 text-[#16845B]" />
                  Siap
                </span>
              )}
            </div>

            {/* Badge Status Pelanggaran (0/3, 1/3, 2/3) */}
            <div
              title="Jumlah pelanggaran keluar halaman ujian (Maksimal 3x)"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums inline-flex items-center gap-1.5 border ${
                attempt.violationCount === 0
                  ? 'bg-[#E8F7F0] text-[#16845B] border-[#16845B]/20'
                  : attempt.violationCount === 1
                  ? 'bg-[#FFF6E5] text-[#B7791F] border-[#B7791F]/30'
                  : 'bg-[#FFF0F0] text-[#D64545] border-[#D64545]/40'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pelanggaran:</span>
              <span>
                {attempt.violationCount}/{attempt.maxViolations}
              </span>
            </div>

            {/* Exam Timer (Tabular Nums) — DESIGN.MD Section 7.5 */}
            <div
              className={`rounded-[11px] px-3 sm:px-3.5 py-1.5 flex items-center gap-2 border font-bold tabular-nums text-sm sm:text-base transition-colors ${
                isTimeCritical
                  ? 'bg-[#FFF0F0] text-[#D64545] border-[#D64545]/40'
                  : isTimeWarning
                  ? 'bg-[#FFF6E5] text-[#B7791F] border-[#B7791F]/40'
                  : 'bg-[#F5F7FB] text-[#172033] border-[#E5E9F2]'
              }`}
            >
              <Clock
                className={`w-4 h-4 shrink-0 ${
                  isTimeCritical
                    ? 'text-[#D64545]'
                    : isTimeWarning
                    ? 'text-[#B7791F]'
                    : 'text-[#2457D6]'
                }`}
              />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-medium text-[#647089] hidden sm:block">
                  Waktu tersisa
                </span>
                <span>{formatCountdown(remainingSec)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Progress Bar */}
        <div className="h-1 w-full bg-[#E5E9F2]">
          <div
            className="h-full bg-[#2457D6] transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* =====================================================================
          WORKSPACE UTAMA: 2 KOLOM DI DESKTOP (72% SOAL, 28% NAVIGATOR)
      ====================================================================== */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 sm:px-6 py-5 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* KOLOM KIRI: AREA SOAL (70-75% / 8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {currentQuestion && (
            <div
              className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 sm:p-8 space-y-6"
              style={{ boxShadow: '0 2px 10px rgba(22, 34, 58, 0.04)' }}
            >
              {/* Top Question Bar: Nomor Soal & Tombol Tandai untuk ditinjau */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E9F2]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center rounded-[10px] bg-[#2457D6] text-white font-bold tabular-nums px-3 py-1 text-sm">
                    Soal {String(currentQuestion.displayNo).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#647089] tabular-nums">
                    dari {questions.length} soal
                  </span>
                </div>

                {/* Tombol Tandai untuk ditinjau — DESIGN.MD Section 7.4 & 15 */}
                <button
                  type="button"
                  onClick={() =>
                    updateAnswer(
                      currentQuestion.id,
                      currentAnswer?.selectedKey ?? null,
                      !currentAnswer?.flaggedForReview
                    )
                  }
                  className={`inline-flex items-center gap-2 rounded-[10px] border px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    currentAnswer?.flaggedForReview
                      ? 'border-[#B7791F] bg-[#FFF6E5] text-[#B7791F]'
                      : 'border-[#E5E9F2] bg-white text-[#647089] hover:border-[#8791A5] hover:text-[#172033]'
                  }`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      currentAnswer?.flaggedForReview ? 'fill-[#B7791F]' : ''
                    }`}
                  />
                  <span>
                    {currentAnswer?.flaggedForReview
                      ? 'Ditandai untuk ditinjau'
                      : 'Tandai untuk ditinjau'}
                  </span>
                </button>
              </div>

              {/* Konteks / Bacaan / Kutipan Ayat Soal bila ada */}
              {currentQuestion.context && (
                <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 sm:p-5 text-[#172033]">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#647089] mb-2">
                    Perhatikan kutipan / bacaan berikut:
                  </span>
                  <ArabicFormattedText
                    text={currentQuestion.context}
                    className="text-base sm:text-[17px] font-medium"
                  />
                </div>
              )}

              {/* Gambar Soal bila ada (misal Gambar Jam di Bahasa Arab VIII, Gambar Siswa/Dokter di Bahasa Arab VII) */}
              {currentQuestion.imageUrl && (
                <div className="rounded-[14px] border border-[#E5E9F2] bg-[#F5F7FB] p-4 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentQuestion.imageUrl}
                    alt={`Ilustrasi untuk soal nomor ${currentQuestion.displayNo}`}
                    className="max-h-56 w-auto rounded-[10px] object-contain"
                  />
                </div>
              )}

              {/* Teks Pertanyaan Utama — DESIGN.MD Section 4 (18–21px, weight 500) */}
              <div className="max-w-[75ch]">
                <ArabicFormattedText
                  text={currentQuestion.text}
                  className="text-[18px] sm:text-[20px] font-medium text-[#172033]"
                />
              </div>

              {/* Daftar Opsi Jawaban (A, B, C, D) — DESIGN.MD Section 7.4 */}
              <div
                className="space-y-3 pt-2"
                role="radiogroup"
                aria-label={`Pilihan jawaban soal nomor ${currentQuestion.displayNo}`}
              >
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer?.selectedKey === opt.originalKey;
                  return (
                    <button
                      key={opt.originalKey}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() =>
                        updateAnswer(
                          currentQuestion.id,
                          opt.originalKey,
                          currentAnswer?.flaggedForReview || false
                        )
                      }
                      className={`w-full text-left rounded-[12px] border p-3.5 sm:p-4 flex items-center gap-3.5 transition-all duration-150 cursor-pointer min-h-[54px] ${
                        isSelected
                          ? 'border-[#2457D6] bg-[#EAF0FF] ring-1 ring-[#2457D6]'
                          : 'border-[#E5E9F2] bg-white hover:border-[#3267E8]/50 hover:bg-[#F5F7FF]'
                      }`}
                    >
                      {/* Indikator Huruf Opsi (A/B/C/D) */}
                      <span
                        className={`h-9 w-9 rounded-[10px] font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#2457D6] text-white'
                            : 'bg-[#F5F7FB] text-[#172033] border border-[#E5E9F2]'
                        }`}
                      >
                        {opt.displayLabel}
                      </span>

                      {/* Teks Opsi Jawaban */}
                      <div className="flex-1 min-w-0 text-[15px] sm:text-[16px] font-medium text-[#172033]">
                        <ArabicFormattedText text={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bar Navigasi Bawah: Sebelumnya, Daftar Soal (Mobile), Berikutnya / Akhiri Ujian */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="rounded-[11px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] disabled:opacity-40 px-4 sm:px-5 py-3 text-sm font-semibold text-[#172033] inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {/* Tombol Buka Navigator Soal di Mobile (< 768px) — DESIGN.MD Section 12 */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-3 text-xs sm:text-sm font-semibold text-[#172033] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-[#2457D6]" />
              <span>Daftar soal</span>
              <span className="tabular-nums text-xs text-[#647089]">
                ({answeredCount}/{questions.length})
              </span>
            </button>

            {currentIdx < questions.length - 1 ? (
              <button
                type="button"
                onClick={() =>
                  setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))
                }
                className="rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white px-5 sm:px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmSubmitOpen(true)}
                className="rounded-[11px] bg-[#16845B] hover:bg-[#13704d] text-white px-5 sm:px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Akhiri ujian</span>
              </button>
            )}
          </div>
        </div>

        {/* KOLOM KANAN: PANEL NAVIGASI SOAL (25-30% / 4 cols di Desktop) — Section 7.4 */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24">
          <div
            className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 space-y-5"
            style={{ boxShadow: '0 2px 10px rgba(22, 34, 58, 0.04)' }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#172033]">Navigasi Soal</h2>
              <span className="text-xs font-semibold text-[#647089] tabular-nums">
                {answeredCount} dari {questions.length} terjawab
              </span>
            </div>

            {/* Grid Nomor Soal (Tabular Nums & Color-Blind Friendly States) */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const ans = answers[q.id];
                const isCurrent = idx === currentIdx;
                const isAnswered = Boolean(ans?.selectedKey);
                const isFlagged = Boolean(ans?.flaggedForReview);

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Soal nomor ${q.displayNo}${
                      isAnswered ? ', sudah dijawab' : ', belum dijawab'
                    }${isFlagged ? ', ditandai untuk ditinjau' : ''}`}
                    className={`relative h-11 rounded-[10px] font-bold text-sm tabular-nums flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'border-2 border-[#2457D6] bg-[#EAF0FF] text-[#2457D6] ring-2 ring-[#2457D6]/20'
                        : isAnswered
                        ? 'bg-[#2457D6] text-white border border-[#2457D6]'
                        : 'bg-white text-[#172033] border border-[#E5E9F2] hover:border-[#8791A5]'
                    }`}
                  >
                    {String(q.displayNo).padStart(2, '0')}
                    {/* Penanda Pojok untuk Soal yang Ditandai (Accessible non-color indicator) */}
                    {isFlagged && (
                      <span
                        className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-[#B7791F] border-2 border-white"
                        title="Ditandai untuk ditinjau"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legenda Status — DESIGN.MD Section 7.4 */}
            <div className="rounded-[12px] bg-[#F5F7FB] p-3.5 grid grid-cols-2 gap-2.5 text-xs text-[#647089]">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-[#2457D6] inline-block shrink-0" />
                <span>Sudah dijawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-white border border-[#E5E9F2] inline-block shrink-0" />
                <span>Belum dijawab ({unansweredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border-2 border-[#2457D6] bg-[#EAF0FF] inline-block shrink-0" />
                <span>Sedang dibuka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-[#B7791F] inline-block shrink-0" />
                <span>Ditandai ({flaggedCount})</span>
              </div>
            </div>

            {/* Tombol Akhiri Ujian */}
            <button
              type="button"
              onClick={() => setConfirmSubmitOpen(true)}
              className="w-full rounded-[11px] border border-[#2457D6] bg-[#F5F7FF] hover:bg-[#2457D6] text-[#2457D6] hover:text-white font-semibold py-2.5 px-4 text-sm transition-colors cursor-pointer"
            >
              Akhiri ujian
            </button>
          </div>
        </aside>
      </main>

      {/* =====================================================================
          BOTTOM SHEET DRAWER NAVIGATOR SOAL UNTUK MOBILE (DESIGN.MD Section 12)
      ====================================================================== */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col justify-end bg-[#172033]/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full rounded-t-[20px] bg-white p-5 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E9F2]">
              <div>
                <h2 className="text-base font-bold text-[#172033]">Daftar Nomor Soal</h2>
                <p className="text-xs text-[#647089]">
                  {answeredCount} terjawab • {unansweredCount} belum dijawab •{' '}
                  {flaggedCount} ditandai
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                className="p-1.5 rounded-lg text-[#647089] hover:bg-[#F5F7FB]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5">
              {questions.map((q, idx) => {
                const ans = answers[q.id];
                const isCurrent = idx === currentIdx;
                const isAnswered = Boolean(ans?.selectedKey);
                const isFlagged = Boolean(ans?.flaggedForReview);

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(idx);
                      setMobileNavOpen(false);
                    }}
                    className={`relative h-11 rounded-[10px] font-bold text-sm tabular-nums flex items-center justify-center ${
                      isCurrent
                        ? 'border-2 border-[#2457D6] bg-[#EAF0FF] text-[#2457D6]'
                        : isAnswered
                        ? 'bg-[#2457D6] text-white'
                        : 'bg-white text-[#172033] border border-[#E5E9F2]'
                    }`}
                  >
                    {String(q.displayNo).padStart(2, '0')}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-[#B7791F] border-2 border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileNavOpen(false);
                  setConfirmSubmitOpen(true);
                }}
                className="w-full rounded-[11px] bg-[#2457D6] text-white font-semibold py-3 text-sm"
              >
                Akhiri ujian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL KONFIRMASI MENYELESAIKAN UJIAN (DESIGN.MD Section 7.6)
      ====================================================================== */}
      {confirmSubmitOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-[18px] border border-[#E5E9F2] bg-white p-6 space-y-5"
            style={{ boxShadow: '0 18px 60px rgba(22, 34, 58, 0.18)' }}
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#172033]">
                Konfirmasi Mengakhiri Ujian
              </h2>
              <p className="text-xs sm:text-sm text-[#647089] mt-1">
                Setelah ujian diakhiri, jawaban tidak dapat diubah lagi.
              </p>
            </div>

            {/* Rincian Jumlah Soal Terjawab / Belum Dijawab / Ditandai */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="rounded-[12px] bg-[#E8F7F0] p-3">
                <span className="text-xl font-bold text-[#16845B] tabular-nums block">
                  {answeredCount}
                </span>
                <span className="text-[11px] font-medium text-[#16845B]">
                  Soal terjawab
                </span>
              </div>
              <div
                className={`rounded-[12px] p-3 ${
                  unansweredCount > 0 ? 'bg-[#FFF0F0]' : 'bg-[#F5F7FB]'
                }`}
              >
                <span
                  className={`text-xl font-bold tabular-nums block ${
                    unansweredCount > 0 ? 'text-[#D64545]' : 'text-[#647089]'
                  }`}
                >
                  {unansweredCount}
                </span>
                <span
                  className={`text-[11px] font-medium ${
                    unansweredCount > 0 ? 'text-[#D64545]' : 'text-[#647089]'
                  }`}
                >
                  Belum dijawab
                </span>
              </div>
              <div className="rounded-[12px] bg-[#FFF6E5] p-3">
                <span className="text-xl font-bold text-[#B7791F] tabular-nums block">
                  {flaggedCount}
                </span>
                <span className="text-[11px] font-medium text-[#B7791F]">
                  Ditandai
                </span>
              </div>
            </div>

            {/* Peringatan jika masih ada soal kosong — DESIGN.MD Section 7.6 */}
            {unansweredCount > 0 && (
              <div className="rounded-[12px] border border-[#B7791F]/30 bg-[#FFF6E5] p-3.5 text-xs text-[#B7791F] flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Masih ada <strong>{unansweredCount} soal yang belum dijawab</strong>.
                  Apakah Anda yakin tetap ingin mengakhiri ujian sekarang?
                </span>
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                disabled={submitting}
                onClick={() => setConfirmSubmitOpen(false)}
                className="w-full sm:w-auto rounded-[11px] border border-[#E5E9F2] bg-white px-4 py-2.5 text-sm font-semibold text-[#172033] hover:bg-[#F5F7FB] cursor-pointer"
              >
                Kembali ke ujian
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={() => handleFinalSubmit(false)}
                className="w-full sm:w-auto rounded-[11px] bg-[#D64545] hover:bg-[#b93838] disabled:opacity-60 text-white px-5 py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <span>Mengirim Jawaban...</span>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>Ya, akhiri ujian</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL PERINGATAN PELANGGARAN 1 (KUNING) & PELANGGARAN 2 (MERAH KERAS)
      ====================================================================== */}
      {activeWarningModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{
            backgroundColor:
              activeWarningModal.strike === 2
                ? 'rgba(140, 20, 20, 0.82)'
                : 'rgba(23, 32, 51, 0.65)',
          }}
          role="alertdialog"
          aria-modal="true"
        >
          {activeWarningModal.strike === 1 ? (
            /* PELANGGARAN PERTAMA (1/3) — PERINGATAN KUNING */
            <div
              className="w-full max-w-md rounded-[18px] border-2 border-[#B7791F] bg-white p-6 space-y-5"
              style={{ boxShadow: '0 18px 60px rgba(22, 34, 58, 0.25)' }}
            >
              <div className="flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-full bg-[#FFF6E5] text-[#B7791F] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-[#FFF6E5] px-2.5 py-0.5 text-xs font-bold text-[#B7791F] uppercase">
                    Pelanggaran 1 dari 3
                  </span>
                  <h2 className="text-lg font-bold text-[#172033] mt-0.5">
                    Peringatan Pertama: Jangan Keluar Halaman
                  </h2>
                </div>
              </div>

              <div className="rounded-[12px] bg-[#FFF6E5] border border-[#B7791F]/30 p-3.5 text-xs sm:text-sm text-[#172033] space-y-1.5">
                <p>
                  <strong>Terdeteksi:</strong> {activeWarningModal.reason}.
                </p>
                <p className="text-[#647089]">
                  Mohon tetap berada di layar ujian. Jika Anda keluar halaman lagi, Anda akan
                  menerima <strong>Peringatan Keras Merah (2/3)</strong>, dan pada pelanggaran
                  ke-3 ujian akan <strong>dikumpulkan secara otomatis</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveWarningModal(null)}
                className="w-full rounded-[11px] bg-[#B7791F] hover:bg-[#9c6517] text-white font-semibold py-3 px-4 text-sm cursor-pointer"
              >
                Saya Mengerti & Lanjutkan Ujian
              </button>
            </div>
          ) : (
            /* PELANGGARAN KEDUA (2/3) — PERINGATAN KERAS "MERAH" */
            <div
              className="w-full max-w-lg rounded-[18px] border-4 border-[#D64545] bg-[#FFF0F0] p-6 sm:p-7 space-y-5"
              style={{ boxShadow: '0 24px 70px rgba(0, 0, 0, 0.45)' }}
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-[#D64545] text-white flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-[#D64545] px-3 py-0.5 text-xs font-bold text-white uppercase tracking-wider">
                    PERINGATAN KERAS — PELANGGARAN 2 DARI 3!
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#D64545] mt-1 leading-tight">
                    KESEMPATAN TERAKHIR!
                  </h2>
                </div>
              </div>

              <div className="rounded-[14px] bg-white border-2 border-[#D64545] p-4 text-xs sm:text-sm text-[#172033] space-y-2">
                <p className="font-bold text-[#D64545]">
                  Anda kembali terdeteksi meninggalkan ruang ujian ({activeWarningModal.reason}
                  ).
                </p>
                <p className="leading-relaxed">
                  Ini adalah <strong>peringatan terakhir (2/3)</strong>. Apabila Anda berpindah
                  tab, menekan tombol Home, atau membuka aplikasi lain{' '}
                  <strong className="underline text-[#D64545]">SEKALI LAGI (3/3)</strong>,
                  maka soal ujian Anda akan{' '}
                  <strong className="text-[#D64545]">
                    LANGSUNG DIKUMPULKAN SECARA OTOMATIS (AUTO-SUBMIT)
                  </strong>{' '}
                  dan tidak dapat dilanjutkan lagi!
                </p>
              </div>

              <label className="flex items-start gap-3 rounded-[12px] bg-white/90 border border-[#D64545]/40 p-3.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={strike2Acknowledged}
                  onChange={(e) => setStrike2Acknowledged(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-[#D64545]"
                />
                <span className="text-xs sm:text-sm font-semibold text-[#172033]">
                  Saya sadar ini adalah peringatan terakhir dan tidak akan keluar dari layar
                  ujian lagi.
                </span>
              </label>

              <button
                type="button"
                disabled={!strike2Acknowledged}
                onClick={() => setActiveWarningModal(null)}
                className="w-full rounded-[11px] bg-[#D64545] hover:bg-[#b83232] disabled:opacity-45 text-white font-bold py-3.5 px-5 text-sm sm:text-base transition-all cursor-pointer"
              >
                Kembali ke Soal Sekarang
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
