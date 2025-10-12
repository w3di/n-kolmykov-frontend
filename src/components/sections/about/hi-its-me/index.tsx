import Image from 'next/image';

import styles from './hi-its-me.module.scss';

const HiItsMe = () => {
  return (
    <section className={styles.hiItsMe}>
      <div className={styles.meImage}>
        <Image
          src={'/images/my-photo.webp'}
          alt='myLogo'
          priority
          fetchPriority='high'
          quality={80}
          fill
          sizes='(max-width: 768px) 64px, (max-width: 1024px) 120px, (max-width: 1440px) 160px, 200px'
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
};

export default HiItsMe;
