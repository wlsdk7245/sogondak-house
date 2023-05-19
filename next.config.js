/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['velog.velcdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
