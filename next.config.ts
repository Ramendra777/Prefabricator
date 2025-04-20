// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable React Strict Mode if needed
  reactStrictMode: true,
  
  
  // Only needed for hybrid approach:
  pageExtensions: ['page.tsx', 'page.jsx', 'tsx', 'jsx'],
  
  // Add TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Optional: Configure modularize imports
  modularizeImports: {
    '@src/components': {
      transform: '@src/components/{{member}}',
    },
  }
}

export default nextConfig