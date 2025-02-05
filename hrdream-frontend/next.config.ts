import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['avatar.iran.liara.run'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
