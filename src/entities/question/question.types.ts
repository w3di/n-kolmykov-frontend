export type Difficulty = 'interview' | 'deep';

export type Rating = 'knew' | 'partial' | 'didnt_know';

export type Question = {
  id: string;
  slug: string;
  question: string;
  answer: string;
  difficulty: Difficulty;
  tags: string[];
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  questions: Question[];
};

export type SectionMeta = {
  id: string;
  name: string;
  slug: string;
  questionCount: number;
  tags: string[];
};
