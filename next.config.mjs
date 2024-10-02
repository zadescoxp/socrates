/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URI: "https://chiko-backend.onrender.com",
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
