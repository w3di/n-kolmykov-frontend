import { QuestionType } from '../qustionsType';

export interface QuestionTypeFilter {
  id: string;
  name: string;
  active: boolean;
}

export const mockQuestionTypeFilters: QuestionTypeFilter[] = [
  { id: 'JavaScript', name: 'JavaScript', active: true },
  { id: 'TypeScript', name: 'TypeScript', active: false },
  { id: 'UtilityType', name: 'Utility Type', active: false },
  { id: 'General', name: 'General', active: false }
];

const mockDataTypescript: QuestionType[] = [
  {
    id: 1,
    question: 'Чем any отличается от unknown?',
    answers: [
      'any отключает проверку типов, позволяя использовать значение как угодно, тогда как unknown требует явного приведения типа перед использованием.'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 2,
    question: 'Чем void отличается от never?',
    answers: [
      'void означает отсутствие возвращаемого значения, а never указывает, что функция никогда не завершится (например, бесконечный цикл или исключение).'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 3,
    question: 'В чем разница между readonly и as const?',
    answers: [
      'readonly запрещает изменение свойства в объекте поверхностно, а as const делает переменную глубоко неизменяемой и автоматически присваивает значениям литеральные типы.'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 4,
    question: 'Чем отличается структурная типизация от номинативной?',
    answers: [
      'Структурная типизация проверяет совместимость по структуре (TypeScript), а номинативная — по имени типа (например, в C++, Java).'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 5,
    question: 'Когда использовать type, interface в TypeScript?',
    answers: [
      'type поддерживает Union Types (|) и Intersection Types (&).',
      'type подходит для примитивов и кортежей.',
      'type поддерживает Mapped Types.',
      'type поддерживает примитивы, кортежи, объединения (|), пересечения (&) и mapped types',
      'interface наследуется через extends, а type через &.',
      'interface поддерживает implements для классов.',
      'interface поддерживает декларативное слияние.',
      'interface описывает поведение сущности, которое должен кто то имплементировать',
      'interface подходит для описания форм объектов и классов, а также поддерживает extends и implements.'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 6,
    question: 'Что такое implements?',
    answers: ['указывает, что класс реализует весь описанный интерфейс(ы)'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 7,
    question: 'Что такое extends?',
    answers: [
      'указывает что новый класс или интерфейс наследует все свойства и методы наследуемого класса или интерфейса соответственно',
      'указывает что обобщённый тип должен быть подтипом другого типа'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 8,
    question: 'Что такое super?',
    answers: [
      'super используется для вызова свойств, методов и конструкторов родительского класса',
      'super() инициализирует родительский класс и создаёт базовую часть объекта'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 9,
    question: 'Как типизировать асинхронные функции и промисы?',
    answers: ['с помощью Promise<T>'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 10,
    question: 'Чем отличаются Union Type и Intersection Type?',
    answers: [
      'Union Type - Тип может быть либо A, либо B',
      'Intersection Type - Тип должен удовлетворять и A, и B одновременно'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 11,
    question: 'Что такое Conditional Types?',
    answers: [
      'типы, которые выбираются на основе условия: если тип T удовлетворяет условию U, то результат будет X, иначе Y',
      'T extends U ? X : Y'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 12,
    question: 'Как работают Generics в TypeScript?',
    answers: [
      'это механизм в TypeScript, который позволяет создавать компоненты, работающие с любыми типами, сохраняя при этом типовую безопасность'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 13,
    question: 'Что такое infer?',
    answers: ['infer для вывода типа на основе другого типа.'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 14,
    question: 'Что такое asserts?',
    answers: [
      'asserts используется в функциях утверждения типов (type assertions) для сужения типов на основе выполнения проверок в рантайме'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 15,
    question: 'Как можно вывести тип массива?',
    answers: ['T[number]'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 16,
    question:
      'Как получить тип ключей и значений объекта в TypeScript? (keyof, typeof, Indexed Access Types)',
    answers: [
      'Оператор keyof берет тип объекта и создает строковое или числовое литеральное объединение его ключей',
      'Оператор typeof возвращает строку, указывающую тип значения переменной.',
      'Indexed Access Types используется для поиска определенного свойства в другом типе (type Age = Person["age"])'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 17,
    question: 'Что такое Type Inference?',
    answers: [
      'это механизм, позволяющий компилятору автоматически определять типы переменных или выражений без явного указания типа.'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 18,
    question: 'Как TypeScript автоматически определяет типы?',
    answers: [
      'По присваиваемому значению, причем для ссылочных типов тоже',
      'По возвращаемому значению функций/методов'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 19,
    question: 'Что такое Type Narrowing?',
    answers: [
      'Процесс, при котором сужается тип переменной до более конкретного'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 20,
    question: 'Как TypeScript уточняет типы?',
    answers: [
      'typeof type guards',
      'Используется для примитивных типов',
      'if (typeof value === T)',
      'Truthiness narrowing',
      'Проверка на положительный тип',
      'if (user)',
      'Equality narrowing',
      'Сравнение переменной с конкретным значением',
      'in operator narrowing',
      'Проверка переменной на наличие свойства',
      'instanceof narrowing',
      'instanceof проверяет, находится ли объект в прототипной цепочке конструктора',
      'Discriminated Unions',
      'это union type, где у каждого члена объединения есть общее дискриминирующее поле, по которому TypeScript может различать, какой именно тип используется в конкретном случае'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 21,
    question: 'Что такое Type Assertion?',
    answers: [
      'Механизм, с помощью которого ты подсказываешь компилятору, что переменная имеет определённый тип, делается с помощью as'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 22,
    question: 'Что такое Mapped Types и как их использовать?',
    answers: [
      'это типы, которые позволяют создавать новые типы, преобразуя свойства существующего типа с помощью постоянного шаблона.'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 23,
    question: 'Что такое Utility Types (Partial, Readonly, Pick, Omit и др.)?',
    answers: [
      'это встроенные универсальные типы в TypeScript, которые позволяют переиспользовать и трансформировать существующие типы'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 24,
    question: 'Как работают Variadic Tuple Types?',
    answers: [
      'Variadic Tuple Types — это возможность в TypeScript, которая позволяет создавать типы для кортежей переменной длины. То есть, вы можете определить кортеж, который принимает неопределенное количество элементов, но при этом соблюдает определенные ограничения на типы этих элементов'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 25,
    question: 'Что такое Template Literal Types?',
    answers: [
      'это типы, которые позволяют создавать строки, которые соответствуют определённому шаблону'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 26,
    question: 'Как работают Function Overloads в TypeScript?',
    answers: [
      'это возможность определения нескольких вариантов одной и той же функции, каждый из которых имеет разные типы аргументов и/или разный тип возвращаемого значения'
    ],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 27,
    question:
      'Как расширять существующие типы с помощью Declaration Merging и Module Augmentation?',
    answers: ['в разработке'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 28,
    question: 'Как создавать файлы деклараций типов (.d.ts)?',
    answers: ['в разработке'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 29,
    question:
      'Чем отличаются пространства имен (namespace) от модулей (module)?',
    answers: ['в разработке'],
    theme: 'TypeScript',
    typeAnswer: undefined
  },
  {
    id: 30,
    question: 'Как настроить strict mode в TypeScript и зачем он нужен?',
    answers: ['в разработке'],
    theme: 'TypeScript',
    typeAnswer: undefined
  }
];

const mockUtilityTypes: QuestionType[] = [
  {
    id: 1,
    question: 'Что делает Awaited<Type>?',
    answers: ['Извлекает тип из Promise'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 2,
    question: 'Что делает Partial<Type>?',
    answers: ['Делает все свойства типа опциональными'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 3,
    question: 'Что делает Required<Type>?',
    answers: ['Делает все свойства типа обязательными'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 4,
    question: 'Что делает Readonly<Type>?',
    answers: ['Делает все свойства типа только для чтения'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 5,
    question: 'Что делает Record<Keys, Type>?',
    answers: ['Создает тип с указанными ключами и значениями'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 6,
    question: 'Что делает Pick<Type, Keys>?',
    answers: ['Выбирает указанные свойства из типа'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 7,
    question: 'Что делает Omit<Type, Keys>?',
    answers: ['Исключает указанные свойства из типа'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 8,
    question: 'Что делает Exclude<UnionType, ExcludedMembers>?',
    answers: ['Исключает типы из объединения'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 9,
    question: 'Что делает Extract<Type, Union>?',
    answers: ['Извлекает типы из объединения'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 10,
    question: 'Что делает NonNullable<Type>?',
    answers: ['Исключает null и undefined из типа'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 11,
    question: 'Что делает Parameters<Type>?',
    answers: ['Извлекает типы параметров функции'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 12,
    question: 'Что делает ConstructorParameters<Type>?',
    answers: ['Извлекает типы параметров конструктора'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 13,
    question: 'Что делает ReturnType<Type>?',
    answers: ['Извлекает тип возвращаемого значения функции'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 14,
    question: 'Что делает InstanceType<Type>?',
    answers: ['Извлекает тип экземпляра класса'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 15,
    question: 'Что делает NoInfer<Type>?',
    answers: ['Блокирует вывод типа'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 16,
    question: 'Что делает ThisParameterType<Type>?',
    answers: ['Извлекает тип параметра this функции'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 17,
    question: 'Что делает OmitThisParameter<Type>?',
    answers: ['Удаляет параметр this из типа функции'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 18,
    question: 'Что делает ThisType<Type>?',
    answers: ['Маркер для контекстного типа this'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 19,
    question: 'Что делает Uppercase<StringType>?',
    answers: ['Преобразует строку в верхний регистр'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 20,
    question: 'Что делает Lowercase<StringType>?',
    answers: ['Преобразует строку в нижний регистр'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 21,
    question: 'Что делает Capitalize<StringType>?',
    answers: ['Преобразует первую букву строки в верхний регистр'],
    theme: 'UtilityType',
    typeAnswer: undefined
  },
  {
    id: 22,
    question: 'Что делает Uncapitalize<StringType>?',
    answers: ['Преобразует первую букву строки в нижний регистр'],
    theme: 'UtilityType',
    typeAnswer: undefined
  }
];

const mockJsQuestions: QuestionType[] = [
  {
    id: 1,
    question: 'Что такое переменные в JavaScript, и как они работают?',
    answers: ['это именованные контейнеры, используемые для хранения данных'],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 2,
    question: 'Какие различия между var, let и const?',
    answers: [
      'var: область видимости функциональная',
      'let и const: область видимости блочная',
      'var: можно переобъявлять в одной области видимости',
      'var: hoisting',
      'let и const: TDZ',
      'var и let: можно объявить без инициализации',
      'var и let: значения изменяемы (mutable)',
      'const: ссылка неизменяема (immutable), но содержимое объектов и массивов может изменяться (mutable)'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 3,
    question:
      'Что такое Temporal Dead Zone и Hoisting? На какие сущности распространяется TDZ а на какие hoisting?',
    answers: [
      'Hoisting – это механизм при котором интерпретатор во время фазы компиляции определяет все объявления переменных и функций и регистрирует их в соответствующей области видимости до начала выполнения кода',
      'var - происходит инициализация значением undefined в начале выполнения кода',
      'function declaration полностью определяется в начале',
      'Temporal Dead Zone - это период времени в процессе исполнения кода, когда переменная, объявленная через let или const, уже определена во внутренней структуре области видимости, но ещё не инициализирована',
      'TDZ распространяется на const let и Class'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 4,
    question:
      'Что такое область видимости (scope) и какие типы области видимости существуют в JavaScript?',
    answers: [
      'Область видимости - это контекст, в рамках которого определяются и становятся доступными переменные, функции и другие объекты',
      'глобальная - доступна во всём коде, переменные видимы в любом месте программы',
      'функциональная - переменные доступны только внутри функции, где они были объявлены',
      'блочная - переменные доступны только внутри блока {}, где они объявлены',
      'модульная - переменные и функции доступны только внутри модуля, если они не экспортированы',
      'лексическая - это механизм, который определяет доступность переменных на основании их расположения в коде во время его написания. Она описывает правила взаимодействия между вложенными областями видимости.',
      'Дочерние области видимости могут получать доступ к переменным родительских областей.',
      'Родительские области видимости не имеют доступа к переменным дочерних областей'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 5,
    question:
      'Что такое Lexical Environment и Scope Chain, и как они работают?',
    answers: [
      'Lexical Environment - это структура которая состоит из Environment Record (информация о переменных и функциях, объявленных в данном контексте или области видимости) и ссылки на родительский Lexical Environment',
      'Scope Chain - это механизм, с помощью которого интерпретатор выполняет поиск переменных и функций, начиная с текущего Lexical Environment и последовательно переходя к его родительским окружениям, вплоть до глобального Lexical Environment.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 6,
    question:
      'Какие типы данных существуют в JavaScript и чем отличаются примитивные и ссылочные типы данных?',
    answers: [
      'Примитивные хранятся непосредственно, они имутабельные, сравниваются по значению и хранятся в стеке',
      'Ссылочные хранятся по ссылке, они мутабельные, сравниваются по ссылке и хранятся в куче, а ссылка на них в стеке'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 7,
    question: 'Какие типы данных в JavaScript являются примитивными?',
    answers: [
      'string',
      'number',
      'bigInt',
      'undefined',
      'null',
      'symbol',
      'boolean'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 8,
    question: 'Что такое Symbol и для чего они используются в JavaScript?',
    answers: [
      'уникальность и неизменность примитивный тип данных',
      'уникальные ключи для объектов',
      'создание скрытых свойств',
      'уникальные идентификаторы'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 9,
    question: 'Как работает BigInt и для чего он нужен?',
    answers: [
      'для работы с целыми числами которые выходят за границы обычного number',
      'несовместим без приведения типов с number',
      'Для обозначения числа как BigInt, необходимо добавить суффикс n'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 10,
    question: 'В чем разница между null и undefined?',
    answers: [
      'null для явного указания пустоты или обнуление',
      'undefined когда не присвоено значение или у объекта отсутствует свойство'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 11,
    question: 'Когда и почему можно ожидать значение undefined?',
    answers: [
      'Обращение к переменной, объявленной через var до её инициализации:',
      'Функции, которые ничего не возвращают',
      'Переменные, объявленные с помощью let без инициализации',
      'Обращение к несуществующему свойству объекта',
      'Неинициализированные параметры функции',
      'Элементы массива, которым не присвоено значение',
      'Деструктуризация без соответствующего значения'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 12,
    question:
      'В чем различие между Number.isNaN() и isNaN(), и какой из них предпочтительнее использовать?',
    answers: [
      'isNaN() - пытается преобразовать переданный аргумент в число перед проверкой',
      'Number.isNaN() без преобразования проверяет переданный аргумент'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 13,
    question:
      'Что выведет console.log(typeof null) и почему? Что выведет function example() {} console.log(typeof example)',
    answers: ['object тк исторической особенностью JavaScript', 'function'],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 14,
    question:
      'Что такое приведение типов (type coercion) и преобразование типов (type conversion)? Приведите примеры каждого.',
    answers: [
      'Приведение типов(type coercion, неявное преобразование) — это автоматическое преобразование: 5 + "2" → "52", "5" - 2 → 3',
      'Преобразование типов (Type Conversion, явное преобразование) — это явное преобразование Number("5") → 5, String(123) → "123"'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 15,
    question:
      'Какие значения при приведении к булевому типу (boolean) возвращают false?',
    answers: ['0', '0n', "''", 'undefined', 'null', 'NaN'],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 16,
    question:
      'В чем разница между глубоким (deep) и поверхностным (shallow) копированием объектов?',
    answers: [
      'Глубокое копирование копирует все уровни вложенности так что изменения в копии не затрагивают оригинальный объект.',
      'Поверхностное копирование копирует только верхний уровень объекта, при этом вложенные объекты и массивы копируются по ссылке и ссылки на вложенные структуры сохраняются.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 17,
    question:
      'Что такое объект Map и как он отличается от обычного объекта? Чем отличается от WeakMap?',
    answers: [
      'Map это объект который представляет собой коллекцию пар ключ-значение',
      'ключи могут быть любого типа',
      'порядок вставки ключей сохраняется',
      'оптимизирован для операций поиска вставки и удаления по ключу',
      'В WeakMap ключами могут быть только объекты',
      'В WeakMap нет методов для перечисления ключей или значений (keys(), values(), entries())',
      'Ключи в WeakMap являются "слабыми ссылками". Если на объект-ключ больше нет ссылок из других мест программы, он автоматически удаляется из WeakMap при сборке мусора'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 18,
    question:
      'Что такое объект Set и для каких задач он используется? Чем отличается от WeakSet?',
    answers: [
      'Set это объект который представляет собой коллекцию уникальных значений любого типа.',
      'WeakSet хранит только объекты',
      'У WeakSet нет методов для итерации (forEach, keys, values и т.д.), так как элементы могут удаляться динамически.',
      'WeakSet не предотвращает сборку мусора. Если объект больше не доступен в коде, он удаляется из WeakSet автоматически.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 19,
    question: 'Как реализуется прототипное наследование в js?',
    answers: ['через __proto__ - ссылка на объект прототипа'],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 20,
    question: 'Что такое функции и для чего они используются?',
    answers: [
      'функция - это блок кода, который выполняет определённую задачу, и её можно многократно вызывать в разных частях кода.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 21,
    question: 'Какие существуют способы объявления функций в JavaScript?',
    answers: [
      'Function Declaration',
      'Function Expression',
      'Arrow Function',
      'IIFE'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 22,
    question:
      'Что такое анонимные функции, и какие из способов объявления функций поддерживают их?',
    answers: [
      'Это функция без имени, которая создается в моменте и используется сразу в нужном контексте, например, для передачи в качестве аргумента, колбэка или внутри методов.',
      'поддерживается: Function Expression, Arrow Function, IIFE'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 23,
    question: 'Какие способы объявления функций поддерживают hoisting?',
    answers: [
      'все способы объявления функций поддерживают hoisting, но для способов отличных от Function Declaration применяется еще TDZ'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 24,
    question: 'Чем функции-конструкторы отличаются от классов?',
    answers: [
      'классы это синтаксический сахар',
      'на классы распространятеся TDZ в отлчии от функции-конструкторы который инициилизруются сразу',
      'Class всегда работает в строгом режиме'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 25,
    question:
      'Что такое стрелочные функции, и в чем их особенности по сравнению с обычными функциями?',
    answers: [
      'Стрелочные функции - это синтаксический сахар для более короткого определения функций. Они имеют ряд особенностей, таких как отсутствие своего this, arguments и поддерживают TDZ'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 26,
    question:
      'Что такое Immediately Invoked Function Expression (IIFE) и для чего она используется?',
    answers: [
      'IIFE - это функция, которая определяется и немедленно вызывается. Она используется для создания изолированной области видимости'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 27,
    question: 'Что такое функции-генераторы в JavaScript?',
    answers: [
      'вид функций, позволяющий приостанавливать и возобновлять их выполнение, а также возвращать промежуточные значения в процессе работы'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 28,
    question: 'Что такое функции обратного вызова (callback functions)?',
    answers: [
      'это функции, которые передаются в качестве аргумента другой функции и вызываются внутри этой функции после выполнения определённого действия или при наступлении определённого события.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 29,
    question: 'Что такое мемоизация функций и в каких случаях она полезна?',
    answers: [
      'техника оптимизации, при которой результаты вызова функции запоминаются в зависимости от переданных аргументов.',
      'Трудоёмкие вычисления, повторяющиеся вызовы и тд'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 30,
    question: 'Что такое функции первого класса (first-class functions)?',
    answers: [
      'это функции, которые можно: Присваивать переменной. Передавать в качестве аргумента другой функции. Возвращать из другой функции.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 31,
    question: 'Что такое рекурсия и когда она применяется?',
    answers: ['функция вызывает сама себя'],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 32,
    question:
      'Что такое объект arguments в функциях JavaScript, и в каких способах объявления он не поддерживается? Почему?',
    answers: [
      'это встроенный в функции объект, который содержит массивоподобный список всех аргументов, переданных в функцию',
      'не поддерживается в arrow function, лучше использовать rest-параметры (остаточный оператор)'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 33,
    question:
      'Что такое rest-параметры и spread-оператор в JavaScript, и как они используются?',
    answers: [
      'Rest-параметры позволяют объявить функцию, которая может принимать любое количество аргументов, сгруппированных в один массив, аналог arguments',
      'Spread-оператор — позволяет раскрыть итерируемый объект в набор отдельных элементов или свойств там, где ожидается перечисление значений'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 34,
    question:
      'Что представляет собой ключевое слово this и как его контекст определяется в различных ситуациях?',
    answers: [
      'this представляет собой ссылку на текущий контекст выполнения, который определяется способом вызова функции',
      'В глобальной области видимости: в строгом режиме равен undefined, в браузере им является объект window, в среде Node.js – объект global',
      'В методе объекта: на контекст объекта',
      'В функции-конструкторе: на контекст объекта созданный этой функцией оператором new',
      'В стрелочных функциях: на контекст родителя'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 35,
    question: 'Что такое замыкание (closure) и как оно работает?',
    answers: [
      'замыкание - это механизм, при котором функция запоминает свое лексическое окружение, то есть контекст, в котором она была создана, и сохраняет доступ к этим переменным даже после завершения выполнения внешней функции, из которой она была вызвана.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 36,
    question:
      'В чем разница между методами call(), apply() и bind() в JavaScript, и когда использовать каждый из них?',
    answers: [
      'Методы call(), apply() и bind() в JavaScript используются для управления контекстом вызова функции',
      'call() - вызывает функцию немедленно, с указанным значением this и переданными аргументами по отдельности.',
      'apply() - вызывает функцию немедленно, с указанным значением this и переданными аргументами в виде массива.',
      'bind() возвращает новую функцию с указанным значением this и фиксированными аргументами (если они переданы), в отличии от других методов функция не вызывается сразу и может быть вызвана в дальнейшем уже с изменым контекстом'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 37,
    question: 'В чем разница между синхронным и асинхронным кодом?',
    answers: [
      'Синхронный код: Выполняется последовательно, инструкция за инструкцией, блокирует выполнение дальнейшего кода до завершения текущей операции',
      'Асинхронный код: операции выполняются в фоне, позволяя основному потоку продолжать выполнение без блокировки'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 38,
    question: 'Что такое Event Loop и как он работает?',
    answers: [
      'Event Loop - механизм, обеспечивающий выполнение асинхронного кода в однопоточном окружении',
      'Выполняется весь синхронный код',
      'Выполняются все задачи из очереди микрозадач',
      'Берется первая задача из очереди макрозадач и выполняется',
      'При необходимости обновляется пользовательский интерфейс',
      'Цикл возвращается к обработке очереди микрозадач',
      'При отсутствии задач Event Loop продолжает ожидание новых событий'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 39,
    question:
      'Что такое стек вызовов Call Stack и как он работает с асинхронным кодом?',
    answers: [
      'Call Stack - это структура данных, используемая движком JavaScript для отслеживания выполнения функций в программе. Он работает по принципу LIFO (Last In, First Out), то есть последняя вызванная функция обрабатывается первой.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 40,
    question:
      'Что такое Task Queues, MacroTasks queue, MicroTasks Queues, и как они влияют на порядок выполнения асинхронного кода?',
    answers: [
      'Когда асинхронная задача попадает в Call Stack, она передается во внешнюю систему, которая после завершения добавляет её callback в macroTasks Queue или microTasks Queue. Когда Call Stack становится пустым, сначала обрабатываются задачи из macroTasks Queue, а затем из microTasks Queue'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 41,
    question: 'Приведите примеры Microtasks и Macrotasks',
    answers: [
      'MicroTasks: .then() .catch()  .finally(), MutationObserver, queueMicrotask()',
      'Macrotasks: setTimeout setInterval, DOM Events, setImmediate, Сетевые запросы'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 42,
    question:
      'Как работают setImmediate() и queueMicrotask() и чем они отличаются?',
    answers: [
      'setImmediate(): помещает задачу в очередь макрозадач',
      'queueMicrotask(): помещает задачу в очередь микрозадач'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 43,
    question: 'Что такое Promises? какие у него есть состояния?',
    answers: [
      'Promise — это объект в JavaScript, который представляет результат асинхронной операции',
      'у него есть 3 состояния: ожидание (pending), выполнено (fulfilled), отклонено (rejected)'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 44,
    question:
      'Как работает Promise.all(), Promise.allSettled(), Promise.race() и Promise.any()? есть ли еще какие-то методы?',
    answers: [
      'Promise.all() — ждет выполнения всех промисов, прерывается, если один промис отклонен',
      'Promise.allSettled() — ждет завершения всех промисов в независимости от их статуса',
      'Promise.race() — возвращает первый выполненный промис.',
      'Promise.any() — возвращает первый выполненный успешно промис, игнорируя ошибки',
      'Promise.reject() - cоздает промис, который немедленно переходит в состояние rejected с указанной причиной ошибки',
      'Promise.resolve() - cоздает промис, который немедленно переходит в состояние fulfilled с указанным значением',
      'Promise.withResolvers() - синтаксического сахар,  статический метод, который создает новый промис и одновременно возвращает объект, содержащий сам promise, функцию resolve для его успешного завершения, функцию reject для его отклонения.',
      'Promise.try() - синтаксического сахар, способ безопасно «обернуть» синхронный код, который может выбросить ошибку, в Promise, аналог Promise.resolve().then(() => {})'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 45,
    question: 'Как работает метод then с промисами в JavaScript?',
    answers: [
      'Метод .then() для обработки выполнения промиса, возвращает новый промис.',
      'Он принимает два аргумента: onFulfilled — функция, выполняемая при успешном разрешении промиса. onRejected (опционально, типа catch, но как аргумент then) — функция для обработки ошибок.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 46,
    question:
      'Какие механизмы обработки ошибок вы знаете? Как работает механизм обработки ошибок try...catch, и что такое finally?',
    answers: [
      'механизмы обработки ошибок: аргумент onRejected в .then(), try...catch, throw, Обработка ошибок с помощью Promise и catch()',
      'try...catch...finally: try() - Включает код, выполнение которого может вызвать ошибку, catch() - Срабатывает только в том случае, если в try блоке возникает ошибка, finally() - Выполняется всегда, независимо от того, была ли ошибка или нет'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 47,
    question:
      'Что такое объект Error и какие его свойства часто используются (message, name, stack)?',
    answers: [
      'Объект Error в  предназначен для создания ошибок и их обработки',
      'Основные свойства объекта Error: message  -  текстовое сообщение об ошибке, переданное в конструктор объекта. name - имя ошибки, по умолчанию это Error. stack  - информацию о стеке вызовов.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 48,
    question: 'Что такое async/await?',
    answers: [
      'синтаксический сахар для работы с промисами',
      'async Делает функцию асинхронной, что позволяет использовать внутри неё await и возвращает всегда promis',
      'await приостанавливает выполнение асинхронной функции до разрешения промиса и возвращает его результат'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 49,
    question:
      'Как работают таймеры setTimeout, setInterval и чем они отличаются?',
    answers: [
      'setTimeout - запускает функцию один раз после указанного времени задержки, очистка - clearTimeout',
      'setInterval - запускает функцию периодически с указанным интервалом времени до тех пор, пока таймер не будет остановлен, очистка - clearInterval'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 50,
    question:
      'Какие методы массивов (например, map, filter, reduce) используются для работы с данными?',
    answers: [
      'map - Применяет функцию к каждому элементу массива и возвращает новый массив с результатами.',
      'forEach - Применяет функцию для каждого элемента массива, но ничего не возвращает',
      'filter - создает новый массив, содержащий только элементы, которые удовлетворяют заданному условию.',
      'reduce - преобразует массив в одно значение, применяя функцию последовательно к каждому элементу и аккумулятору',
      'reduceRight - аналогичен reduce, но обход массива выполняется справа налево.',
      'find - возвращает первый элемент массива, который удовлетворяет заданному условию, или undefined, если такого элемента нет.',
      'findIndex - возвращает индекс первого элемента, который удовлетворяет заданному условию, или -1, если такого элемента нет.',
      'indexOf - возвращает первый индекс указанного элемента в массиве или -1, если элемент не найден.',
      'lastIndexOf - возвращает последний индекс указанного элемента в массиве или -1, если элемент не найден.',
      'includes - проверяет, содержит ли массив указанный элемент, возвращает true или false.',
      'some - возвращает true, если хотя бы один элемент массива удовлетворяет условию.',
      'every - возвращает true, если все элементы массива удовлетворяют условию.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 51,
    question: 'Чем forEach отличается от map?',
    answers: [
      'forEach - выполнить какую-либо операцию над элементами массива',
      'map - возвращает новый массив с преобразованными данными.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 52,
    question:
      'Что делает метод reduce, и как с его помощью можно заменить другие методы работы с массивами?',
    answers: [
      'преобразует массив в одно значение, применяя функцию последовательно к каждому элементу и аккумулятору'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  },
  {
    id: 53,
    question:
      'Чем отличается копирование массива с помощью slice, spread-оператора и Array.from()?',
    answers: [
      'slice - позволяет копировать часть массива (подмассив) с указанием границ индексов.',
      'spread-оператор - поддерживает объединение массивов и добавление новых элементов в процессе копирования.',
      'Array.from() - работает с массивоподобными объектами (например, arguments или DOM-коллекциями) и позволяет преобразовывать элементы при копировании.'
    ],
    theme: 'JavaScript',
    typeAnswer: undefined
  }
];

const mockGeneralQuestions: QuestionType[] = [
  {
    id: 1,
    question: 'Что такое Callback Hell (pyramid of doom) и как с ним бороться?',
    answers: [
      'несколько вложенных обратных вызовов создают сложный код с глубокими отступами',
      'Решение: async/await, promises, модульность'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 2,
    question: 'Что такое race condition и как его избежать?',
    answers: [
      'ситуация, возникающая при параллельном выполнении операций, когда результат зависит от неконтролируемого порядка их завершения'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 3,
    question: 'Что такое Debouncing и Throttling?',
    answers: [
      'это техники оптимизации для обработки событий',
      'Debouncing - предотвращает выполнение функции, пока события происходят часто, и позволяет её вызвать только один раз, через заданную задержку после того, как поток событий прекратился.',
      'Throttling - позволяет функции выполняться регулярно, но не чаще, чем раз в заданный интервал времени, даже если события происходят беспрерывно.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 4,
    question: 'Что такое Promise chaining?',
    answers: [
      'техника последовательного выполнения асинхронных операций с использованием цепочки промисов. Каждый .then передаёт результат следующему обработчику.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 5,
    question: 'Что такое Deadlock?',
    answers: [
      'ситуация, при которой два или более процесса ждут друг друга, блокируя выполнение всех операций',
      'Избежание: Упорядочивание захватов блокировок. Использование таймаутов при ожидании блокировок. Минимизация использования блокировок.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 6,
    question:
      'Что такое DOM? Опишите, как DOM представляет структуру HTML-документа.',
    answers: [
      'Document Object Model - это представление HTML-документа в виде структуры дерева. Каждый элемент HTML (тег) становится узлом дерева. DOM позволяет взаимодействовать с HTML-документом, изменять его структуру, содержимое и стили при помощи JavaScript'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 7,
    question: 'Сколько существует типов узлов DOM?',
    answers: [
      '12 типов узлов',
      'Element Node',
      'Text Node',
      'Comment Node',
      '...'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 8,
    question: 'Какие есть фазы распространения события? расскажите про каждое',
    answers: [
      'Фаза захвата (Capturing phase) - Событие распространяется сверху вниз по дереву DOM, начиная с корневого элемента (window) и проходя через всех предков целевого элемента.',
      'Фаза цели (Target phase) - Событие достигает целевого элемента, на котором оно произошло. Обработчики, привязанные к целевому элементу, выполняются.',
      'Фаза всплытия (Bubbling phase) - Событие поднимается обратно вверх по дереву DOM от целевого элемента к его предкам.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 9,
    question: 'Что такое CSSOM?',
    answers: [
      'CSS Object Model - это объектная модель CSS, которая представляет стили CSS в виде структуры дерева. CSSOM создается браузером при разборе CSS-стилей (как встроенных, так и внешних). Она позволяет JavaScript взаимодействовать с CSS — например, получать или изменять стили элементов на странице.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 10,
    question: 'Связь между DOM и CSSOM',
    answers: [
      'DOM и CSSOM объединяются для создания render-tree которое уже используется для отрисовки страницы'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 11,
    question: 'Как можно оптимизировать DOM и CSSOM?',
    answers: [
      'DOM: минимизация количества узлов и элементов, применять изменения в дереве разом для всего а не по одному, использование lazy loading',
      'CSSOM: удаление ненужных стилей, уменьшение css файлов, минимизация сложности селекторов'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 12,
    question:
      'Что такое Reflow, Repaint и Compositing и в чем их разница? Приведите примеры, когда происходит каждый из этих процессов.',
    answers: [
      'Reflow, Repaint, Compositing - процессы, связанные с рендерингом веб-страницы, которые происходят при изменениях в DOM и CSSOM.',
      'Reflow - процесс, при котором браузер пересчитывает размеры и расположение элементов на странице',
      'Repaint - процесс, при котором браузер обновляет визуальное представление элементов без изменения их геометрии',
      'Compositing - процесс, при котором браузер объединяет слои, сформированные после рендеринга, в окончательную визуализацию страницы, чтобы отобразить её на экране.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 13,
    question: 'Что такое Shadow DOM?',
    answers: [
      'технология, которая позволяет создавать инкапсулированные DOM-деревья в веб-компонентах.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 14,
    question: 'Какие проблемы решает Shadow DOM?',
    answers: ['Конфликты стилей', 'модульность?', 'изоляция'],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 15,
    question: 'Что такое BOM?',
    answers: [
      'Browser Object Model - интерфейс, предоставляемый браузером для взаимодействия с окном браузера и его функциями'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 16,
    question: 'Какие существуют основные компоненты BOM?',
    answers: ['window', 'document', 'navigator', 'location', 'history'],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 17,
    question: 'Что такое Render Tree и как он строится?',
    answers: [
      'Браузер комбинирует DOM и CSSOM, чтобы построить Render Tree.',
      'Render Tree включает только видимые элементы и их стили:',
      'Элементы с display: none исключаются из Render Tree.',
      'Элементы с visibility: hidden остаются в Render Tree, так как занимают место, но не видимы.',
      'Если DOM или CSSOM изменяются (например, через JavaScript), Render Tree пересчитывается.'
    ],
    theme: 'General',
    typeAnswer: undefined
  },
  {
    id: 18,
    question: 'Как браузер рендерит документ?',
    answers: [
      'Получает данные (байты) от сервера.',
      'Разбирает и преобразует в токены (<, ИмяТега, Атрибут, ЗначениеАтрибута, >).',
      'Превращает токены в узлы.',
      'Превращает узлы в дерево DOM.',
      'Создаёт дерево CSSOM из правил CSS.',
      'Деревья CSSOM и DOM объединяются в дерево рендеринга (RenderTree).',
      'Вычисляет, какие элементы видимы и их вычисленные стили.',
      'Начиная с корня дерева DOM.',
      'Невидимые элементы, такие как (meta, script, link) и display: none, исключаются из дерева рендеринга.',
      'Для каждого видимого узла находит соответствующие правила CSSOM и применяет их.',
      'Reflow: вычисляет макет каждого видимого элемента (положение и размер).',
      'Repaint: рендерит пиксели на экране.',
      'Compositing: После Repaint браузер объединяет различные слои (например, слои с эффектами, анимацией, позиционированными элементами) в итоговый кадр. Логика композитинга может включать отрисовку слоёв в правильном порядке, обработку прозрачности, тени и других визуальных эффектов. Завершается отправкой кадра на GPU для отображения.'
    ],
    theme: 'General',
    typeAnswer: undefined
  }
];

export const mockQuestionTypes: QuestionType[] = [
  ...mockDataTypescript,
  ...mockUtilityTypes,
  ...mockJsQuestions,
  ...mockGeneralQuestions
];
