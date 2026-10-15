import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/contact", destination: "/visit", statusCode: 301 },
      { source: "/rooftop-pub", destination: "/#gallery", statusCode: 302 },
      { source: "/craft-beer", destination: "/#offers", statusCode: 302 },
      { source: "/occasions", destination: "/#parties", statusCode: 302 },
      { source: "/about", destination: "/#story", statusCode: 302 },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
