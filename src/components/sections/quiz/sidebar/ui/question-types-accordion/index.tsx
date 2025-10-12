import clsx from 'clsx';

import { Accordion, Icon } from '@/components/base';

import styles from './question-types-accordion.module.scss';

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

const QuestionTypesAccordion = ({
  questionTypes,
  onToggleQuestionType,
  title
}: QuestionTypesAccordionProps) => {
  return (
    <Accordion title={title} defaultOpen>
      <ul className={styles.list}>
        {questionTypes.map((questionType) => (
          <li key={questionType.id}>
            <button
              type='button'
              className={clsx(styles.listItem, {
                [styles.listItem_active]: questionType.active
              })}
              aria-pressed={questionType.active}
              onClick={() => onToggleQuestionType(questionType.id)}
            >
              {questionType.active ? (
                <Icon
                  name='checkmarkOrangeCircle'
                  className={styles.listItem__checkmarkIcon}
                />
              ) : (
                <div className={styles.listItem__emptyCircleIcon} />
              )}
              <span
                className={clsx(styles.listItem__text, {
                  [styles.listItem_active__text]: questionType.active
                })}
              >
                {questionType.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default QuestionTypesAccordion;
