import type { Metadata } from 'next';

import { HomePage } from '@/src/components/pages/home/home';

export const metadata: Metadata = {
  title: 'Главная — подготовка к Fullstack собеседованиям',
  description:
    'nKolmykov — бесплатная платформа для подготовки к техническим собеседованиям. Более 1000 вопросов с развёрнутыми ответами по React, TypeScript, Next.js, JavaScript, HTML и Sass. Интерактивный квиз для junior, middle и senior разработчиков.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'nKolmykov — 1000+ вопросов для Fullstack собеседований',
    description:
      'Бесплатный интерактивный квиз: React, TypeScript, Next.js, JavaScript, HTML, Sass. Готовьтесь к собеседованиям эффективно с развёрнутыми ответами.',
    url: '/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'nKolmykov — подготовка к Fullstack собеседованиям'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nKolmykov — 1000+ вопросов для Fullstack собеседований',
    description:
      'Бесплатный интерактивный квиз по React, TypeScript, Next.js, JavaScript. 1000+ вопросов с ответами для подготовки к собеседованиям.',
    images: ['/twitter-image.png']
  }
};

const Home = () => {
  return <HomePage />;
};

export default Home;
