"use client";

import { Icon } from "@/src/components/ui";
import {
  QuestionTypesAccordion,
  QuestionHistoryAccordion,
} from "@/src/components/widgets";
import styles from "./sidebar.module.scss";
import Image from "next/image";

export default function Sidebar({
  questionData,
  currentStep,
  onQuestionClick,
}: {
  questionData: any;
  currentStep: number;
  onQuestionClick: (index: number) => void;
}) {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <Image src="/myLogo.png" alt="Autor logo" width={15} height={24} />
        <Icon name="nKolmykov" className={styles.sidebar__header__logoIcon} />
      </header>

      <div className={styles.sidebar__typesContainer}>
        <QuestionTypesAccordion />
      </div>
      <div className={styles.sidebar__typesContainer}>
        <QuestionHistoryAccordion
          questionData={questionData}
          currentStep={currentStep}
          onQuestionClick={onQuestionClick}
        />
      </div>
    </aside>
  );
}

//todo объеденить QuestionTypesAccordion и QuestionHistoryAccordion в один компонент
