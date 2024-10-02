/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URI: "http://localhost:4000",
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
