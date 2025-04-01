/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    return config;
  },

  reactStrictMode: true
}

module.exports = nextConfig