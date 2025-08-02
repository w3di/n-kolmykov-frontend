import styles from './quiz.module.scss';
import { Sidebar, Stepper } from './ui';
import { Header } from '@/src/shared/ui/layout';
import { QuizProvider, useQuizData } from './model/quiz-context';
import { Content } from './widgets';

export function QuizPage() {
  const { quizData } = useQuizData();

  return (
    <QuizProvider>
      <main className={styles.quiz}>
        <>
          {quizData.length > 0 && (
            <>
              <Sidebar />
              <section className={styles.quiz__content}>
                <div className={styles.quiz__content__header}>
                  <Header variant='short' />
                  <Stepper />
                </div>
                <Content />
              </section>
            </>
          )}
        </>
      </main>
    </QuizProvider>
  );
}
