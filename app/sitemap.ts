import type { MetadataRoute } from "next";
// ✅ IMPORT YOUR EXISTING FUNCTION
import { getAllProductPaths } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agro-export.com"; // Ensure this is your production domain

  // 1. GET DYNAMIC PRODUCT PATHS
  const productPaths = getAllProductPaths();

  const productUrls = productPaths.map((path) => ({
    // path.slug is the category, path.id is the product ID
    url: `${baseUrl}/produkti/${path.slug}/${path.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 2. DEFINE STATIC PAGES
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/produkti`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marki`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/video`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/za-nas`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kontakti`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politika-za-zashtita-na-lichnite-danni`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 3. MERGE EVERYTHING
  return [...staticRoutes, ...productUrls];
}
