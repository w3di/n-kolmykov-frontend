import Link from 'next/link';

import styles from './not-found.module.scss';

import { Icon } from '@/components/base';

const NotFoundContent = () => {
  return (
    <section className={styles.notFound}>
      <span className={styles.code}>404</span>
      <Icon name='sparkle' className={styles.icon} />
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.description}>
        Возможно, она была удалена или вы перешли по неверной ссылке.
      </p>
      <Link href='/' className={styles.button}>
        На главную
      </Link>
    </section>
  );
};

export { NotFoundContent };
