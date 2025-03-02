/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/guzmandam.github.io' : '',
    assetPrefix: isProd ? '/guzmandam.github.io/' : '',
    images: {
      unoptimized: true,
    },
  };

export default nextConfig;
