import Image from "next/image";
import styles from "./block1.module.scss";

export default function HomeBlock1() {
  return (
    <section className={styles.homeBlock1}>
      <div className={styles.home}>
        <div className={styles.collectionBlock}>
          <Image
            src="/book.svg"
            alt="book_icon"
            width={12}
            height={12}
            className={styles.collectionBlock__bookIcon}
          />
          <hr className={styles.collectionBlock__divider} />
          <p className={styles.collectionBlock__text}>
            Коллекция из <span>250+</span> тем
          </p>
        </div>
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
            <Image
              src="/react.svg"
              alt="react_logo"
              width={14}
              height={14}
              className={styles.frameworksBlock__item__frameworksIcon}
            />
            <p className={styles.frameworksBlock__item__text}>
              библиотека <span>React</span>
            </p>
          </li>
          <li className={styles.frameworksBlock__item}>
            <Image
              src="/expo.svg"
              alt="expo_logo"
              width={14}
              height={14}
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
