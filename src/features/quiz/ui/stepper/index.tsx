import { Icon } from "@/src/shared/ui/kit";
import styles from "./stepper.module.scss";
import clsx from "clsx";

export default function Stepper({
  currentStep,
  totalSteps,
  previousStep,
  nextStep,
}: {
  currentStep: number;
  totalSteps: number;
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <section className={styles.stepper}>
      <button
        className={styles.stepper__button}
        onClick={previousStep}
        disabled={currentStep === 1}
      >
        <Icon
          name="arrowBack"
          className={clsx(styles.stepper__icon, styles.stepper__icon_left)}
        />
      </button>
      <p className={styles.stepper__text}>
        Шаг {currentStep} из {totalSteps}
      </p>
      <button
        className={styles.stepper__button}
        onClick={nextStep}
        disabled={currentStep === totalSteps}
      >
        <Icon name="arrowBack" className={styles.stepper__icon} />
      </button>
    </section>
  );
}
