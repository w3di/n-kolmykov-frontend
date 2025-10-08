import Image from 'next/image';
import styles from './hi-its-me.module.scss';
import myPhoto from '@/public/images/my-photo.webp';

export default function HiItsMe() {
  return (
    <section className={styles.hiItsMe}>
      <div className={styles.meImage}>
        <Image
          src={myPhoto}
          alt='myLogo'
          priority
          fetchPriority='high'
          quality={80}
          fill
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <Image
        src='/images/ariana_cursor.webp'
        alt='myLogo'
        width={76.3}
        height={44}
        className={styles.arianaCursor}
      />
      <Image
        src='/images/nikolay_cursor.webp'
        alt='myLogo'
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
