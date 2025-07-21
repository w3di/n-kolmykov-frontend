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
import clsx from "clsx";
import Link from "next/link";

export default function Sidebar() {
  const { quizData } = useQuizData();
  const { currentStepIndex, setCurrentStepIndex } = useQuizNavigation();
  const { questionTypes, toggleQuestionType } = useQuestionTypesContext();

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.sidebar__header}>
        <Image
          src="/images/myLogo.png"
          alt="Autor logo"
          width={15}
          height={24}
        />
        <Icon name="nKolmykov" className={styles.sidebar__header__logoIcon} />
      </Link>
      <div className={styles.sidebar__accordionsContainer}>
        <div
          className={clsx(
            styles.sidebar__typesContainer,
            styles[`sidebar__typesContainer--types`]
          )}
        >
          <QuestionTypesAccordion
            questionTypes={questionTypes}
            onToggleQuestionType={toggleQuestionType}
          />
        </div>

        <div
          className={clsx(
            styles.sidebar__typesContainer,
            styles[`sidebar__typesContainer--history`]
          )}
        >
          <QuestionHistoryAccordion
            questionData={quizData}
            currentStep={currentStepIndex}
            onQuestionClick={setCurrentStepIndex}
          />
        </div>
      </div>
    </aside>
  );
}

//todo объеденить QuestionTypesAccordion и QuestionHistoryAccordion в один компонент
