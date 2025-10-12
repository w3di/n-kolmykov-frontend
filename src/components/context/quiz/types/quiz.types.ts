import { QuestionTypeFilter } from '@/components/api';
import { QuestionType } from '@/components/types/qustionsType';

export interface QuizContextType {
  // Данные квиза
  quizData: QuestionType[];
  isLoading: boolean;
  setQuestionAnswer: (id: number, answer: 'know' | 'unknown') => void;

  // Статистика
  quizStats: { know: number; unknown: number };

  // Типы вопросов
  questionTypes: QuestionTypeFilter[];
  toggleQuestionType: (id: string) => void;

  // Навигация
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
}

export type QuizStats = {
  know: number;
  unknown: number;
};

export type QuizAnswer = 'know' | 'unknown';
