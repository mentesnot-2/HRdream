import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep this ONLY if you still use next/image for stable external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
    // Prevent Next.js from blocking external images if optimization fails
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
