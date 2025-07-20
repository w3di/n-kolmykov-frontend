import Icon from "../icon";
import styles from "./socials-list.module.scss";

const socials = [
  {
    href: "https://t.me/closer2death",
    icon: "telegram" as const,
  },
  {
    href: "https://discord.com/",
    icon: "discord" as const,
  },
  {
    href: "https://github.com/w3di",
    icon: "github" as const,
  },
];

export default function SocialList() {
  return (
    <div className={styles.socialsList}>
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.icon}
          className={styles.socialsList__item}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={item.icon} className={styles.socialsList__itemIcon} />
        </a>
      ))}
    </div>
  );
}
