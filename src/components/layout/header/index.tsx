import clsx from 'clsx';
import Link from 'next/link';

import styles from './header.module.scss';
import HeaderNav from './ui/header-nav';

import { Icon, SocialList } from '@/components/base';

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

      <HeaderNav />

      <SocialList />
    </header>
  );
};

export default Header;
