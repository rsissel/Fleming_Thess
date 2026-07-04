const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'app/.next', // 👈 CHANGE THIS LINE TO MATCH THIS EXACTLY
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: path.join(__dirname, '../'),
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.filename = 'static/chunks/[name]-[contenthash:8].js';
      config.output.chunkFilename = 'static/chunks/[contenthash:16].js';
    }
    return config;
  },
};

module.exports = nextConfig;
