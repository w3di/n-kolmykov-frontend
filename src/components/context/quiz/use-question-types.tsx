import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  defaultQuestionTypeFilters,
  QuestionTypeFilter,
  availableThemeIds
} from '../../api';
import { toast } from 'react-toastify';
import { Toast } from '@/src/components/base';
import { LOCALSTORAGE_KEY } from './constants';

const reconcileQuestionTypes = (
  saved: QuestionTypeFilter[]
): QuestionTypeFilter[] => {
  const defaultsMap = new Map(defaultQuestionTypeFilters.map((d) => [d.id, d]));

  const result: QuestionTypeFilter[] = availableThemeIds.map((id) => {
    const savedItem = saved.find((s) => s.id === id);
    if (savedItem) {
      const name = defaultsMap.get(id)?.name ?? id;
      return { id, name, active: !!savedItem.active };
    }
    const def = defaultsMap.get(id);
    if (def) return { ...def };
    return { id, name: id, active: true };
  });

  const hasActiveTypes = result.some((type) => type.active);
  if (!hasActiveTypes && result.length > 0) {
    result[0] = { ...result[0], active: true };
  }

  return result;
};

const getInitialQuestionTypes = (): QuestionTypeFilter[] => {
  // Важно: на сервере и при первом клиентском рендере возвращаем стабильный эталон,
  // чтобы не было рассинхрона гидратации. Данные из localStorage подтянем после монтирования.
  return reconcileQuestionTypes(defaultQuestionTypeFilters);
};

export const useQuestionTypes = () => {
  const [questionTypes, setQuestionTypes] = useState<QuestionTypeFilter[]>(
    getInitialQuestionTypes()
  );
  const [isHydrated, setIsHydrated] = useState(false);

  const activeQuestionTypes = useMemo(
    () => questionTypes.filter((item) => item.active),
    [questionTypes]
  );

  // После монтирования читаем localStorage и приводим к эталону
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const reconciled = reconcileQuestionTypes(
            parsed as QuestionTypeFilter[]
          );
          setQuestionTypes(reconciled);
        }
      } else {
        // Если в storage ничего нет — зафиксируем текущий эталон
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(questionTypes));
      }
    } catch (error) {
      console.error('Ошибка при загрузке из localStorage:', error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return; // Не перетирать сохранённые данные до инициализации
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(questionTypes));
    } catch (error) {
      console.error('Ошибка при сохранении в localStorage:', error);
    }
  }, [questionTypes, isHydrated]);

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
    toggleQuestionType,
    isHydrated
  };
};
