import Image from 'next/image';

import styles from './hi-its-me.module.scss';

const HiItsMe = () => {
  return (
    <section className={styles.hiItsMe}>
      <div className={styles.meImage}>
        <Image
          src='/images/my-photo.webp'
          alt='Фото Николая Колмыкова, Fullstack разработчик'
          loading='lazy'
          fill
          sizes='(max-width: 768px) 64px, (max-width: 1024px) 120px, (max-width: 1440px) 160px, 200px'
        />
      </div>
      <Image
        src='/images/ariana_cursor.webp'
        alt=''
        aria-hidden='true'
        width={76.3}
        height={44}
        loading='lazy'
        className={styles.arianaCursor}
      />
      <Image
        src='/images/nikolay_cursor.webp'
        alt=''
        aria-hidden='true'
        width={80.7}
        height={44}
        loading='lazy'
        className={styles.nikolayCursor}
      />
      <div className={styles.meInfo}>
        <h1 className={styles.meInfo__title}>Привет, я Николай!</h1>
        <p className={styles.meInfo__description}>Fullstack Developer</p>
      </div>
    </section>
  );
};

export default HiItsMe;
