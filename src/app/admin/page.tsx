'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Activity,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  Edit3,
  FileSpreadsheet,
  LogOut,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Settings,
  ShieldAlert,
  Trash2,
  Unlock,
  Users,
  Award,
  Search,
  ExternalLink,
} from 'lucide-react';
import { Exam, ExamAttempt, ExamQuestion, StudentProfile } from '@/lib/types';
import { AppSettings } from '@/lib/db/store';
import { ArabicFormattedText } from '@/components/ui/ArabicFormattedText';
import { OpenBookLogo } from '@/components/ui/GeometricOrnaments';

type AdminTab =
  | 'monitoring'
  | 'results'
  | 'questions'
  | 'students'
  | 'settings';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>('monitoring');

  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('-');
  const [settings, setSettings] = useState<AppSettings>({
    schoolName: 'MADRASAH TSANAWIYAH ASSIBYAN',
    academicYear: '2025 / 2026',
    allowDynamicStudentLogin: true,
    appsScriptWebhookUrl: '',
    sheetsWebhookSecret: 'mts-assibyan-cbt-secret-2026',
    defaultMaxViolations: 3,
  });
  const [supabaseConnected, setSupabaseConnected] = useState(false);
  const [sheetsConfigured, setSheetsConfigured] = useState(false);

  const [exams, setExams] = useState<Exam[]>([]);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);

  // Filters
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Question Bank state
  const [selectedBankExamId, setSelectedBankExamId] = useState<string>('exam-bing-vii');
  const [editingQuestion, setEditingQuestion] = useState<Partial<ExamQuestion> | null>(
    null
  );

  // Bulk student import state
  const [bulkStudentText, setBulkStudentText] = useState<string>('');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentNo, setNewStudentNo] = useState('');
  const [newStudentClass, setNewStudentClass] = useState<'VII' | 'VIII' | 'IX'>('VII');

  // Action feedback message
  const [toastMessage, setToastMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [syncingSheets, setSyncingSheets] = useState(false);

  function showToast(type: 'success' | 'error', text: string) {
    setToastMessage({ type, text });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  }

  const fetchOverview = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const res = await fetch('/api/admin/overview');
      const data = await res.json();
      if (data.ok) {
        setSettings(data.settings);
        setSupabaseConnected(Boolean(data.supabaseConnected));
        setSheetsConfigured(Boolean(data.sheetsConfigured));
        setExams(data.exams || []);
        setQuestions(data.questions || []);
        setStudents(data.students || []);
        setAttempts(data.attempts || []);
        setLastUpdated(new Date().toLocaleTimeString('id-ID'));
      }
    } catch {
      // ignore transient error
    } finally {
      if (!silent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOverview(false);
    const interval = setInterval(() => {
      fetchOverview(true);
    }, 8000);
    return () => clearInterval(interval);
  }, [fetchOverview]);

  async function handleAttemptAction(
    attemptId: string,
    subAction: 'RESET_VIOLATIONS' | 'REOPEN_ATTEMPT' | 'FORCE_SUBMIT' | 'ADD_TIME_10M'
  ) {
    try {
      const res = await fetch('/api/admin/overview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'MANAGE_ATTEMPT',
          attemptId,
          subAction,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        showToast('success', 'Tindakan pengawas berhasil diterapkan pada sesi peserta.');
        fetchOverview(true);
      } else {
        showToast('error', data.error || 'Gagal menjalankan tindakan.');
      }
    } catch {
      showToast('error', 'Gagal menghubungi server.');
    }
  }

  async function handleSyncToGoogleSheets(attemptId?: string) {
    setSyncingSheets(true);
    try {
      const res = await fetch('/api/admin/overview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'SYNC_SHEETS',
          attemptId,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        showToast('success', data.message || 'Data berhasil dikirim ke Google Spreadsheet!');
        fetchOverview(true);
      } else {
        showToast('error', data.error || data.message || 'Gagal sinkronisasi ke Spreadsheet.');
      }
    } catch {
      showToast('error', 'Gagal menghubungi server saat sinkronisasi Spreadsheet.');
    } finally {
      setSyncingSheets(false);
    }
  }

  function handleExportCsv() {
    const target = attempts.filter((a) =>
      selectedExamFilter === 'ALL' ? true : a.examId === selectedExamFilter
    );

    const headers = [
      'ID Sesi',
      'Nomor Peserta',
      'Nama Siswa (KAPITAL)',
      'Kelas',
      'Mata Pelajaran',
      'Judul Ujian',
      'Nilai Akhir',
      'Benar',
      'Salah',
      'Kosong',
      'Total Soal',
      'Waktu Mulai',
      'Waktu Selesai',
      'Lama Waktu Mengerjakan',
      'Durasi (Detik)',
      'Pelanggaran',
      'Status Pengumpulan',
      'Riwayat Pelanggaran',
    ];

    const rows = target.map((a) => [
      a.id,
      `'${a.participantNumber}`,
      a.studentName,
      a.className,
      a.subject,
      a.examTitle,
      a.score ?? 0,
      a.correctCount ?? 0,
      a.wrongCount ?? 0,
      a.emptyCount ?? 0,
      a.totalQuestions,
      new Date(a.startedAt).toLocaleString('id-ID'),
      a.submittedAt ? new Date(a.submittedAt).toLocaleString('id-ID') : '-',
      a.durationFormatted || '-',
      a.durationSeconds ?? 0,
      `${a.violationCount}/${a.maxViolations}`,
      a.status === 'SUBMITTED'
        ? 'Selesai Normal'
        : a.status === 'AUTO_SUBMITTED_VIOLATION'
        ? 'Auto-Submit (Pelanggaran 3x)'
        : a.status === 'AUTO_SUBMITTED_TIME'
        ? 'Auto-Submit (Waktu Habis)'
        : 'Sedang Mengerjakan',
      a.violationLogs.map((v) => `#${v.strikeNumber} ${v.description}`).join(' | '),
    ]);

    const csvContent =
      '\uFEFF' +
      [headers, ...rows]
        .map((r) =>
          r.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(',')
        )
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rekap-Nilai-CBT-MTs-Assibyan-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function handleAddSingleStudent(e: React.FormEvent) {
    e.preventDefault();
    if (!newStudentName.trim() || !newStudentNo.trim()) return;

    const res = await fetch('/api/admin/overview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'IMPORT_STUDENTS',
        students: [
          {
            fullName: newStudentName.toUpperCase(),
            participantNumber: newStudentNo.trim(),
            className: newStudentClass,
          },
        ],
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setStudents(data.students);
      setNewStudentName('');
      setNewStudentNo('');
      showToast('success', data.message);
    }
  }

  async function handleBulkImportStudents() {
    const lines = bulkStudentText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) return;

    const parsed = lines.map((line) => {
      // Support tab, comma, semicolon, or pipe separator: NAMA | NOMOR_PESERTA | KELAS
      const parts = line.split(/[\t,;|]+/).map((p) => p.trim());
      return {
        fullName: (parts[0] || '').toUpperCase(),
        participantNumber: parts[1] || '',
        className: parts[2] || 'VII',
      };
    });

    const res = await fetch('/api/admin/overview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'IMPORT_STUDENTS',
        students: parsed,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setStudents(data.students);
      setBulkStudentText('');
      showToast('success', data.message);
    }
  }

  async function handleSaveQuestion(e: React.FormEvent) {
    e.preventDefault();
    if (!editingQuestion) return;

    const res = await fetch('/api/admin/overview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'SAVE_QUESTION',
        question: editingQuestion,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setQuestions(data.questions);
      setExams(data.exams);
      setEditingQuestion(null);
      showToast('success', 'Soal dan kunci jawaban berhasil disimpan.');
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    if (!confirm('Hapus soal ini dari ujian?')) return;
    const res = await fetch('/api/admin/overview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'DELETE_QUESTION',
        questionId,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setQuestions(data.questions);
      setExams(data.exams);
      showToast('success', 'Soal berhasil dihapus.');
    }
  }

  async function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/admin/overview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'UPDATE_SETTINGS',
        ...settings,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setSettings(data.settings);
      showToast('success', 'Pengaturan sistem & URL Google Spreadsheet berhasil disimpan.');
      fetchOverview(true);
    }
  }

  // Stats calculation
  const ongoingAttempts = attempts.filter((a) => a.status === 'IN_PROGRESS');
  const finishedAttempts = attempts.filter((a) => a.status !== 'IN_PROGRESS');
  const violationAutoSubmitted = attempts.filter(
    (a) => a.status === 'AUTO_SUBMITTED_VIOLATION'
  );

  const filteredAttempts = attempts.filter((a) => {
    const matchExam = selectedExamFilter === 'ALL' || a.examId === selectedExamFilter;
    const matchQuery =
      !searchQuery ||
      a.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.participantNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchExam && matchQuery;
  });

  const bankQuestions = questions
    .filter((q) => q.examId === selectedBankExamId)
    .sort((a, b) => a.no - b.no);

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col lg:flex-row">
      {/* =====================================================================
          SIDEBAR NAVIGASI ADMIN (250px di Desktop — DESIGN.MD Section 5 & 6)
      ====================================================================== */}
      <aside className="w-full lg:w-[256px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#E5E9F2] bg-white flex flex-col justify-between">
        <div className="p-5 space-y-6">
          {/* Brand */}
          <div className="flex items-center justify-between lg:justify-start gap-3">
            <div className="flex items-center gap-3">
              <OpenBookLogo className="w-9 h-9 shrink-0" />
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#2457D6]">
                  Panel Pengawas
                </span>
                <span className="block text-sm font-bold text-[#172033]">
                  MTs Assibyan
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push('/')}
              className="lg:hidden rounded-[10px] border border-[#E5E9F2] px-3 py-1.5 text-xs font-semibold text-[#647089]"
            >
              Ke Portal Siswa
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <button
              type="button"
              onClick={() => setActiveTab('monitoring')}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'monitoring'
                  ? 'bg-[#EAF0FF] text-[#2457D6]'
                  : 'text-[#647089] hover:bg-[#F5F7FB] hover:text-[#172033]'
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Monitoring Sesi</span>
              {ongoingAttempts.length > 0 && (
                <span className="ml-auto rounded-full bg-[#2457D6] px-2 py-0.5 text-[11px] text-white tabular-nums">
                  {ongoingAttempts.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('results')}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-[#EAF0FF] text-[#2457D6]'
                  : 'text-[#647089] hover:bg-[#F5F7FB] hover:text-[#172033]'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 shrink-0" />
              <span>Hasil & Spreadsheet</span>
              <span className="ml-auto rounded-full bg-[#E8F7F0] px-2 py-0.5 text-[11px] text-[#16845B] tabular-nums">
                {finishedAttempts.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('questions')}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'questions'
                  ? 'bg-[#EAF0FF] text-[#2457D6]'
                  : 'text-[#647089] hover:bg-[#F5F7FB] hover:text-[#172033]'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Bank Soal ({questions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'students'
                  ? 'bg-[#EAF0FF] text-[#2457D6]'
                  : 'text-[#647089] hover:bg-[#F5F7FB] hover:text-[#172033]'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>Data Peserta ({students.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#EAF0FF] text-[#2457D6]'
                  : 'text-[#647089] hover:bg-[#F5F7FB] hover:text-[#172033]'
              }`}
            >
              <Settings className="w-4 h-4 shrink-0" />
              <span>Pengaturan & Sheets</span>
            </button>
          </nav>
        </div>

        {/* Bottom Status & Logout */}
        <div className="hidden lg:block p-5 border-t border-[#E5E9F2] space-y-3">
          <div className="rounded-[12px] bg-[#F5F7FB] p-3 text-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[#647089]">Database:</span>
              <span className="font-semibold text-[#16845B]">
                {supabaseConnected ? 'Supabase Cloud' : 'Lokal Aktif'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#647089]">Google Sheets:</span>
              <span
                className={`font-semibold ${
                  sheetsConfigured ? 'text-[#16845B]' : 'text-[#B7791F]'
                }`}
              >
                {sheetsConfigured ? 'Terhubung' : 'Belum Diisi'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="w-full rounded-[11px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] px-3.5 py-2 text-xs font-semibold text-[#172033] flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Kembali ke Halaman Login</span>
          </button>
        </div>
      </aside>

      {/* =====================================================================
          AREA KONTEN UTAMA ADMIN
      ====================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="border-b border-[#E5E9F2] bg-white px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#172033]">
              {activeTab === 'monitoring' && 'Monitoring Sesi & Proctoring 3-Lapis'}
              {activeTab === 'results' && 'Hasil Ujian, Lama Mengerjakan & Rekap Spreadsheet'}
              {activeTab === 'questions' && 'Bank Soal Web MTs Assibyan (9 Mapel)'}
              {activeTab === 'students' && 'Manajemen Peserta (Nama Kapital & Nomor Peserta)'}
              {activeTab === 'settings' && 'Pengaturan Integrasi Google Spreadsheet'}
            </h1>
            {/* Cantumkan waktu pembaruan data — DESIGN.MD Section 8 */}
            <p className="text-xs text-[#647089]">
              Data diperbarui otomatis setiap 8 detik • Pembaruan terakhir:{' '}
              <strong className="tabular-nums text-[#172033]">{lastUpdated}</strong>
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => fetchOverview(false)}
              className="rounded-[10px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] px-3 py-2 text-xs font-semibold text-[#172033] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Segarkan</span>
            </button>

            <button
              type="button"
              onClick={handleExportCsv}
              className="rounded-[10px] border border-[#16845B] bg-[#E8F7F0] hover:bg-[#16845B] text-[#16845B] hover:text-white px-3.5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Excel (.csv)</span>
            </button>

            <button
              type="button"
              disabled={syncingSheets}
              onClick={() => handleSyncToGoogleSheets()}
              className="rounded-[10px] bg-[#2457D6] hover:bg-[#3267E8] disabled:opacity-60 text-white px-3.5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>
                {syncingSheets ? 'Mengirim ke Sheets...' : 'Kirim ke Google Spreadsheet'}
              </span>
            </button>
          </div>
        </header>

        {/* Toast Feedback */}
        {toastMessage && (
          <div
            className={`mx-4 sm:mx-8 mt-4 rounded-[12px] border px-4 py-3 text-xs sm:text-sm font-medium flex items-center justify-between ${
              toastMessage.type === 'success'
                ? 'border-[#16845B]/30 bg-[#E8F7F0] text-[#16845B]'
                : 'border-[#D64545]/30 bg-[#FFF0F0] text-[#D64545]'
            }`}
          >
            <span>{toastMessage.text}</span>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-xs font-bold ml-4"
            >
              ✕
            </button>
          </div>
        )}

        <main className="p-4 sm:p-8 space-y-6 flex-1">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
              <span className="text-xs font-medium text-[#647089]">
                Sedang Mengerjakan
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-[#2457D6] tabular-nums">
                  {ongoingAttempts.length}
                </span>
                <span className="text-xs text-[#647089]">Peserta aktif</span>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
              <span className="text-xs font-medium text-[#647089]">
                Ujian Selesai
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-[#16845B] tabular-nums">
                  {finishedAttempts.length}
                </span>
                <span className="text-xs text-[#647089]">Nilai terekap</span>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
              <span className="text-xs font-medium text-[#647089]">
                Auto-Submit Pelanggaran (3/3)
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-[#D64545] tabular-nums">
                  {violationAutoSubmitted.length}
                </span>
                <span className="text-xs text-[#647089]">Perlu tinjauan</span>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4">
              <span className="text-xs font-medium text-[#647089]">
                Bank Soal Aktif
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-[#172033] tabular-nums">
                  {exams.length} Mapel
                </span>
                <span className="text-xs text-[#647089] tabular-nums">
                  {questions.length} Soal PG
                </span>
              </div>
            </div>
          </div>

          {/* =================================================================
              TAB 1 & 2: MONITORING SESI & REKAP HASIL SPREADSHEET
          ================================================================== */}
          {(activeTab === 'monitoring' || activeTab === 'results') && (
            <div className="space-y-4">
              {/* Filter Bar */}
              <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <Search className="w-4 h-4 text-[#8791A5]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari Nama Siswa (KAPITAL) atau Nomor Peserta..."
                    className="w-full text-sm text-[#172033] placeholder:text-[#8791A5] focus:outline-none"
                  />
                </div>

                <select
                  value={selectedExamFilter}
                  onChange={(e) => setSelectedExamFilter(e.target.value)}
                  className="rounded-[10px] border border-[#E5E9F2] bg-[#F5F7FB] px-3 py-2 text-xs sm:text-sm font-medium text-[#172033]"
                >
                  <option value="ALL">Semua Mata Pelajaran ({exams.length})</option>
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      Kelas {ex.classLevel} — {ex.subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tabel Monitoring & Hasil */}
              <div className="rounded-[16px] border border-[#E5E9F2] bg-white overflow-hidden">
                {filteredAttempts.length === 0 ? (
                  <div className="p-10 text-center space-y-2">
                    <p className="text-sm font-bold text-[#172033]">
                      Belum ada sesi pengerjaan ujian
                    </p>
                    <p className="text-xs text-[#647089]">
                      Ketika siswa login dan menekan &ldquo;Mulai Ujian&rdquo;, progres jawaban,
                      status pelanggaran (1/3, 2/3, 3/3), lama waktu mengerjakan, dan nilai
                      akan tampil secara real-time di sini.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-[#E5E9F2] bg-[#F5F7FB] text-[11px] font-semibold uppercase tracking-wider text-[#647089]">
                          <th className="py-3.5 px-4">Peserta (Nama & No)</th>
                          <th className="py-3.5 px-4">Mata Pelajaran</th>
                          <th className="py-3.5 px-4">Progres</th>
                          <th className="py-3.5 px-4">Lama Mengerjakan</th>
                          <th className="py-3.5 px-4">Pelanggaran (Maks 3)</th>
                          <th className="py-3.5 px-4">Status & Nilai</th>
                          <th className="py-3.5 px-4 text-right">Kontrol Pengawas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E9F2]">
                        {filteredAttempts.map((att) => {
                          const answeredCnt = Object.values(att.answers || {}).filter(
                            (a) => a.selectedKey
                          ).length;

                          return (
                            <tr key={att.id} className="hover:bg-[#F5F7FF]/40">
                              <td className="py-3.5 px-4">
                                <div className="font-bold text-[#172033]">
                                  {att.studentName}
                                </div>
                                <div className="text-xs text-[#647089] tabular-nums">
                                  No: {att.participantNumber} • Kelas {att.className}
                                </div>
                              </td>

                              <td className="py-3.5 px-4">
                                <div className="font-semibold text-[#172033]">
                                  {att.subject}
                                </div>
                                <div className="text-xs text-[#647089] truncate max-w-[200px]">
                                  {att.examTitle}
                                </div>
                              </td>

                              <td className="py-3.5 px-4 tabular-nums">
                                <div className="font-semibold text-[#172033]">
                                  {answeredCnt} / {att.totalQuestions} Soal
                                </div>
                                <div className="w-24 h-1.5 rounded-full bg-[#E5E9F2] mt-1">
                                  <div
                                    className="h-full rounded-full bg-[#2457D6]"
                                    style={{
                                      width: `${
                                        att.totalQuestions > 0
                                          ? Math.round(
                                              (answeredCnt / att.totalQuestions) * 100
                                            )
                                          : 0
                                      }%`,
                                    }}
                                  />
                                </div>
                              </td>

                              <td className="py-3.5 px-4 tabular-nums">
                                {att.status === 'IN_PROGRESS' ? (
                                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2457D6]">
                                    <Clock className="w-3.5 h-3.5" />
                                    Aktif mengerjakan
                                  </span>
                                ) : (
                                  <div>
                                    <div className="font-semibold text-[#172033]">
                                      {att.durationFormatted || '-'}
                                    </div>
                                    <div className="text-[11px] text-[#8791A5]">
                                      ({att.durationSeconds ?? 0} detik)
                                    </div>
                                  </div>
                                )}
                              </td>

                              <td className="py-3.5 px-4">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums ${
                                    att.violationCount === 0
                                      ? 'bg-[#E8F7F0] text-[#16845B]'
                                      : att.violationCount === 1
                                      ? 'bg-[#FFF6E5] text-[#B7791F]'
                                      : 'bg-[#FFF0F0] text-[#D64545]'
                                  }`}
                                >
                                  <ShieldAlert className="w-3.5 h-3.5" />
                                  {att.violationCount}/{att.maxViolations}
                                  {att.violationCount === 1 && ' (Peringatan 1)'}
                                  {att.violationCount === 2 && ' (Merah!)'}
                                  {att.violationCount >= 3 && ' (Auto-Submit)'}
                                </span>
                                {att.violationLogs.length > 0 && (
                                  <div className="text-[11px] text-[#647089] mt-1 max-w-[210px] truncate">
                                    Terakhir:{' '}
                                    {
                                      att.violationLogs[att.violationLogs.length - 1]
                                        ?.description
                                    }
                                  </div>
                                )}
                              </td>

                              <td className="py-3.5 px-4">
                                {att.status === 'IN_PROGRESS' ? (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-xs font-semibold text-[#2457D6]">
                                    Sedang berlangsung
                                  </span>
                                ) : (
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-base font-extrabold text-[#2457D6] tabular-nums">
                                        Nilai: {att.score ?? 0}
                                      </span>
                                      <span className="text-xs text-[#16845B] font-semibold tabular-nums">
                                        ({att.correctCount}B / {att.wrongCount}S /{' '}
                                        {att.emptyCount}K)
                                      </span>
                                    </div>
                                    <span
                                      className={`inline-block mt-0.5 text-[11px] font-semibold ${
                                        att.status === 'AUTO_SUBMITTED_VIOLATION'
                                          ? 'text-[#D64545]'
                                          : 'text-[#16845B]'
                                      }`}
                                    >
                                      {att.status === 'AUTO_SUBMITTED_VIOLATION'
                                        ? 'Auto-Submit (Pelanggaran 3x)'
                                        : att.status === 'AUTO_SUBMITTED_TIME'
                                        ? 'Auto-Submit (Waktu Habis)'
                                        : 'Selesai Normal'}
                                    </span>
                                  </div>
                                )}
                              </td>

                              <td className="py-3.5 px-4 text-right">
                                <div className="inline-flex flex-wrap items-center justify-end gap-1.5">
                                  {att.violationCount > 0 &&
                                    att.status === 'IN_PROGRESS' && (
                                      <button
                                        type="button"
                                        title="Reset jumlah pelanggaran siswa kembali ke 0"
                                        onClick={() =>
                                          handleAttemptAction(att.id, 'RESET_VIOLATIONS')
                                        }
                                        className="rounded-[8px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] px-2.5 py-1 text-xs font-semibold text-[#172033] inline-flex items-center gap-1 cursor-pointer"
                                      >
                                        <RotateCcw className="w-3 h-3 text-[#2457D6]" />
                                        <span>Reset 0/3</span>
                                      </button>
                                    )}

                                  {att.status !== 'IN_PROGRESS' && (
                                    <button
                                      type="button"
                                      title="Buka kembali sesi ujian agar siswa bisa melanjutkan"
                                      onClick={() =>
                                        handleAttemptAction(att.id, 'REOPEN_ATTEMPT')
                                      }
                                      className="rounded-[8px] border border-[#2457D6]/40 bg-[#EAF0FF] hover:bg-[#2457D6] text-[#2457D6] hover:text-white px-2.5 py-1 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                                    >
                                      <Unlock className="w-3 h-3" />
                                      <span>Buka Kembali</span>
                                    </button>
                                  )}

                                  {att.status === 'IN_PROGRESS' && (
                                    <>
                                      <button
                                        type="button"
                                        title="Tambah waktu 10 menit"
                                        onClick={() =>
                                          handleAttemptAction(att.id, 'ADD_TIME_10M')
                                        }
                                        className="rounded-[8px] border border-[#E5E9F2] bg-white hover:border-[#2457D6] px-2 py-1 text-xs font-semibold text-[#647089] hover:text-[#2457D6] cursor-pointer"
                                      >
                                        +10m
                                      </button>
                                      <button
                                        type="button"
                                        title="Kumpulkan paksa ujian siswa ini"
                                        onClick={() =>
                                          handleAttemptAction(att.id, 'FORCE_SUBMIT')
                                        }
                                        className="rounded-[8px] border border-[#D64545]/30 bg-[#FFF0F0] hover:bg-[#D64545] text-[#D64545] hover:text-white px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer"
                                      >
                                        Akhiri
                                      </button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 3: BANK SOAL WEB (9 MAPEL MTs ASSIBYAN — 230 SOAL)
          ================================================================== */}
          {activeTab === 'questions' && (
            <div className="space-y-5">
              <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#647089] block">
                    Pilih Mata Pelajaran Ujian:
                  </label>
                  <select
                    value={selectedBankExamId}
                    onChange={(e) => setSelectedBankExamId(e.target.value)}
                    className="rounded-[11px] border border-[#E5E9F2] bg-[#F5F7FB] px-3.5 py-2.5 text-sm font-bold text-[#172033] min-w-[280px]"
                  >
                    {exams.map((ex) => (
                      <option key={ex.id} value={ex.id}>
                        Kelas {ex.classLevel} — {ex.subject} ({ex.questionCount} Soal)
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setEditingQuestion({
                      examId: selectedBankExamId,
                      text: '',
                      context: '',
                      options: [
                        { key: 'A', text: '' },
                        { key: 'B', text: '' },
                        { key: 'C', text: '' },
                        { key: 'D', text: '' },
                      ],
                      answerKey: 'A',
                    })
                  }
                  className="rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white px-4 py-2.5 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 self-start sm:self-center cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Soal Baru</span>
                </button>
              </div>

              {/* Daftar Soal */}
              <div className="space-y-3">
                {bankQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-[#E5E9F2] pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-[8px] bg-[#2457D6] text-white font-bold tabular-nums px-2.5 py-1 text-xs">
                          No. {q.no}
                        </span>
                        <span className="rounded-full bg-[#E8F7F0] text-[#16845B] font-bold px-3 py-0.5 text-xs">
                          Kunci Jawaban: {q.answerKey}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingQuestion(q)}
                          className="rounded-[8px] border border-[#E5E9F2] px-3 py-1.5 text-xs font-semibold text-[#172033] hover:border-[#2457D6] inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#2457D6]" />
                          <span>Edit Soal / Kunci</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="rounded-[8px] border border-[#E5E9F2] px-2.5 py-1.5 text-xs text-[#D64545] hover:bg-[#FFF0F0] cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {q.context && (
                      <div className="rounded-[10px] bg-[#F5F7FB] p-3 text-xs sm:text-sm">
                        <ArabicFormattedText text={q.context} />
                      </div>
                    )}

                    {q.imageUrl && (
                      <div className="py-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={q.imageUrl}
                          alt={`Gambar soal ${q.no}`}
                          className="max-h-36 rounded border border-[#E5E9F2]"
                        />
                      </div>
                    )}

                    <div className="text-base font-medium text-[#172033]">
                      <ArabicFormattedText text={q.text} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt) => {
                        const isKey = opt.key === q.answerKey;
                        return (
                          <div
                            key={opt.key}
                            className={`rounded-[10px] border p-2.5 text-xs sm:text-sm flex items-center gap-2.5 ${
                              isKey
                                ? 'border-[#16845B] bg-[#E8F7F0]/60 font-semibold text-[#172033]'
                                : 'border-[#E5E9F2] bg-[#F5F7FB]/50 text-[#647089]'
                            }`}
                          >
                            <span
                              className={`h-6 w-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 ${
                                isKey
                                  ? 'bg-[#16845B] text-white'
                                  : 'bg-white border border-[#E5E9F2] text-[#172033]'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <div className="flex-1 min-w-0">
                              <ArabicFormattedText text={opt.text} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 4: MANAJEMEN PESERTA (NAMA KAPITAL + NOMOR PESERTA)
          ================================================================== */}
          {activeTab === 'students' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: Form Tambah & Bulk Import */}
              <div className="lg:col-span-5 space-y-5">
                <form
                  onSubmit={handleAddSingleStudent}
                  className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 space-y-4"
                >
                  <h2 className="text-base font-bold text-[#172033]">
                    Tambah Peserta Baru
                  </h2>

                  <div>
                    <label className="block text-xs font-semibold text-[#172033] mb-1">
                      Nama Siswa (HURUF KAPITAL)
                    </label>
                    <input
                      type="text"
                      required
                      value={newStudentName}
                      onChange={(e) => setNewStudentName(e.target.value.toUpperCase())}
                      placeholder="Contoh: MUHAMMAD FARHAN"
                      className="w-full rounded-[10px] border border-[#E5E9F2] px-3 py-2 text-sm font-semibold uppercase"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#172033] mb-1">
                        Nomor Peserta (Password)
                      </label>
                      <input
                        type="text"
                        required
                        value={newStudentNo}
                        onChange={(e) => setNewStudentNo(e.target.value)}
                        placeholder="7-014"
                        className="w-full rounded-[10px] border border-[#E5E9F2] px-3 py-2 text-sm tabular-nums"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#172033] mb-1">
                        Kelas
                      </label>
                      <select
                        value={newStudentClass}
                        onChange={(e) =>
                          setNewStudentClass(e.target.value as 'VII' | 'VIII' | 'IX')
                        }
                        className="w-full rounded-[10px] border border-[#E5E9F2] px-3 py-2 text-sm font-semibold"
                      >
                        <option value="VII">Kelas VII</option>
                        <option value="VIII">Kelas VIII</option>
                        <option value="IX">Kelas IX</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-[10px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold py-2.5 text-sm cursor-pointer"
                  >
                    Simpan Peserta
                  </button>
                </form>

                {/* Bulk Import dari Excel / Spreadsheet */}
                <div className="rounded-[16px] border border-[#E5E9F2] bg-white p-5 space-y-3">
                  <h2 className="text-base font-bold text-[#172033]">
                    Impor Cepat Peserta Tambahan (Copy-Paste Excel)
                  </h2>
                  <p className="text-xs text-[#647089]">
                    63 siswa Kelas VII, VIII, dan IX sudah terdaftar otomatis. Tempel baris tambahan jika ada siswa susulan:{' '}
                    <code>NAMA SISWA, NOMOR PESERTA, KELAS</code>
                  </p>
                  <textarea
                    rows={5}
                    value={bulkStudentText}
                    onChange={(e) => setBulkStudentText(e.target.value.toUpperCase())}
                    placeholder={`AHMAD KHOWARIQIL ADI, 7-001, VII\nAGUNG GUNAWAN, 8-001, VIII\nA. AJRIL SAPUTRA, 9-001, IX`}
                    className="w-full rounded-[10px] border border-[#E5E9F2] p-3 text-xs font-mono uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleBulkImportStudents}
                    className="w-full rounded-[10px] border border-[#2457D6] bg-[#EAF0FF] hover:bg-[#2457D6] text-[#2457D6] hover:text-white font-semibold py-2.5 text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Impor Daftar Peserta
                  </button>
                </div>
              </div>

              {/* Right: Tabel Peserta Terdaftar */}
              <div className="lg:col-span-7 rounded-[16px] border border-[#E5E9F2] bg-white overflow-hidden">
                <div className="p-4 border-b border-[#E5E9F2] flex items-center justify-between">
                  <h2 className="text-base font-bold text-[#172033]">
                    Daftar Peserta Terdaftar ({students.length})
                  </h2>
                  <span className="text-xs text-[#16845B] font-medium">
                    {settings.allowDynamicStudentLogin
                      ? 'Login Dinamis Aktif (Siswa baru otomatis terdaftar saat login)'
                      : 'Hanya siswa di daftar ini yang dapat login'}
                  </span>
                </div>
                <div className="overflow-x-auto max-h-[540px]">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#E5E9F2] bg-[#F5F7FB] text-xs font-semibold text-[#647089]">
                        <th className="py-3 px-4">Nama Siswa (KAPITAL)</th>
                        <th className="py-3 px-4">Nomor Peserta (Password)</th>
                        <th className="py-3 px-4">Kelas</th>
                        <th className="py-3 px-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E9F2]">
                      {students.map((s) => (
                        <tr key={s.id} className="hover:bg-[#F5F7FF]/50">
                          <td className="py-2.5 px-4 font-bold text-[#172033]">
                            {s.fullName}
                          </td>
                          <td className="py-2.5 px-4 font-mono font-semibold text-[#2457D6]">
                            {s.participantNumber}
                          </td>
                          <td className="py-2.5 px-4">Kelas {s.className}</td>
                          <td className="py-2.5 px-4 text-right">
                            <button
                              type="button"
                              onClick={async () => {
                                const res = await fetch('/api/admin/overview', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({
                                    action: 'DELETE_STUDENT',
                                    studentId: s.id,
                                  }),
                                });
                                const data = await res.json();
                                if (data.ok) setStudents(data.students);
                              }}
                              className="text-xs text-[#D64545] hover:underline cursor-pointer"
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 5: PENGATURAN SISTEM & JEMBATAN GOOGLE SPREADSHEET
          ================================================================== */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl space-y-6">
              <form
                onSubmit={handleSaveSettings}
                className="rounded-[16px] border border-[#E5E9F2] bg-white p-6 space-y-5"
              >
                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Konfigurasi Google Spreadsheet & Kebijakan Login
                  </h2>
                  <p className="text-xs sm:text-sm text-[#647089] mt-0.5">
                    Setiap kali siswa selesai mengerjakan ujian (atau ter-auto-submit karena 3x
                    pelanggaran), nilai, rincian benar/salah, dan lama waktu mengerjakan
                    otomatis dikirim ke Google Spreadsheet Anda.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1">
                    Nama Madrasah / Institusi
                  </label>
                  <input
                    type="text"
                    value={settings.schoolName}
                    onChange={(e) =>
                      setSettings({ ...settings, schoolName: e.target.value })
                    }
                    className="w-full rounded-[11px] border border-[#E5E9F2] px-3.5 py-2.5 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1">
                    URL Web App Google Apps Script (Berakhiran /exec)
                  </label>
                  <input
                    type="url"
                    value={settings.appsScriptWebhookUrl}
                    onChange={(e) =>
                      setSettings({ ...settings, appsScriptWebhookUrl: e.target.value })
                    }
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    className="w-full rounded-[11px] border border-[#E5E9F2] px-3.5 py-2.5 text-sm font-mono"
                  />
                  <p className="text-[11px] text-[#647089] mt-1">
                    Salin kode dari file <code>google-apps-script/Code.gs</code> ke menu{' '}
                    <strong>Extensions → Apps Script</strong> di Google Spreadsheet Anda,
                    lalu klik <strong>Deploy → New deployment → Web app (Anyone)</strong>.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1">
                    Secret Keamanan Webhook Spreadsheet
                  </label>
                  <input
                    type="text"
                    value={settings.sheetsWebhookSecret}
                    onChange={(e) =>
                      setSettings({ ...settings, sheetsWebhookSecret: e.target.value })
                    }
                    className="w-full rounded-[11px] border border-[#E5E9F2] px-3.5 py-2.5 text-sm font-mono"
                  />
                </div>

                <label className="flex items-start gap-3 rounded-[12px] border border-[#E5E9F2] bg-[#F5F7FB] p-3.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.allowDynamicStudentLogin}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        allowDynamicStudentLogin: e.target.checked,
                      })
                    }
                    className="mt-0.5 h-4 w-4 accent-[#2457D6]"
                  />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-[#172033] block">
                      Izinkan Pendaftaran Peserta Otomatis Saat Login
                    </strong>
                    <span className="text-[#647089]">
                      Jika aktif, siswa yang belum diimpor sebelumnya tetap bisa langsung
                      masuk dengan mengetik Nama Lengkap (KAPITAL) dan Nomor Peserta mereka.
                    </span>
                  </div>
                </label>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-[11px] bg-[#2457D6] hover:bg-[#3267E8] text-white font-semibold px-5 py-2.5 text-sm inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Pengaturan</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* =====================================================================
          MODAL EDIT / TAMBAH SOAL DI BANK SOAL
      ====================================================================== */}
      {editingQuestion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <form
            onSubmit={handleSaveQuestion}
            className="w-full max-w-2xl rounded-[18px] border border-[#E5E9F2] bg-white p-6 max-h-[90vh] overflow-y-auto space-y-4"
          >
            <h2 className="text-lg font-bold text-[#172033]">
              {editingQuestion.id ? `Edit Soal No. ${editingQuestion.no}` : 'Tambah Soal Baru'}
            </h2>

            <div>
              <label className="block text-xs font-semibold text-[#172033] mb-1">
                Konteks / Kutipan Ayat / Bacaan (Opsional)
              </label>
              <textarea
                rows={2}
                value={editingQuestion.context || ''}
                onChange={(e) =>
                  setEditingQuestion({ ...editingQuestion, context: e.target.value })
                }
                placeholder="Isi jika soal memiliki bacaan pengantar atau kutipan ayat..."
                className="w-full rounded-[10px] border border-[#E5E9F2] p-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172033] mb-1">
                Teks Pertanyaan (Mendukung Bahasa Indonesia & Bahasa Arab)
              </label>
              <textarea
                rows={3}
                required
                value={editingQuestion.text || ''}
                onChange={(e) =>
                  setEditingQuestion({ ...editingQuestion, text: e.target.value })
                }
                className="w-full rounded-[10px] border border-[#E5E9F2] p-3 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(['A', 'B', 'C', 'D'] as const).map((key) => {
                const currentOpt = editingQuestion.options?.find((o) => o.key === key);
                return (
                  <div key={key}>
                    <label className="block text-xs font-semibold text-[#172033] mb-1">
                      Opsi Jawaban {key}
                    </label>
                    <input
                      type="text"
                      required
                      value={currentOpt?.text || ''}
                      onChange={(e) => {
                        const prevOpts = editingQuestion.options || [
                          { key: 'A', text: '' },
                          { key: 'B', text: '' },
                          { key: 'C', text: '' },
                          { key: 'D', text: '' },
                        ];
                        setEditingQuestion({
                          ...editingQuestion,
                          options: prevOpts.map((o) =>
                            o.key === key ? { ...o, text: e.target.value } : o
                          ),
                        });
                      }}
                      className="w-full rounded-[10px] border border-[#E5E9F2] px-3 py-2 text-sm"
                    />
                  </div>
                );
              })}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172033] mb-1">
                Kunci Jawaban Benar
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['A', 'B', 'C', 'D'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() =>
                      setEditingQuestion({ ...editingQuestion, answerKey: k })
                    }
                    className={`py-2 rounded-[10px] font-bold text-sm border cursor-pointer ${
                      editingQuestion.answerKey === k
                        ? 'border-[#16845B] bg-[#16845B] text-white'
                        : 'border-[#E5E9F2] bg-white text-[#172033]'
                    }`}
                  >
                    Kunci {k}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E5E9F2]">
              <button
                type="button"
                onClick={() => setEditingQuestion(null)}
                className="rounded-[10px] border border-[#E5E9F2] px-4 py-2 text-sm font-semibold text-[#647089] cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="rounded-[10px] bg-[#2457D6] text-white px-5 py-2 text-sm font-semibold cursor-pointer"
              >
                Simpan Soal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
