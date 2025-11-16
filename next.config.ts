import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/trevni-smesi",
        destination: "/produkti/trevni-smesi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
