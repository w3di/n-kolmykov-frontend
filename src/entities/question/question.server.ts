import 'server-only';

import type { Question, Section, SectionMeta } from './question.types';

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

export async function getAllSections(): Promise<Section[]> {
  const slugs = Object.keys(sectionFiles);
  const results = await Promise.all(slugs.map(loadSection));
  return results.filter((s): s is Section => s !== null);
}

export async function getAllSectionsMeta(): Promise<SectionMeta[]> {
  const sections = await getAllSections();
  return sections.map((s) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    questionCount: s.questions.length,
    tags: [...new Set(s.questions.flatMap((q) => q.tags))]
  }));
}

export async function getSectionBySlug(slug: string): Promise<Section | null> {
  return loadSection(slug);
}

export async function getQuestionBySlug(
  sectionSlug: string,
  questionSlug: string
): Promise<(Question & { sectionName: string; sectionSlug: string }) | null> {
  const section = await loadSection(sectionSlug);
  if (!section) return null;
  const question = section.questions.find((q) => q.slug === questionSlug);
  if (!question) return null;
  return {
    ...question,
    sectionName: section.name,
    sectionSlug: section.slug
  };
}

export function getAvailableSectionSlugs(): string[] {
  return Object.keys(sectionFiles);
}
