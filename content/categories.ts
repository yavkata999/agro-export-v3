// content/categories.ts
export type CategorySlug =
  | "trevni-smesi"
  | "torfeni-substrati"
  | "saksii-i-kontejneri-soparco"
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
    slug: "torfeni-substrati",
    name: "Торфени субстрати Durpeta",
    rootPath: "/produkti/torfeni-substrati",
    productsPath: "/produkti/torfeni-substrati",
    shortDescription:
      "Професионални и хоби торфени субстрати Durpeta – за разсад, контейнери и домашни растения.",
    longDescription:
      "Премиум смеси със светъл и тъмен торф, контролирано pH и възможност за персонализация според културата.",
    seoTitle: "Торфени субстрати Durpeta – професионални и хоби решения",
    seoDescription:
      "Durpeta торфени субстрати за професионалисти и хоби градинари – контролирано pH, различни фракции, готови смеси и custom рецепти.",
  },

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

  {
    slug: "saksii-i-kontejneri-soparco",
    name: "Саксии и контейнери Soparco",
    rootPath: "/produkti/saksii-i-kontejneri-soparco",
    productsPath: "/produkti/saksii-i-kontejneri-soparco",
    shortDescription:
      "Професионални саксии, контейнери и фиксатори Soparco за оранжерии, разсадници и градински центрове.",
    longDescription:
      "Серия DUO, висящи саксии и аксесоари Soparco, проектирани за автоматизирани линии, стабилна логистика и сигурен растеж на растенията.",
    seoTitle: "Саксии и контейнери Soparco – професионални решения",
    seoDescription:
      "Асортимент Soparco: саксии DUO, висящи саксии и фиксатори за стабилен транспорт. Подходящи за автоматизация и B2B клиенти.",
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
