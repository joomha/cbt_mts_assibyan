import { ExamQuestion, StudentAnswer } from '../types';

export interface GradingResult {
  score: number;
  correctCount: number;
  wrongCount: number;
  emptyCount: number;
  totalQuestions: number;
  durationSeconds: number;
  durationFormatted: string;
}

export function formatDurationId(totalSeconds: number): string {
  const safeSec = Math.max(1, Math.round(totalSeconds));
  const hours = Math.floor(safeSec / 3600);
  const minutes = Math.floor((safeSec % 3600) / 60);
  const seconds = safeSec % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} jam`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes} menit`);
  parts.push(`${seconds} detik`);
  return parts.join(' ');
}

export function gradeExamAttempt(
  questions: ExamQuestion[],
  answers: Record<string, StudentAnswer>,
  startedAtIso: string,
  submittedAtIso: string
): GradingResult {
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  for (const q of questions) {
    const ans = answers[q.id];
    if (!ans || !ans.selectedKey) {
      emptyCount++;
    } else if (ans.selectedKey === q.answerKey) {
      correctCount++;
    } else {
      wrongCount++;
    }
  }

  const totalQuestions = questions.length;
  const rawScore = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
  const score = Math.round(rawScore * 10) / 10;

  const startMs = new Date(startedAtIso).getTime();
  const endMs = new Date(submittedAtIso).getTime();
  const durationSeconds = Math.max(1, Math.round((endMs - startMs) / 1000));

  return {
    score,
    correctCount,
    wrongCount,
    emptyCount,
    totalQuestions,
    durationSeconds,
    durationFormatted: formatDurationId(durationSeconds),
  };
}
