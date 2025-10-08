import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../public/styles/main.scss';
import { ToastContainer } from 'react-toastify';
import { StructuredData } from '../src/components/base';

const involve = localFont({
  src: [
    {
      path: '../public/font/Involve/Involve-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-Oblique.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-MediumOblique.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-SemiBoldOblique.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../public/font/Involve/Involve-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/font/Involve/Involve-BoldOblique.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-involve'
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  applicationName: 'nKolmykov',
  title: {
    default: 'nKolmykov — проект для подготовки к техническим собеседованиям',
    template: '%s — nKolmykov'
  },
  description:
    'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
  authors: [{ name: 'Nikolay Kolmykov', url: 'https://github.com/w3di' }],
  creator: 'Nikolay Kolmykov',
  publisher: 'Nikolay Kolmykov',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  keywords: [
    // Основные ключевые слова
    'подготовка к собеседованию',
    'техническое собеседование',
    'frontend разработчик',
    'react собеседование',
    'typescript вопросы',
    'nextjs интервью',
    'javascript собеседование',

    // Технологии
    'react',
    'nextjs',
    'next.js',
    'typescript',
    'javascript',
    'frontend',
    'веб разработка',
    'программирование',

    // Форматы контента
    'вопросы и ответы',
    'квиз',
    'тест',
    'интерактивный',
    'обучение',
    'практика',

    // Дополнительные
    'nKolmykov',
    'колмыков',
    'николай',
    'портфолио',
    'open source',
    'бесплатно',
    'онлайн',
    'самообразование'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    locale: 'ru_RU',
    siteName: 'nKolmykov',
    title: 'nKolmykov — проект для подготовки к техническим собеседованиям',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'nKolmykov — проект для подготовки к техническим собеседованиям'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nKolmykov — проект для подготовки к техническим собеседованиям',
    site: '@nKolmykov',
    creator: '@nKolmykov',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    images: ['/twitter-image.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      'index': true,
      'follow': true,
      'noimageindex': false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  other: {
    'msapplication-TileColor': '#f05023',
    'theme-color': '#f05023',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'nKolmykov',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no'
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any'
      },
      {
        url: '/icon.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={involve.variable}>
      <body>
        <StructuredData />
        {children}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          closeButton={false}
          hideProgressBar={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          limit={3}
        />
      </body>
    </html>
  );
}
