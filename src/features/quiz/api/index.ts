import { QuestionType } from '../qustionsType';

export type QuestionTypeFilter = {
  id: string;
  name: string;
  active: boolean;
};

// Сопоставление тем -> файлы в public
const THEME_TO_JSON: Record<string, string> = {
  'JavaScript': '/JavaScript.json',
  'React': '/React_new.json',
  'TypeScript': '/Typescript.json',
  'Utility Types': '/UtilityTypes.json'
};

export const availableThemeIds = Object.keys(THEME_TO_JSON);

export const defaultQuestionTypeFilters: QuestionTypeFilter[] =
  availableThemeIds.map((theme) => ({
    id: theme,
    name: theme,
    active: true
  }));

type PublicQuizJson = {
  theme: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
};

const parseAnswerString = (raw: string): string[] => {
  return raw
    .split('\n')
    .map((line) => line.replace(/\t/g, ' ').trim())
    .map((line) =>
      line
        // bullets like '-', '*', '•'
        .replace(/^[-•*]\s*/, '')
        // numbered bullets like '1. ', '1) '
        .replace(/^\d+[\.)]\s*/, '')
        .trim()
    )
    .filter((line) => line.length > 0);
};

const loadThemeJson = async (themeId: string): Promise<QuestionType[]> => {
  const path = THEME_TO_JSON[themeId];
  if (!path) return [];
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = (await res.json()) as PublicQuizJson;
  const theme = data.theme || themeId;
  return data.items.map((item) => ({
    id: item.id,
    question: item.question,
    answers: parseAnswerString(item.answer),
    theme,
    typeAnswer: null
  }));
};

export const loadQuestionsByThemes = async (
  themeIds: string[]
): Promise<QuestionType[]> => {
  const uniqueIds = Array.from(new Set(themeIds));
  const arrays = await Promise.all(uniqueIds.map((t) => loadThemeJson(t)));
  return arrays.flat();
};

export const loadAllQuestions = async (): Promise<QuestionType[]> => {
  return loadQuestionsByThemes(availableThemeIds);
};
