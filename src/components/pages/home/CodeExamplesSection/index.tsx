import styles from "./codeExamplesSection.module.scss";
import Image from "next/image";

export default function CodeExamplesSection() {
  return (
    <section className={styles.codeExamplesSection}>
      <div className={styles.text}>
        <div className={styles.text__row}>
          <span>Интерактивные</span>
          <span className={styles.text__block}>
            <Image
              src="/react.svg"
              alt="react_logo"
              width={14}
              height={14}
              className={styles.text__icon}
            />
            <span>задания</span>
          </span>
          <span className={styles.text__spacing}>и тесты</span>
        </div>
        <div className={styles.text__row}>
          <span>для проверки</span>
          <span className={styles.text__block}>
            <Image
              src="/react.svg"
              alt="react_logo"
              width={14}
              height={14}
              className={styles.text__icon}
            />
            <span>знаний</span>
          </span>
        </div>
      </div>
    </section>
  );
}
