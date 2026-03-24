'use client';

import { useState, useEffect, useMemo, useTransition } from 'react';

import clsx from 'clsx';

import styles from './topic-picker.module.scss';

import type { Difficulty, SectionMeta } from '@/entities/question';
import { fetchFilteredQuestions } from '@/entities/question';
import type { SessionQuestion } from '@/features/knowledge/session';

type TopicPickerProps = {
  sectionsMeta: SectionMeta[];
  onStart: (questions: SessionQuestion[]) => void;
};

const difficultyOptions: {
  value: Difficulty | 'all';
  label: string;
  desc: string;
}[] = [
  { value: 'all', label: 'Все', desc: 'Без фильтрации по уровню' },
  {
    value: 'interview',
    label: 'Собеседование',
    desc: 'Базовые и часто задаваемые'
  },
  { value: 'deep', label: 'Углублённые', desc: 'Продвинутые и детальные' }
];

const TopicPicker = ({ sectionsMeta, onStart }: TopicPickerProps) => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [questionCount, setQuestionCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const availableTags = useMemo(() => {
    const selected = sectionsMeta.filter((s) =>
      selectedSections.includes(s.slug)
    );
    const allTags = selected.flatMap((s) => s.tags);
    return [...new Set(allTags)].sort();
  }, [sectionsMeta, selectedSections]);

  useEffect(() => {
    setSelectedTags((prev) => prev.filter((t) => availableTags.includes(t)));
  }, [availableTags]);

  const tagsForQuery = useMemo(
    () => selectedTags.filter((t) => availableTags.includes(t)),
    [selectedTags, availableTags]
  );

  useEffect(() => {
    if (selectedSections.length === 0) {
      setQuestionCount(0);
      return;
    }

    let cancelled = false;

    fetchFilteredQuestions({
      sections: selectedSections,
      tags: tagsForQuery,
      difficulty
    }).then((qs) => {
      if (!cancelled) setQuestionCount(qs.length);
    });

    return () => {
      cancelled = true;
    };
  }, [selectedSections, tagsForQuery, difficulty]);

  const toggleSection = (slug: string) => {
    setSelectedSections((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const selectAllTags = () => setSelectedTags([...availableTags]);
  const clearAllTags = () => setSelectedTags([]);

  const handleStart = () => {
    if (selectedSections.length === 0) return;
    startTransition(async () => {
      const questions = await fetchFilteredQuestions({
        sections: selectedSections,
        tags: selectedTags,
        difficulty
      });
      onStart(questions);
    });
  };

  return (
    <div className={styles.picker}>
      <h2 className={styles.stepHeader}>Разделы</h2>

      <div
        className={styles.sectionGrid}
        role='group'
        aria-label='Выбор разделов'
      >
        {sectionsMeta.map((section) => {
          const isActive = selectedSections.includes(section.slug);
          return (
            <button
              key={section.slug}
              type='button'
              className={clsx(
                styles.sectionCard,
                isActive && styles['sectionCard--active']
              )}
              onClick={() => toggleSection(section.slug)}
              aria-pressed={isActive}
            >
              <div>
                <p className={styles.sectionCard__name}>{section.name}</p>
                <p className={styles.sectionCard__count}>
                  {section.questionCount} вопросов
                </p>
              </div>
              <div className={styles.sectionCard__check}>
                {isActive && (
                  <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                    <path
                      d='M2.5 6L5 8.5L9.5 4'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selectedSections.length > 0 && (
        <>
          <h2 className={styles.stepHeader}>Уровень</h2>

          <div
            className={styles.difficultyGrid}
            role='group'
            aria-label='Выбор уровня сложности'
          >
            {difficultyOptions.map((opt) => (
              <button
                key={opt.value}
                type='button'
                className={clsx(
                  styles.difficultyCard,
                  difficulty === opt.value && styles['difficultyCard--active']
                )}
                onClick={() => setDifficulty(opt.value)}
                aria-pressed={difficulty === opt.value}
              >
                <span className={styles.difficultyCard__name}>{opt.label}</span>
                <span className={styles.difficultyCard__desc}>{opt.desc}</span>
              </button>
            ))}
          </div>

          {availableTags.length > 0 && (
            <div className={styles.tagsContainer}>
              <div className={styles.tagsHeader}>
                <span className={styles.tagsTitle}>Темы</span>
                <button
                  type='button'
                  className={styles.tagsToggle}
                  onClick={
                    selectedTags.length === availableTags.length
                      ? clearAllTags
                      : selectAllTags
                  }
                  aria-label={
                    selectedTags.length === availableTags.length
                      ? 'Снять все темы'
                      : 'Выбрать все темы'
                  }
                >
                  {selectedTags.length === availableTags.length
                    ? 'Снять все'
                    : 'Выбрать все'}
                </button>
              </div>
              <div
                className={styles.tagsList}
                role='group'
                aria-label='Фильтр по темам'
              >
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type='button'
                    className={clsx(
                      styles.tag,
                      selectedTags.includes(tag) && styles['tag--active']
                    )}
                    onClick={() => toggleTag(tag)}
                    aria-pressed={selectedTags.includes(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.footer}>
            <span
              className={styles.questionCount}
              aria-live='polite'
              aria-atomic='true'
            >
              {questionCount > 0 ? `${questionCount} вопросов` : 'Нет вопросов'}
            </span>
            <button
              type='button'
              className={styles.startButton}
              disabled={questionCount === 0 || isPending}
              onClick={handleStart}
            >
              {isPending ? 'Загрузка...' : 'Начать'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopicPicker;
