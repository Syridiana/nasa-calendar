/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
