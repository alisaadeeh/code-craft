import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/piston/:path*",
        destination: "http://localhost:2000/api/v2/:path*",
      },
    ];
  },
};

export default nextConfig;
