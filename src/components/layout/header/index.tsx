import clsx from "clsx";
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

export default function Header({
  variant = "default",
}: {
  variant?: "default" | "short";
}) {
  return (
    <header className={clsx(styles.header, styles[`header--${variant}`])}>
      <Icon
        name="nKolmykov"
        className={clsx(styles.logo, styles[`logo--${variant}`])}
      />

      <div className={styles.navigationList}>
        <a
          href="/about"
          className={clsx(
            styles.navigationList__itemLink,
            styles[`navigationList__itemLink--${variant}`]
          )}
        >
          Об авторе
        </a>
        <div
          className={clsx(
            styles.navigationList__separator,
            styles[`navigationList__separator--${variant}`]
          )}
        />
        <a
          href="/quiz"
          className={clsx(
            styles.navigationList__itemLink,
            styles[`navigationList__itemLink--${variant}`]
          )}
        >
          Квиз
        </a>
      </div>

      <SocialList />
    </header>
  );
}
