import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
