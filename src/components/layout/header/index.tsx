import styles from "./header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/myLogo.png"
          alt="Autor logo"
          width={15}
          height={24}
          className={styles.logoContainer__logo}
        />
        <Image
          src="/nKolmykov.svg"
          alt="project name"
          width={80}
          height={20}
          className={styles.logoContainer__nKolmykov}
        />
      </div>

      <div className={styles.navigationList}>
        <a href="/about" className={styles.navigationList__itemLink}>
          Об авторе
        </a>
        <div className={styles.navigationList__separator} />
        <a href="/quiz" className={styles.navigationList__itemLink}>
          Квиз
        </a>
      </div>

      <div className={styles.socials}>
        {[0, 1, 2].map((item) => (
          <a href="/" key={item}>
            <Image
              src="/expo.svg"
              alt="Social link"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
        ))}
      </div>
    </header>
  );
}
