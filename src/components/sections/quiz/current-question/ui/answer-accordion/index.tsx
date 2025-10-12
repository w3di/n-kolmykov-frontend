import { Icon } from '@/components/base';

import styles from './answer-accordion.module.scss';

interface AnswerAccordionProps {
  answer: string[];
}

const AnswerAccordion = ({ answer }: AnswerAccordionProps) => {
  return (
    <details key={answer.join('|')} className={styles.answerAccordion}>
      <summary className={styles.answerAccordion__trigger} role='button'>
        <span
          className={
            styles.answerAccordion__trigger__text +
            ' ' +
            styles['answerAccordion__trigger__text--show']
          }
        >
          {'Показать ответ'}
        </span>
        <span
          className={
            styles.answerAccordion__trigger__text +
            ' ' +
            styles['answerAccordion__trigger__text--hide']
          }
        >
          {'Скрыть ответ'}
        </span>
        <Icon
          name='arrowBack'
          className={styles.answerAccordion__trigger__icon}
        />
      </summary>
      <div className={styles.answerAccordion__content}>
        <div className={styles.answerAccordion__content__text}>
          {answer.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
      </div>
    </details>
  );
};

export default AnswerAccordion;
