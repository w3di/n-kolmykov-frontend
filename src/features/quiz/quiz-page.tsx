"use client";

import styles from "./quiz.module.scss";
import { Content, Information, Sidebar, Stepper } from "./ui";
import { useStepState, useQuizState } from "./model";
import { Header } from "@/src/shared/ui/layout";

export function QuizPage() {
  const { quizData, setQuestionAnswer, quizStats } = useQuizState();

  const { currentStep, setCurrentStep, nextStep, previousStep } =
    useStepState();

  return (
    <main className={styles.quiz}>
      <Sidebar
        questionData={quizData}
        currentStep={currentStep}
        onQuestionClick={setCurrentStep}
      />
      <section className={styles.quiz__content}>
        <div className={styles.quiz__content__header}>
          <Header variant="short" />
          <Stepper
            currentStep={currentStep}
            totalSteps={quizData.length}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        </div>
        <Information currentStep={currentStep} totalSteps={quizData.length} />
        <Content
          questionData={quizData}
          currentStep={currentStep}
          onAnswerClick={(id, answer) => {
            setQuestionAnswer(id, answer);
            nextStep();
          }}
          quizStats={quizStats}
        />
      </section>
    </main>
  );
}
