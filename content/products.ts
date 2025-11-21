// content/products.ts
import type { Product } from "./products/types";
import { trevniSmesiProducts } from "./products/trevni-smesi";
import { torfeniSubstratiProducts } from "./products/torfeni-substrati";

export type { Product } from "./products/types";

export const products: Product[] = [
  ...trevniSmesiProducts,
  ...torfeniSubstratiProducts,
  // later:
  // ...toroveProducts,
  // ...saksiiProducts,
];
