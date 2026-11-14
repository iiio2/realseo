import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    // Serve images straight from /public instead of the /_next/image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
