'use client';

import styles from './quiz.module.scss';
import { Content, Finished, Information, Sidebar, Stepper } from './ui';
import { Header } from '@/src/shared/ui/layout';
import { QuizProvider, useQuizData } from './model/quiz-context';
import { useState } from 'react';

function QuizContent() {
  const { quizData } = useQuizData();

  const [isFinished, setIsFinished] = useState(false);

  return (
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

              {isFinished ? (
                <Finished />
              ) : (
                <>
                  <Information />
                  <Content setIsFinished={setIsFinished} />
                </>
              )}
            </section>
          </>
        )}
      </>
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
