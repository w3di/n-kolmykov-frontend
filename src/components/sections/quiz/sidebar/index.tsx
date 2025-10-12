'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/base';
import {
  useQuizData,
  useQuizNavigation,
  useQuestionTypesContext
} from '@/components/context/quiz/quiz-context';

import styles from './sidebar.module.scss';
import { QuestionHistoryAccordion, QuestionTypesAccordion } from './ui';

const Sidebar = () => {
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
};

export default Sidebar;
