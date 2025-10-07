export type QuestionType = {
  id: string;
  question: string;
  answers: string[];
  theme: string;
  typeAnswer: 'know' | 'unknown' | null;
};
