import Image from 'next/image';
import styles from './footer.module.scss';
import Link from 'next/link';
import { SocialList } from '../../base';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialList />
      <div className={styles.navigationList}>
        <Link href='/' className={styles.navigationList__itemLink}>
          Главная
        </Link>
        <Link href='/about-me' className={styles.navigationList__itemLink}>
          Об авторе
        </Link>
        <Link href='/quiz' className={styles.navigationList__itemLink}>
          Квиз
        </Link>
      </div>

      <Image
        src='/images/myLogo.webp'
        alt='Autor logo'
        width={15}
        height={24}
        className={styles.logo}
      />
    </footer>
  );
}
