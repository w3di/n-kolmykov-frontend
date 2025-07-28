import { Icon } from '@/src/shared/ui/kit';
import styles from './stepper.module.scss';
import clsx from 'clsx';
import { useQuizNavigation } from '../../model/quiz-context';

export default function Stepper() {
  const {
    currentStep,
    totalSteps,
    canGoPrevious,
    canGoNext,
    previousStep,
    nextStep
  } = useQuizNavigation();

  return (
    <section className={styles.stepper}>
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
    </section>
  );
}
