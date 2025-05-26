/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/My-CV-Site',
  assetPrefix: '/My-CV-Site/', 
  output: "export",
  images: {
      unoptimized: true,
    },
};

export default nextConfig;