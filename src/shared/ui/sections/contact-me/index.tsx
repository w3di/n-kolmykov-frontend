import { CollectionBlock } from '@/src/shared/ui/kit';
import styles from './contact-me.module.scss';
import LottieLink from './ui/lottie-link';

const contacts = [
  {
    href: 'https://t.me/closer2death',
    icon: '/lottie/telegram.json',
    name: 'Telegram',
    description: 'Пишите, я с радостью отвечу вам на все вопросы',
    style: { scale: 2.2 }
  },
  {
    href: 'https://www.linkedin.com/in/nikolay-kolmykov-26b877279/',
    icon: '/lottie/linkedin.json',
    name: 'LinkedIn',
    description: 'Следите за обновлениями по проекту',
    style: { scale: 1.4 }
  },
  {
    href: 'https://github.com/w3di',
    icon: '/lottie/github.json',
    name: 'GitHub',
    description: 'Сообщайте об ошибках и вносите свой вклад в проект.'
  },
  {
    href: 'mailto:koliakolmikov@gmail.com',
    icon: '/lottie/email.json',
    name: 'Email',
    description: 'Готов обсудить коммерческие предложения',
    style: { scale: 1.3 }
  }
];

export default function ContactMe() {
  return (
    <section className={styles.contactMe}>
      <CollectionBlock icon='headphones' label='На связи' />
      <div className={styles.textBlock}>
        <p className={styles.textBlock__title}>Свяжитесь со мной</p>
        <p className={styles.textBlock__description}>
          Напишите мне, если у вас остались вопросы?
        </p>
      </div>

      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <LottieLink key={contact.icon} contact={contact} />
        ))}
      </ul>
    </section>
  );
}
