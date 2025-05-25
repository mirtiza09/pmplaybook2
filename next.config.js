/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This will ignore TypeScript errors during the build process
    ignoreBuildErrors: true,
  },
  
  // Remove experimental features that conflict with Turbopack
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  
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
