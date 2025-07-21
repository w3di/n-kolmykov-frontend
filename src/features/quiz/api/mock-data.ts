import { QuestionType } from "../qustionsType";

interface QuestionTypeFilter {
  id: string;
  name: string;
  active: boolean;
}

export const mockQuestionTypeFilters: QuestionTypeFilter[] = [
  { id: "javascript", name: "JavaScript", active: true },
  { id: "typescript", name: "TypeScript", active: false },
  { id: "css", name: "CSS", active: false },
  { id: "html", name: "HTML", active: false },
  { id: "sass", name: "SASS", active: false },
  { id: "react", name: "React", active: false },
  { id: "nextjs", name: "Next.js", active: false },
  { id: "reactnative", name: "React Native", active: false },
  { id: "expo", name: "Expo SDK", active: false },
  { id: "all", name: "All", active: false },
  { id: "disabled", name: "Disabled", active: true },
];

export const mockQuestionTypes: QuestionType[] = [
  {
    id: 1,
    question: "Что такое переменная в JS",
    answer: "Переменная в JS - это контейнер для хранения данных",
    theme: "JavaScript",
    typeAnswer: undefined,
  },
  {
    id: 7,
    question: "Что такое замыкания (closures) в JavaScript?",
    answer:
      "Замыкания - это функции, которые имеют доступ к переменным из внешней области видимости даже после завершения выполнения внешней функции.",
    theme: "JavaScript",
    typeAnswer: undefined,
  },
  {
    id: 8,
    question: "В чем разница между let, const и var?",
    answer:
      "var имеет функциональную область видимости, let и const - блочную. const создает неизменяемую привязку, let - изменяемую.",
    theme: "JavaScript",
    typeAnswer: undefined,
  },
  {
    id: 9,
    question: "Что такое промисы (Promises) в JavaScript?",
    answer:
      "Промисы - это объекты, представляющие результат асинхронной операции, которая может завершиться успешно или с ошибкой.",
    theme: "JavaScript",
    typeAnswer: undefined,
  },
  {
    id: 10,
    question: "Что такое деструктуризация в JavaScript?",
    answer:
      "Деструктуризация - это синтаксис, который позволяет извлекать значения из массивов или свойства из объектов в отдельные переменные.",
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
    id: 11,
    question: "Что такое CSS Grid Layout?",
    answer:
      "CSS Grid Layout - это двумерная система компоновки, которая позволяет создавать сложные макеты с помощью строк и столбцов.",
    theme: "CSS",
    typeAnswer: undefined,
  },
  {
    id: 12,
    question: "Что такое псевдоклассы в CSS?",
    answer:
      "Псевдоклассы - это ключевые слова, добавляемые к селекторам для определения особого состояния элемента (например, :hover, :focus).",
    theme: "CSS",
    typeAnswer: undefined,
  },
  {
    id: 13,
    question: "Что такое медиа-запросы в CSS?",
    answer:
      "Медиа-запросы позволяют применять различные стили в зависимости от характеристик устройства, таких как ширина экрана.",
    theme: "CSS",
    typeAnswer: undefined,
  },
  {
    id: 14,
    question: "Что такое CSS переменные (custom properties)?",
    answer:
      "CSS переменные - это сущности, определяемые пользователем, которые содержат значения для повторного использования в документе.",
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
    id: 15,
    question: "В чем разница между тегами <div> и <span>?",
    answer:
      "<div> - это блочный элемент, занимающий всю ширину, а <span> - строчный элемент, занимающий только необходимое пространство.",
    theme: "HTML",
    typeAnswer: undefined,
  },
  {
    id: 16,
    question: "Что такое семантические теги в HTML5?",
    answer:
      "Семантические теги - это элементы HTML5, которые описывают смысл контента (header, nav, main, article, section, aside, footer).",
    theme: "HTML",
    typeAnswer: undefined,
  },
  {
    id: 17,
    question: "Для чего используется атрибут alt в теге <img>?",
    answer:
      "Атрибут alt предоставляет альтернативный текст для изображения, который отображается если изображение не загружается.",
    theme: "HTML",
    typeAnswer: undefined,
  },
  {
    id: 18,
    question: "Что такое DOCTYPE в HTML?",
    answer:
      "DOCTYPE - это декларация, которая сообщает браузеру какую версию HTML использует документ и как его следует интерпретировать.",
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
    id: 19,
    question: "Что такое дженерики (Generics) в TypeScript?",
    answer:
      "Дженерики позволяют создавать компоненты, которые могут работать с различными типами данных, сохраняя типобезопасность.",
    theme: "TypeScript",
    typeAnswer: undefined,
  },
  {
    id: 20,
    question: "В чем разница между type и interface в TypeScript?",
    answer:
      "Interface может быть расширен и объединен, type более гибкий для создания объединений и пересечений типов.",
    theme: "TypeScript",
    typeAnswer: undefined,
  },
  {
    id: 21,
    question: "Что такое утилитарные типы в TypeScript?",
    answer:
      "Утилитарные типы - это встроенные типы TypeScript для трансформации других типов (Pick, Omit, Partial, Required и др.).",
    theme: "TypeScript",
    typeAnswer: undefined,
  },
  {
    id: 22,
    question: "Что такое enum в TypeScript?",
    answer:
      "Enum позволяет определить именованные константы, создавая более читаемый и поддерживаемый код.",
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
    id: 23,
    question: "Что такое переменные в Sass?",
    answer:
      "Переменные в Sass позволяют хранить значения (цвета, размеры, строки) для повторного использования в коде.",
    theme: "Sass",
    typeAnswer: undefined,
  },
  {
    id: 24,
    question: "Что такое вложенность в Sass?",
    answer:
      "Вложенность позволяет писать CSS правила внутри других правил, отражая HTML структуру и делая код более читаемым.",
    theme: "Sass",
    typeAnswer: undefined,
  },
  {
    id: 25,
    question: "Что такое функции в Sass?",
    answer:
      "Функции в Sass возвращают значения и могут выполнять вычисления, в отличие от миксинов которые возвращают CSS код.",
    theme: "Sass",
    typeAnswer: undefined,
  },
  {
    id: 26,
    question: "В чем разница между @import и @use в Sass?",
    answer:
      "@use - современный способ подключения модулей с пространством имен, @import - устаревший способ без изоляции.",
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
  {
    id: 27,
    question: "Что такое JSX в React?",
    answer:
      "JSX - это синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код внутри JavaScript.",
    theme: "React",
    typeAnswer: undefined,
  },
  {
    id: 28,
    question: "Что такое пропсы (props) в React?",
    answer:
      "Пропсы - это объекты, содержащие данные, которые передаются от родительского компонента к дочернему.",
    theme: "React",
    typeAnswer: undefined,
  },
  {
    id: 29,
    question: "Что такое состояние (state) в React?",
    answer:
      "Состояние - это объект, содержащий данные компонента, которые могут изменяться и влиять на рендеринг.",
    theme: "React",
    typeAnswer: undefined,
  },
  {
    id: 30,
    question: "Что такое useEffect в React?",
    answer:
      "useEffect - это хук для выполнения побочных эффектов в функциональных компонентах (запросы, подписки, очистка).",
    theme: "React",
    typeAnswer: undefined,
  },
];

export const QUESTION_TYPES = [
  { id: "javascript", name: "JavaScript", active: true },
  { id: "typescript", name: "TypeScript", active: false },
  { id: "css", name: "CSS", active: false },
  { id: "html", name: "HTML", active: false },
  { id: "sass", name: "Sass", active: false },
  { id: "react", name: "React", active: false },
  { id: "nextjs", name: "Next.js", active: false },
  { id: "reactnative", name: "React Native", active: false },
  { id: "expo", name: "Expo SDK", active: false },
];
