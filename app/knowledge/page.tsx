import type { Metadata } from 'next';

import { getAllSectionsMeta } from '@/entities/question/question.server';
import { KnowledgePage } from '@/src/components/pages/knowledge/knowledge';

export const metadata: Metadata = {
  title: 'Проверка знаний — подготовка к собеседованиям',
  description:
    'Проверьте свои знания по JavaScript, React, TypeScript, HTML, Next.js и Sass. Карточки с вопросами и ответами для подготовки к техническим собеседованиям.',
  alternates: { canonical: '/knowledge' },
  openGraph: {
    title: 'Проверка знаний — подготовка к собеседованиям',
    description:
      'Карточки с вопросами и ответами по JavaScript, React, TypeScript, Next.js для подготовки к техническим собеседованиям.',
    url: '/knowledge',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Проверка знаний — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Проверка знаний — подготовка к собеседованиям',
    description:
      'Карточки для подготовки к техническим собеседованиям по fullstack-разработке.',
    images: ['/twitter-image.png']
  }
};

const Knowledge = async () => {
  const sectionsMeta = await getAllSectionsMeta();

  return <KnowledgePage sectionsMeta={sectionsMeta} />;
};

export default Knowledge;
