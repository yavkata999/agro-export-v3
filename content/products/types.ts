// content/products/types.ts
import type { CategorySlug } from "../categories";

export type Product = {
  id: string;
  category: CategorySlug;
  name: string;
  brand?: string;
  shortDescription: string;
  longDescription?: string;
  packaging?: string;
  image?: string;
  features?: string[];
  applications?: string[];
};
