// content/torfeni-substrati.ts

export type TorfeniSegmentProduct = {
  id: string;
  name: string;
  description: string;
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

export type TorfeniSeo = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
  };
};

export const torfeniSegmentProfessional: TorfeniSegment = {
  slug: "/produkti/torfeni-substrati/profesionalisti",
  title: "Торфени субстрати за професионалисти",
  audience: "Оранжерии, разсадници, градински центрове",
  description:
    "Премиум субстрати Durpeta за професионално производство на зеленчуков и цветен разсад, ягодоплодни и декоративни култури. Разработени за контролирана структура, стабилен воден и въздушен баланс и повторяеми резултати при интензивно натоварване.",
  highlights: [
    "Селектирани фракции за разсад и оранжерии",
    "Буферирано pH и електропроводимост",
    "Добавени торове и перлит по заявка",
  ],
  ctaLabel: "Вижте професионалните смеси",
  ctaHref: "/produkti/torfeni-substrati/profesionalisti",
  products: [
    {
      id: "durpeta-professional-1",
      name: "Durpeta Pro Seed Start",
      description:
        "Ситна фракция (0–10 мм) с прецизно pH за засяване и пикиране в тавички.",
      packaging: "70 л, биг-бег",
      features: [
        "Стабилна структура за равномерно поникване",
        "Минимизиране на засушаване в клетките",
        "Поддържа фина коренова система",
      ],
    },
    {
      id: "durpeta-professional-2",
      name: "Durpeta Pro Vegetables",
      description:
        "Средна фракция (0–20 мм) за зеленчуков разсад, едносезонни цветя и билки.",
      packaging: "70 л, биг-бег",
      features: [
        "Оптимално водно-воздушно съотношение",
        "Възможност за добавка на перлит",
        "Стартово торене за 2–3 седмици",
      ],
    },
    {
      id: "durpeta-professional-3",
      name: "Durpeta Pro Container Mix",
      description:
        "Едра фракция (10–25 мм) за контейнери, декоративни и ягодоплодни култури.",
      packaging: "250 л, биг-бег",
      features: [
        "Дълготрайна структура за многомесечно отглеждане",
        "Добра дренажност при висока водоемност",
        "Персонализирано торене по култура",
      ],
    },
  ],
};

export const torfeniSegmentHobby: TorfeniSegment = {
  slug: "/produkti/torfeni-substrati/hobi",
  title: "Торфени субстрати за хоби градинари",
  audience: "Любители градинари и ландшафтни любители",
  description:
    "Подбрани смеси за презасаждане, разсад и поддържане на стайни и дворни растения. Лесни за работа, с балансирано pH и добавени торове за сигурен старт.",
  highlights: [
    "Готови за употреба торби с различни обеми",
    "Стабилно pH за стайни и градински растения",
    "Опаковки с ясни инструкции за любители",
  ],
  ctaLabel: "Разгледайте хоби асортимента",
  ctaHref: "/produkti/torfeni-substrati/hobi",
  products: [
    {
      id: "durpeta-hobby-1",
      name: "Durpeta Garden Mix",
      description:
        "Универсален торфен субстрат за саксийни и балконски растения със стартово торене.",
      packaging: "20 л, 50 л",
      features: [
        "Готов за употреба",
        "Подходящ за презасаждане на сезонни цветя",
        "Добър воден капацитет без уплътняване",
      ],
    },
    {
      id: "durpeta-hobby-2",
      name: "Durpeta Balcony & Flowers",
      description:
        "Смес за каскадни и балконски растения с по-добър дренаж и подхранване.",
      packaging: "20 л, 45 л",
      features: [
        "Перлит за подобрена аерация",
        "Поддържа обилен цъфтеж",
        "Лесна за разрохкване структура",
      ],
    },
    {
      id: "durpeta-hobby-3",
      name: "Durpeta Seedling & Herbs",
      description:
        "Фина структура за семена и подправки, осигуряваща равномерно поникване.",
      packaging: "10 л, 20 л",
      features: [
        "Буферирано pH за чувствителни култури",
        "Лека и проветрива текстура",
        "Стартово хранене за първи седмици",
      ],
    },
  ],
};

