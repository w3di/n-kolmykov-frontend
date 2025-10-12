import path from 'path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use '${path.join(process.cwd(), 'public/styles/abstracts/_index.scss')}' as a;`
  },
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 80, 90, 100]
  }
};

export default nextConfig;
