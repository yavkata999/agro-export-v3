// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: "/torfeni-substrati-za-profesionalisti",
        destination: "/produkti/torfeni-substrati/profesionalisti",
        permanent: true,
      },
      {
        source: "/torfeni-substrati-hobi",
        destination: "/produkti/torfeni-substrati/hobi",
        permanent: true,
      },
      {
        source: "/trevni-smesi",
        destination: "/produkti/trevni-smesi",
        permanent: true,
      },
      {
        source: "/saksii-i-kontejneri-soparco",
        destination: "/produkti/saksii-i-kontejneri-soparco",
        permanent: true,
      },
      {
        source: "/rabotni-saksii-i-kontejneri",
        destination: "/produkti/rabotni-saksii-i-kontejneri",
        permanent: true,
      },
      {
        source: "/formi-za-razsad-turcziya",
        destination: "/produkti/formi-za-razsad-turcziya",
        permanent: true,
      },
      {
        source: "/formi-za-razsad",
        destination: "/produkti/formi-za-razsad",
        permanent: true,
      },
      {
        source: "/mrezhi-i-folia",
        destination: "/produkti/mrezhi-i-folia",
        permanent: true,
      },
      {
        source: "/perlit-i-vermikulit",
        destination: "/produkti/perlit-i-vermikulit",
        permanent: true,
      },
      {
        source: "/gradinski-produkti",
        destination: "/produkti/gradinski-produkti",
        permanent: true,
      },
    ];
  },
};

// Use module.exports instead of export default for cPanel compatibility
module.exports = nextConfig;
