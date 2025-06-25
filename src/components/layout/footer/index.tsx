import styles from "./footer.module.scss";
import Image from "next/image";

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
    </footer>
  );
}
