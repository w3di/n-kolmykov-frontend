'use client';
import styles from './quiz.module.scss';
import { Sidebar, Stepper } from './ui';
import { Header } from '@/src/shared/ui/layout';
import { QuizProvider } from './model/quiz-context';
import { Content } from './widgets';

function QuizContent() {
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

export function QuizPage() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
