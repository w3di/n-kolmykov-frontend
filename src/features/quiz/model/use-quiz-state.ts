import { useEffect, useState } from "react";
import { mockQuestionTypes } from "../api";
import { QuestionType } from "..";

export const useQuizState = () => {
  const [quizData, setQuizData] = useState<QuestionType[]>(mockQuestionTypes);

  const [quizStats, setQuizStats] = useState({
    know: 0,
    unknown: 0,
  });

  const setQuestionAnswer = (id: number, answer: "know" | "unknown") => {
    setQuizData((prev) => {
      const newQuizData = [...prev];
      const previousAnswer = prev[id].typeAnswer;

      if (previousAnswer !== answer) {
        setQuizStats((prevStats) => {
          let newStats = { ...prevStats };

          if (previousAnswer === "know") {
            newStats.know -= 1;
          } else if (previousAnswer === "unknown") {
            newStats.unknown -= 1;
          }

          if (answer === "know") {
            newStats.know += 1;
          } else if (answer === "unknown") {
            newStats.unknown += 1;
          }

          return newStats;
        });
      }

      newQuizData[id].typeAnswer = answer;
      return newQuizData;
    });
  };

  return { quizData, setQuestionAnswer, quizStats };
};
