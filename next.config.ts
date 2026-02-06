import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set your repository name if deploying to GitHub Pages subdirectory
  // basePath: "/portfolio",
  // trailingSlash: true,
};

export default nextConfig;
