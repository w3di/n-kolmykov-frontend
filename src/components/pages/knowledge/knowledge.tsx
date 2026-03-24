'use client';

import styles from './knowledge.module.scss';

import { Separator } from '@/components/base';
import { Defaults } from '@/components/layout';
import KnowledgeHero from '@/components/sections/knowledge/hero';
import ProgressBar from '@/components/sections/knowledge/progress-bar';
import QuestionCard from '@/components/sections/knowledge/question-card';
import Results from '@/components/sections/knowledge/results';
import TopicPicker from '@/components/sections/knowledge/topic-picker';
import type { Rating, SectionMeta } from '@/entities/question';
import { useSession } from '@/features/knowledge/session';

type KnowledgePageProps = {
  sectionsMeta: SectionMeta[];
};

export const KnowledgePage = ({ sectionsMeta }: KnowledgePageProps) => {
  const { state, currentQuestion, actions } = useSession();

  return (
    <Defaults className={styles.knowledge}>
      {state.phase === 'picking' && (
        <>
          <KnowledgeHero />
          <Separator />
          <TopicPicker sectionsMeta={sectionsMeta} onStart={actions.start} />
        </>
      )}

      {state.phase === 'session' && currentQuestion && (
        <>
          <ProgressBar
            currentIndex={state.currentIndex}
            total={state.questions.length}
            ratings={state.ratings}
            onPrev={actions.prev}
            onNext={actions.next}
            onFinish={actions.finish}
          />
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            revealed={state.revealed}
            currentRating={
              state.ratings[currentQuestion.id] as Rating | undefined
            }
            onReveal={actions.reveal}
            onRate={(rating) => actions.rate(currentQuestion.id, rating)}
          />
        </>
      )}

      {state.phase === 'results' && (
        <Results
          questions={state.questions}
          ratings={state.ratings as Record<string, Rating>}
          onRestart={actions.restart}
        />
      )}
    </Defaults>
  );
};
