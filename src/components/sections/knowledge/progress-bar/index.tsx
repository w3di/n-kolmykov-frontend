'use client';

import clsx from 'clsx';

import styles from './progress-bar.module.scss';

import { Icon } from '@/components/base';
import { getSessionStats } from '@/features/knowledge/session';

type ProgressBarProps = {
  currentIndex: number;
  total: number;
  ratings: Record<string, string>;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
};

const ProgressBar = ({
  currentIndex,
  total,
  ratings,
  onPrev,
  onNext,
  onFinish
}: ProgressBarProps) => {
  const stats = getSessionStats(ratings);
  const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBar__header}>
        <span
          className={styles.progressBar__counter}
          aria-live='polite'
          role='status'
        >
          {currentIndex + 1} / {total}
        </span>
        <div className={styles.progressBar__stats}>
          {stats.knew > 0 && (
            <span
              className={clsx(
                styles.progressBar__stat,
                styles['progressBar__stat--knew']
              )}
            >
              {stats.knew} знал
            </span>
          )}
          {stats.partial > 0 && (
            <span
              className={clsx(
                styles.progressBar__stat,
                styles['progressBar__stat--partial']
              )}
            >
              {stats.partial} частично
            </span>
          )}
          {stats.didntKnow > 0 && (
            <span
              className={clsx(
                styles.progressBar__stat,
                styles['progressBar__stat--didnt_know']
              )}
            >
              {stats.didntKnow} не знал
            </span>
          )}
        </div>
      </div>

      <div className={styles.progressBar__track}>
        <div
          className={styles.progressBar__fill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.progressBar__actions}>
        <button
          type='button'
          className={styles.progressBar__navButton}
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label='Предыдущий вопрос'
        >
          <Icon name='arrowBack' />
        </button>
        <button
          type='button'
          className={styles.progressBar__navButton}
          onClick={onNext}
          aria-label='Следующий вопрос'
        >
          <Icon name='arrowRight' />
        </button>
        <button
          type='button'
          className={styles.progressBar__finishButton}
          onClick={onFinish}
        >
          Завершить
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
