import Image from 'next/image';

import styles from './project-list.module.scss';

import { Icon } from '@/components/base';

type Project = {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  links: { live?: string };
  favicon: string | null;
  accent: 'black' | 'dark' | 'red' | 'blue';
  comingSoon?: boolean;
};

type Section = {
  title: string;
  projects: readonly Project[];
};

const sections: readonly Section[] = [
  {
    title: 'Fullstack',
    projects: [
      {
        id: 'cardaq-web',
        title: 'Cardaq',
        description:
          'Fullstack-разработка платёжной платформы и системы выпуска карт для финансовых институтов.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://cardaq.com/en-US' },
        favicon: '/images/projects/cardaq.png',
        accent: 'blue'
      },
      {
        id: 'pridepay-web',
        title: 'PridePay',
        description:
          'Разработка финтех-платформы для комьюнити-платежей. Фронтенд, бэкенд и интеграция платёжных систем.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://pridepay.com/' },
        favicon: '/images/projects/pridepay.png',
        accent: 'black'
      },
      {
        id: 'teido-web',
        title: 'Teido',
        description:
          'Разработка веб-платформы финтех-компании. Цифровые платежи и финансовые сервисы.',
        stack: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://teido.com/' },
        favicon: '/images/projects/teido.png',
        accent: 'blue'
      },
      {
        id: 'terkatalk-web',
        title: 'Тёрка',
        description:
          'Fullstack-разработка социальной платформы. Знакомства, мероприятия и комьюнити в Калининграде.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://terkatalk.ru/' },
        favicon: '/images/projects/terkatalk.png',
        accent: 'red'
      },
      {
        id: 'blvc',
        title: 'BLVC Club',
        description:
          'Разработка платформы для клуба автолюбителей люксовых автомобилей. Личный кабинет и каталог.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://blvc.club/en' },
        favicon: '/images/projects/blvc.png',
        accent: 'blue'
      },
      {
        id: 'terkamag',
        title: 'Тёрка Store',
        description:
          'Разработка интернет-магазина в экосистеме Тёрка. Мерч, стикеры и билеты на мероприятия.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://terkamag.ru/' },
        favicon: '/images/projects/terkamag.png',
        accent: 'red'
      },
      {
        id: 'mayfair',
        title: 'Mayfair',
        description:
          'Разработка e-commerce платформы для лондонского бренда одежды. Каталог, корзина и оформление заказов.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://mayfair-shop.com/' },
        favicon: '/images/projects/mayfair.png',
        accent: 'black'
      },
      {
        id: 'most',
        title: 'MOST',
        description:
          'Разработка платформы от BeetBarrel. Фронтенд, бэкенд и интеграции.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://most.beetbarrel.ru/' },
        favicon: '/images/projects/most.png',
        accent: 'blue'
      },
      {
        id: 'jsdarvin',
        title: 'DARVIN Jewelry',
        description:
          'Fullstack-разработка сайта ювелирного дома. Каталог украшений из поделочных камней с экспортом в 7 стран.',
        stack: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://jsdarvin.com/en' },
        favicon: '/images/projects/jsdarvin.png',
        accent: 'dark'
      },
      {
        id: 'postermusic-bot',
        title: 'PosterMusic Bot',
        description:
          'Разработка Telegram-бота для генерации постеров альбомов. Обработка обложек и типографика.',
        stack: ['Node.js', 'TypeScript', 'Telegram API'],
        links: {},
        favicon: null,
        accent: 'red',
        comingSoon: true
      },
      {
        id: 'chat-sdk',
        title: 'Chat SDK',
        description:
          'Разработка SaaS-решения для встраиваемого чата. SDK для React и React Native с серверной частью.',
        stack: ['React', 'React Native', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {},
        favicon: null,
        accent: 'blue',
        comingSoon: true
      }
    ]
  },
  {
    title: 'Веб',
    projects: [
      {
        id: 'nkolmykov',
        title: 'nKolmykov',
        description:
          'Собственный open-source проект. Платформа с 1000+ вопросами для подготовки к собеседованиям и интерактивным квизом.',
        stack: ['Next.js', 'TypeScript', 'React', 'SCSS'],
        links: { live: 'https://n-kolmykov.ru' },
        favicon: '/images/projects/nkolmykov.png',
        accent: 'black'
      },
      {
        id: 'beetbarrel',
        title: 'BeetBarrel',
        description:
          'Разработка корпоративного сайта для digital-агентства. Презентация услуг и кейсов.',
        stack: ['React', 'Next.js', 'TypeScript', 'SCSS'],
        links: { live: 'https://beetbarrel.ru/' },
        favicon: '/images/projects/beetbarrel.png',
        accent: 'black'
      },
      {
        id: 'mindofheart-web',
        title: 'Mind of Heart',
        description:
          'Разработка сайта для психолога в Праге. Запись на консультации, расстановки и коучинг.',
        stack: ['React', 'Next.js', 'TypeScript'],
        links: { live: 'https://mindofheart.com' },
        favicon: '/images/projects/mindofheart.png',
        accent: 'dark'
      },
      {
        id: 'ixxov',
        title: 'IXXOV',
        description:
          'Разработка сайта финтех-компании. Управление финансовым сектором и инвестиции.',
        stack: ['React', 'TypeScript', 'SCSS'],
        links: { live: 'https://ixxov.co.uk/' },
        favicon: '/images/projects/ixxov.svg',
        accent: 'dark'
      }
    ]
  },
  {
    title: 'Мобильные приложения',
    projects: [
      {
        id: 'cardaq-mobile',
        title: 'Cardaq Mobile',
        description:
          'Разработка мобильного клиента платёжной платформы Cardaq. Выпуск карт и управление финансами.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {
          live: 'https://apps.apple.com/us/app/cardaq-mobile-finance/id6470269845'
        },
        favicon: '/images/projects/cardaq.png',
        accent: 'blue'
      },
      {
        id: 'pridepay-mobile',
        title: 'PridePay',
        description:
          'Разработка основного мобильного приложения PridePay. Переводы, управление счетами и платежи.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {},
        favicon: '/images/projects/pridepay.png',
        accent: 'black'
      },
      {
        id: 'pridepay-lite',
        title: 'PridePay Lite',
        description:
          'Разработка lite-версии PridePay для предрегистрации. Онбординг и ранний доступ к платформе.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS'],
        links: {
          live: 'https://apps.apple.com/us/app/pridepay-lite/id6746444616'
        },
        favicon: '/images/projects/pridepay.png',
        accent: 'dark'
      },
      {
        id: 'teido-mobile',
        title: 'Teido Mobile',
        description:
          'Разработка мобильного клиента Teido. Цифровые платежи и финансовые инструменты.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: { live: 'https://apps.apple.com/us/app/teido/id6466304756' },
        favicon: '/images/projects/teido.png',
        accent: 'blue'
      },
      {
        id: 'terka-moloko',
        title: 'Терка с молоком',
        description:
          'Разработка мобильного приложения для подбора завтраков. Геолокация, рейтинг заведений и рекомендации.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {},
        favicon: '/images/projects/terka-moloko.png',
        accent: 'dark'
      },
      {
        id: 'kdc',
        title: 'KDC Care',
        description:
          'Fullstack-разработка медицинского сервиса. Мобильное приложение для пациентов, веб-панель для врачей и аналитика динамики лечения.',
        stack: ['React Native', 'React', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {
          live: 'https://play.google.com/store/apps/details?id=com.w3di.KDC_ReactNative'
        },
        favicon: '/images/projects/kdc.svg',
        accent: 'black'
      },
      {
        id: 'terka-mobile',
        title: 'Мобильная Терка',
        description:
          'Разработка мобильного клиента платформы Тёрка для iOS и Android.',
        stack: ['React Native', 'Expo', 'Node.js', 'NestJS', 'PostgreSQL'],
        links: {},
        favicon: '/images/projects/terkatalk.png',
        accent: 'red',
        comingSoon: true
      },
      {
        id: 'pulsio',
        title: 'Pulsio',
        description:
          'Разработка мобильной CRM для тренеров. Клиенты, расписание, тренировки и аналитика.',
        stack: ['React Native', 'Expo', 'NestJS', 'PostgreSQL'],
        links: {},
        favicon: null,
        accent: 'red',
        comingSoon: true
      }
    ]
  },
  {
    title: 'Open Source',
    projects: [
      {
        id: 'redux-toolkit-contrib',
        title: 'Redux Toolkit',
        description:
          'Контрибьюции: автогенерация тэгов кэширования в RTK Query и фикс бага совместимости с React Native.',
        stack: ['TypeScript', 'React', 'React Native'],
        links: { live: 'https://github.com/reduxjs/redux-toolkit' },
        favicon: null,
        accent: 'dark'
      },
      {
        id: 'waveform',
        title: 'Waveform',
        description:
          'Разработка npm-пакета для визуализации аудио-волн в React Native 0.82+.',
        stack: ['React Native', 'TypeScript'],
        links: {},
        favicon: null,
        accent: 'dark',
        comingSoon: true
      },
      {
        id: 'cell-input',
        title: 'Cell Input',
        description:
          'Разработка npm-пакета компонента ячеистого ввода для React 19+. OTP, PIN и сегментированные поля.',
        stack: ['React', 'TypeScript'],
        links: {},
        favicon: null,
        accent: 'black',
        comingSoon: true
      }
    ]
  }
];

