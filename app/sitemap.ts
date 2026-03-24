import type { MetadataRoute } from 'next';

import { readJsonFile } from '@/data/reader';

type RawSection = {
  section: { id: string; name: string; slug: string };
  questions: { id: string; slug: string }[];
};

const knowledgeFiles = [
  'javascript.json',
  'react.json',
  'typescript.json',
  'html.json',
  'css.json',
  'nextjs.json',
  'react-native.json'
];

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://n-kolmykov.ru';
  const now = new Date();

  const sections = await Promise.all(
    knowledgeFiles.map((file) => readJsonFile<RawSection>(`knowledge/${file}`))
  );

  const knowledgeEntries: MetadataRoute.Sitemap = sections
    .filter((s): s is RawSection => s !== null)
    .flatMap((s) =>
      s.questions.map((q) => ({
        url: `${baseUrl}/knowledge/${s.section.slug}/${q.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8
      }))
    );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/about-me`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    ...knowledgeEntries
  ];
};

export default sitemap;
