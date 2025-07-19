"use client";

import { Header } from "@/src/components/layout";
import styles from "./quiz.module.scss";
import { StepperSection, InformationSection, ContentSection } from "./segments";
import { useState } from "react";
import Sidebar from "./segments/sidebar";

const mockQuestionTypes = [
  {
    id: "1",
    question: "Что такое переменная в JS",
    answer: "Переменная в JS - это контейнер для хранения данных",
    theme: "JavaScript",
  },
  {
    id: "2",
    question: "Что такое flexbox в CSS?",
    answer:
      "Flexbox - это метод раскладки CSS, который позволяет легко выравнивать и распределять элементы в контейнере по одной оси.",
    theme: "CSS",
  },
  {
    id: "3",
    question: "Для чего используется тег <meta> в HTML?",
    answer:
      "Тег <meta> предоставляет метаданные о HTML документе, такие как описание, ключевые слова, кодировка и настройки viewport.",
    theme: "HTML",
  },
  {
    id: "4",
    question: "Что такое интерфейсы в TypeScript?",
    answer:
      "Интерфейсы в TypeScript определяют структуру объекта, указывая какие свойства и методы должен иметь объект.",
    theme: "TypeScript",
  },
  {
    id: "5",
    question: "Что такое миксины в Sass?",
    answer:
      "Миксины в Sass - это многократно используемые блоки CSS-кода, которые можно включать в другие селекторы с помощью @include.",
    theme: "Sass",
  },
  {
    id: "6",
    question: "Что такое хуки в React?",
    answer:
      "Хуки - это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах.",
    theme: "React",
  },
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);

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
            totalSteps={mockQuestionTypes.length}
            previousStep={() => setCurrentStep(currentStep - 1)}
            nextStep={() => setCurrentStep(currentStep + 1)}
          />
        </div>
        <InformationSection
          currentStep={currentStep}
          totalSteps={mockQuestionTypes.length}
        />
        <ContentSection />
      </section>
    </main>
  );
}
