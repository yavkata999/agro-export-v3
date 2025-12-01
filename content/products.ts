import type { Product } from "./products/types";
import { gradinskiProdukti } from "./products/gradinski-produkti";
import { formiZaRazsadProducts } from "./products/formi-za-razsad";
import { formiZaRazsadTurciaProducts } from "./products/formi-za-razsad-turcziya";
import { trevniSmesiProducts } from "./products/trevni-smesi";
import { torfeniSubstratiHobiProducts } from "./products/torfeni-substrati-hobi";
import { torfeniSubstratiProfesionalniProducts } from "./products/torfeni-substrati-profesionalni";
import { soparcoProducts } from "./products/saksii-i-kontejneri-soparco";
import { rabotniSaksiiProducts } from "./products/rabotni-saksii-i-kontejneri";
import { mrezhiIFoliaProducts } from "./products/mrezhi-i-folia";
import { perlitVermikulitProducts } from "./products/perlit-i-vermikulit";

export type { Product } from "./products/types";

export const products: Product[] = [
  ...trevniSmesiProducts,
  ...torfeniSubstratiProfesionalniProducts,
  ...torfeniSubstratiHobiProducts,
  ...soparcoProducts,
  ...rabotniSaksiiProducts,
  ...formiZaRazsadTurciaProducts,
  ...formiZaRazsadProducts,
  ...gradinskiProdukti,
  ...mrezhiIFoliaProducts,
  ...perlitVermikulitProducts,
];
