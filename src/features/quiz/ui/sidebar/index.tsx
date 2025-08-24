'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';

import { QuestionHistoryAccordion, QuestionTypesAccordion } from './ui';
import { Icon } from '@/src/shared/ui/kit';
import {
  useQuizData,
  useQuizNavigation,
  useQuestionTypesContext
} from '../../model/quiz-context';
import Link from 'next/link';

export default function Sidebar() {
  const { quizData } = useQuizData();
  const { currentStepIndex, setCurrentStepIndex } = useQuizNavigation();
  const { questionTypes, toggleQuestionType } = useQuestionTypesContext();

  return (
    <aside className={styles.sidebar}>
      <Link href='/' className={styles.sidebar__header}>
        <Image
          src='/images/myLogo.webp'
          alt='Autor logo'
          width={15}
          height={24}
        />
        <Icon name='nKolmykov' className={styles.sidebar__header__logoIcon} />
      </Link>
      <div className={styles.sidebar__accordionsContainer}>
        <QuestionTypesAccordion
          questionTypes={questionTypes}
          onToggleQuestionType={toggleQuestionType}
          title='Типы вопросов'
        />
        <QuestionHistoryAccordion
          questionData={quizData}
          currentStep={currentStepIndex}
          onQuestionClick={setCurrentStepIndex}
        />
      </div>
    </aside>
  );
}
