export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  theme: string;
  typeAnswer?: "know" | "unknown";
};
