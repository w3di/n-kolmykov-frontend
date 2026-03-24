import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { StructuredData } from '@/components/base';
import { Defaults } from '@/components/layout';
import QuestionPageContent from '@/components/sections/knowledge/question-page';
import {
  getAllSections,
  getQuestionBySlug
} from '@/entities/question/question.server';

type PageParams = { params: Promise<{ section: string; slug: string }> };

export async function generateStaticParams() {
  const sections = await getAllSections();
  return sections.flatMap((s) =>
    s.questions.map((q) => ({ section: s.slug, slug: q.slug }))
  );
}

export async function generateMetadata({
  params
}: PageParams): Promise<Metadata> {
  const { section, slug } = await params;
  const question = await getQuestionBySlug(section, slug);

  if (!question) {
    return { title: 'Вопрос не найден' };
  }

  const title = `${question.question} — ${question.sectionName}`;
  const description =
    question.answer.slice(0, 160).replace(/[#*_\n]/g, '') + '...';

  return {
    title,
    description,
    alternates: { canonical: `/knowledge/${section}/${slug}` },
    openGraph: {
      title,
      description,
      url: `/knowledge/${section}/${slug}`
    },
    twitter: {
      card: 'summary',
      title,
      description
    }
  };
}

const QuestionPage = async ({ params }: PageParams) => {
  const { section, slug } = await params;
  const question = await getQuestionBySlug(section, slug);

  if (!question) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://n-kolmykov.ru';
  const description =
    question.answer.slice(0, 160).replace(/[#*_\n]/g, '') + '...';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': question.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': question.answer.replace(/[#*_]/g, '')
        }
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': question.question,
    'description': description,
    'articleSection': question.sectionName,
    'inLanguage': 'ru',
    'author': {
      '@type': 'Person',
      'name': 'Николай Колмыков',
      'url': 'https://n-kolmykov.ru/about-me'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'nKolmykov',
      'url': 'https://n-kolmykov.ru'
    },
    'mainEntityOfPage': `${baseUrl}/knowledge/${section}/${slug}`
  };

  const breadcrumbSchema = {
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
        'name': question.sectionName,
        'item': `${baseUrl}/knowledge?section=${section}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': question.question,
        'item': `${baseUrl}/knowledge/${section}/${slug}`
      }
    ]
  };

  return (
    <Defaults>
      <StructuredData schemas={[faqSchema, breadcrumbSchema, articleSchema]} />
      <div style={{ maxWidth: 944, margin: '48px auto 0', padding: '0 16px' }}>
        <QuestionPageContent
          question={question}
          sectionName={question.sectionName}
          sectionSlug={question.sectionSlug}
        />
      </div>
    </Defaults>
  );
};

export default QuestionPage;
