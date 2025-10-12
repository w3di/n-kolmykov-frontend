import Script from 'next/script';

import type { StructuredDataConfig } from './structured-data.types';

export const structuredData: StructuredDataConfig = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'nKolmykov',
  'description':
    'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
  'url': 'https://n-kolmykov.ru',
  'applicationCategory': 'EducationalApplication',
  'operatingSystem': 'Web Browser',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'author': {
    '@type': 'Person',
    'name': 'Nikolay Kolmykov',
    'url': 'https://github.com/w3di'
  },
  'publisher': {
    '@type': 'Person',
    'name': 'Nikolay Kolmykov'
  },
  'keywords': [
    'подготовка к собеседованию',
    'техническое собеседование',
    'frontend разработчик',
    'react',
    'typescript',
    'nextjs',
    'javascript'
  ],
  'inLanguage': 'ru',
  'isAccessibleForFree': true,
  'educationalUse': 'instruction',
  'learningResourceType': 'quiz',
  'educationalLevel': 'intermediate'
};

export const StructuredData = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
      id='structured-data'
      type='application/ld+json'
    />
  );
};
