import { useState, useEffect, useMemo, useCallback } from 'react';
import { mockQuestionTypeFilters, QuestionTypeFilter } from '../api';
import { toast } from 'react-toastify';
import { Toast } from '@/src/shared/ui/kit';

const LOCALSTORAGE_KEY = 'quiz-active-question-types';

const getInitialQuestionTypes = (): QuestionTypeFilter[] => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY);
      if (saved) {
        const savedTypes = JSON.parse(saved);
        const hasActiveTypes = savedTypes.some(
          (type: QuestionTypeFilter) => type.active
        );
        if (!hasActiveTypes && savedTypes.length > 0) {
          savedTypes[0].active = true;
        }
        return savedTypes;
      }
    } catch (error) {
      console.error('Ошибка при загрузке из localStorage:', error);
    }
  }

  const hasActiveTypes = mockQuestionTypeFilters.some((type) => type.active);
  if (!hasActiveTypes && mockQuestionTypeFilters.length > 0) {
    const initialTypes = [...mockQuestionTypeFilters];
    initialTypes[0].active = true;
    return initialTypes;
  }
  return mockQuestionTypeFilters;
};

export const useQuestionTypes = () => {
  const [questionTypes, setQuestionTypes] = useState<QuestionTypeFilter[]>(
    getInitialQuestionTypes
  );

  const activeQuestionTypes = useMemo(
    () => questionTypes.filter((item) => item.active),
    [questionTypes]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(questionTypes));
      } catch (error) {
        console.error('Ошибка при сохранении в localStorage:', error);
      }
    }
  }, [questionTypes]);

  const toggleQuestionType = useCallback((id: string) => {
    setQuestionTypes((prev) => {
      const targetType = prev.find((type) => type.id === id);
      if (!targetType) return prev;

      if (targetType.active) {
        const activeCount = prev.filter((type) => type.active).length;
        if (activeCount <= 1) {
          setTimeout(() => {
            toast(
              (props) => (
                <Toast
                  text='Нельзя отключить все типы вопросов!'
                  state='warning'
                  {...props}
                />
              ),
              {
                onClose: (reason) => {
                  console.log('Toast закрыт с причиной:', reason);
                }
              }
            );
          }, 0);
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
    toggleQuestionType
  };
};
