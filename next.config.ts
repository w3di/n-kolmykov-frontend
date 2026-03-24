import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use '${path.join(process.cwd(), 'public/styles/abstracts/_index.scss')}' as a;`
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
    globalNotFound: true
  },
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 75, 80, 90, 100]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
