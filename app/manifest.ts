import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'nKolmykov — проект для подготовки к техническим собеседованиям',
    short_name: 'nKolmykov',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: '#f05023',
    background_color: '#ffffff',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    shortcuts: [
      {
        name: 'Главная страница',
        short_name: 'Главная',
        description: 'Перейти на главную страницу',
        url: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Проверка знаний',
        short_name: 'Знания',
        description: 'Проверить знания по технологиям',
        url: '/knowledge',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'О проекте',
        short_name: 'О проекте',
        description: 'Узнать больше о проекте',
        url: '/about-me',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    ]
  };
}
