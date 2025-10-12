'use client';

import { useQuizNavigation } from '@/components/context/quiz/quiz-context';

import styles from './information.module.scss';

const Information = () => {
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
};

export default Information;
