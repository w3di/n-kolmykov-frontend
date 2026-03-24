'use client';

import clsx from 'clsx';
import Link from 'next/link';

import styles from './results.module.scss';

import type { Rating } from '@/entities/question';
import type { SessionQuestion } from '@/features/knowledge/session';
import {
  getSessionStats,
  getWeakQuestions
} from '@/features/knowledge/session';

type ResultsProps = {
  questions: SessionQuestion[];
  ratings: Record<string, Rating>;
  onRestart: () => void;
};

const Results = ({ questions, ratings, onRestart }: ResultsProps) => {
  const stats = getSessionStats(ratings);
  const weakQuestions = getWeakQuestions(questions, ratings);

  return (
    <>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statCard__number}>{stats.knew}</span>
          <span className={styles.statCard__label}>Знал</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statCard__number}>{stats.partial}</span>
          <span className={styles.statCard__label}>Частично</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statCard__number}>{stats.didntKnow}</span>
          <span className={styles.statCard__label}>Не знал</span>
        </div>
      </div>

      {weakQuestions.length > 0 && (
        <div className={styles.weakSection}>
          <h2 className={styles.weakSection__title}>
            Стоит повторить ({weakQuestions.length})
          </h2>
          {weakQuestions.map((q) => (
            <Link
              key={q.id}
              href={`/knowledge/${q.sectionSlug}/${q.slug}`}
              className={styles.weakItem}
            >
              <span
                className={clsx(
                  styles.weakItem__dot,
                  styles[`weakItem__dot--${ratings[q.id]}`]
                )}
              />
              <span className={styles.weakItem__text}>{q.question}</span>
              <span className={styles.weakItem__section}>{q.sectionName}</span>
            </Link>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <button
          type='button'
          className={clsx(styles.actionButton, styles['actionButton--primary'])}
          onClick={onRestart}
        >
          Начать заново
        </button>
        <Link
          href='/knowledge'
          className={clsx(
            styles.actionButton,
            styles['actionButton--secondary']
          )}
        >
          К выбору тем
        </Link>
      </div>
    </>
  );
};

export default Results;
