// content/products.ts
import type { Product } from "./products/types";
import { trevniSmesiProducts } from "./products/trevni-smesi";
import { torfeniSubstratiHobiProducts } from "./products/torfeni-substrati-hobi";
import { torfeniSubstratiProfesionalniProducts } from "./products/torfeni-substrati-profesionalni";
import { soparcoProducts } from "./products/saksii-i-kontejneri-soparco";

export type { Product } from "./products/types";

export const products: Product[] = [
  ...trevniSmesiProducts,
  ...torfeniSubstratiProfesionalniProducts,
  ...torfeniSubstratiHobiProducts,
  ...soparcoProducts,
  // later:
  // ...toroveProducts,
  // ...saksiiProducts,
];
