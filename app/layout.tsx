import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/public/styles/main.scss';
import { ToastContainer } from 'react-toastify';

import { StructuredData } from '@/components/base';

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

export const viewport: Viewport = {
  themeColor: '#f05023',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  applicationName: 'nKolmykov',
  title: {
    default: 'nKolmykov — подготовка к техническим собеседованиям Fullstack',
    template: '%s — nKolmykov'
  },
  description:
    'Бесплатный open‑source проект для подготовки к техническим собеседованиям Fullstack‑разработчиков. 1000+ вопросов и развёрнутых ответов по React, TypeScript, Next.js, JavaScript, HTML и Sass.',
  authors: [{ name: 'Nikolay Kolmykov', url: 'https://github.com/w3di' }],
  creator: 'Nikolay Kolmykov',
  publisher: 'Nikolay Kolmykov',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  category: 'education',
  classification: 'Education/Technology',
  formatDetection: { email: false, address: false, telephone: false },
  keywords: [
    'подготовка к собеседованию',
    'техническое собеседование',
    'fullstack собеседование',
    'fullstack разработчик',
    'вопросы для собеседования fullstack',
    'react собеседование вопросы и ответы',
    'typescript вопросы собеседование',
    'javascript вопросы для интервью',
    'nextjs интервью вопросы',
    'html вопросы собеседование',
    'sass scss вопросы',
    'react',
    'nextjs',
    'next.js',
    'typescript',
    'javascript',
    'html',
    'css',
    'sass',
    'scss',
    'fullstack',
    'веб разработка',
    'программирование',
    'вопросы и ответы',
    'квиз по программированию',
    'тест для разработчика',
    'интерактивный квиз',
    'обучение fullstack',
    'практика собеседование',
    'nKolmykov',
    'бесплатно',
    'open source',
    'самообразование',
    'junior developer подготовка',
    'middle developer собеседование',
    'senior fullstack вопросы'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/'
    }
  },
  openGraph: {
    type: 'website',
    url: '/',
    locale: 'ru_RU',
    siteName: 'nKolmykov',
    title:
      'nKolmykov — 1000+ вопросов для подготовки к Fullstack собеседованиям',
    description:
      'Бесплатный open‑source проект: интерактивный квиз с 1000+ вопросами и развёрнутыми ответами по React, TypeScript, Next.js, JavaScript, HTML, Sass.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'nKolmykov — подготовка к техническим собеседованиям Fullstack-разработчиков',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'nKolmykov — 1000+ вопросов для подготовки к Fullstack собеседованиям',
    site: '@nKolmykov',
    creator: '@nKolmykov',
    description:
      'Бесплатный open‑source квиз: 1000+ вопросов по React, TypeScript, Next.js, JavaScript с развёрнутыми ответами. Готовьтесь к собеседованиям эффективно.',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'nKolmykov — подготовка к Fullstack собеседованиям'
      }
    ]
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
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'nKolmykov',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
    'google': 'notranslate'
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

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru' className={involve.variable}>
      <head>
        <link rel='preconnect' href='https://n-kolmykov.ru' />
        <meta name='yandex-verification' content='' />
        <meta name='google-site-verification' content='' />
      </head>
      <body>
        <StructuredData />
        <a href='#main-content' className='skip-link'>
          Перейти к основному содержимому
        </a>
        {children}
        <Analytics />
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
};

export default RootLayout;
