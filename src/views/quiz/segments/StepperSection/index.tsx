import { Icon } from "@/src/components/ui";
import styles from "./stepperSection.module.scss";
import clsx from "clsx";

export default function StepperSection({
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
    <section className={styles.stepperSection}>
      <button
        className={styles.stepperSection__button}
        onClick={previousStep}
        disabled={currentStep === 1}
      >
        <Icon
          name="arrowBack"
          className={clsx(
            styles.stepperSection__icon,
            styles.stepperSection__icon_left
          )}
        />
      </button>
      <p className={styles.stepperSection__text}>
        Шаг {currentStep} из {totalSteps}
      </p>
      <button
        className={styles.stepperSection__button}
        onClick={nextStep}
        disabled={currentStep === totalSteps}
      >
        <Icon name="arrowBack" className={styles.stepperSection__icon} />
      </button>
    </section>
  );
}
