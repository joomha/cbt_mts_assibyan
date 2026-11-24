import { ClientExamQuestion, ExamQuestion } from '../types';

/**
 * PRNG deterministik (Mulberry32) agar urutan pengacakan soal & opsi
 * selalu konsisten untuk attempt yang sama walaupun halaman di-refresh.
 */
export function createSeededRng(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function deterministicShuffle<T>(items: T[], seed: number): T[] {
  const copy = [...items];
  const rng = createSeededRng(seed);
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const DISPLAY_LABELS: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

/**
 * Mengacak urutan soal dan opsi jawaban sesuai seed attempt,
 * sekaligus MEMBUANG `answerKey` agar tidak pernah bocor ke jaringan klien.
 */
export function buildClientQuestions(
  questions: ExamQuestion[],
  seed: number,
  shuffleQuestions: boolean,
  shuffleOptions: boolean
): ClientExamQuestion[] {
  const orderedQuestions = shuffleQuestions
    ? deterministicShuffle(questions, seed)
    : [...questions].sort((a, b) => a.no - b.no);

  return orderedQuestions.map((q, idx) => {
    const rawOptions = shuffleOptions
      ? deterministicShuffle(q.options, seed + q.no * 101)
      : [...q.options];

    return {
      id: q.id,
      examId: q.examId,
      displayNo: idx + 1,
      originalNo: q.no,
      context: q.context,
      imageUrl: q.imageUrl,
      text: q.text,
      options: rawOptions.map((opt, optIdx) => ({
        displayLabel: DISPLAY_LABELS[optIdx] || 'A',
        originalKey: opt.key,
        text: opt.text,
      })),
    };
  });
}
