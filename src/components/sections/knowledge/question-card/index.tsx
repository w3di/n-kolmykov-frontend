'use client';

import clsx from 'clsx';
import Markdown from 'react-markdown';

import styles from './question-card.module.scss';

import type { Rating } from '@/entities/question';
import type { SessionQuestion } from '@/features/knowledge/session';

type QuestionCardProps = {
  question: SessionQuestion;
  revealed: boolean;
  currentRating: Rating | undefined;
  onReveal: () => void;
  onRate: (rating: Rating) => void;
};

const ratingOptions: { value: Rating; label: string }[] = [
  { value: 'knew', label: 'Знал' },
  { value: 'partial', label: 'Частично' },
  { value: 'didnt_know', label: 'Не знал' }
];

const QuestionCard = ({
  question,
  revealed,
  currentRating,
  onReveal,
  onRate
}: QuestionCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__section}>{question.sectionName}</span>
        <span className={styles.card__dot} />
        <span className={styles.card__difficulty}>
          {question.difficulty === 'interview'
            ? 'Собеседование'
            : 'Углублённый'}
        </span>
        {question.tags.map((tag) => (
          <span key={tag} className={styles.card__tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.card__body} aria-live='polite'>
        <h2 className={styles.card__question}>{question.question}</h2>

        {!revealed ? (
          <button
            type='button'
            className={styles.card__revealButton}
            onClick={onReveal}
          >
            Показать ответ
          </button>
        ) : (
          <div className={styles.card__answer}>
            <Markdown>{question.answer}</Markdown>
          </div>
        )}
      </div>

      {revealed && (
        <div className={styles.card__ratingRow}>
          {ratingOptions.map((opt) => (
            <button
              key={opt.value}
              type='button'
              className={clsx(
                styles.ratingButton,
                styles[`ratingButton--${opt.value}`],
                currentRating === opt.value && styles['ratingButton--selected']
              )}
              onClick={() => onRate(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
