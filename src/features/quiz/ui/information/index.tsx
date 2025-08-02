'use client';

import styles from './information.module.scss';
import { useQuizNavigation } from '../../model/quiz-context';

export default function Information() {
  const { currentStep } = useQuizNavigation();

  return (
    <section className={styles.information}>
      <p className={styles.information__title}>Вопрос {currentStep + 1}</p>
      <div className={styles.information__textContainer}>
        <p className={styles.information__text}>
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>
      </div>
    </section>
  );
}
