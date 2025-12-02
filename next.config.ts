import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    // Drop legacy browser bundles so Lighthouse only measures modern JavaScript
    legacyBrowsers: false,
  },

  // Cloudinary Configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // Restricts access to your specific Cloudinary account (from your API data)
        pathname: "/dggelqxji/**",
      },
    ],
  },

  // Your existing redirects
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
