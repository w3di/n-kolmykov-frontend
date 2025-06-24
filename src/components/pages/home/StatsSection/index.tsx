import Image from "next/image";
import styles from "./statsSection.module.scss";

export default function StatsSection() {
  return (
    <ul className={styles.statsSection}>
      {[0, 1, 2].map((item) => (
        <li key={item}>
          <Image
            src="/book.svg"
            alt="book_icon"
            width={14}
            height={14}
            className={styles.icon}
          />
          <div className={styles.wrapper}>
            <p className={styles.text}>вопросов</p>
            <p className={styles.countText}>100+</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
