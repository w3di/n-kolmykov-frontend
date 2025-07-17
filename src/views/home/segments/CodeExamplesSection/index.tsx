import Icon from "@/src/components/ui/icon";
import styles from "./codeExamplesSection.module.scss";

export default function CodeExamplesSection() {
  return (
    <section className={styles.codeExamplesSection}>
      <div className={styles.text}>
        <div className={styles.text__row}>
          <span>Интерактивные</span>
          <span className={styles.text__block}>
            <Icon name="gitFork" className={styles.text__icon} />
            <span>задания</span>
          </span>
          <span className={styles.text__spacing}>и тесты</span>
        </div>
        <div className={styles.text__row}>
          <span>для проверки</span>
          <span className={styles.text__block}>
            <Icon name="bookmarkSimple" className={styles.text__icon} />
            <span>знаний</span>
          </span>
        </div>
      </div>
    </section>
  );
}
