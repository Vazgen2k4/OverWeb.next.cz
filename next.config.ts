import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,  // или syncWebAssembly для синхронной загрузки
    };
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",  // Используйте async для асинхронной загрузки
    });
    return config;
  }
  
};

export default nextConfig;
