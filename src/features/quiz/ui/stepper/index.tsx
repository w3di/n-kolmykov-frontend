import { Icon } from '@/src/shared/ui/kit';
import styles from './stepper.module.scss';
import clsx from 'clsx';
import {
  useQuizNavigation,
  useQuestionTypesContext
} from '../../model/quiz-context';
import { useState } from 'react';

export default function Stepper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    currentStep,
    totalSteps,
    canGoPrevious,
    canGoNext,
    previousStep,
    nextStep
  } = useQuizNavigation();

  const { questionTypes, toggleQuestionType } = useQuestionTypesContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <section className={styles.stepper__container}>
        <button
          className={styles.stepper__burgerMenuButton__hide}
          onClick={toggleMenu}
        >
          <Icon
            name='burgerMenu'
            className={styles.stepper__burgerMenuButton__icon}
          />
        </button>
        <div className={styles.stepper}>
          <button
            className={styles.stepper__button}
            onClick={previousStep}
            disabled={!canGoPrevious}
          >
            <Icon
              name='arrowBack'
              className={clsx(styles.stepper__icon, styles.stepper__icon_left)}
            />
          </button>
          <p className={styles.stepper__text}>
            Вопрос {currentStep + 1} из {totalSteps}
          </p>
          <button
            className={styles.stepper__button}
            onClick={nextStep}
            disabled={!canGoNext}
          >
            <Icon name='arrowBack' className={styles.stepper__icon} />
          </button>
        </div>
        <button
          className={styles.stepper__burgerMenuButton}
          onClick={toggleMenu}
        >
          <Icon
            name='burgerMenu'
            className={styles.stepper__burgerMenuButton__icon}
          />
        </button>
      </section>

      {/* Выдвигающееся белое меню */}
      <div
        className={clsx(styles.slideMenu, {
          [styles.slideMenu_open]: isMenuOpen
        })}
      >
        <div className={styles.slideMenu__content}>
          <div className={styles.slideMenu__header}>
            <h3>Типы вопросов</h3>
          </div>
          <div className={styles.slideMenu__body}>
            <ul className={styles.slideMenu__list}>
              {questionTypes.map((questionType) => (
                <li
                  key={questionType.id}
                  className={clsx(styles.slideMenu__listItem, {
                    [styles.slideMenu__listItem_active]: questionType.active
                  })}
                  onClick={() => toggleQuestionType(questionType.id)}
                  role='checkbox'
                  aria-checked={questionType.active}
                  tabIndex={0}
                >
                  {questionType.active ? (
                    <Icon
                      name='checkmarkOrangeCircle'
                      className={styles.slideMenu__listItem__icon}
                    />
                  ) : (
                    <div
                      className={styles.slideMenu__listItem__emptyCircleIcon}
                    />
                  )}
                  <span
                    className={clsx(styles.slideMenu__listItem__text, {
                      [styles.slideMenu__listItem_active__text]:
                        questionType.active
                    })}
                  >
                    {questionType.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
