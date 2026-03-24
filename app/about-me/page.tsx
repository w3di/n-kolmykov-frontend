import type { Metadata } from 'next';

import { StructuredData } from '@/components/base';
import { AboutMePage } from '@/src/components/pages/about-me/about-me';

export const metadata: Metadata = {
  title: 'Обо мне — Николай Колмыков, Fullstack разработчик',
  description:
    'Николай Колмыков — Fullstack-разработчик, автор open‑source проекта nKolmykov. Опыт работы с React, TypeScript, Next.js. Создатель платформы с 1000+ вопросами для подготовки к техническим собеседованиям.',
  alternates: { canonical: '/about-me' },
  openGraph: {
    title: 'Николай Колмыков — Fullstack разработчик и автор nKolmykov',
    description:
      'Fullstack-разработчик с опытом в React, TypeScript, Next.js. Автор бесплатного open‑source проекта для подготовки к техническим собеседованиям.',
    url: '/about-me',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Николай Колмыков — Fullstack разработчик'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Николай Колмыков — Fullstack разработчик и автор nKolmykov',
    description:
      'Fullstack-разработчик с опытом в React, TypeScript, Next.js. Автор бесплатного проекта с 1000+ вопросами для собеседований.',
    images: ['/twitter-image.png']
  }
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Николай Колмыков',
  'url': 'https://n-kolmykov.ru/about-me',
  'jobTitle': 'Fullstack Developer',
  'knowsAbout': [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'NestJS',
    'PostgreSQL'
  ],
  'sameAs': [
    'https://github.com/w3di',
    'https://t.me/closer2death',
    'https://www.linkedin.com/in/nkolmykov'
  ]
};

const AboutMe = () => {
  return (
    <>
      <StructuredData schemas={[personSchema]} />
      <AboutMePage />
    </>
  );
};

export default AboutMe;
