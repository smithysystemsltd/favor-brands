import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/images/products/**" },
      { pathname: "/_next/static/media/**" },
    ],
  },
};

export default nextConfig;
