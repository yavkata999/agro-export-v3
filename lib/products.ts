import {
  categories,
  type Category,
  type CategorySlug,
} from "@content/categories";
import { products, type Product } from "@content/products";

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
