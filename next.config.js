/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true, // required for next export
  },
  basePath: '/Portofolio',
  assetPrefix: '/Portofolio/',
};

module.exports = nextConfig;
