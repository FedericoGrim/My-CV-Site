/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  basePath = '/My-Cv-Site';
  assetPrefix = '/My-Cv-Site/';
}

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
