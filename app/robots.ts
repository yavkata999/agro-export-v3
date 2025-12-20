import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://agro-export.com"; // Ensure this matches your real domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Example: hide private folders if you have any
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
