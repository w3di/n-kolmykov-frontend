import Script from 'next/script';

import type {
  JsonLdSchema,
  StructuredDataProps
} from './structured-data.types';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://n-kolmykov.ru';

const webApplicationSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'nKolmykov',
  'description':
    'Open‑source проект для подготовки к техническим собеседованиям: 1000+ вопросов и ответов по React, TypeScript, Next.js, JavaScript, HTML, Sass.',
  'url': baseUrl,
  'applicationCategory': 'EducationalApplication',
  'operatingSystem': 'Web Browser',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'RUB'
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
    'fullstack разработчик',
    'react',
    'typescript',
    'nextjs',
    'javascript',
    'вопросы и ответы'
  ],
  'inLanguage': 'ru',
  'isAccessibleForFree': true,
  'educationalUse': 'instruction',
  'learningResourceType': 'self assessment',
  'educationalLevel': 'intermediate',
  'screenshot': `${baseUrl}/opengraph-image.png`
};

const organizationSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'nKolmykov',
  'url': baseUrl,
  'logo': `${baseUrl}/android-chrome-512x512.png`,
  'sameAs': ['https://github.com/w3di'],
  'founder': {
    '@type': 'Person',
    'name': 'Nikolay Kolmykov'
  }
};

const websiteSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'nKolmykov',
  'alternateName': 'nKolmykov Lore',
  'url': baseUrl,
  'description':
    'Open‑source проект для подготовки к техническим собеседованиям по fullstack-разработке.',
  'inLanguage': 'ru',
  'publisher': {
    '@type': 'Person',
    'name': 'Nikolay Kolmykov'
  }
};

const breadcrumbSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Главная',
      'item': baseUrl
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Проверка знаний',
      'item': `${baseUrl}/knowledge`
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Обо мне',
      'item': `${baseUrl}/about-me`
    }
  ]
};

const faqSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Что такое nKolmykov?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text':
          'nKolmykov — это бесплатный open-source проект для подготовки к техническим собеседованиям по fullstack-разработке. Содержит более 1000 вопросов и развёрнутых ответов по React, TypeScript, JavaScript, Next.js, HTML и Sass.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Какие технологии охватывает проект?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text':
          'Проект охватывает 7 технологий: JavaScript, React, TypeScript, HTML, CSS, Next.js и React Native. Вопросы покрывают уровни от junior до senior.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Сколько вопросов доступно для подготовки?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text':
          'В проекте доступно более 1000 вопросов с развёрнутыми ответами по популярным технологиям fullstack-разработки. Количество вопросов постоянно растёт.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Проект бесплатный?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text':
          'Да, nKolmykov — полностью бесплатный open-source проект. Исходный код доступен на GitHub.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Как пользоваться проверкой знаний?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text':
          'Перейдите в раздел «Проверка знаний», выберите интересующие технологии и темы, и отвечайте на вопросы. Для каждого вопроса можно раскрыть развёрнутый ответ и оценить свои знания.'
      }
    }
  ]
};

const speakableSchema: JsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'nKolmykov — подготовка к техническим собеседованиям',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'cssSelector': ['h1', 'h2', '[data-speakable]']
  },
  'url': baseUrl
};

const defaultSchemas: JsonLdSchema[] = [
  webApplicationSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  speakableSchema
];

export const StructuredData = ({ schemas }: StructuredDataProps) => {
  const allSchemas = schemas ?? defaultSchemas;

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
          id={`structured-data-${index}`}
          key={`structured-data-${index}`}
          type='application/ld+json'
        />
      ))}
    </>
  );
};