export const torfeniSeoHub: TorfeniSeo = {
  title: "Торфени субстрати Durpeta | Agro Export-Import",
  description:
    "Премиум торфени субстрати за професионалисти и хоби градинари – контролирано pH, различни фракции и готови рецепти.",
  canonical: "https://agro-export.com/produkti/torfeni-substrati",
  keywords: "торфени субстрати, durpeta, субстрат за разсад, хоби субстрати",
  openGraph: {
    title: "Торфени субстрати за професионалисти и хоби градинари",
    description:
      "Структурирани смеси с премиум торф, оптимално pH и контролирана фракция – за сигурно поникване, здрави корени и впечатляващ резултат.",
  },
};

export const torfeniSeoProfessional: TorfeniSeo = {
  title: "Торфени субстрати за професионалисти | Agro Export-Import",
  description:
    "Премиум субстрати Durpeta за професионално производство на зеленчуков и цветен разсад, ягодоплодни и декоративни култури.",
  canonical: "https://agro-export.com/produkti/torfeni-substrati/profesionalisti",
  keywords:
    "професионални торфени субстрати, durpeta substrati, субстрат за разсад, торф за оранжерия",
  openGraph: {
    title: "Durpeta професионални торфени субстрати",
    description:
      "Контролирана фракция, буферирано pH и персонализирани рецепти за оранжерии, разсадници и градински центрове.",
  },
};

export const torfeniSeoHobby: TorfeniSeo = {
  title: "Торфени субстрати за хоби градинари | Agro Export-Import",
  description:
    "Подбрани хоби смеси за презасаждане, разсад и стайни растения с балансирано pH и лесни инструкции.",
  canonical: "https://agro-export.com/produkti/torfeni-substrati/hobi",
  keywords:
    "хоби торфени субстрати, субстрат за цветя, торф за балконски растения, торф за стайни растения",
  openGraph: {
    title: "Durpeta хоби субстрати",
    description:
      "Готови за употреба торби с различни обеми и стабилно pH за сигурно презасаждане у дома.",
  },
};

export const torfeniFaq: TorfeniFaq[] = [
  {
    question: "Кога да избера професионален субстрат вместо хоби смес?",
    answer:
      "Професионалните смеси са разработени за разсадопроизводство и култури с дълъг цикъл, където структурата и pH трябва да са контролирани. Хоби вариантите са по-универсални и готови за директна употреба в домашни условия.",
  },
  {
    question: "Мога ли да поръчам със специфична рецепта?",
    answer:
      "Да. За B2B клиенти можем да предложим фракция, стартово торене и добавки (перлит, кокосови влакна) според културата и сезона. Свържете се за индивидуална рецепта.",
  },
  {
    question: "Какви са опциите за доставка?",
    answer:
      "Поддържаме наличности в стандартни торби и организираме доставки на палети или биг-бегове за оранжерии и центрове в цялата страна.",
  },
];

export const torfeniHero = {
  eyebrow: "Durpeta – Литва",
  title: "Торфени субстрати за професионалисти и хоби градинари",
  subtitle:
    "Структурирани смеси с премиум торф, оптимално pH и контролирана фракция – за сигурно поникване, здрави корени и впечатляващ резултат.",
  primaryCtaLabel: "Изберете вашия профил",
  primaryCtaHref: "#segments",
  secondaryCtaLabel: "Запитване за оферта",
  secondaryCtaHref: "/kontakti",
};

export const torfeniHighlights = [
  {
    title: "Премиум суровина",
    description: "Светъл и тъмен торф от контролирани находища, с постоянна влажност и структура.",
  },
  {
    title: "Контролирано pH",
    description: "Буфериране и анализ за стабилна реакция според културата и фазата на развитие.",
  },
  {
    title: "Готови рецепти и персонализация",
    description: "Готови смеси за хоби клиенти и custom рецепти за професионални производители.",
  },
];

export const torfeniUseCases = [
  {
    title: "Разсадопроизводство",
    description: "Ситни фракции за тавички и пълно покритие на семена със стабилен воден баланс.",
  },
  {
    title: "Контейнерно производство",
    description: "Едри фракции за дълготрайно задържане на структура при декоративни култури.",
  },
  {
    title: "Балконски и стайни растения",
    description: "Универсални хоби смеси с инструкции за лесно презасаждане у дома.",
  },
  {
    title: "Ягодоплодни",
    description: "Субстрати с добър дренаж и хранителен баланс за ягоди, малини и боровинки в саксии.",
  },
];
