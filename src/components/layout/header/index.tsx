import clsx from 'clsx';
import Link from 'next/link';

import { Icon, SocialList } from '@/components/base';

import styles from './header.module.scss';

const Header = ({ variant = 'default' }: { variant?: 'default' | 'short' }) => {
  return (
    <header className={clsx(styles.header, styles[`header--${variant}`])}>
      <Link
        href='/'
        className={clsx(styles.logo, styles[`logo--${variant}`])}
        aria-label='nKolmykov - перейти на главную страницу'
      >
        <Icon
          name='nKolmykov'
          className={clsx(styles.logo, styles[`logo--${variant}`])}
        />
      </Link>

      <div className={styles.navigationList}>
        <Link
          href='/about-me'
          className={clsx(styles.navigationList__itemLink)}
        >
          Об авторе
        </Link>
        <div className={clsx(styles.navigationList__separator)} />
        <Link href='/quiz' className={clsx(styles.navigationList__itemLink)}>
          Квиз
        </Link>
      </div>

      <SocialList />
    </header>
  );
};

export default Header;
