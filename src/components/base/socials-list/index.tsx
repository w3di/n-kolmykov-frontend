import Icon from '@/components/base/icon';

import styles from './socials-list.module.scss';

const socials = [
  {
    href: 'https://t.me/closer2death',
    icon: 'telegram' as const,
    label: 'Telegram - связаться с автором'
  },
  {
    href: 'https://www.linkedin.com/in/nkolmykov',
    icon: 'linkedIn' as const,
    label: 'LinkedIn - профиль автора'
  },
  {
    href: 'https://github.com/w3di',
    icon: 'github' as const,
    label: 'GitHub - репозитории автора'
  }
];

const SocialList = () => {
  return (
    <div className={styles.socialsList}>
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.icon}
          className={styles.socialsList__item}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={item.label}
        >
          <Icon name={item.icon} className={styles.socialsList__itemIcon} />
        </a>
      ))}
    </div>
  );
};

export default SocialList;
