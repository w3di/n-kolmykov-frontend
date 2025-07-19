import Image from "next/image";
import styles from "./pull-section.module.scss";
import clsx from "clsx";
import Icon from "@/src/components/ui/icon";

export default function QuizSection() {
  return (
    <ul className={styles.pullSection}>
      <li className={styles.pullSection__item}>
        <div className={styles.titleBlock}>
          <Icon name="book" className={styles.titleBlock__icon} />
          <p className={styles.titleBlock__title}>Новые темы</p>
        </div>
        <p className={styles.description}>
          <span>Постоянные добавления</span> актуальных тем и вопросов
        </p>
        <div className={styles.pullRequestImageBlock}>
          <Image
            src="/pull_50.png"
            alt="Pull request с 50 коммитами"
            width={300}
            height={59}
            className={styles.pullRequestImageBlock__pull50}
          />
          <Image
            src="/line_to_pull.png"
            alt=""
            width={116}
            height={152}
            className={styles.pullRequestImageBlock__lineToPull}
          />
          <Image
            src="/pull_90.png"
            alt="Pull request с 90 коммитами"
            width={300}
            height={59}
            className={styles.pullRequestImageBlock__pull90}
          />
        </div>
      </li>
      <li className={styles.pullSection__item}>
        <div className={styles.titleBlock}>
          <Icon name="sparkle" className={styles.titleBlock__icon} />
          <p className={styles.titleBlock__title}>Улучшения</p>
        </div>
        <p
          className={clsx(styles.description, styles.description__improvements)}
        >
          Расширения существующих тем и добавления <span>примеров кода</span>
        </p>
        <Image
          src="/show_code_360.png"
          alt="Пример кода для мобильных устройств"
          width={305}
          height={286}
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__360
          )}
        />
        <Image
          src="/show_code_1024.png"
          alt="Пример кода для планшетов"
          width={418}
          height={342}
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__1024
          )}
        />
        <Image
          src="/show_code_1920.png"
          alt="Пример кода для десктопа"
          width={494}
          height={339}
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__1920
          )}
        />
      </li>
    </ul>
  );
}
