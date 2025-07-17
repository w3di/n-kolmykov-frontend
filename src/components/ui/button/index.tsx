import Icon from "@/src/components/ui/icon";
import styles from "./button.module.scss";

export default function Button() {
  return (
    <button className={styles.button}>
      <p className={styles.button_text}>Пройти квиз</p>

      <Icon name="arrowRight" className={styles.button_icon} />
    </button>
  );
}
