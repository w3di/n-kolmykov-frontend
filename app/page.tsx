import { HomePage } from '@/src/components/pages/home/home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description:
    'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Главная — nKolmykov',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    url: '/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Главная — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Главная — nKolmykov',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    images: ['/twitter-image.png']
  }
};

export default function Home() {
  return <HomePage />;
}
