"use client";

import styles from "./sidebar.module.scss";
import Image from "next/image";

import { QuestionHistoryAccordion, QuestionTypesAccordion } from "./ui";
import { Icon } from "@/src/shared/ui/kit";
import {
  useQuizData,
  useQuizNavigation,
  useQuestionTypesContext,
} from "../../model/quiz-context";

export default function Sidebar() {
  const { quizData } = useQuizData();
  const { currentStepIndex, setCurrentStepIndex } = useQuizNavigation();
  const { questionTypes, toggleQuestionType } = useQuestionTypesContext();

  const activeTypesCount = questionTypes.filter((type) => type.active).length;

  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <Image
          src="/images/myLogo.png"
          alt="Autor logo"
          width={15}
          height={24}
        />
        <Icon name="nKolmykov" className={styles.sidebar__header__logoIcon} />
      </header>

      <div className={styles.sidebar__typesContainer}>
        <QuestionTypesAccordion
          questionTypes={questionTypes}
          onToggleQuestionType={toggleQuestionType}
        />
      </div>

      <div className={styles.sidebar__typesContainer}>
        <QuestionHistoryAccordion
          questionData={quizData}
          currentStep={currentStepIndex}
          onQuestionClick={setCurrentStepIndex}
        />
      </div>
    </aside>
  );
}

//todo объеденить QuestionTypesAccordion и QuestionHistoryAccordion в один компонент
