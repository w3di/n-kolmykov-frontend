import { Content } from '../../sections/quiz/content';
import Sidebar from '../../sections/quiz/sidebar';
import Stepper from '../../sections/quiz/stepper';
import styles from './quiz.module.scss';

import { Header } from '@/src/components/layout';

export function QuizPage() {
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
}
