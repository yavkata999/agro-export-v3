// content/categories.ts
export type CategorySlug =
  | "trevni-smesi"
  | "torfeni-substrati"
  | "sakcii"
  | "formi-za-razsad"
  | "perlit-vermikulit"
  | "mrezhi"
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
};

export const categories: Category[] = [
  {
    slug: "trevni-smesi",
    name: "Тревни смеси GlobalGrass",
    rootPath: "/produkti/trevni-smesi",
    productsPath: "/produkti/trevni-smesi",
    shortDescription:
      "Тревни смеси GlobalGrass за дворове, обществени пространства и спортни терени.",
    longDescription:
      "Като вносител на тревни смеси GlobalGrass предлагаме универсални, спортни и декоративни тревни смеси за B2B клиенти.",
    seoTitle: "Тревни смеси GlobalGrass – вносител за България",
    seoDescription:
      "Официален вносител на тревни смеси GlobalGrass за България. Асортимент за дворове, спортни терени и озеленяване.",
  },

  // Example of how future categories will look:
  // {
  //   slug: "torfeni-substrati",
  //   name: "Торфени субстрати Durpeta",
  //   rootPath: "/produkti/torfeni-substrati",
  //   productsPath: "/produkti/torfeni-substrati",
  //   shortDescription:
  //     "Професионални и хоби торфени субстрати Durpeta – внос от Литва.",
  //   longDescription:
  //     "Висококачествени субстрати за разсадопроизводство, оранжерии и градински центрове. Налични в различни размери и фракции.",
  //   seoTitle: "Торфени субстрати Durpeta – вносител за България",
  //   seoDescription:
  //     "Официален вносител на Durpeta торфени субстрати за професионални и хоби приложения.",
  // },
];
