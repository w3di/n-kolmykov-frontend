import { CollectionBlock, Icon } from "@/src/shared/ui/kit";
import styles from "./contact-me.module.scss";

const contacts = [
  {
    href: "https://t.me/closer2death",
    icon: "telegram" as const,
    name: "Telegram",
    description: "Пишите, я с радостью отвечу вам на все вопросы",
  },
  {
    href: "https://www.linkedin.com/in/nikolay-kolmykov-26b877279/",
    icon: "linkedIn" as const,
    name: "LinkedIn",
    description: "Следите за обновлениями по проекту",
  },
  {
    href: "https://github.com/w3di",
    icon: "github" as const,
    name: "GitHub",
    description: "Сообщайте об ошибках и вносите свой вклад в проект.",
  },
  {
    href: "mailto:koliakolmikov@gmail.com",
    icon: "baselineEmail" as const,
    name: "Email",
    description: "Готов обсудить коммерческие предложения",
  },
];

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
        {contacts.map((contact) => (
          <a
            key={contact.icon}
            className={styles.contactList__item}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name={contact.icon}
              className={styles.contactList__item__icon}
            />
            <p className={styles.contactList__item__name}>{contact.name}</p>
            <p className={styles.contactList__item__description}>
              {contact.description}
            </p>
          </a>
        ))}
      </ul>
    </section>
  );
}
