import { useState, useEffect, useMemo, useCallback } from "react";
import { mockQuestionTypeFilters } from "../api";
import { toast } from "react-toastify";

export type QuestionTypeConfig = {
  id: string;
  name: string;
  active: boolean;
};

const LOCALSTORAGE_KEY = "quiz-active-question-types";

export const useQuestionTypes = () => {
  const [questionTypes, setQuestionTypes] = useState<QuestionTypeConfig[]>(
    () => {
      const hasActiveTypes = mockQuestionTypeFilters.some(
        (type) => type.active
      );
      if (!hasActiveTypes && mockQuestionTypeFilters.length > 0) {
        const initialTypes = [...mockQuestionTypeFilters];
        initialTypes[0].active = true;
        return initialTypes;
      }
      return mockQuestionTypeFilters;
    }
  );

  const activeQuestionTypes = useMemo(
    () => questionTypes.filter((item) => item.active),
    [questionTypes]
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY);
      if (saved) {
        const savedTypes = JSON.parse(saved);
        const hasActiveTypes = savedTypes.some(
          (type: QuestionTypeConfig) => type.active
        );
        if (!hasActiveTypes && savedTypes.length > 0) {
          savedTypes[0].active = true;
        }
        setQuestionTypes(savedTypes);
      }
    } catch (error) {
      console.error("Ошибка при загрузке из localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(questionTypes));
    } catch (error) {
      console.error("Ошибка при сохранении в localStorage:", error);
    }
  }, [questionTypes]);

  const toggleQuestionType = useCallback((id: string) => {
    setQuestionTypes((prev) => {
      const targetType = prev.find((type) => type.id === id);
      if (!targetType) return prev;

      if (targetType.active) {
        const activeCount = prev.filter((type) => type.active).length;
        if (activeCount <= 1) {
          toast.warning("Нельзя отключить все типы вопросов!");
          return prev;
        }
      }

      return prev.map((type) =>
        type.id === id ? { ...type, active: !type.active } : type
      );
    });
  }, []);

  return {
    questionTypes,
    activeQuestionTypes,
    toggleQuestionType,
  };
};
