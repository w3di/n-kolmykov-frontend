import { HomePage } from '@/src/components/pages/home/home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная - nKolmykov',
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
        url: '/images/myLogo.webp',
        width: 1024,
        height: 576,
        alt: 'Главная — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Главная — nKolmykov',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    images: ['/images/myLogo.webp']
  }
};

export default function Home() {
  return <HomePage />;
}
