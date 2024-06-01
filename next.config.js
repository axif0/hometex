// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    // Disables ESLint during builds
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['jsx', 'ts', 'tsx', 'md'], // Add this line
};

module.exports = nextConfig;
