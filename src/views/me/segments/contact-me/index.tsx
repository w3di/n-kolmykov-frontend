import { CollectionBlock } from "@/src/components/ui";
import styles from "./contact-me.module.scss";
import Icon from "@/src/components/ui/icon";

export default function ContactMe() {
  return (
    <section className={styles.contactMe}>
      <CollectionBlock icon="headphones" label="На связи" />
      <div className={styles.textBlock}>
        <p className={styles.textBlock__title}>Свяжитесь со мной</p>
        <p className={styles.textBlock__description}>
          Напишите мне, если у вас остались вопросы?
        </p>
      </div>

      <ul className={styles.contactList}>
        <li className={styles.contactList__item}>
          <Icon name="github" className={styles.contactList__item__icon} />
          <p className={styles.contactList__item__name}>GitHub</p>
          <p className={styles.contactList__item__description}>
            Сообщайте об ошибках и вносите свой вклад в проект.
          </p>
        </li>
        <li className={styles.contactList__item}>
          <Icon name="github" className={styles.contactList__item__icon} />
          <p className={styles.contactList__item__name}>GitHub</p>
          <p className={styles.contactList__item__description}>
            Сообщайте об ошибках и вносите свой вклад в проект.
          </p>
        </li>
        <li className={styles.contactList__item}>
          <Icon name="github" className={styles.contactList__item__icon} />
          <p className={styles.contactList__item__name}>GitHub</p>
          <p className={styles.contactList__item__description}>
            Сообщайте об ошибках и вносите свой вклад в проект.
          </p>
        </li>
        <li className={styles.contactList__item}>
          <Icon name="github" className={styles.contactList__item__icon} />
          <p className={styles.contactList__item__name}>GitHub</p>
          <p className={styles.contactList__item__description}>
            Сообщайте об ошибках и вносите свой вклад в проект.
          </p>
        </li>
      </ul>
    </section>
  );
}
