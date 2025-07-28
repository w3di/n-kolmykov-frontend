'use client';

import { Accordion, Icon } from '@/src/shared/ui/kit';
import styles from './question-history-accordion.module.scss';
import clsx from 'clsx';
import { QuestionType } from '@/src/features/quiz/qustionsType';

interface QuestionHistoryAccordionProps {
  questionData: QuestionType[];
  currentStep: number;
  onQuestionClick: (index: number) => void;
}

export default function QuestionHistoryAccordion({
  questionData,
  currentStep,
  onQuestionClick
}: QuestionHistoryAccordionProps) {
  return (
    <Accordion title='История вопросов' defaultOpen={true}>
      <ul className={styles.list}>
        {questionData.map((question, index) => (
          <li
            key={question.id}
            className={clsx(styles.listItem, {
              [styles.listItem_active]: index === currentStep
            })}
            onClick={() => onQuestionClick(index)}
            role='button'
            aria-pressed={index === currentStep}
            tabIndex={0}
          >
            {question.typeAnswer === 'know' ? (
              <Icon name='checkmarkOrangeCircle' />
            ) : question.typeAnswer === 'unknown' ? (
              <Icon name='crossGrayCircle' />
            ) : (
              <div className={styles.listItem__emptyCircleIcon} />
            )}
            <span
              className={clsx(styles.listItem__text, {
                [styles.listItem_active__text]: index === currentStep
              })}
            >
              {question.question}
            </span>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}
