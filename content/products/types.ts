import type { CategorySlug } from "../categories";

export type Product = {
  id: string;
  category: CategorySlug;
  name: string;
  brand?: string;
  shortDescription: string;
  longDescription?: string;
  packaging?: string;
  images?: string[];
  features?: string[];
  applications?: string[];
};
