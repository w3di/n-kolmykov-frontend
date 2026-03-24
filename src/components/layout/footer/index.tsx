import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

import { SocialList } from '@/components/base';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialList />
      <nav aria-label='Навигация в подвале' className={styles.navigationList}>
        <ul className={styles.navigationList__list}>
          <li>
            <Link href='/' className={styles.navigationList__itemLink}>
              Главная
            </Link>
          </li>
          <li>
            <Link href='/about-me' className={styles.navigationList__itemLink}>
              Об авторе
            </Link>
          </li>
          <li>
            <Link href='/projects' className={styles.navigationList__itemLink}>
              Проекты
            </Link>
          </li>
          <li>
            <Link href='/knowledge' className={styles.navigationList__itemLink}>
              Знания
            </Link>
          </li>
        </ul>
      </nav>

      <Image
        src='/images/myLogo.webp'
        alt='Логотип nKolmykov'
        width={15}
        height={24}
        loading='lazy'
        className={styles.logo}
      />
    </footer>
  );
};

export default Footer;
