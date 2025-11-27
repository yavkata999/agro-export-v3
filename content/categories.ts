// content/categories.ts
export type CategorySlug =
  | "trevni-smesi"
  | "torfeni-substrati"
  | "saksii-i-kontejneri-soparco"
  | "sakcii"
  | "formi-za-razsad"
  | "formi-za-razsad-turcziya"
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

  {
    slug: "formi-za-razsad-turcziya",
    name: "Форми за разсад (Турция)",
    rootPath: "/produkti/formi-za-razsad-turcziya",
    productsPath: "/produkti/formi-za-razsad-turcziya",
    shortDescription:
      "Турски професионални табли за разсад – квадратни, кръгли, дълбоки и разделящи се модели за зеленчуци, цветя и горски култури.",
    longDescription:
      "Каталог с турски табли за разсад: от 20 до 128 гнезда, дълбоки версии и универсална подложка за долно поливане. Подходящи за оранжерии, разсадници и търговия на дребно.",
    seoTitle: "Турски форми за разсад – табли и подложки | Agro Export-Import",
    seoDescription:
      "Професионални турски табли за разсад от 20 до 128 гнезда, дълбоки модели и разделящи се опции. Подходящи за зеленчуци, цветя, горски култури и продажба на дребно.",
  },

  {
    slug: "formi-za-razsad",
    name: "Форми за разсад и подложки",
    rootPath: "/produkti/formi-za-razsad",
    productsPath: "/produkti/formi-za-razsad",
    shortDescription:
      "Табли и подложки за разсад с различна дълбочина и брой гнезда – за зеленчуци, цветя и горски култури.",
    longDescription:
      "Пластмасови форми за разсад от 4 до 512 гнезда и универсална подложка за транспорт и долно поливане. Подходящи за професионални оранжерии и разсадници.",
    seoTitle: "Форми за разсад – табли и подложки за професионална употреба",
    seoDescription:
      "Каталог с пластмасови форми за разсад от 4 до 512 гнезда и подложка за поливане и транспорт. Решения за зеленчукови, цветни и горски разсадници.",
  },

  {
    slug: "gradinski-produkti",
    name: "Градински продукти Florovit, Azofoska",
    rootPath: "/produkti/gradinski-produkti",
    productsPath: "/produkti/gradinski-produkti",
    shortDescription:
      "Пълно портфолио от торове, подобрители на почвата и препарати за домашни и професионални градини.",
    longDescription:
      "Минерални и органични торове Florovit, Azofoska и Pro Natura – решения за тревни площи, иглолистни, овошки, зеленчуци и компостиране.",
    seoTitle: "Градински продукти Florovit – торове и препарати",
    seoDescription:
      "Торове Florovit и Azofoska за тревни площи, иглолистни, овошки, зеленчуци и домашни растения. Активатори за компост и почвени подобрители.",
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
