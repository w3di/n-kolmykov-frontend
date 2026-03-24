import type { Difficulty, Question, Rating } from '@/entities/question';

export type SessionQuestion = Question & {
  sectionName: string;
  sectionSlug: string;
};

export type SessionPhase = 'picking' | 'session' | 'results';

export type SessionFilters = {
  sections: string[];
  tags: string[];
  difficulty: Difficulty | 'all';
};

export type SessionState = {
  phase: SessionPhase;
  filters: SessionFilters;
  questions: SessionQuestion[];
  currentIndex: number;
  revealed: boolean;
  ratings: Record<string, Rating>;
};

export type SessionAction =
  | { type: 'SET_FILTERS'; filters: Partial<SessionFilters> }
  | { type: 'START'; questions: SessionQuestion[] }
  | { type: 'REVEAL' }
  | { type: 'RATE'; questionId: string; rating: Rating }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'FINISH' }
  | { type: 'RESTART' };
