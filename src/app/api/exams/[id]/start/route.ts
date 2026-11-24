import { NextRequest, NextResponse } from 'next/server';
import {
  hydrateAttemptSnapshot,
  loadDb,
  startOrResumeAttempt,
} from '@/lib/db/store';
import { buildClientQuestions } from '@/lib/exam/shuffle';

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: examId } = await context.params;
    const body = await req.json();
    const studentId = String(body.studentId || '').trim();

    if (!studentId) {
      return NextResponse.json(
        { ok: false, error: 'ID peserta wajib dikirim.' },
        { status: 400 }
      );
    }

    if (body.attemptSnapshot && body.attemptSnapshot.id) {
      hydrateAttemptSnapshot(String(body.attemptSnapshot.id), body.attemptSnapshot);
    }

    const res = await startOrResumeAttempt(
      examId,
      studentId,
      body.studentProfile || null
    );
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: res.error }, { status: 400 });
    }

    const db = loadDb();
    const rawQuestions = db.questions.filter((q) => q.examId === examId);
    const clientQuestions = buildClientQuestions(
      rawQuestions,
      res.attempt.seed,
      res.exam.shuffleQuestions,
      res.exam.shuffleOptions
    );

    const remainingSec = Math.max(
      0,
      Math.floor((new Date(res.attempt.endsAt).getTime() - Date.now()) / 1000)
    );

    return NextResponse.json({
      ok: true,
      attempt: res.attempt,
      exam: res.exam,
      questions: clientQuestions,
      remainingSec,
      serverTime: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Gagal memulai sesi ujian.',
      },
      { status: 500 }
    );
  }
}
