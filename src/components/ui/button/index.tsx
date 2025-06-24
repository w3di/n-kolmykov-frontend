import Image from "next/image";
import styles from "./button.module.scss";

export default function Button() {
  return (
    <button className={styles.button}>
      <p className={styles.button_text}>Пройти квиз</p>
      <Image
        src="/expo.svg"
        alt="arrow_right"
        width={12}
        height={12}
        className={styles.button_icon}
      />
    </button>
  );
}
