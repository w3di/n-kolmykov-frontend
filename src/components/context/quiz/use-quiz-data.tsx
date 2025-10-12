import { useState, useRef, useEffect, useCallback } from 'react';

import { toast } from 'react-toastify';

import { loadAllQuestions, QuestionTypeFilter } from '@/components/api';
import { Toast } from '@/components/base';
import { QuestionType } from '@/components/types/qustionsType';

import { QuizAnswer } from './types/quiz.types';

export const useQuizData = (
  activeQuestionTypes: QuestionTypeFilter[],
  updateStats: (prev: QuizAnswer | null, current: QuizAnswer) => void,
  nextStep: () => void
) => {
  const [quizData, setQuizData] = useState<QuestionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const quizInitialData = useRef<QuestionType[]>([]);
  const isInitialized = useRef(false);

  const getRandomFilteredQuestions = useCallback(() => {
    const filteredQuestions = quizInitialData.current.filter((item) =>
      activeQuestionTypes.some((type) => type.id === item.theme)
    );

    if (filteredQuestions.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const randomQuestion = filteredQuestions[randomIndex];

    quizInitialData.current = quizInitialData.current.filter(
      (item) => item.id !== randomQuestion.id
    );

    return randomQuestion;
  }, [activeQuestionTypes]);

  // Инициализация только при первом рендере: загрузка вопросов из public JSON по активным темам
  useEffect(() => {
    const init = async () => {
      if (isInitialized.current) return;
      if (activeQuestionTypes.length === 0) return;
      try {
        setIsLoading(true);
        const loaded = await loadAllQuestions();
        quizInitialData.current = loaded;
        const initialQuestion = getRandomFilteredQuestions();
        if (initialQuestion) {
          setQuizData([initialQuestion]);
          isInitialized.current = true;
        }
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    void init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuestionTypes]); // Убираем getRandomFilteredQuestions из зависимостей чтобы избежать бесконечного цикла

  const setQuestionAnswer = useCallback(
    (id: number, answer: 'know' | 'unknown') => {
      setQuizData((prev) => {
        const newQuizData = [...prev];
        const previousAnswer = prev[id].typeAnswer;

        if (previousAnswer !== answer) {
          updateStats(previousAnswer, answer);
        }

        newQuizData[id].typeAnswer = answer;
        return newQuizData;
      });

      if (id === quizData.length - 1) {
        const nextQuestion = getRandomFilteredQuestions();
        if (nextQuestion) {
          setQuizData((prev) => [...prev, nextQuestion]);
          nextStep();
        } else {
          toast((props) => (
            <Toast
              text='Вопросы для выбранных типов закончились! Выберите больше типов вопросов.'
              state='info'
              {...props}
            />
          ));
        }
      } else {
        nextStep();
      }
    },
    [quizData.length, getRandomFilteredQuestions, updateStats, nextStep]
  );

  return {
    quizData,
    isLoading,
    setQuestionAnswer
  };
};
