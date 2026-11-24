import { NextRequest, NextResponse } from 'next/server';
import { loadDb } from '@/lib/db/store';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId');
  const className = searchParams.get('className');

  const db = loadDb();

  const exams = db.exams.filter((e) => {
    if (e.status === 'draft') return false;
    if (className && e.classLevel !== 'ALL' && e.classLevel !== className) {
      return false;
    }
    return true;
  });

  const studentAttempts = studentId
    ? db.attempts.filter((a) => a.studentId === studentId)
    : [];

  return NextResponse.json({
    ok: true,
    schoolName: db.settings.schoolName,
    academicYear: db.settings.academicYear,
    exams,
    attempts: studentAttempts,
  });
}
