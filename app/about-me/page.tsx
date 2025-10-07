import type { Metadata } from 'next';
import { AboutMePage } from '@/src/components/pages/about-me/about-me';

export const metadata: Metadata = {
  title: 'Обо мне',
  description:
    'Николай Колмыков — фронтенд‑разработчик. Опыт, навыки, проекты и контакты. Автор open‑source проекта nKolmykov.',
  alternates: { canonical: '/about-me' },
  openGraph: {
    title: 'Обо мне — nKolmykov',
    description:
      'Николай Колмыков — фронтенд‑разработчик. Опыт, навыки, проекты и контакты. Автор open‑source проекта nKolmykov.',
    url: '/about-me',
    images: [
      {
        url: '/images/myLogo.webp',
        width: 1024,
        height: 576,
        alt: 'Обо мне — nKolmykov'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Обо мне — nKolmykov',
    description:
      'Николай Колмыков — фронтенд‑разработчик. Опыт, навыки, проекты и контакты. Автор open‑source проекта nKolmykov.',
    images: ['/images/myLogo.webp']
  }
};

export default function AboutMe() {
  return <AboutMePage />;
}
