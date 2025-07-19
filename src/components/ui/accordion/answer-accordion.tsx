"use client";
import { useState } from "react";
import clsx from "clsx";
import { Icon } from "@/src/components/ui";
import styles from "./answer-accordion.module.scss";

interface AnswerAccordionProps {
  answer: string;
  className?: string;
}

export default function AnswerAccordion({
  answer,
  className,
}: AnswerAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(styles.answerAccordion, className)}>
      <button
        className={styles.answerAccordion__trigger}
        onClick={toggleAccordion}
      >
        <span className={styles.answerAccordion__trigger__text}>
          {isOpen ? "Скрыть ответ" : "Показать ответ"}
        </span>
        <Icon
          name="arrowBack"
          className={clsx(styles.answerAccordion__trigger__icon, {
            [styles.open]: isOpen,
          })}
        />
      </button>
      <div
        className={clsx(styles.answerAccordion__content, {
          [styles.open]: isOpen,
        })}
      >
        <p className={styles.answerAccordion__content__text}>{answer}</p>
      </div>
    </div>
  );
}
