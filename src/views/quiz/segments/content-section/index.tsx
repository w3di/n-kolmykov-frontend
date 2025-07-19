import { Icon, Button, AnswerAccordion } from "@/src/components/ui";
import styles from "./content-section.module.scss";

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.quistionContainer}>
        <div className={styles.quistionContainer__header}>
          <Icon
            name="lightning"
            className={styles.quistionContainer__header__icon}
          />
          <span className={styles.quistionContainer__header__text}>
            JavaScript
          </span>
        </div>
        <p className={styles.quistionContainer__question}>
          Что такое замыкание (closure) в JS?
        </p>
        <AnswerAccordion answer="Замыкание — это функция, которая запоминает окружение, в котором она была создана." />

        <div className={styles.quistionContainer__buttonsContainer}>
          <Button variant="black" label="Знаю" />
          <Button variant="white" label="Не знаю" />
        </div>
      </div>
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
