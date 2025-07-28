import { useQuestionTypes } from './use-question-types';
import { useQuizStats } from './use-quiz-stats';
import { useQuizNavigation } from './use-quiz-navigation';
import { useQuizData } from './use-quiz-data';

/**
 * Главный хук для управления состоянием квиза
 * Объединяет все отдельные хуки в единый интерфейс
 */
export const useQuizState = () => {
  const questionTypesState = useQuestionTypes();
  const statsState = useQuizStats();
  const navigationState = useQuizNavigation();

  const quizDataState = useQuizData(
    questionTypesState.activeQuestionTypes,
    statsState.updateStats,
    navigationState.nextStep
  );

  return {
    // Данные квиза
    ...quizDataState,
    // Статистика
    quizStats: statsState.quizStats,
    // Типы вопросов
    questionTypes: questionTypesState.questionTypes,
    toggleQuestionType: questionTypesState.toggleQuestionType,
    // Навигация
    ...navigationState
  };
};
