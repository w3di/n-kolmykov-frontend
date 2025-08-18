import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const now = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/about-me`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];
}
