'use client'; //todo to scss accordion
import { useState } from 'react';
import clsx from 'clsx';
import styles from './answer-accordion.module.scss';
import { Icon } from '@/src/shared/ui/kit';

interface AnswerAccordionProps {
  answer: string[];
}

export default function AnswerAccordion({ answer }: AnswerAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.answerAccordion}>
      <button
        className={styles.answerAccordion__trigger}
        onClick={toggleAccordion}
      >
        <span className={styles.answerAccordion__trigger__text}>
          {isOpen ? 'Скрыть ответ' : 'Показать ответ'}
        </span>
        <Icon
          name='arrowBack'
          className={clsx(styles.answerAccordion__trigger__icon, {
            [styles.open]: isOpen
          })}
        />
      </button>
      <div
        className={clsx(styles.answerAccordion__content, {
          [styles.open]: isOpen
        })}
      >
        <div className={styles.answerAccordion__content__text}>
          {answer.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
