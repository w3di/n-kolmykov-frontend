import { QuestionType } from '../qustionsType';

export type QuestionTypeFilter = {
  id: string;
  name: string;
  active: boolean;
};

// Сопоставление тем -> файлы в public
const THEME_TO_JSON: Record<string, string> = {
  React: '/react.json'
};

export const availableThemeIds = Object.keys(THEME_TO_JSON);

export const defaultQuestionTypeFilters: QuestionTypeFilter[] =
  availableThemeIds.map((theme, index) => ({
    id: theme,
    name: theme,
    active: index === 0
  }));

type AnswerNode = {
  text: string;
  answer?: AnswerNode[];
};

type PublicQuizJson = {
  theme: string;
  items: Array<{
    id: string;
    question: string;
    answer: AnswerNode[];
  }>;
};

const flattenAnswers = (nodes: AnswerNode[] | undefined): string[] => {
  if (!nodes || nodes.length === 0) return [];
  const result: string[] = [];
  const stack: AnswerNode[] = [...nodes];
  while (stack.length) {
    const node = stack.shift() as AnswerNode;
    if (node.text) result.push(node.text);
    if (node.answer && node.answer.length) {
      stack.unshift(...node.answer);
    }
  }
  return result;
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
    answers: flattenAnswers(item.answer),
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