const accentMap: Record<Project['accent'], string> = {
  black: styles.card_black,
  dark: styles.card_dark,
  red: styles.card_red,
  blue: styles.card_blue
};

const ProjectList = () => {
  return (
    <section className={styles.projectList}>
      {sections.map((section) => (
        <div key={section.title} className={styles.section}>
          <h2 className={styles.section__title}>{section.title}</h2>
          <ul className={styles.grid}>
            {section.projects.map((project) => (
              <li
                key={project.id}
                className={`${styles.card} ${accentMap[project.accent]}`}
                tabIndex={0}
                aria-label={`${project.title} — ${project.description}`}
              >
                <div className={styles.card__header}>
                  <div className={styles.card__iconWrapper}>
                    {project.favicon ? (
                      <Image
                        src={project.favicon}
                        alt={`${project.title} иконка`}
                        width={24}
                        height={24}
                        loading='lazy'
                        className={styles.card__favicon}
                      />
                    ) : (
                      <span className={styles.card__iconFallback}>
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.card__title}>{project.title}</h3>
                </div>

                <p className={styles.card__description}>
                  {project.description}
                </p>

                <ul className={styles.card__stack} aria-label='Технологии'>
                  {project.stack.map((tech) => (
                    <li key={tech} className={styles.card__stackItem}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={styles.card__links}>
                  {project.comingSoon ? (
                    <span className={styles.card__badge}>Coming soon</span>
                  ) : (
                    project.links.live && (
                      <a
                        href={project.links.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`${styles.card__link} ${styles.card__link_primary}`}
                        aria-label={`${project.title} — открыть`}
                      >
                        <Icon
                          name='arrowRight'
                          className={styles.card__linkIcon}
                        />
                        <span>Открыть</span>
                      </a>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProjectList;
