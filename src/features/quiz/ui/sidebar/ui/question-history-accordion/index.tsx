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
    <Accordion title='История вопросов' defaultOpen>
      <ul className={styles.list}>
        {questionData.map((question, index) => (
          <li key={question.id}>
            <button
              type='button'
              className={clsx(styles.listItem, {
                [styles.listItem_active]: index === currentStep
              })}
              onClick={() => onQuestionClick(index)}
              aria-pressed={index === currentStep}
            >
              {question.typeAnswer === 'know' ? (
                <Icon
                  name='checkmarkOrangeCircle'
                  className={styles.listItem__icon}
                />
              ) : question.typeAnswer === 'unknown' ? (
                <Icon
                  name='crossGrayCircle'
                  className={styles.listItem__icon}
                />
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
            </button>
          </li>
        ))}
      </ul>
    </Accordion>
  );
}
