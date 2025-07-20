"use client";

import { Accordion, Icon } from "@/src/shared/ui/kit";
import styles from "./question-types-accordion.module.scss";
import clsx from "clsx";

export interface QuestionType {
  id: string;
  name: string;
  active: boolean;
}

interface QuestionTypesAccordionProps {
  questionTypes: QuestionType[];
  onToggleQuestionType: (id: string) => void;
  title?: string;
  defaultOpen?: boolean;
}

export default function QuestionTypesAccordion({
  questionTypes,
  onToggleQuestionType,
  title = "Типы вопросов",
  defaultOpen = true,
}: QuestionTypesAccordionProps) {
  return (
    <Accordion title={title} defaultOpen={defaultOpen}>
      <ul className={styles.list}>
        {questionTypes.map((questionType) => (
          <li
            key={questionType.id}
            className={clsx(styles.listItem, {
              [styles.listItem_active]: questionType.active,
            })}
            onClick={() => onToggleQuestionType(questionType.id)}
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
