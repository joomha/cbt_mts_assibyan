import crypto from 'crypto';
import { ExamAttempt } from '../types';

export interface SheetRowPayload {
  attemptId: string;
  submittedAtWib: string;
  participantNumber: string;
  studentName: string;
  className: string;
  subject: string;
  examCode: string;
  examTitle: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  emptyCount: number;
  totalQuestions: number;
  startedAtWib: string;
  endedAtWib: string;
  durationFormatted: string;
  durationSeconds: number;
  violationCount: number;
  maxViolations: number;
  statusLabel: string;
  violationSummary: string;
}

export function formatWibDateTime(iso: string | null): string {
  if (!iso) return '-';
  try {
    return new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function getStatusLabelId(status: ExamAttempt['status']): string {
  switch (status) {
    case 'SUBMITTED':
      return 'Selesai Normal';
    case 'AUTO_SUBMITTED_TIME':
      return 'Auto-Submit (Waktu Habis)';
    case 'AUTO_SUBMITTED_VIOLATION':
      return 'Auto-Submit (Pelanggaran Ke-3)';
    default:
      return 'Sedang Mengerjakan';
  }
}

export function buildSheetRowPayload(attempt: ExamAttempt, examCode = '-'): SheetRowPayload {
  const violationSummary =
    attempt.violationLogs.length === 0
      ? 'Tidak ada pelanggaran'
      : attempt.violationLogs
          .map(
            (v) =>
              `[#${v.strikeNumber} ${formatWibDateTime(v.timestamp).split(' ')[1] || ''}] ${v.description}`
          )
          .join(' | ');

  return {
    attemptId: attempt.id,
    submittedAtWib: formatWibDateTime(attempt.submittedAt || new Date().toISOString()),
    participantNumber: attempt.participantNumber,
    studentName: attempt.studentName.toUpperCase(),
    className: attempt.className,
    subject: attempt.subject,
    examCode,
    examTitle: attempt.examTitle,
    score: attempt.score ?? 0,
    correctCount: attempt.correctCount ?? 0,
    wrongCount: attempt.wrongCount ?? 0,
    emptyCount: attempt.emptyCount ?? 0,
    totalQuestions: attempt.totalQuestions,
    startedAtWib: formatWibDateTime(attempt.startedAt),
    endedAtWib: formatWibDateTime(attempt.submittedAt),
    durationFormatted: attempt.durationFormatted || '-',
    durationSeconds: attempt.durationSeconds ?? 0,
    violationCount: attempt.violationCount,
    maxViolations: attempt.maxViolations,
    statusLabel: getStatusLabelId(attempt.status),
    violationSummary,
  };
}

export async function pushAttemptsToGoogleSheets(
  attempts: ExamAttempt[],
  customWebhookUrl?: string,
  customSecret?: string
): Promise<{ ok: boolean; message: string; syncedCount: number }> {
  const url = (customWebhookUrl || process.env.APPS_SCRIPT_EXPORT_URL || '').trim();
  const secret = (
    customSecret ||
    process.env.SHEETS_WEBHOOK_SECRET ||
    'mts-assibyan-cbt-secret-2026'
  ).trim();

  if (!url || url.includes('XXXX')) {
    return {
      ok: false,
      message:
        'URL Web App Google Apps Script belum dikonfigurasi. Buka Pengaturan Admin atau isi APPS_SCRIPT_EXPORT_URL.',
      syncedCount: 0,
    };
  }

  const rows = attempts.map((a) => buildSheetRowPayload(a));
  const timestamp = Date.now();
  const rawBody = JSON.stringify({ rows, timestamp });
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        action: 'EXPORT_RESULTS',
        secret,
        timestamp,
        signature,
        rows,
      }),
      redirect: 'follow',
    });

    if (!response.ok) {
      return {
        ok: false,
        message: `Google Apps Script merespons HTTP ${response.status}`,
        syncedCount: 0,
      };
    }

    const resJson = await response.json().catch(() => ({ status: 'ok' }));
    if (resJson.status === 'error') {
      return {
        ok: false,
        message: resJson.message || 'Terjadi kesalahan pada Google Apps Script',
        syncedCount: 0,
      };
    }

    return {
      ok: true,
      message: `Berhasil menyimpan ${rows.length} data hasil ujian ke Google Spreadsheet.`,
      syncedCount: rows.length,
    };
  } catch (err) {
    return {
      ok: false,
      message:
        err instanceof Error
          ? `Gagal menghubungi Google Spreadsheet: ${err.message}`
          : 'Gagal menghubungi Google Spreadsheet.',
      syncedCount: 0,
    };
  }
}
