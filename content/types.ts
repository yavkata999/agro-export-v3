// --- CATEGORIES ---
export type CategorySlug =
  | "torfeni-substrati"
  | "trevni-smesi"
  | "saksii-i-kontejneri-soparco"
  | "rabotni-saksii-i-kontejneri"
  | "formi-za-razsad"
  | "formi-za-razsad-turcziya"
  | "mrezhi-i-folia"
  | "perlit-i-vermikulit"
  | "gradinski-produkti";

export type Category = {
  slug: CategorySlug;
  name: string;
  rootPath: string;
  productsPath: string;
  shortDescription: string;
  longDescription?: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

// --- PRODUCTS ---
export type ProductDownload = {
  label: string;
  url: string;
};

export type Product = {
  id: string;
  category: CategorySlug;
  name: string;
  brand: string;
  shortDescription: string;
  longDescription?: string;
  packaging?: string;
  images: string[];
  features?: string[];
  applications?: string[];
  downloads?: ProductDownload[];
};

// --- TORFENI SUBSTRATI (Landing Page) ---
export type TorfeniSegmentProduct = {
  id: string;
  name: string;
  description: string;
  productId: string;
  packaging?: string;
  features?: string[];
};

export type TorfeniSegment = {
  slug: string;
  title: string;
  audience: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  products: TorfeniSegmentProduct[];
};

export type TorfeniFaq = {
  question: string;
  answer: string;
};
