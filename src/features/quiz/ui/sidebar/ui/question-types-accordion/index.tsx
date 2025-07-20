"use client";

import { Accordion, Icon } from "@/src/shared/ui/kit";
import styles from "./question-types-accordion.module.scss";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface QuestionType {
  id: string;
  name: string;
  active: boolean;
}

const INITIAL_QUESTION_TYPES: QuestionType[] = [
  { id: "javascript", name: "JavaScript", active: true },
  { id: "typescript", name: "TypeScript", active: false },
  { id: "css", name: "CSS", active: false },
  { id: "html", name: "HTML", active: false },
  { id: "sass", name: "SASS", active: false },
  { id: "react", name: "React", active: false },
  { id: "nextjs", name: "Next.js", active: false },
  { id: "reactnative", name: "React Native", active: false },
  { id: "expo", name: "Expo SDK", active: false },
];

const LOCALSTORAGE_KEY = "quiz-active-question-types";

export default function QuestionTypesAccordion() {
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>(
    INITIAL_QUESTION_TYPES
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY);
      if (saved) {
        const savedTypes = JSON.parse(saved);
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

  const toggleQuestionType = (id: string) => {
    setQuestionTypes((prev) =>
      prev.map((type) =>
        type.id === id ? { ...type, active: !type.active } : type
      )
    );
  };

  return (
    <Accordion title="Типы вопросов" defaultOpen={true}>
      <ul className={styles.list}>
        {questionTypes.map((questionType) => (
          <li
            key={questionType.id}
            className={clsx(styles.listItem, {
              [styles.listItem_active]: questionType.active,
            })}
            onClick={() => toggleQuestionType(questionType.id)}
            role="checkbox"
            aria-checked={questionType.active}
            tabIndex={0}
          >
            {questionType.active ? (
              <Icon name="checkmarkOrangeCircle" />
            ) : (
              <div className={styles.listItem__emptyCircleIcon} />
            )}
            <span
              className={clsx(styles.listItem__text, {
                [styles.listItem_active__text]: questionType.active,
              })}
            >
              {questionType.name}
            </span>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}
