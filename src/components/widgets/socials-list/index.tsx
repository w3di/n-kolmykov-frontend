import Icon from "../../ui/icon";
import styles from "./socials-list.module.scss";

const socials = [
  {
    href: "/",
    icon: "telegram" as const,
  },
  {
    href: "/",
    icon: "discord" as const,
  },
  {
    href: "/",
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
        >
          <Icon name={item.icon} className={styles.socialsList__itemIcon} />
        </a>
      ))}
    </div>
  );
}
