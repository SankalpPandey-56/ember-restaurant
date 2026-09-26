import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project lives in a nested folder of a larger git checkout; keep
  // Turbopack's file watching scoped to the app itself.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
