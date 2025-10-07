import type { Metadata } from 'next';
import { QuizProvider } from '@/src/components/context/quiz/quiz-context';
import { QuizPage } from '@/src/components/pages/quiz/quiz';

export const metadata: Metadata = {
  title: 'Quiz',
  description:
    'Коллекция актуальных вопросов и развернутых ответов по популярным технологиям для подготовки к собеседованиям.',
  alternates: { canonical: '/quiz' },
  openGraph: {
    title: 'Quiz — nKolmykov',
    description:
      'Коллекция актуальных вопросов и развернутых ответов по популярным технологиям для подготовки к собеседованиям.',
    url: '/quiz',
    images: [
      {
        url: '/images/myLogo.webp',
        width: 1024,
        height: 576,
        alt: 'Quiz — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz — nKolmykov',
    description:
      'Коллекция актуальных вопросов и развернутых ответов по популярным технологиям для подготовки к собеседованиям.',
    images: ['/images/myLogo.webp']
  }
};

export default function Quiz() {
  return (
    <QuizProvider>
      <QuizPage />
    </QuizProvider>
  );
}
