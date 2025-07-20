import styles from "./information.module.scss";

export default function Information({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <section className={styles.information}>
      <p className={styles.information__title}>Вопрос {currentStep}</p>
      <div className={styles.information__textContainer}>
        <p className={styles.information__text}>
          {currentStep} из {totalSteps} шагов пройдено
        </p>
        <p className={styles.information__text}>
          Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
        </p>
      </div>
    </section>
  );
}
