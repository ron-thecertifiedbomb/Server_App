/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    });

    return config;
  },
  reactStrictMode: false,
  images: {
    domains: ['qae2dstoragenew.blob.core.windows.net', 'e2dstorage.blob.core.windows.net', 'seastuffstorage.blob.core.windows.net', 'loremflickr.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['qae2dstoragenew.blob.core.windows.net', 'e2dstorage.blob.core.windows.net', 'seastuffstorage.blob.core.windows.net'],
  },
};

module.exports = nextConfig;