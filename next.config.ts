import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60],
  },
  // Worker threads also support builds in environments that restrict subprocesses.
  experimental: { workerThreads: true, cpus: 2, useTypeScriptCli: false },
};
export default nextConfig;
