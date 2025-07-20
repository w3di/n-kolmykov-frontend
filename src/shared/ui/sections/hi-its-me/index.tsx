import Image from "next/image";
import styles from "./hi-its-me.module.scss";

export default function HiItsMe() {
  return (
    <section className={styles.hiItsMe}>
      <Image
        src="/images/myLogo.png"
        alt="myLogo"
        width={64}
        height={64}
        className={styles.meImage}
      />
      <Image
        src="/svg/ariana_cursor.svg"
        alt="myLogo"
        width={76.3}
        height={44}
        className={styles.arianaCursor}
      />
      <Image
        src="/svg/nikolay_cursor.svg"
        alt="myLogo"
        width={80.7}
        height={44}
        className={styles.nikolayCursor}
      />
      <div className={styles.meInfo}>
        <p className={styles.meInfo__title}>Привет, я Николай!</p>
        <p className={styles.meInfo__description}>Frontend Developer</p>
      </div>
    </section>
  );
}
