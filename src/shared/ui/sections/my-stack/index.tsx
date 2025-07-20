import { Icon } from "@/src/shared/ui/kit";
import styles from "./my-stack.module.scss";

export default function MyStack() {
  return (
    <ul className={styles.myStack}>
      <p className={styles.title}>Технологический стек</p>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <li key={item} className={styles.item}>
          <Icon name="react" className={styles.item__icon} />
        </li>
      ))}
    </ul>
  );
}
