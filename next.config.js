/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Keep optimization enabled for Vercel
    remotePatterns: [], // Add remote patterns if needed
  },
};

module.exports = nextConfig;
