import type { Metadata } from 'next';

import { QuizProvider } from '@/src/components/context/quiz/quiz-context';
import { QuizPage } from '@/src/components/pages/quiz/quiz';

export const metadata: Metadata = {
  title: 'Quiz',
  description:
    'Интерактивный квиз для подготовки к собеседованиям Frontend разработчика. 1000+ вопросов по React, TypeScript, Next.js, JavaScript с развернутыми ответами.',
  alternates: { canonical: '/quiz' },
  openGraph: {
    title: 'Quiz — nKolmykov',
    description:
      'Интерактивный квиз для подготовки к собеседованиям Frontend разработчика. 1000+ вопросов по React, TypeScript, Next.js, JavaScript с развернутыми ответами.',
    url: '/quiz',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Quiz — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz — nKolmykov',
    description:
      'Интерактивный квиз для подготовки к собеседованиям Frontend разработчика. 1000+ вопросов по React, TypeScript, Next.js, JavaScript с развернутыми ответами.',
    images: ['/twitter-image.png']
  }
};

const Quiz = () => {
  return (
    <QuizProvider>
      <QuizPage />
    </QuizProvider>
  );
};

export default Quiz;
