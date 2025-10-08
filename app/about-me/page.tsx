import type { Metadata } from 'next';
import { AboutMePage } from '@/src/components/pages/about-me/about-me';

export const metadata: Metadata = {
  title: 'Обо мне',
  description:
    'Николай Колмыков — Frontend разработчик с опытом в React, TypeScript, Next.js. Автор open‑source проекта nKolmykov для подготовки к собеседованиям.',
  alternates: { canonical: '/about-me' },
  openGraph: {
    title: 'Обо мне — nKolmykov',
    description:
      'Николай Колмыков — Frontend разработчик с опытом в React, TypeScript, Next.js. Автор open‑source проекта nKolmykov для подготовки к собеседованиям.',
    url: '/about-me',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Обо мне — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Обо мне — nKolmykov',
    description:
      'Николай Колмыков — Frontend разработчик с опытом в React, TypeScript, Next.js. Автор open‑source проекта nKolmykov для подготовки к собеседованиям.',
    images: ['/twitter-image.png']
  }
};

export default function AboutMe() {
  return <AboutMePage />;
}
