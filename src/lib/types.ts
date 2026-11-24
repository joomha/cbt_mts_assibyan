export type UserRole = 'student' | 'teacher' | 'admin';

export type ClassLevel = 'VII' | 'VIII' | 'IX';

export interface StudentProfile {
  id: string;
  fullName: string; // HURUF KAPITAL (contoh: "AHMAD KHOWARIQIL ADI")
  participantNumber: string; // Nomor Peserta (contoh: "7-001", "8-001", "9-001")
  passwordCode?: string; // Password pada Kartu Ujian (contoh: "Assibyan7001")
  className: ClassLevel;
  createdAt: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface ExamQuestion {
  id: string;
  examId: string;
  no: number;
  context?: string;
  imageUrl?: string;
  text: string;
  options: QuestionOption[];
  answerKey?: 'A' | 'B' | 'C' | 'D'; // tidak pernah dikirim ke client siswa
}

export interface ClientExamQuestion {
  id: string;
  examId: string;
  displayNo: number; // Nomor urut setelah diacak
  originalNo: number;
  context?: string;
  imageUrl?: string;
  text: string;
  options: {
    displayLabel: 'A' | 'B' | 'C' | 'D';
    originalKey: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
}

export interface Exam {
  id: string;
  code: string;
  title: string;
  subject: string;
  classLevel: 'VII' | 'VIII' | 'IX' | 'ALL';
  scheduleText: string;
  dayOrder?: number; // 1=Senin, 2=Selasa, 3=Rabu, 4=Kamis, 5=Jumat, 6=Sabtu
  dayLabel?: string; // Contoh: "Hari Ke-3 • Rabu, 25 Nov 2026"
  sessionOrder?: number; // Jam Ke-1, Jam Ke-2, Jam Ke-3
  durationMin: number;
  status: 'draft' | 'published' | 'closed';
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  maxViolations: number; // Default: 3 (1 = Peringatan Kuning, 2 = Peringatan Keras Merah, 3 = Auto-Submit)
  showResultImmediately: boolean;
  questionCount: number;
}

export type AttemptStatus =
  | 'IN_PROGRESS'
  | 'SUBMITTED'
  | 'AUTO_SUBMITTED_TIME'
  | 'AUTO_SUBMITTED_VIOLATION';

export type ProctorEventType =
  | 'PAGE_HIDDEN'
  | 'WINDOW_BLUR'
  | 'VIEWPORT_SHRINK'
  | 'FULLSCREEN_EXIT'
  | 'DUPLICATE_SESSION'
  | 'TEACHER_RESET';

export interface ProctorEventLog {
  id: string;
  attemptId: string;
  type: ProctorEventType;
  strikeNumber: number; // 1, 2, atau 3
  description: string;
  timestamp: string;
}

export interface StudentAnswer {
  questionId: string;
  selectedKey: 'A' | 'B' | 'C' | 'D' | null;
  flaggedForReview: boolean;
  updatedAt: string;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  subject: string;
  studentId: string;
  studentName: string; // KAPITAL
  participantNumber: string;
  className: ClassLevel;
  status: AttemptStatus;
  seed: number;
  startedAt: string;
  endsAt: string;
  submittedAt: string | null;
  lastSeenAt: string;
  durationSeconds: number | null; // Lama waktu mengerjakan dalam detik
  durationFormatted: string | null; // Contoh: "42 menit 15 detik"
  violationCount: number; // 0, 1, 2, 3
  maxViolations: number; // 3
  violationLogs: ProctorEventLog[];
  answers: Record<string, StudentAnswer>; // questionId -> StudentAnswer
  score: number | null; // 0 - 100
  correctCount: number | null;
  wrongCount: number | null;
  emptyCount: number | null;
  totalQuestions: number;
  syncedToSheets: boolean;
  sheetsSyncError?: string | null;
  submitReason?: string | null;
}
