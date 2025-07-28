import { useState, useCallback } from 'react';

export type QuizStats = {
  know: number;
  unknown: number;
};

export const useQuizStats = () => {
  const [quizStats, setQuizStats] = useState<QuizStats>({
    know: 0,
    unknown: 0
  });

  const updateStats = useCallback(
    (
      previousAnswer: 'know' | 'unknown' | undefined,
      newAnswer: 'know' | 'unknown'
    ) => {
      setQuizStats((prevStats) => {
        const newStats = { ...prevStats };

        if (previousAnswer === 'know') {
          newStats.know -= 1;
        } else if (previousAnswer === 'unknown') {
          newStats.unknown -= 1;
        }

        if (newAnswer === 'know') {
          newStats.know += 1;
        } else if (newAnswer === 'unknown') {
          newStats.unknown += 1;
        }

        return newStats;
      });
    },
    []
  );

  return {
    quizStats,
    updateStats
  };
};
