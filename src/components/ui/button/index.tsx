import Image from "next/image";
import styles from "./button.module.scss";
import Icon from "../icon";

export default function Button() {
  return (
    <button className={styles.button}>
      <p className={styles.button_text}>Пройти квиз</p>

      <Icon name="arrowRight" className={styles.button_icon} />
    </button>
  );
}
