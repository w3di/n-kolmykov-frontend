import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../public/styles/main.scss';
import { ToastContainer } from 'react-toastify';

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
    'nKolmykov',
    'портфолио',
    'frontend',
    'react',
    'nextjs',
    'typescript',
    'интервью',
    'вопросы и ответы',
    'quiz',
    'собеседование',
    'фронтенд',
    'колмыков',
    'николай'
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
        url: '/images/myLogo.webp',
        width: 1024,
        height: 576,
        alt: 'nKolmykov — проект для подготовки к техническим собеседованиям'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nKolmykov — проект для подготовки к техническим собеседованиям',
    description:
      'Open‑source проект для подготовки к техническим собеседованиям: коллекция актуальных вопросов и развернутых ответов по популярным технологиям.',
    images: ['/images/myLogo.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: [
      {
        url: '/images/myLogo.webp',
        sizes: '15x24',
        type: 'image/webp'
      },
      {
        url: '/images/myLogo.webp',
        sizes: '30x48',
        type: 'image/webp'
      }
    ],
    apple: '/images/myLogo.webp'
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
