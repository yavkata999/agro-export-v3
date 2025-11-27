// content/products.ts
import type { Product } from "./products/types";
import { gradinskiProdukti } from "./products/gradinski-produkti";
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
  ...gradinskiProdukti,
  // later:
  // ...toroveProducts,
  // ...saksiiProducts,
];
