'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header-nav.module.scss';

const navItems = [
  { href: '/about-me', label: 'Об авторе' },
  { href: '/projects', label: 'Проекты' },
  { href: '/knowledge', label: 'Знания' }
];

const HeaderNav = () => {
  const pathname = usePathname();

  const visibleItems = navItems.map((item) =>
    pathname === item.href ? { href: '/', label: 'Главная' } : item
  );

  return (
    <nav aria-label='Основная навигация' className={styles.navigationList}>
      {visibleItems.map((item, index) => (
        <span key={item.href} className={styles.navigationList__wrapper}>
          {index > 0 && (
            <div
              className={styles.navigationList__separator}
              aria-hidden='true'
            />
          )}
          <Link href={item.href} className={styles.navigationList__itemLink}>
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default HeaderNav;
