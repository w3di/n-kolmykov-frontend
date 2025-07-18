"use client";

import { Header } from "@/src/components/layout";
import styles from "./quiz.module.scss";
import { StepperSection, InformationSection, ContentSection } from "./segments";
import { useState } from "react";
import Sidebar from "./segments/Sidebar";

const mockQuestionTypes = [
  {
    id: "1",
    name: "Что такое переменная в JS",
    answer: "Переменная в JS - это контейнер для хранения данных",
    type: "know",
  },
  {
    id: "2",
    name: "какие типы переменных существуют в JS",
    answer: "Числовые, строковые, булевые, null, undefined, объекты, массивы",
    type: "unknown",
  },
  {
    id: "3",
    name: "чем отличается var от let и const",
    answer: "let и const - блочные, var - функциональные",
    type: "unknown",
  },
  {
    id: "4",
    name: "что такое hoisting и temporal dead zone",
    answer:
      "Hoisting - это механизм, который позволяет использовать переменные до их объявления. Temporal dead zone - это область видимости, в которой переменные не могут быть использованы до их объявления.",
    type: "unknown",
  },
  {
    id: "5",
    name: "к чему применяется temporal dead zone",
    answer:
      "Temporal dead zone применяется для того, чтобы избежать использования переменных до их объявления",
    type: "know",
  },
];
export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <main className={styles.quiz}>
      <Sidebar
        questionData={mockQuestionTypes}
        currentStep={currentStep}
        onQuestionClick={(number) => {
          setCurrentStep(number);
        }}
      />
      <section className={styles.quiz__content}>
        <div className={styles.quiz__content__header}>
          <Header variant="short" />
          <StepperSection
            currentStep={currentStep}
            totalSteps={16}
            previousStep={() => setCurrentStep(currentStep - 1)}
            nextStep={() => setCurrentStep(currentStep + 1)}
          />
        </div>
        <InformationSection currentStep={currentStep} totalSteps={16} />
        <ContentSection />
      </section>
    </main>
  );
}
