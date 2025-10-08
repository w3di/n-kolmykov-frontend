'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';

import { QuestionHistoryAccordion, QuestionTypesAccordion } from './ui';
import {
  useQuizData,
  useQuizNavigation,
  useQuestionTypesContext
} from '../../../context/quiz/quiz-context';
import Link from 'next/link';
import { Icon } from '@/src/components/base';

export default function Sidebar() {
  const { quizData } = useQuizData();
  const { currentStepIndex, setCurrentStepIndex } = useQuizNavigation();
  const { questionTypes, toggleQuestionType } = useQuestionTypesContext();

  return (
    <aside className={styles.sidebar}>
      <Link
        href='/'
        className={styles.sidebar__header}
        aria-label='nKolmykov - перейти на главную страницу'
      >
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
