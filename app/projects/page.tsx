import type { Metadata } from 'next';

import { ProjectsPage } from '@/src/components/pages/projects/projects';

export const metadata: Metadata = {
  title: 'Проекты — работы Николая Колмыкова',
  description:
    'Портфолио проектов Николая Колмыкова: веб-приложения, мобильные приложения, open-source проекты. React, TypeScript, Next.js, React Native, Expo.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Проекты — работы Николая Колмыкова',
    description:
      'Портфолио проектов: веб-приложения, мобильные приложения, open-source. React, TypeScript, Next.js.',
    url: '/projects',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Проекты Николая Колмыкова'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Проекты — работы Николая Колмыкова',
    description: 'Портфолио проектов: веб и мобильная разработка, open-source.',
    images: ['/twitter-image.png']
  }
};

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
