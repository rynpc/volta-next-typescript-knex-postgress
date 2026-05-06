import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["knex"],
  turbopack: {}, 
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        {
          'better-sqlite3': 'commonjs better-sqlite3',
          'mysql': 'commonjs mysql',
          'mysql2': 'commonjs mysql2',
          'oracledb': 'commonjs oracledb',
          'sqlite3': 'commonjs sqlite3',
          'tedious': 'commonjs tedious',
          'pg-query-stream': 'commonjs pg-query-stream',
        },
      ];
    }
    return config;
  },
};

export default nextConfig;
