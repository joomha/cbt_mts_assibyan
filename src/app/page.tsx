'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ShieldCheck,
  LogOut,
  ArrowRight,
  CircleHelp,
  UserCheck,
  Award,
  Sparkles,
  Lock,
  Calendar,
} from 'lucide-react';
import { ClassLevel, Exam, ExamAttempt, StudentProfile } from '@/lib/types';
import {
  EmptyExamIllustration,
  HeroGeometricBackdrop,
  OpenBookLogo,
} from '@/components/ui/GeometricOrnaments';

interface RosterItem {
  id: string;
  fullName: string;
  className: ClassLevel;
  participantNumberHint: string;
}

export default function HomePage() {
  const router = useRouter();

  // Auth state
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [loginMode, setLoginMode] = useState<'student' | 'admin'>('student');

  // Official student roster for autocomplete
  const [roster, setRoster] = useState<RosterItem[]>([]);

  // Student form fields
  const [fullName, setFullName] = useState('');
  const [participantNumber, setParticipantNumber] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel>('VII');

  // Admin form fields
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');

  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Dashboard data
  const [schoolName, setSchoolName] = useState('MADRASAH TSANAWIYAH ASSIBYAN');
  const [academicYear, setAcademicYear] = useState('2026 / 2027');
  const [exams, setExams] = useState<Exam[]>([]);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [classFilter, setClassFilter] = useState<ClassLevel | 'ALL'>('VII');
  const [dayFilter, setDayFilter] = useState<number | 'ALL'>(3); // Default: Hari Ke-3 (Rabu, 25 Nov 2026)

  // Selected Exam for Instruction & Readiness Confirmation Modal (DESIGN.MD Section 7.3)
  const [selectedExamForDetail, setSelectedExamForDetail] = useState<Exam | null>(null);
  const [readyChecked, setReadyChecked] = useState(false);
  const [startingExam, setStartingExam] = useState(false);

  // Selected Attempt for Result View Modal (DESIGN.MD Section 7.7)
  const [selectedAttemptResult, setSelectedAttemptResult] = useState<ExamAttempt | null>(
    null
  );

  useEffect(() => {
    // Load official student roster for autocomplete
    fetch('/api/auth/login')
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && Array.isArray(d.roster)) {
          setRoster(d.roster);
          if (d.schoolName) setSchoolName(d.schoolName);
          if (d.academicYear) setAcademicYear(d.academicYear);
        }
      })
      .catch(() => {});

    const saved = localStorage.getItem('cbt_student_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as StudentProfile;
        // Abaikan sesi akun dummy lama jika masih tersimpan di browser
        if (
          parsed &&
          parsed.id &&
          parsed.fullName &&
          !['std-1', 'std-2', 'std-3', 'std-4'].includes(parsed.id)
        ) {
          setStudent(parsed);
          setClassFilter(parsed.className || 'VII');
        } else {
          localStorage.removeItem('cbt_student_session');
        }
      } catch {
        localStorage.removeItem('cbt_student_session');
      }
    }
  }, []);

  useEffect(() => {
    if (student) {
      fetchDashboardData(student.id);
    }
  }, [student]);

  function loadLocalAttemptsForStudent(studentId: string): ExamAttempt[] {
    try {
      const results: ExamAttempt[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cbt_attempt_snapshot_')) {
          const raw = localStorage.getItem(key);
          if (!raw) continue;
          const att = JSON.parse(raw) as ExamAttempt;
          if (att && att.studentId === studentId && att.id) {
            results.push(att);
          }
        }
      }
      return results;
    } catch {
      return [];
    }
  }

  async function fetchDashboardData(studentId: string) {
    setDataLoading(true);
    try {
      const res = await fetch(`/api/exams?studentId=${encodeURIComponent(studentId)}`);
      const data = await res.json();
      if (data.ok) {
        setSchoolName(data.schoolName || 'MADRASAH TSANAWIYAH ASSIBYAN');
        setAcademicYear(data.academicYear || '2026 / 2027');
        setExams(data.exams || []);

        // Gabungkan attempt dari server dengan snapshot lokal di browser (agar 100% tahan serverless cold-start di Vercel)
        const serverAttempts: ExamAttempt[] = Array.isArray(data.attempts)
          ? data.attempts
          : [];
        const localAttempts = loadLocalAttemptsForStudent(studentId);
        const mergedMap = new Map<string, ExamAttempt>();

        for (const loc of localAttempts) {
          mergedMap.set(loc.id, loc);
        }
        for (const srv of serverAttempts) {
          const existingLoc = mergedMap.get(srv.id);
          if (existingLoc && existingLoc.status !== 'IN_PROGRESS' && srv.status === 'IN_PROGRESS') {
            mergedMap.set(srv.id, existingLoc);
          } else {
            mergedMap.set(srv.id, srv);
            try {
              localStorage.setItem(`cbt_attempt_snapshot_${srv.id}`, JSON.stringify(srv));
            } catch {
              // ignore storage quota
            }
          }
        }

        setAttempts(Array.from(mergedMap.values()));
      }
    } catch {
      const localAttempts = loadLocalAttemptsForStudent(studentId);
      if (localAttempts.length > 0) {
        setAttempts(localAttempts);
      }
    } finally {
      setDataLoading(false);
    }
  }

  // Deteksi siswa yang cocok dari roster berdasarkan nama yang diketik
  const matchedRosterStudent = roster.find(
    (r) => r.fullName === fullName.trim().replace(/\s+/g, ' ').toUpperCase()
  );

  useEffect(() => {
    if (matchedRosterStudent && matchedRosterStudent.className !== selectedClass) {
      setSelectedClass(matchedRosterStudent.className);
    }
  }, [matchedRosterStudent, selectedClass]);

  async function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    try {
      if (loginMode === 'admin') {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode: 'admin',
            username: adminUser,
            password: adminPass,
          }),
        });
        const data = await res.json();
        if (!data.ok) {
          setAuthError(data.error || 'Gagal masuk sebagai Pengawas/Admin.');
          return;
        }
        localStorage.setItem('cbt_admin_session', JSON.stringify(data.user));
        router.push('/admin');
        return;
      }

      // Student login: NAMA SISWA (KAPITAL) + NOMOR PESERTA / PASSWORD KARTU
      const normalizedName = fullName.trim().replace(/\s+/g, ' ').toUpperCase();
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'student',
          fullName: normalizedName,
          participantNumber: participantNumber.trim(),
          className: selectedClass,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setAuthError(data.error || 'Gagal masuk. Periksa kembali Nama dan Nomor Peserta.');
        return;
      }

      localStorage.setItem('cbt_student_session', JSON.stringify(data.student));
      setStudent(data.student);
      setClassFilter(data.student.className);
    } catch {
      setAuthError('Gagal menghubungi server. Periksa koneksi internet Anda.');
    } finally {
      setAuthLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('cbt_student_session');
    setStudent(null);
    setFullName('');
    setParticipantNumber('');
    setAttempts([]);
  }

  async function handleStartExam(exam: Exam) {
    if (!student) return;
    setStartingExam(true);
    try {
      const existingAttempt = attempts.find((a) => a.examId === exam.id);
      const res = await fetch(`/api/exams/${exam.id}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: student.id,
          studentProfile: student,
          attemptSnapshot: existingAttempt || null,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || 'Gagal memulai ujian.');
        return;
      }
      try {
        localStorage.setItem(
          `cbt_attempt_snapshot_${data.attempt.id}`,
          JSON.stringify(data.attempt)
        );
      } catch {
        // ignore quota errors
      }
      router.push(`/exam/${data.attempt.id}`);
    } catch {
      alert('Gagal memulai sesi ujian. Periksa koneksi Anda.');
    } finally {
      setStartingExam(false);
    }
  }

  const classRoster = roster.filter((r) => r.className === selectedClass);

  // =========================================================================
  // 1. LAYAR LOGIN / AKSES UJIAN (DESIGN.MD Section 7.1)
  // =========================================================================
  if (!student) {
    return (
      <div className="relative min-h-screen flex flex-col justify-between bg-[#F5F7FB] overflow-hidden">
        <HeroGeometricBackdrop />

        {/* Header */}
        <header className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OpenBookLogo className="w-10 h-10 shrink-0" />
            <div>
              <span className="block text-xs font-semibold tracking-wider text-[#2457D6] uppercase">
                Sistem Asesmen Digital
              </span>
              <span className="block text-sm sm:text-base font-bold text-[#172033]">
                MTs Assibyan
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setLoginMode(loginMode === 'student' ? 'admin' : 'student');
              setAuthError(null);
            }}
            className="inline-flex items-center gap-2 rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-[#647089] hover:border-[#2457D6] hover:text-[#2457D6] transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#2457D6]" />
            {loginMode === 'student' ? 'Akses Pengawas / Admin' : 'Kembali ke Login Peserta'}
          </button>
        </header>

        {/* Main Content */}
        <main className="relative z-10 mx-auto w-full max-w-[1120px] px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Panel: Quiet Focus Branding */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF0FF] px-3.5 py-1.5 text-xs font-semibold text-[#2457D6]">
              <Sparkles className="w-3.5 h-3.5" />
              ASAS Ganjil Tahun Pelajaran {academicYear}
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-[#172033] tracking-tight leading-tight">
              Ruang Ujian Digital{' '}
              <span className="text-[#2457D6]">MTs Assibyan</span>
            </h1>

            <p className="text-[15px] sm:text-base text-[#647089] max-w-lg leading-relaxed">
              Selamat datang di portal Computer Based Test (CBT) Asesmen Sumatif Akhir
              Semester. Masuk sesuai data pada <strong className="text-[#172033]">Kartu Peserta Ujian</strong>{' '}
              menggunakan <strong className="text-[#172033]">Nama Lengkap (HURUF KAPITAL)</strong> dan{' '}
              <strong className="text-[#172033]">Nomor Peserta / Password</strong> Anda.
            </p>

            {/* Jadwal Hari Ini Callout */}
            <div className="rounded-[16px] border border-[#2457D6]/20 bg-[#EAF0FF]/60 p-4 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2457D6]">
                <Calendar className="w-4 h-4" />
                Jadwal Hari Ke-3 • Rabu, 25 November 2026
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-[10px] bg-white p-2.5 border border-[#E5E9F2]">
                  <span className="text-[#647089] block text-[11px]">07.30 – 09.30</span>
                  <strong className="text-[#172033]">Bahasa Inggris</strong>
                </div>
                <div className="rounded-[10px] bg-white p-2.5 border border-[#E5E9F2]">
                  <span className="text-[#647089] block text-[11px]">10.00 – 11.30</span>
                  <strong className="text-[#172033]">Fiqih</strong>
                </div>
                <div className="rounded-[10px] bg-white p-2.5 border border-[#E5E9F2]">
                  <span className="text-[#647089] block text-[11px]">11.30 – 13.00</span>
                  <strong className="text-[#172033]">Informatika</strong>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172033]">
                  <CheckCircle2 className="w-4 h-4 text-[#16845B] shrink-0" />
                  Simpan Jawaban Otomatis
                </div>
                <p className="mt-1 text-xs text-[#647089]">
                  Jawaban tersimpan otomatis setiap kali dipilih dan tetap aman walaupun
                  halaman di-refresh.
                </p>
              </div>

              <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#172033]">
                  <ShieldCheck className="w-4 h-4 text-[#2457D6] shrink-0" />
                  Pengawasan 3-Lapis
                </div>
                <p className="mt-1 text-xs text-[#647089]">
                  Tetap berada di layar ujian. Keluar halaman 3 kali akan mengumpulkan ujian
                  secara otomatis.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Login Form Card */}
          <div className="lg:col-span-6">
            <div
              className="mx-auto max-w-md rounded-[16px] border border-[#E5E9F2] bg-white p-6 sm:p-8"
              style={{ boxShadow: '0 2px 10px rgba(22, 34, 58, 0.04)' }}
            >
              {/* Mode Switch Tabs */}
              <div className="grid grid-cols-2 gap-1.5 rounded-[12px] bg-[#F5F7FB] p-1 mb-6 border border-[#E5E9F2]">
                <button
                  type="button"
                  onClick={() => {
                    setLoginMode('student');
                    setAuthError(null);
                  }}
                  className={`py-2 px-3 rounded-[9px] text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    loginMode === 'student'
                      ? 'bg-white text-[#2457D6] shadow-xs'
                      : 'text-[#647089] hover:text-[#172033]'
                  }`}
                >
                  Peserta Ujian
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLoginMode('admin');
                    setAuthError(null);
                  }}
                  className={`py-2 px-3 rounded-[9px] text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    loginMode === 'admin'
                      ? 'bg-white text-[#2457D6] shadow-xs'
                      : 'text-[#647089] hover:text-[#172033]'
                  }`}
                >
                  Pengawas / Admin
                </button>
              </div>

              {loginMode === 'student' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#172033]">
                      Masuk Ruang Ujian
                    </h2>
                    <p className="text-xs sm:text-sm text-[#647089] mt-0.5">
                      Pilih kelas, masukkan Nama Lengkap dan Nomor Peserta sesuai Kartu Ujian.
                    </p>
                  </div>

                  {/* Pilihan Kelas (VII, VIII, IX) */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#172033] mb-1.5">
                      Kelas Peserta
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['VII', 'VIII', 'IX'] as const).map((cls) => (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => setSelectedClass(cls)}
                          className={`py-2.5 px-2.5 rounded-[11px] border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                            selectedClass === cls
                              ? 'border-[#2457D6] bg-[#EAF0FF] text-[#2457D6]'
                              : 'border-[#E5E9F2] bg-white text-[#647089] hover:border-[#8791A5]'
                          }`}
                        >
                          Kelas {cls}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input 1: Nama Siswa (KAPITAL) dengan Datalist Roster Resmi */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[13px] font-medium text-[#172033] mb-1.5"
                    >
                      Nama Lengkap Siswa (HURUF KAPITAL)
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      list="student-roster-list"
                      required
                      autoComplete="off"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value.toUpperCase())}
                      placeholder={
                        selectedClass === 'VII'
                          ? 'Ketik / pilih nama siswa Kelas VII'
                          : selectedClass === 'VIII'
                          ? 'Ketik / pilih nama siswa Kelas VIII'
                          : 'Ketik / pilih nama siswa Kelas IX'
                      }
                      className="w-full rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-2.5 text-[15px] font-semibold uppercase tracking-wide text-[#172033] placeholder:font-normal placeholder:normal-case placeholder:text-[#8791A5] focus:border-[#2457D6] transition-colors"
                    />
                    <datalist id="student-roster-list">
                      {classRoster.map((item) => (
                        <option key={item.id} value={item.fullName}>
                          Kelas {item.className} — No. {item.participantNumberHint}
                        </option>
                      ))}
                    </datalist>
                    {matchedRosterStudent && (
                      <p className="mt-1 text-[12px] text-[#16845B] font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          Terdaftar di Kelas {matchedRosterStudent.className} (No. Ujian:{' '}
                          <strong>{matchedRosterStudent.participantNumberHint}</strong>)
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Input 2: Nomor Peserta / Password Kartu Ujian */}
                  <div>
                    <label
                      htmlFor="participantNumber"
                      className="block text-[13px] font-medium text-[#172033] mb-1.5"
                    >
                      Nomor Peserta / Password Kartu Ujian
                    </label>
                    <input
                      id="participantNumber"
                      type="text"
                      required
                      autoComplete="off"
                      value={participantNumber}
                      onChange={(e) => setParticipantNumber(e.target.value)}
                      placeholder={
                        matchedRosterStudent
                          ? `Ketik ${matchedRosterStudent.participantNumberHint} atau Assibyan${matchedRosterStudent.participantNumberHint.replace('-', '')}`
                          : selectedClass === 'VII'
                          ? 'Contoh: 7-001 atau Assibyan7001'
                          : selectedClass === 'VIII'
                          ? 'Contoh: 8-001 atau Assibyan8001'
                          : 'Contoh: 9-001 atau Assibyan9001'
                      }
                      className="w-full rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-2.5 text-[15px] font-medium tabular-nums text-[#172033] placeholder:font-normal placeholder:text-[#8791A5] focus:border-[#2457D6] transition-colors"
                    />
                    <p className="mt-1 text-[11px] text-[#647089]">
                      Dapat diisi dengan <strong>No. Ujian</strong> (misal:{' '}
                      <code>
                        {selectedClass === 'VII'
                          ? '7-001'
                          : selectedClass === 'VIII'
                          ? '8-001'
                          : '9-001'}
                      </code>
                      ) atau <strong>Password Kartu</strong> (misal:{' '}
                      <code>
                        {selectedClass === 'VII'
                          ? 'Assibyan7001'
                          : selectedClass === 'VIII'
                          ? 'Assibyan8001'
                          : 'Assibyan9001'}
                      </code>
                      ).
                    </p>
                  </div>

                  {/* Pesan Kesalahan Dekat Input — DESIGN.MD Section 7.1 */}
                  {authError && (
                    <div
                      role="alert"
                      className="rounded-[11px] border border-[#D64545]/30 bg-[#FFF0F0] p-3 text-xs sm:text-sm text-[#D64545] flex items-start gap-2.5"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{authError}</span>
                    </div>
                  )}

                  {/* Tombol Utama Masuk */}
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] active:scale-[0.99] disabled:opacity-60 text-white font-semibold py-3 px-4 text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {authLoading ? (
                      <span>Memeriksa Data Peserta...</span>
                    ) : (
                      <>
                        <span>Masuk Ruang Ujian</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#172033]">
                      Login Pengawas & Admin
                    </h2>
                    <p className="text-xs sm:text-sm text-[#647089] mt-0.5">
                      Pantau sesi ujian real-time, kelola soal, dan sinkronisasi nilai ke
                      Google Spreadsheet.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="adminUser"
                      className="block text-[13px] font-medium text-[#172033] mb-1.5"
                    >
                      Username Pengawas / Admin
                    </label>
                    <input
                      id="adminUser"
                      type="text"
                      required
                      value={adminUser}
                      onChange={(e) => setAdminUser(e.target.value.toUpperCase())}
                      placeholder="Masukkan username Pengawas"
                      className="w-full rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-2.5 text-[15px] font-semibold uppercase text-[#172033] placeholder:font-normal placeholder:normal-case focus:border-[#2457D6]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="adminPass"
                      className="block text-[13px] font-medium text-[#172033] mb-1.5"
                    >
                      Kata Sandi
                    </label>
                    <input
                      id="adminPass"
                      type="password"
                      required
                      value={adminPass}
                      onChange={(e) => setAdminPass(e.target.value)}
                      placeholder="Masukkan kata sandi Pengawas"
                      className="w-full rounded-[11px] border border-[#E5E9F2] bg-white px-3.5 py-2.5 text-[15px] text-[#172033] focus:border-[#2457D6]"
                    />
                  </div>

                  {authError && (
                    <div
                      role="alert"
                      className="rounded-[11px] border border-[#D64545]/30 bg-[#FFF0F0] p-3 text-xs sm:text-sm text-[#D64545] flex items-start gap-2.5"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{authError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] active:scale-[0.99] disabled:opacity-60 text-white font-semibold py-3 px-4 text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {authLoading ? 'Memverifikasi...' : 'Masuk Dashboard Pengawas'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>

        {/* Footer Bantuan — DESIGN.MD Section 7.1 */}
        <footer className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 py-5 border-t border-[#E5E9F2] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#647089]">
          <span>
            © {new Date().getFullYear()} {schoolName} — Sistem CBT Asesmen Sumatif Akhir
            Semester
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CircleHelp className="w-3.5 h-3.5 text-[#2457D6]" />
            Jika mengalami kendala login, silakan angkat tangan dan hubungi Pengawas Ujian di
            kelas.
          </span>
        </footer>
      </div>
    );
  }

  // =========================================================================
  // 2. DASHBOARD PESERTA (DESIGN.MD Section 7.2)
  // =========================================================================
  const filteredExams = exams.filter((e) => {
    const classMatch =
      classFilter === 'ALL' || e.classLevel === 'ALL' || e.classLevel === classFilter;
    const dayMatch = dayFilter === 'ALL' || e.dayOrder === dayFilter;
    return classMatch && dayMatch;
  });

  const activeAttempt = attempts.find((a) => a.status === 'IN_PROGRESS');
  const completedAttempts = attempts.filter((a) => a.status !== 'IN_PROGRESS');

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      {/* Header Dashboard Peserta */}
      <header className="sticky top-0 z-20 border-b border-[#E5E9F2] bg-white/95 backdrop-blur-xs">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <OpenBookLogo className="w-9 h-9 shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-[#2457D6]">
                {schoolName}
              </span>
              <span className="block text-sm font-bold text-[#172033]">
                Dashboard Peserta Ujian
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2.5 rounded-full bg-[#F5F7FB] border border-[#E5E9F2] px-3.5 py-1.5">
              <UserCheck className="w-4 h-4 text-[#2457D6]" />
              <div className="text-xs">
                <span className="font-bold text-[#172033]">{student.fullName}</span>
                <span className="mx-1.5 text-[#8791A5]">•</span>
                <span className="tabular-nums text-[#647089]">
                  No. {student.participantNumber}
                </span>
                <span className="ml-1.5 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[11px] font-semibold text-[#2457D6]">
                  Kelas {student.className}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-[10px] border border-[#E5E9F2] bg-white px-3 py-2 text-xs sm:text-sm font-medium text-[#647089] hover:border-[#D64545] hover:text-[#D64545] transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Welcome Banner */}
        <section
          className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
          style={{ boxShadow: '0 2px 10px rgba(22, 34, 58, 0.04)' }}
        >
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2457D6]">
              <span>ASAS Ganjil {academicYear}</span>
              <span>•</span>
              <span>Kelas {student.className}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#172033]">
              Selamat datang, {student.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-[#647089]">
              Nomor Peserta:{' '}
              <strong className="tabular-nums text-[#172033]">
                {student.participantNumber}
              </strong>{' '}
              — Pilih mata pelajaran sesuai jadwal sesi ujian yang sedang berlangsung.
            </p>
          </div>

          {/* Filter Kelas (VII, VIII, IX, ALL) */}
          <div className="flex flex-wrap items-center gap-1.5 self-start lg:self-center rounded-[11px] bg-[#F5F7FB] p-1 border border-[#E5E9F2]">
            {(['VII', 'VIII', 'IX', 'ALL'] as const).map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setClassFilter(cls)}
                className={`px-3 py-1.5 rounded-[8px] text-xs font-semibold transition-all cursor-pointer ${
                  classFilter === cls
                    ? 'bg-[#2457D6] text-white'
                    : 'text-[#647089] hover:text-[#172033]'
                }`}
              >
                {cls === 'ALL' ? 'Semua Kelas' : `Kelas ${cls}`}
              </button>
            ))}
          </div>
        </section>

        {/* Filter Hari Ujian */}
        <section className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 3 as const, label: 'Hari Ke-3 • Rabu (B. Inggris, Fiqih, Informatika)' },
              { key: 2 as const, label: 'Hari Ke-2 • Selasa (MTK, Akidah, BTQ)' },
              { key: 1 as const, label: 'Hari Ke-1 • Senin (B. Indo, QH, Prakarya)' },
              { key: 'ALL' as const, label: 'Semua Hari Ujian' },
            ].map((tab) => (
              <button
                key={String(tab.key)}
                type="button"
                onClick={() => setDayFilter(tab.key)}
                className={`inline-flex items-center gap-1.5 rounded-[11px] px-3.5 py-2 text-xs font-semibold border transition-all cursor-pointer ${
                  dayFilter === tab.key
                    ? 'border-[#2457D6] bg-[#EAF0FF] text-[#2457D6]'
                    : 'border-[#E5E9F2] bg-white text-[#647089] hover:text-[#172033]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <span className="rounded-full bg-white border border-[#E5E9F2] px-3 py-1 text-xs font-semibold text-[#647089] tabular-nums">
            {filteredExams.length} Paket Soal
          </span>
        </section>

        {/* Banner Ujian Sedang Berlangsung bila ada */}
        {activeAttempt && (
          <section className="rounded-[16px] border-2 border-[#2457D6] bg-[#EAF0FF]/70 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2457D6] px-3 py-0.5 text-xs font-semibold text-white">
                <Clock className="w-3.5 h-3.5" />
                Sedang berlangsung
              </span>
              <h2 className="text-lg font-bold text-[#172033]">
                {activeAttempt.examTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#647089]">
                Sesi ujian Anda masih aktif. Segera lanjutkan pengerjaan sebelum waktu habis.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push(`/exam/${activeAttempt.id}`)}
              className="rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold px-5 py-2.5 text-sm inline-flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Lanjutkan Ujian</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </section>
        )}

        {/* Daftar Ujian Tersedia */}
        <section className="space-y-4">
          {dataLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-56 rounded-[16px] border border-[#E5E9F2] bg-white p-5 animate-pulse flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-5 w-24 rounded-full bg-[#E5E9F2]" />
                    <div className="h-6 w-3/4 rounded bg-[#E5E9F2]" />
                    <div className="h-4 w-1/2 rounded bg-[#E5E9F2]" />
                  </div>
                  <div className="h-10 w-full rounded-[11px] bg-[#E5E9F2]" />
                </div>
              ))}
            </div>
          ) : filteredExams.length === 0 ? (
            <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-10 text-center flex flex-col items-center">
              <EmptyExamIllustration className="w-44 h-36 mb-3" />
              <h3 className="text-base font-bold text-[#172033]">
                Tidak ada paket ujian pada filter ini
              </h3>
              <p className="text-xs sm:text-sm text-[#647089] max-w-md mt-1">
                Silakan pilih tab hari atau kelas yang sesuai dengan jadwal Anda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExams.map((exam) => {
                const attempt = attempts.find((a) => a.examId === exam.id);
                const isOngoing = attempt?.status === 'IN_PROGRESS';
                const isDone = attempt && attempt.status !== 'IN_PROGRESS';

                return (
                  <div
                    key={exam.id}
                    className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 flex flex-col justify-between transition-all hover:border-[#2457D6]/50"
                    style={{ boxShadow: '0 2px 10px rgba(22, 34, 58, 0.04)' }}
                  >
                    <div className="space-y-3">
                      {/* Top pills */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F7FF] border border-[#E5E9F2] px-2.5 py-0.5 text-xs font-semibold text-[#2457D6]">
                          <BookOpen className="w-3.5 h-3.5" />
                          Kelas {exam.classLevel}
                        </span>

                        {isOngoing ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF6E5] px-2.5 py-0.5 text-xs font-semibold text-[#B7791F]">
                            <Clock className="w-3.5 h-3.5" />
                            Sedang berlangsung
                          </span>
                        ) : isDone ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F7F0] px-2.5 py-0.5 text-xs font-semibold text-[#16845B]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Selesai
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-xs font-semibold text-[#2457D6]">
                            {exam.sessionOrder ? `Jam Ke-${exam.sessionOrder}` : 'Tersedia'}
                          </span>
                        )}
                      </div>

                      {/* Subject & Title */}
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#647089]">
                          {exam.subject}
                        </span>
                        <h3 className="text-base sm:text-[17px] font-bold text-[#172033] mt-0.5 leading-snug">
                          {exam.title}
                        </h3>
                      </div>

                      {/* Metadata: Jadwal, Durasi, Jumlah Soal */}
                      <div className="rounded-[12px] bg-[#F5F7FB] p-3 space-y-1.5 text-xs text-[#647089]">
                        <div className="flex items-start justify-between gap-2">
                          <span className="shrink-0">Jadwal:</span>
                          <span className="font-medium text-[#172033] text-right">
                            {exam.scheduleText}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Durasi:</span>
                          <span className="font-semibold text-[#172033] tabular-nums">
                            {exam.durationMin} Menit
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Jumlah Soal:</span>
                          <span className="font-semibold text-[#172033] tabular-nums">
                            {exam.questionCount} Soal Pilihan Ganda
                          </span>
                        </div>
                      </div>

                      {/* If finished, show quick score summary */}
                      {isDone && attempt && (
                        <div className="rounded-[12px] border border-[#16845B]/20 bg-[#E8F7F0]/60 px-3 py-2 flex items-center justify-between text-xs">
                          <span className="font-medium text-[#16845B]">
                            Nilai: <strong>{attempt.score}</strong> ({attempt.correctCount}/
                            {attempt.totalQuestions} Benar)
                          </span>
                          <span className="text-[#647089] tabular-nums">
                            {attempt.durationFormatted}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 mt-4 border-t border-[#E5E9F2]">
                      {isOngoing && attempt ? (
                        <button
                          type="button"
                          onClick={() => router.push(`/exam/${attempt.id}`)}
                          className="w-full rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold py-2.5 px-4 text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <span>Lanjutkan Ujian</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : isDone && attempt ? (
                        <button
                          type="button"
                          onClick={() => setSelectedAttemptResult(attempt)}
                          className="w-full rounded-[11px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] hover:text-[#2457D6] text-[#172033] font-semibold py-2.5 px-4 text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <Award className="w-4 h-4 text-[#16845B]" />
                          <span>Lihat Hasil Ujian</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedExamForDetail(exam);
                            setReadyChecked(false);
                          }}
                          className="w-full rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold py-2.5 px-4 text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <span>Lihat Detail & Mulai</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Riwayat Ujian Peserta (DESIGN.MD Section 7.2 & 7.7) */}
        {completedAttempts.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#172033]">Riwayat Ujian Selesai</h2>
            <div className="rounded-[16px] border border-[#E5E9F2] bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E9F2] bg-[#F5F7FB] text-xs font-semibold text-[#647089]">
                      <th className="py-3 px-4">Mata Pelajaran</th>
                      <th className="py-3 px-4">Status Pengumpulan</th>
                      <th className="py-3 px-4">Lama Mengerjakan</th>
                      <th className="py-3 px-4">Pelanggaran</th>
                      <th className="py-3 px-4">Nilai Akhir</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E9F2]">
                    {completedAttempts.map((att) => (
                      <tr key={att.id} className="hover:bg-[#F5F7FF]/50">
                        <td className="py-3 px-4 font-semibold text-[#172033]">
                          {att.examTitle}
                        </td>
                        <td className="py-3 px-4">
                          {att.status === 'AUTO_SUBMITTED_VIOLATION' ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0F0] px-2.5 py-0.5 text-xs font-semibold text-[#D64545]">
                              Auto-Submit (Pelanggaran 3x)
                            </span>
                          ) : att.status === 'AUTO_SUBMITTED_TIME' ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF6E5] px-2.5 py-0.5 text-xs font-semibold text-[#B7791F]">
                              Waktu Habis
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F7F0] px-2.5 py-0.5 text-xs font-semibold text-[#16845B]">
                              Terkumpul Normal
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 tabular-nums text-[#647089]">
                          {att.durationFormatted || '-'}
                        </td>
                        <td className="py-3 px-4 tabular-nums">
                          <span
                            className={`font-semibold ${
                              att.violationCount >= 3
                                ? 'text-[#D64545]'
                                : att.violationCount > 0
                                ? 'text-[#B7791F]'
                                : 'text-[#16845B]'
                            }`}
                          >
                            {att.violationCount}/{att.maxViolations}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold tabular-nums text-[#2457D6]">
                          {att.score ?? 0}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedAttemptResult(att)}
                            className="text-xs font-semibold text-[#2457D6] hover:underline cursor-pointer"
                          >
                            Detail Hasil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =====================================================================
          3. MODAL DETAIL & INSTRUKSI UJIAN + CHECKLIST KESIAPAN (Section 7.3)
      ====================================================================== */}
      {selectedExamForDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-xl rounded-[18px] border border-[#E5E9F2] bg-white p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-5"
            style={{ boxShadow: '0 18px 60px rgba(22, 34, 58, 0.18)' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[#EAF0FF] px-3 py-0.5 text-xs font-semibold text-[#2457D6]">
                  Konfirmasi Kesiapan & Instruksi Ujian
                </span>
                <h2 className="text-xl font-bold text-[#172033] mt-1.5">
                  {selectedExamForDetail.title}
                </h2>
              </div>
            </div>

            {/* Ringkasan Identitas Peserta & Ujian */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-[14px] bg-[#F5F7FB] p-4 border border-[#E5E9F2] text-xs">
              <div>
                <span className="text-[#647089] block">Nama Peserta</span>
                <strong className="text-[#172033] text-sm">{student.fullName}</strong>
              </div>
              <div>
                <span className="text-[#647089] block">Nomor Peserta</span>
                <strong className="text-[#172033] text-sm tabular-nums">
                  {student.participantNumber} (Kelas {student.className})
                </strong>
              </div>
              <div>
                <span className="text-[#647089] block">Durasi & Soal</span>
                <strong className="text-[#172033] text-sm tabular-nums">
                  {selectedExamForDetail.durationMin} Menit •{' '}
                  {selectedExamForDetail.questionCount} PG
                </strong>
              </div>
            </div>

            {/* Aturan Pengerjaan & Sistem Peringatan 3-Lapis */}
            <div className="space-y-3 text-xs sm:text-sm text-[#172033]">
              <h3 className="font-bold text-sm text-[#172033]">
                Aturan Pengerjaan & Pengawasan Ujian:
              </h3>
              <ul className="space-y-2 text-[#647089]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16845B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#172033]">Navigasi Bebas & Autosave:</strong>{' '}
                    Anda bebas berpindah nomor soal, menandai soal yang ragu, dan seluruh
                    jawaban tersimpan otomatis.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#B7791F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#172033]">
                      Pelanggaran Pertama (1/3):
                    </strong>{' '}
                    Jika Anda keluar dari tab/halaman ujian, membuka aplikasi lain, atau
                    membagi layar (split-screen), sistem akan memberikan{' '}
                    <strong className="text-[#B7791F]">Peringatan Pertama</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#D64545] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#D64545]">
                      Pelanggaran Kedua (2/3 — Peringatan Keras Merah):
                    </strong>{' '}
                    Jika diulangi kedua kalinya, layar akan menampilkan{' '}
                    <strong className="text-[#D64545]">
                      Peringatan Keras Merah (Kesempatan Terakhir)
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-[#D64545] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#D64545]">
                      Pelanggaran Ketiga (3/3 — Auto-Submit Otomatis):
                    </strong>{' '}
                    Jika tetap keluar halaman untuk ketiga kalinya,{' '}
                    <strong className="text-[#D64545]">
                      soal akan otomatis dikumpulkan (Submit Otomatis)
                    </strong>{' '}
                    dan sesi ujian Anda langsung berakhir.
                  </span>
                </li>
              </ul>
            </div>

            {/* Checklist Kesiapan — DESIGN.MD Section 7.3 */}
            <label className="flex items-start gap-3 rounded-[12px] border border-[#E5E9F2] bg-[#F5F7FF] p-3.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={readyChecked}
                onChange={(e) => setReadyChecked(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[#8791A5] text-[#2457D6]"
              />
              <span className="text-xs sm:text-sm font-medium text-[#172033]">
                Saya telah memeriksa identitas saya dan memahami aturan ujian, termasuk
                ketentuan submit otomatis apabila keluar dari halaman ujian sebanyak 3 kali.
              </span>
            </label>

            {/* Tombol Aksi */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedExamForDetail(null)}
                className="w-full sm:w-auto rounded-[11px] border border-[#E5E9F2] bg-white px-4 py-2.5 text-sm font-semibold text-[#647089] hover:text-[#172033] cursor-pointer"
              >
                Kembali
              </button>
              <button
                type="button"
                disabled={!readyChecked || startingExam}
                onClick={() => handleStartExam(selectedExamForDetail)}
                className="w-full sm:w-auto rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] disabled:opacity-50 text-white px-6 py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {startingExam ? (
                  <span>Menyiapkan Soal...</span>
                ) : (
                  <>
                    <span>Mulai Ujian</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          4. MODAL HASIL UJIAN (DESIGN.MD Section 7.7)
      ====================================================================== */}
      {selectedAttemptResult && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg rounded-[18px] border border-[#E5E9F2] bg-white p-6 sm:p-7 space-y-5"
            style={{ boxShadow: '0 18px 60px rgba(22, 34, 58, 0.18)' }}
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[#E8F7F0] text-[#16845B] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#16845B] uppercase">
                  Bukti Pengumpulan Ujian
                </span>
                <h2 className="text-lg font-bold text-[#172033]">
                  {selectedAttemptResult.examTitle}
                </h2>
              </div>
            </div>

            {selectedAttemptResult.status === 'AUTO_SUBMITTED_VIOLATION' && (
              <div className="rounded-[12px] border border-[#D64545]/30 bg-[#FFF0F0] p-3.5 text-xs text-[#D64545]">
                <strong>Catatan Pengawasan:</strong> Ujian ini dikumpulkan secara otomatis oleh
                sistem karena terdeteksi keluar halaman sebanyak 3 kali. Jika terjadi karena
                kendala teknis HP, silakan lapor kepada Pengawas di kelas.
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 rounded-[14px] bg-[#F5F7FB] p-4 border border-[#E5E9F2]">
              <div>
                <span className="text-xs text-[#647089] block">Nilai Akhir</span>
                <span className="text-3xl font-bold text-[#2457D6] tabular-nums">
                  {selectedAttemptResult.score ?? 0}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#647089] block">Lama Mengerjakan</span>
                <span className="text-base font-bold text-[#172033] tabular-nums mt-1 block">
                  {selectedAttemptResult.durationFormatted || '-'}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#647089] block">Rincian Jawaban</span>
                <span className="text-xs font-semibold text-[#172033] tabular-nums">
                  {selectedAttemptResult.correctCount} Benar •{' '}
                  {selectedAttemptResult.wrongCount} Salah •{' '}
                  {selectedAttemptResult.emptyCount} Kosong
                </span>
              </div>
              <div>
                <span className="text-xs text-[#647089] block">Catatan Pelanggaran</span>
                <span className="text-xs font-semibold text-[#172033] tabular-nums">
                  {selectedAttemptResult.violationCount} /{' '}
                  {selectedAttemptResult.maxViolations} Pelanggaran
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAttemptResult(null)}
                className="rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold px-5 py-2.5 text-sm cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
