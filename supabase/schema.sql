-- ============================================================================
-- SKEMA DATABASE SUPABASE POSTGRES — CBT MTs ASSIBYAN (FREE TIER OPTIMIZED)
-- ============================================================================
-- Cara pakai:
-- 1. Buka Dashboard Supabase -> SQL Editor -> New Query
-- 2. Copy & Paste seluruh isi file ini lalu klik "Run"
-- ============================================================================

create extension if not exists "pgcrypto";

-- 1. Tabel Peserta / Siswa
create table if not exists public.students (
  id text primary key,
  full_name text not null,              -- HURUF KAPITAL (contoh: "AHMAD FAUZI")
  participant_number text not null unique, -- Nomor Peserta (sebagai password)
  class_name text not null default 'VII' check (class_name in ('VII', 'VIII')),
  created_at timestamptz not null default now()
);

create index if not exists idx_students_name on public.students (full_name);
create index if not exists idx_students_participant_no on public.students (participant_number);

-- 2. Tabel Ujian (Exams)
create table if not exists public.exams (
  id text primary key,
  code text not null,
  title text not null,
  subject text not null,
  class_level text not null default 'ALL' check (class_level in ('VII', 'VIII', 'ALL')),
  schedule_text text not null default '',
  duration_min integer not null default 90,
  status text not null default 'published' check (status in ('draft', 'published', 'closed')),
  shuffle_questions boolean not null default true,
  shuffle_options boolean not null default true,
  max_violations integer not null default 3,
  show_result_immediately boolean not null default true,
  created_at timestamptz not null default now()
);

-- 3. Tabel Bank Soal (Questions)
-- Catatan Keamanan: answer_key hanya dibaca di server saat penilaian.
create table if not exists public.questions (
  id text primary key,
  exam_id text not null references public.exams(id) on delete cascade,
  no integer not null,
  context text,
  image_url text,
  text text not null,
  options jsonb not null, -- [{"key":"A","text":"..."}, ...]
  answer_key text not null check (answer_key in ('A', 'B', 'C', 'D')),
  created_at timestamptz not null default now()
);

create index if not exists idx_questions_exam on public.questions (exam_id, no);

-- 4. Tabel Sesi Pengerjaan Ujian (Attempts)
create table if not exists public.attempts (
  id text primary key,
  exam_id text not null references public.exams(id) on delete cascade,
  exam_title text not null,
  subject text not null,
  student_id text not null,
  student_name text not null,
  participant_number text not null,
  class_name text not null,
  status text not null default 'IN_PROGRESS'
    check (status in ('IN_PROGRESS', 'SUBMITTED', 'AUTO_SUBMITTED_TIME', 'AUTO_SUBMITTED_VIOLATION')),
  seed bigint not null,
  started_at timestamptz not null default now(),
  ends_at timestamptz not null,
  submitted_at timestamptz,
  last_seen_at timestamptz not null default now(),
  duration_seconds integer,
  duration_formatted text,
  violation_count integer not null default 0,
  max_violations integer not null default 3,
  violation_logs jsonb not null default '[]'::jsonb,
  answers jsonb not null default '{}'::jsonb,
  score numeric(5,2),
  correct_count integer,
  wrong_count integer,
  empty_count integer,
  total_questions integer not null default 0,
  synced_to_sheets boolean not null default false,
  sheets_sync_error text,
  submit_reason text
);

create index if not exists idx_attempts_exam_status on public.attempts (exam_id, status);
create index if not exists idx_attempts_student on public.attempts (student_id, exam_id);

-- 5. Tabel Pengaturan Sistem (termasuk URL Webhook Google Spreadsheet)
create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- Aktifkan Realtime untuk tabel attempts agar Dashboard Pengawas selalu live
alter publication supabase_realtime add table public.attempts;
