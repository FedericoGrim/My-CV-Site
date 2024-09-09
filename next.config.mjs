/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = 'My-CV-Site';
let basePath = 'My-CV-Site';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');  // Ottieni il nome del repository
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
