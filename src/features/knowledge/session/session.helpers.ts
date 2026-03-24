import type { SessionQuestion } from './session.types';

export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getSessionStats(ratings: Record<string, string>) {
  const values = Object.values(ratings);
  return {
    knew: values.filter((v) => v === 'knew').length,
    partial: values.filter((v) => v === 'partial').length,
    didntKnow: values.filter((v) => v === 'didnt_know').length,
    total: values.length
  };
}

export function getWeakQuestions(
  questions: SessionQuestion[],
  ratings: Record<string, string>
): SessionQuestion[] {
  return questions.filter(
    (q) => ratings[q.id] === 'didnt_know' || ratings[q.id] === 'partial'
  );
}
