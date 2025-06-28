import Image from "next/image";
import styles from "./heroSection.module.scss";
import Icon from "@/src/components/ui/Icon";
import { CollectionBlock } from "@/src/components/ui";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <CollectionBlock
          count="250+"
          label="Коллекция из"
          icon="book"
          afterLabel="тем"
        />
        <h1 className={styles.textBlock__title}>Привет, разработчик!</h1>
        <p className={styles.textBlock__description}>
          Добро пожаловать на мой open-source проект по подшготовке к
          техническим
          <br className={styles.textBlock__description__br} /> собеседованиям.
          Здесь собрана коллекция актуальных вопросов и ответов, которые помогут{" "}
          <br className={styles.textBlock__description__br} />
          вам успешно пройти интервью
        </p>
        <ul className={styles.frameworksBlock}>
          <li className={styles.frameworksBlock__item}>
            <Icon
              name="react"
              className={styles.frameworksBlock__item__frameworksIcon}
            />
            <p className={styles.frameworksBlock__item__text}>
              библиотека <span>React</span>
            </p>
          </li>
          <li className={styles.frameworksBlock__item}>
            <Icon
              name="expo"
              className={styles.frameworksBlock__item__frameworksIcon}
            />
            <p className={styles.frameworksBlock__item__text}>
              фреймворк <span>Expo</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.background} />
    </section>
  );
}
