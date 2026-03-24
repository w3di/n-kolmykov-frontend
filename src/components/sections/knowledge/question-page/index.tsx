import Link from 'next/link';
import Markdown from 'react-markdown';

import styles from './question-page.module.scss';

import type { Question } from '@/entities/question';

type QuestionPageProps = {
  question: Question;
  sectionName: string;
  sectionSlug: string;
};

const QuestionPageContent = ({
  question,
  sectionName,
  sectionSlug
}: QuestionPageProps) => {
  return (
    <article className={styles.questionPage}>
      <nav className={styles.breadcrumbs} aria-label='Хлебные крошки'>
        <Link href='/knowledge' className={styles.breadcrumbs__link}>
          Знания
        </Link>
        <span className={styles.breadcrumbs__separator}>/</span>
        <Link
          href={`/knowledge?section=${sectionSlug}`}
          className={styles.breadcrumbs__link}
        >
          {sectionName}
        </Link>
        <span className={styles.breadcrumbs__separator}>/</span>
        <span className={styles.breadcrumbs__current}>{question.slug}</span>
      </nav>

      <div className={styles.questionBody}>
        <h1 className={styles.questionPage__question}>{question.question}</h1>

        <div className={styles.questionPage__meta}>
          <span className={styles.questionPage__difficulty}>
            {question.difficulty === 'interview'
              ? 'Собеседование'
              : 'Углублённый'}
          </span>
          {question.tags.map((tag) => (
            <span key={tag} className={styles.questionPage__tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.questionPage__answer}>
          <Markdown>{question.answer}</Markdown>
        </div>
      </div>
    </article>
  );
};

export default QuestionPageContent;
