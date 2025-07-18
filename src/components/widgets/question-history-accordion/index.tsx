"use client";

import { Accordion, Icon } from "@/src/components/ui";
import styles from "./question-history-accordion.module.scss";
import clsx from "clsx";

interface QuestionHistoryAccordionProps {
  questionData: any[];
  currentStep: number;
  onQuestionClick: (index: number) => void;
}

export default function QuestionHistoryAccordion({
  questionData,
  currentStep,
  onQuestionClick,
}: QuestionHistoryAccordionProps) {
  return (
    <Accordion title="История вопросов" defaultOpen={true}>
      <ul className={styles.list}>
        {questionData.map((question, index) => (
          <li
            key={question.id}
            className={clsx(styles.listItem, {
              [styles.listItem_active]: index === currentStep,
            })}
            onClick={() => onQuestionClick(index)}
            role="button"
            aria-pressed={index === currentStep}
            tabIndex={0}
          >
            {question.type === "know" ? (
              <Icon name="checkmarkOrangeCircle" />
            ) : question.type === "unknown" ? (
              <Icon name="crossGrayCircle" />
            ) : (
              <div className={styles.listItem__emptyCircleIcon} />
            )}
            <span
              className={clsx(styles.listItem__text, {
                [styles.listItem_active__text]: index === currentStep,
              })}
            >
              {question.name}
            </span>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}
