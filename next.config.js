/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML export since all data is static (SSG)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
