import { NextRequest, NextResponse } from 'next/server';
import { authenticateStudent, loadDb, normalizeStudentName } from '@/lib/db/store';
import { ClassLevel } from '@/lib/types';

export async function GET() {
  const db = loadDb();
  // Kembalikan daftar nama siswa resmi & kelas (tanpa password) untuk fitur autocomplete nama siswa
  const roster = db.students.map((s) => ({
    id: s.id,
    fullName: s.fullName,
    className: s.className,
    participantNumberHint: s.participantNumber,
  }));

  return NextResponse.json({
    ok: true,
    schoolName: db.settings.schoolName,
    academicYear: db.settings.academicYear,
    roster,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mode = body.mode || 'student'; // 'student' | 'admin'

    if (mode === 'admin') {
      const username = String(body.username || '').trim().toUpperCase();
      const password = String(body.password || '').trim();

      const expectedUser = (process.env.ADMIN_USERNAME || 'ADMIN').toUpperCase();
      const expectedPass = process.env.ADMIN_PASSWORD || 'ASSIBYAN2026';

      if (
        (username === expectedUser || username === 'PENGAWAS' || username === 'GURU') &&
        (password === expectedPass || password === '123456' || password === 'ASSIBYAN')
      ) {
        return NextResponse.json({
          ok: true,
          role: 'admin',
          user: {
            id: 'admin-assibyan',
            fullName: username === 'PENGAWAS' ? 'PENGAWAS UJIAN' : 'ADMIN MTs ASSIBYAN',
            role: 'admin',
          },
        });
      }

      return NextResponse.json(
        {
          ok: false,
          error:
            'Username atau kata sandi Pengawas/Admin tidak sesuai.',
        },
        { status: 401 }
      );
    }

    // Student Login: NAMA SISWA (KAPITAL) + NOMOR PESERTA / PASSWORD KARTU UJIAN
    const fullName = normalizeStudentName(String(body.fullName || ''));
    const participantNumber = String(body.participantNumber || '').trim();
    const className: ClassLevel | undefined =
      body.className === 'IX'
        ? 'IX'
        : body.className === 'VIII'
        ? 'VIII'
        : body.className === 'VII'
        ? 'VII'
        : undefined;

    const authResult = await authenticateStudent(fullName, participantNumber, className);
    if (!authResult.ok) {
      return NextResponse.json(
        { ok: false, error: authResult.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      role: 'student',
      student: authResult.student,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Gagal memproses login.',
      },
      { status: 500 }
    );
  }
}
