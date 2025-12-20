import { categories } from "@content/categories";
import { products } from "@content/products";

// 1. Get all category slugs (for generating static category pages)
export function getAllCategorySlugs() {
  return categories.map((c) => c.slug);
}

// 2. Get specific category data
export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

// 3. Get all products belonging to a specific category
export function getProductsByCategory(slug: string) {
  // We compare the product's 'category' field with the url slug
  return products.filter((p) => p.category === slug);
}

// 4. Get a single product by ID
export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

// 5. Get all possible product paths (category + id) for static generation
export function getAllProductPaths() {
  return products.map((p) => ({
    slug: p.category,
    id: p.id,
  }));
}
