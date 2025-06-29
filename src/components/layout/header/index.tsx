import { Icon } from "../../ui";
import SocialList from "../../widgets/socials-list";
import styles from "./header.module.scss";

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

export default function Header() {
  return (
    <header className={styles.header}>
      <Icon name="nKolmykov" className={styles.logo} />

      <div className={styles.navigationList}>
        <a href="/about" className={styles.navigationList__itemLink}>
          Об авторе
        </a>
        <div className={styles.navigationList__separator} />
        <a href="/quiz" className={styles.navigationList__itemLink}>
          Квиз
        </a>
      </div>

      <SocialList />
    </header>
  );
}
