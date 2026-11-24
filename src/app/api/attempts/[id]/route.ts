import { NextRequest, NextResponse } from 'next/server';
import {
  finalizeAttempt,
  hydrateAttemptSnapshot,
  loadDb,
  recordProctorViolation,
  saveDb,
  saveStudentAnswers,
} from '@/lib/db/store';
import { buildClientQuestions } from '@/lib/exam/shuffle';
import { ProctorEventType } from '@/lib/types';

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: attemptId } = await context.params;
  const db = loadDb();
  let attempt = db.attempts.find((a) => a.id === attemptId);

  if (!attempt) {
    return NextResponse.json(
      {
        ok: false,
        code: 'ATTEMPT_NOT_IN_MEMORY',
        error: 'Sesi ujian perlu disinkronkan dari penyimpanan lokal perangkat.',
      },
      { status: 404 }
    );
  }

  const exam = db.exams.find((e) => e.id === attempt!.examId);
  if (!exam) {
    return NextResponse.json(
      { ok: false, error: 'Data ujian tidak ditemukan.' },
      { status: 404 }
    );
  }

  const nowMs = Date.now();
  const endsMs = new Date(attempt.endsAt).getTime();

  if (attempt.status === 'IN_PROGRESS' && nowMs >= endsMs) {
    attempt = await finalizeAttempt(
      attempt.id,
      'AUTO_SUBMITTED_TIME',
      'Waktu ujian telah habis'
    );
  }

  const rawQuestions = db.questions.filter((q) => q.examId === exam.id);
  const clientQuestions = buildClientQuestions(
    rawQuestions,
    attempt.seed,
    exam.shuffleQuestions,
    exam.shuffleOptions
  );

  const remainingSec = Math.max(0, Math.floor((endsMs - Date.now()) / 1000));

  return NextResponse.json({
    ok: true,
    attempt,
    exam,
    questions: clientQuestions,
    remainingSec,
    serverTime: new Date().toISOString(),
  });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: attemptId } = await context.params;
    const body = await req.json();
    const answers = Array.isArray(body.answers) ? body.answers : [];

    const res = await saveStudentAnswers(
      attemptId,
      answers,
      body.attemptSnapshot || null
    );
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: res.error }, { status: 400 });
    }

    const remainingSec = Math.max(
      0,
      Math.floor((new Date(res.attempt.endsAt).getTime() - Date.now()) / 1000)
    );

    return NextResponse.json({
      ok: true,
      attempt: res.attempt,
      remainingSec,
      savedAt: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Gagal menyimpan jawaban.',
      },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: attemptId } = await context.params;
    const body = await req.json();
    const action = String(body.action || 'HEARTBEAT');

    // Hydrate dari snapshot client jika instance Serverless Vercel baru mengalami cold-start
    if (body.attemptSnapshot) {
      hydrateAttemptSnapshot(attemptId, body.attemptSnapshot);
    }

    const db = loadDb();
    let attempt = db.attempts.find((a) => a.id === attemptId);
    if (!attempt) {
      return NextResponse.json(
        { ok: false, error: 'Sesi ujian tidak ditemukan.' },
        { status: 404 }
      );
    }

    // 0. HYDRATE (ketika GET terkena cold-start di Vercel Serverless)
    if (action === 'HYDRATE') {
      const exam = db.exams.find((e) => e.id === attempt!.examId);
      if (!exam) {
        return NextResponse.json(
          { ok: false, error: 'Data ujian tidak ditemukan.' },
          { status: 404 }
        );
      }

      const nowMs = Date.now();
      const endsMs = new Date(attempt.endsAt).getTime();

      if (attempt.status === 'IN_PROGRESS' && nowMs >= endsMs) {
        attempt = await finalizeAttempt(
          attempt.id,
          'AUTO_SUBMITTED_TIME',
          'Waktu ujian telah habis'
        );
      }

      const rawQuestions = db.questions.filter((q) => q.examId === exam.id);
      const clientQuestions = buildClientQuestions(
        rawQuestions,
        attempt.seed,
        exam.shuffleQuestions,
        exam.shuffleOptions
      );

      const remainingSec = Math.max(0, Math.floor((endsMs - Date.now()) / 1000));

      return NextResponse.json({
        ok: true,
        attempt,
        exam,
        questions: clientQuestions,
        remainingSec,
        serverTime: new Date().toISOString(),
      });
    }

    // 1. HEARTBEAT
    if (action === 'HEARTBEAT') {
      const nowMs = Date.now();
      const endsMs = new Date(attempt.endsAt).getTime();

      if (attempt.status === 'IN_PROGRESS' && nowMs >= endsMs) {
        attempt = await finalizeAttempt(
          attempt.id,
          'AUTO_SUBMITTED_TIME',
          'Waktu ujian telah habis',
          body.attemptSnapshot || null
        );
      } else if (attempt.status === 'IN_PROGRESS') {
        attempt.lastSeenAt = new Date().toISOString();
        saveDb(db);
      }

      const remainingSec = Math.max(
        0,
        Math.floor((new Date(attempt.endsAt).getTime() - Date.now()) / 1000)
      );

      return NextResponse.json({
        ok: true,
        status: attempt.status,
        violationCount: attempt.violationCount,
        maxViolations: attempt.maxViolations,
        remainingSec,
        serverTime: new Date().toISOString(),
        attempt,
      });
    }

    // 2. VIOLATION (3-STRIKE PROCTORING)
    if (action === 'VIOLATION') {
      const eventType = (body.type || 'PAGE_HIDDEN') as ProctorEventType;
      const description = body.description ? String(body.description) : undefined;

      const vRes = await recordProctorViolation(
        attemptId,
        eventType,
        description,
        body.attemptSnapshot || null
      );
      if (!vRes.ok || !vRes.attempt) {
        return NextResponse.json(
          { ok: false, error: vRes.error || 'Gagal mencatat pelanggaran.' },
          { status: 400 }
        );
      }

      const remainingSec = Math.max(
        0,
        Math.floor((new Date(vRes.attempt.endsAt).getTime() - Date.now()) / 1000)
      );

      return NextResponse.json({
        ok: true,
        attempt: vRes.attempt,
        strikeNumber: vRes.strikeNumber,
        actionTaken: vRes.actionTaken,
        remainingSec,
      });
    }

    // 3. SUBMIT (AKHIRI UJIAN)
    if (action === 'SUBMIT') {
      if (
        Array.isArray(body.answers) &&
        body.answers.length > 0 &&
        attempt.status === 'IN_PROGRESS'
      ) {
        await saveStudentAnswers(
          attemptId,
          body.answers,
          body.attemptSnapshot || null
        );
      }

      const finalized = await finalizeAttempt(
        attemptId,
        'SUBMITTED',
        'Dikumpulkan oleh peserta',
        body.attemptSnapshot || null
      );

      return NextResponse.json({
        ok: true,
        attempt: finalized,
      });
    }

    return NextResponse.json(
      { ok: false, error: 'Action tidak valid.' },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Gagal memproses permintaan.',
      },
      { status: 500 }
    );
  }
}
