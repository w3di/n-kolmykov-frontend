import { QuestionType } from "../types";

export const mockQuestionTypes: QuestionType[] = [
  {
    id: 1,
    question: "Что такое переменная в JS",
    answer: "Переменная в JS - это контейнер для хранения данных",
    theme: "JavaScript",
    typeAnswer: undefined,
  },
  {
    id: 2,
    question: "Что такое flexbox в CSS?",
    answer:
      "Flexbox - это метод раскладки CSS, который позволяет легко выравнивать и распределять элементы в контейнере по одной оси.",
    theme: "CSS",
    typeAnswer: undefined,
  },
  {
    id: 3,
    question: "Для чего используется тег <meta> в HTML?",
    answer:
      "Тег <meta> предоставляет метаданные о HTML документе, такие как описание, ключевые слова, кодировка и настройки viewport.",
    theme: "HTML",
    typeAnswer: undefined,
  },
  {
    id: 4,
    question: "Что такое интерфейсы в TypeScript?",
    answer:
      "Интерфейсы в TypeScript определяют структуру объекта, указывая какие свойства и методы должен иметь объект.",
    theme: "TypeScript",
    typeAnswer: undefined,
  },
  {
    id: 5,
    question: "Что такое миксины в Sass?",
    answer:
      "Миксины в Sass - это многократно используемые блоки CSS-кода, которые можно включать в другие селекторы с помощью @include.",
    theme: "Sass",
    typeAnswer: undefined,
  },
  {
    id: 6,
    question: "Что такое хуки в React?",
    answer:
      "Хуки - это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах.",
    theme: "React",
    typeAnswer: undefined,
  },
];
