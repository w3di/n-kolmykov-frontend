import styles from "./information-section.module.scss";

export default function InformationSection({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <section className={styles.informationSection}>
      <p className={styles.informationSection__title}>Вопрос {currentStep}</p>
      <div className={styles.informationSection__textContainer}>
        <p className={styles.informationSection__text}>
          {currentStep} из {totalSteps} шагов пройдено
        </p>
        <p className={styles.informationSection__text}>
          Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
        </p>
      </div>
    </section>
  );
}
