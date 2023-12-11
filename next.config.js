/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MY_API: process.env.NEXT_PUBLIC_MY_API,
  },
};

module.exports = nextConfig;
