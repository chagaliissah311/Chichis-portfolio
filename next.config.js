/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Use unoptimized for static public images
    remotePatterns: [], // Add remote patterns if needed
  },
};

module.exports = nextConfig;
