'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useQuizState } from './use-quiz-state';
import { QuestionType } from '../qustionsType';
import { QuestionTypeFilter } from '../api';

interface QuizContextType {
  // Данные квиза
  quizData: QuestionType[];
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

const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const quizState = useQuizState();

  const contextValue: QuizContextType = {
    ...quizState
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = (): QuizContextType => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuizContext должен использоваться внутри QuizProvider');
  }

  return context;
};

export const useQuizData = () => {
  const { quizData, setQuestionAnswer } = useQuizContext();
  return { quizData, setQuestionAnswer };
};

export const useQuizStats = () => {
  const { quizStats } = useQuizContext();
  return { quizStats };
};

export const useQuizNavigation = () => {
  const { currentStep, setCurrentStep, nextStep, previousStep, quizData } =
    useQuizContext();

  const totalSteps = quizData.length;
  const currentStepIndex = currentStep;
  const canGoNext = currentStep < totalSteps - 1;
  const canGoPrevious = currentStep > 0;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  const progress = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const goToFirstStep = () => setCurrentStep(0);
  const goToLastStep = () => setCurrentStep(Math.max(0, totalSteps - 1));

  return {
    currentStep,
    currentStepIndex,
    totalSteps,
    canGoNext,
    canGoPrevious,
    isFirstStep,
    isLastStep,
    progress,
    nextStep,
    previousStep,
    goToStep,
    goToFirstStep,
    goToLastStep,
    setCurrentStepIndex: setCurrentStep
  };
};

export const useQuestionTypesContext = () => {
  const { questionTypes, toggleQuestionType } = useQuizContext();
  return { questionTypes, toggleQuestionType };
};
