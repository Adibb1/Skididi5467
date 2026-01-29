import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: (config, { isServer }) => {
    if (!isServer) {
      // Prevents error: (0 , _uuid.default) is not a function
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        crypto: false,
        uuid: false,
      };
    }
    return config;
  },
};

export default nextConfig;
