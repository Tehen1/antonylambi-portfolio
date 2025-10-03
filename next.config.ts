import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Static Site Generation pour Cloudflare Pages
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Images optimisées en mode export
  images: {
    unoptimized: true, // Requis pour output: 'export'
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
    typedRoutes: true,
  },

  // Webpack customization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
