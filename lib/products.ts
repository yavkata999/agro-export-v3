// lib/products.ts
import {
  categories,
  type Category,
  type CategorySlug,
} from "@content/categories";
import { products, type Product } from "@content/products";

// Optional helpers if you need them elsewhere:
export function getAllCategories(): Category[] {
  return categories;
}

export function getAllProducts(): Product[] {
  return products;
}

// Get a single category by its slug
export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// Get all products in a given category
export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

// Get a single product by its id
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
