import clsx from 'clsx';
import Image from 'next/image';

import styles from './pull.module.scss';

import { Icon } from '@/components/base';

const Pull = () => {
  return (
    <ul className={styles.pull}>
      <li className={styles.pull__item}>
        <div className={styles.titleBlock}>
          <Icon name='book' className={styles.titleBlock__icon} />
          <p className={styles.titleBlock__title}>Новые темы</p>
        </div>
        <p className={styles.description}>
          <span>Постоянные добавления</span> актуальных тем и вопросов
        </p>
        <figure className={styles.pullRequestImageBlock}>
          <Image
            src='/images/pull_50.webp'
            alt='Pull request с 50 коммитами'
            width={300}
            height={59}
            loading='lazy'
            className={styles.pullRequestImageBlock__pull50}
          />
          <Image
            src='/images/line_to_pull.webp'
            alt=''
            aria-hidden='true'
            width={116}
            height={152}
            loading='lazy'
            className={styles.pullRequestImageBlock__lineToPull}
          />
          <Image
            src='/images/pull_90.webp'
            alt='Pull request с 90 коммитами'
            width={300}
            height={59}
            loading='lazy'
            className={styles.pullRequestImageBlock__pull90}
          />
        </figure>
      </li>
      <li className={styles.pull__item}>
        <div className={styles.titleBlock}>
          <Icon name='sparkle' className={styles.titleBlock__icon} />
          <p className={styles.titleBlock__title}>Улучшения</p>
        </div>
        <p
          className={clsx(styles.description, styles.description__improvements)}
        >
          Расширения существующих тем и добавления <span>примеров кода</span>
        </p>
        <Image
          src='/images/show_code_360.webp'
          alt='Пример кода для мобильных устройств'
          width={305}
          height={286}
          quality={90}
          loading='lazy'
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__360
          )}
        />
        <Image
          src='/images/show_code_1024.webp'
          alt='Пример кода для планшетов'
          width={418}
          height={342}
          quality={90}
          loading='lazy'
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__1024
          )}
        />
        <Image
          src='/images/show_code_1920.webp'
          alt='Пример кода для десктопа'
          width={494}
          height={339}
          quality={90}
          loading='lazy'
          className={clsx(
            styles.showCodeImageBlock,
            styles.showCodeImageBlock__1920
          )}
        />
      </li>
    </ul>
  );
};

export default Pull;
