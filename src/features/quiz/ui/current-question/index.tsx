'use client';

import styles from './current-question.module.scss';
import { AnswerAccordion } from './ui';
import { Button, Icon } from '@/src/shared/ui/kit';
import {
  useQuizData,
  useQuizStats,
  useQuizNavigation
} from '../../model/quiz-context';

type CurrentQuestionProps = {
  setIsFinished: (isFinished: boolean) => void;
};

export default function CurrentQuestion({
  setIsFinished
}: CurrentQuestionProps) {
  const { quizData, setQuestionAnswer } = useQuizData();
  const { quizStats } = useQuizStats();
  const { currentStepIndex } = useQuizNavigation();

  const currentQuestion = quizData[currentStepIndex];

  if (!currentQuestion) {
    return <div>/src/features/quiz/ui/content/index error</div>;
  }

  return (
    <section className={styles.currentQuestion}>
      <div className={styles.quistionContainer}>
        <div className={styles.quistionContainer__header}>
          <Icon
            name='lightning'
            className={styles.quistionContainer__header__icon}
          />
          <span className={styles.quistionContainer__header__text}>
            {currentQuestion.theme}
          </span>
        </div>
        <p className={styles.quistionContainer__question}>
          {currentQuestion.question}
        </p>
        <AnswerAccordion answer={currentQuestion.answers} />

        <div className={styles.quistionContainer__buttons}>
          <div className={styles.quistionContainer__buttons__leftButtons}>
            <Button
              variant='black'
              label='Знаю'
              onClick={() => setQuestionAnswer(currentStepIndex, 'know')}
            />
            <Button
              variant='white'
              label='Не знаю'
              onClick={() => setQuestionAnswer(currentStepIndex, 'unknown')}
            />
          </div>
          <button
            className={styles.quistionContainer__buttons__rightButton}
            onClick={() => setIsFinished(true)}
            type='button'
          >
            <span
              className={styles.quistionContainer__buttons__rightButton__text}
            >
              Завершить
            </span>
            <Icon
              name='arrowRight'
              className={styles.quistionContainer__buttons__rightButton__icon}
            />
          </button>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <div className={styles.statsBarContainer__title}>Статистика</div>
        <ul className={styles.statsBar}>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>{quizStats.unknown}</p>
            <p className={styles.statsBar__item__text}>Не знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>{quizStats.know}</p>
            <p className={styles.statsBar__item__text}>Знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>
              {quizStats.know + quizStats.unknown}
            </p>
            <p className={styles.statsBar__item__text}>Всего</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
