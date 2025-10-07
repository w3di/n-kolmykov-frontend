import { useQuestionTypes } from './use-question-types';
import { useQuizStats } from './use-quiz-stats';
import { useQuizNavigation } from './use-quiz-navigation';
import { useQuizData } from './use-quiz-data';

export const useQuizState = () => {
  const questionTypesState = useQuestionTypes();
  const statsState = useQuizStats();
  const navigationState = useQuizNavigation();

  const effectiveActiveTypes = questionTypesState.activeQuestionTypes;

  const quizDataState = useQuizData(
    effectiveActiveTypes,
    statsState.updateStats,
    navigationState.nextStep
  );

  return {
    ...quizDataState,
    isLoading: !questionTypesState.isHydrated || quizDataState.isLoading,
    quizStats: statsState.quizStats,
    questionTypes: questionTypesState.questionTypes,
    toggleQuestionType: questionTypesState.toggleQuestionType,
    ...navigationState
  };
};
