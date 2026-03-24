'use server';

import type {
  Difficulty,
  Question,
  Section,
  SectionMeta
} from './question.types';

import { readJsonFile } from '@/data/reader';

type RawSection = {
  section: { id: string; name: string; slug: string };
  questions: Question[];
};

const sectionFiles: Record<string, string> = {
  'javascript': 'javascript.json',
  'react': 'react.json',
  'typescript': 'typescript.json',
  'html': 'html.json',
  'css': 'css.json',
  'nextjs': 'nextjs.json',
  'react-native': 'react-native.json'
};

async function loadSection(slug: string): Promise<Section | null> {
  const file = sectionFiles[slug];
  if (!file) return null;

  const raw = await readJsonFile<RawSection>(`knowledge/${file}`);
  if (!raw) return null;

  return {
    id: raw.section.id,
    name: raw.section.name,
    slug: raw.section.slug,
    questions: raw.questions
  };
}

export async function fetchSectionsMeta(): Promise<SectionMeta[]> {
  const slugs = Object.keys(sectionFiles);
  const results = await Promise.all(slugs.map(loadSection));
  const sections = results.filter((s): s is Section => s !== null);

  return sections.map((s) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    questionCount: s.questions.length,
    tags: [...new Set(s.questions.flatMap((q) => q.tags))]
  }));
}

export async function fetchFilteredQuestions(params: {
  sections: string[];
  tags: string[];
  difficulty: Difficulty | 'all';
}): Promise<(Question & { sectionName: string; sectionSlug: string })[]> {
  const { sections, tags, difficulty } = params;

  const results = await Promise.all(
    sections
      .filter((slug) => sectionFiles[slug])
      .map(async (slug) => {
        const section = await loadSection(slug);
        if (!section) return [];
        return section.questions
          .filter((q) => {
            if (difficulty !== 'all' && q.difficulty !== difficulty)
              return false;
            if (tags.length > 0 && !q.tags.some((t) => tags.includes(t)))
              return false;
            return true;
          })
          .map((q) => ({
            ...q,
            sectionName: section.name,
            sectionSlug: section.slug
          }));
      })
  );

  return results.flat();
}
