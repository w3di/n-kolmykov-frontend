'use client';

import styles from './finished.module.scss';
import { useQuizData, useQuizStats } from '../../model/quiz-context';
import { useRouter } from 'next/navigation';

export default function Finished() {
  const { quizData } = useQuizData();
  const { quizStats } = useQuizStats();
  const router = useRouter();

  const totalQuestions = quizData.length;
  const answeredQuestions = quizStats.know + quizStats.unknown;

  return (
    <section className={styles.finished}>
      <div className={styles.finished__container}>
        <div className={styles.finished__icon}>
          <div className={styles.finished__checkmark}>✓</div>
        </div>

        <h1 className={styles.finished__title}>Квиз завершён</h1>

        <p className={styles.finished__subtitle}>
          Вы ответили на {answeredQuestions} вопросов из {totalQuestions}
        </p>

        <div className={styles.finished__buttons}>
          <button
            className={styles.finished__button}
            onClick={() => router.push('/')}
          >
            Вернуться на главную
          </button>
          <button
            className={styles.finished__button}
            onClick={() => router.refresh()}
          >
            Пройти ещё раз
          </button>
        </div>
      </div>
    </section>
  );
}
