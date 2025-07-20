// Главный хук - композиция всех остальных
export { useQuizState } from "./use-quiz-state";

// Отдельные хуки для возможного переиспользования
export { useQuestionTypes } from "./use-question-types";
export { useQuizStats } from "./use-quiz-stats";
export { useQuizNavigation } from "./use-quiz-navigation";
export { useQuizData } from "./use-quiz-data";

// Контекст и провайдер
export {
  QuizProvider,
  useQuizContext,
  useQuizData as useQuizDataContext,
  useQuizStats as useQuizStatsContext,
  useQuizNavigation as useQuizNavigationContext,
  useQuestionTypesContext,
} from "./quiz-context";

// Типы
export type { QuestionTypeConfig } from "./use-question-types";
export type { QuizStats } from "./use-quiz-stats";
