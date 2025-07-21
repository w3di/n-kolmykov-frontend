import { useState, useRef, useEffect, useCallback } from "react";
import { mockQuestionTypes, QuestionTypeFilter } from "../api";
import { QuestionType } from "../qustionsType";
import { toast } from "react-toastify";

export const useQuizData = (
  activeQuestionTypes: QuestionTypeFilter[],
  updateStats: (
    prev: "know" | "unknown" | undefined,
    current: "know" | "unknown"
  ) => void,
  nextStep: () => void
) => {
  const [quizData, setQuizData] = useState<QuestionType[]>([]);
  const quizInitialData = useRef(mockQuestionTypes);
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

  // Инициализация только при первом рендере
  useEffect(() => {
    if (!isInitialized.current && activeQuestionTypes.length > 0) {
      const initialQuestion = getRandomFilteredQuestions();
      if (initialQuestion) {
        setQuizData([initialQuestion]);
        isInitialized.current = true;
      }
    }
  }, [activeQuestionTypes, getRandomFilteredQuestions]);

  const setQuestionAnswer = useCallback(
    (id: number, answer: "know" | "unknown") => {
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
          toast.info(
            "Вопросы для выбранных типов закончились! Выберите больше типов вопросов."
          );
        }
      } else {
        nextStep();
      }
    },
    [quizData.length, getRandomFilteredQuestions, updateStats, nextStep]
  );

  return {
    quizData,
    setQuestionAnswer,
  };
};
