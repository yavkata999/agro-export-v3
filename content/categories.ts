// content/categories.ts
export type CategorySlug =
  | "trevni-smesi"
  | "torfeni-substrati"
  | "saksii-i-kontejneri-soparco"
  | "rabotni-saksii-i-kontejneri"
  | "sakcii"
  | "formi-za-razsad"
  | "formi-za-razsad-turcziya"
  | "perlit-i-vermikulit"
  | "mrezhi-i-folia"
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
    slug: "rabotni-saksii-i-kontejneri",
    name: "Работни саксии и контейнери",
    rootPath: "/produkti/rabotni-saksii-i-kontejneri",
    productsPath: "/produkti/rabotni-saksii-i-kontejneri",
    shortDescription:
      "Серия работни саксии и контейнери Agro Export – от P8 до 20 см паници и висящи модели за професионално и хоби производство.",
    longDescription:
      "Каталог с работни саксии в кръгла и квадратна форма, включително паници и висящи саксии. Проектирани за надежден дренаж, стабилно стифиране и съвместимост с автоматизирани линии за производство на разсад.",
    seoTitle: "Работни саксии и контейнери – Agro Export",
    seoDescription:
      "Работни саксии и контейнери от Agro Export: кръгли, квадратни, паници и висящи модели с UV защита и добър дренаж за професионални разсадници и оранжерии.",
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
    slug: "mrezhi-i-folia",
    name: "Мрежи и фолиа",
    rootPath: "/produkti/mrezhi-i-folia",
    productsPath: "/produkti/mrezhi-i-folia",
    shortDescription:
      "Мрежи против плевели, птици и засенчващи мрежи за професионална защита на културите.",
    longDescription:
      "Асортимент от мрежи и фолиа за опазване на насаждения: устойчиви на UV лъчи, налични в различни ширини и предназначени за оранжерии, овощни градини и открити площи.",
    seoTitle: "Мрежи и фолиа - Агро Експорт Импорт ООД",
    seoDescription:
      "Защитете растенията си с нашите мрежи против плевели, птици и засенчващи мрежи. Изработени от висококачествени материали.",
  },

  {
    slug: "perlit-i-vermikulit",
    name: "Перлит и вермикулит",
    rootPath: "/produkti/perlit-i-vermikulit",
    productsPath: "/produkti/perlit-i-vermikulit",
    shortDescription:
      "Гръцки перлит и вермикулит за подобряване на аерацията, влагозадържането и структурата на субстрати и почви.",
    longDescription:
      "Експандирани минерали за професионално и хоби приложение – намаляват уплътняването, буферират влагата и подпомагат развитието на корените при разсад, саксийни и контейнерни култури.",
    seoTitle:
      "Перлит и вермикулит – подобрители за субстрати | Agro Export-Import",
    seoDescription:
      "Перлит и вермикулит от Гърция за разрохкване, аерация и влагозадържане в субстрати и почви. Подходящи за разсад, саксийни и оранжерийни култури.",
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
