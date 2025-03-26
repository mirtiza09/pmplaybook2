/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This will ignore TypeScript errors during the build process
    ignoreBuildErrors: true,
  },
  
  // Disable experimental features to avoid Turbopack conflicts
  experimental: {
    // Remove turbo: false since it's not a valid boolean option
    forceSwcTransforms: true,
  },
  
  // Ensure webpack is used as the compiler
  webpack: (config, { isServer }) => {
    // Return modified config
    return config;
  },
  
  // Keep React strict mode
  reactStrictMode: true,
  // Remove swcMinify from root level
}

module.exports = nextConfig
