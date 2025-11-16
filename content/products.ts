// content/products.ts
import type { Product } from "./products/types";
import { trevniSmesiProducts } from "./products/trevni-smesi";

export type { Product } from "./products/types";

export const products: Product[] = [
  ...trevniSmesiProducts,
  // later:
  // ...toroveProducts,
  // ...saksiiProducts,
  // ...substratiProducts,
];
