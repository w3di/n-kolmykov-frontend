import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://n-kolmykov.ru';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*']
      },
      {
        userAgent: 'GPTBot',
        allow: '/'
      },
      {
        userAgent: 'Google-Extended',
        allow: '/'
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/'
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/'
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/'
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/'
      },
      {
        userAgent: 'Bytespider',
        allow: '/'
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/'
      },
      {
        userAgent: 'YouBot',
        allow: '/'
      },
      {
        userAgent: 'Amazonbot',
        allow: '/'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
