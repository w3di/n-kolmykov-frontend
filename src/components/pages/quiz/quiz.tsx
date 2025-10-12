import { Header } from '@/components/layout';
import { Content } from '@/components/sections/quiz/content';
import Sidebar from '@/components/sections/quiz/sidebar';
import Stepper from '@/components/sections/quiz/stepper';

import styles from './quiz.module.scss';

export const QuizPage = () => {
  return (
    <main className={styles.quiz}>
      <Sidebar />
      <section className={styles.quiz__content}>
        <div className={styles.quiz__content__header}>
          <Header variant='short' />
          <Stepper />
        </div>
        <Content />
      </section>
    </main>
  );
};
