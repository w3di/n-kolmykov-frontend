import SocialList from "../../widgets/socials-list";
import styles from "./footer.module.scss";
import Image from "next/image";

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigationList}>
        <a href="/" className={styles.navigationList__itemLink}>
          Главная
        </a>
        <a href="/about" className={styles.navigationList__itemLink}>
          Об авторе
        </a>
        <a href="/quiz" className={styles.navigationList__itemLink}>
          Квиз
        </a>
      </div>

      <Image
        src="/myLogo.png"
        alt="Autor logo"
        width={15}
        height={24}
        className={styles.logo}
      />

      <SocialList />
    </footer>
  );
}
