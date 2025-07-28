export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
  theme: string;
  typeAnswer?: 'know' | 'unknown' | undefined;
};
