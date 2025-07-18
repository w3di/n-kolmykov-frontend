import styles from "./contentSection.module.scss";

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.QuistionContainer}></div>
      <div className={styles.statsBarContainer}>
        <div className={styles.statsBarContainer__title}>Статистика</div>
        <ul className={styles.statsBar}>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>0</p>
            <p className={styles.statsBar__item__text}>Не знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>0</p>
            <p className={styles.statsBar__item__text}>Знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>0</p>
            <p className={styles.statsBar__item__text}>Всего</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
