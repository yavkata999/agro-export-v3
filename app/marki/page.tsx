import type { Metadata } from "next";
import Link from "next/link";

import styles from "@styles/pages/MarkiPage.module.css";

export const metadata: Metadata = {
  title: "Марки и Партньори | Агро Експорт Импорт ООД",
  description:
    "Официален вносител на Durpeta, Soparco, GlobalGrass и Florovit за България. Вижте пълното портфолио от професионални градински марки.",
};

const HERO_FEATURES = [
  {
    title: "Качество без компромис",
    text: "Работим само с доказани европейски производители, гарантиращи постоянство в състава и характеристиките на всяка партида.",
  },
  {
    title: "Сигурност на доставките",
    text: "Планираме складови наличности месеци напред, за да сте спокойни, че стоката ще е при вас точно когато сезонът започне.",
  },
  {
    title: "Маркетинг и Обучение",
    text: "Не просто доставяме палети – ние обучаваме вашия екип как да продава продуктите и осигуряваме рекламни материали.",
  },
];

const STATS = [
  { value: "6+", label: "ексклузивни бранда" },
  { value: "200+", label: "активни артикула" },
  { value: "100%", label: "гарантиран произход" },
];

const BRAND_CLUSTERS = [
  {
    title: "Субстрати и подобрители",
    description:
      "Основата на успеха за всеки производител. Предлагаме решения за професионални разсадници и хоби градинари с гарантирана структура и чистота.",
    brands: [
      {
        name: "Durpeta",
        description:
          "Лидер в добива на торф от Литва. Професионални субстрати с прецизни рецепти за всяка култура.",
      },
      {
        name: "Agroperlite Greece",
        description:
          "Висококачествен гръцки перлит за подобряване на аерацията и дренажа в почвените смеси.",
      },
    ],
  },
  {
    title: "Торове и тревни смеси",
    description:
      "Цялостни решения за подхранване и озеленяване. От старта на семето до поддръжката на перфектната морава.",
    brands: [
      {
        name: "Florovit & Azofoska",
        description:
          "Полският стандарт за качество при торовете. Комплексни решения за всяка фаза на растеж.",
      },
      {
        name: "GlobalGrass",
        description:
          "Премиум тревни смески за паркове, спортни терени и частни градини с висока кълняемост.",
      },
    ],
  },
  {
    title: "Саксии и производство",
    description:
      "Всичко необходимо за модерната оранжерия – от форми за разсад до контейнери за отглеждане.",
    brands: [
      {
        name: "Soparco",
        description:
          "Френски иновации в пластмасовите саксии. Лидер в контейнерите за разсадници.",
      },
      {
        name: "Турски производители",
        description:
          "Баланс между качество и цена. Надеждни работни саксии и тарелки за масово производство.",
      },
    ],
  },
];

const GUARANTEES = [
  "Приоритетно зареждане за лоялни партньори по време на пиковия сезон.",
  "Консултация при избора на асортимент спрямо вашия регион и клиенти.",
  "Техническа документация и сертификати за всички продукти.",
  "Гъвкави схеми на доставка и логистична подкрепа.",
];

const PROCESS = [
  {
    title: "1. Анализ",
    description:
      "Разглеждаме вашия бизнес модел и клиенти, за да предложим най-подходящия микс от марки и продукти.",
  },
  {
    title: "2. Тестване",
    description:
      "Възможност за поръчка на мостри и малки количества, за да се уверите в качеството преди основното зареждане.",
  },
  {
    title: "3. Партньорство",
    description:
      "Дългосрочно планиране на заявките, маркетингова подкрепа и регулярни посещения от наш търговски представител.",
  },
];

export default function BrandsPage() {
  // --- SEO SCHEMA ---
  // This schema links your company to the brands you sell as a distributor.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Агро Експорт Импорт ООД",
    url: "https://agro-export.com/marki",
    description:
      "Официален вносител и дистрибутор на водещи европейски марки за градинарство: Durpeta, Soparco, GlobalGrass, Florovit.",
    knowsAbout: [
      "Horticulture",
      "Peat Substrates",
      "Fertilizers",
      "Grass Seeds",
      "Plant Pots",
    ],
    brand: [
      { "@type": "Brand", name: "Durpeta" },
      { "@type": "Brand", name: "Soparco" },
      { "@type": "Brand", name: "GlobalGrass" },
      { "@type": "Brand", name: "Florovit" },
      { "@type": "Brand", name: "Azofoska" },
    ],
  };

  return (
    <div className={styles.page}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Европейско качество</p>
              <h1 className={styles.title}>Марки, които изграждат репутация</h1>
              <p className={styles.lead}>
                Вашият успех зависи от продуктите, които предлагате. Ние сме
                селектирали портфолио от водещи производители, които гарантират
                качество, иновации и надеждност. Като официален вносител, ние ви
                даваме директен достъп до най-доброто от Европа.
              </p>

              <div className={styles.heroHighlights}>
                {HERO_FEATURES.map((feature) => (
                  <div key={feature.title} className={styles.highlightItem}>
                    <p className={styles.highlightTitle}>{feature.title}</p>
                    <p className={styles.highlightText}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.assuranceCard}>
              <h2 className={styles.assuranceTitle}>Защо да изберете нас?</h2>
              <p className={styles.assuranceText}>
                Ние не сме просто доставчик, а стратегически партньор, който се
                грижи вашият бизнес да разполага с правилните стоки в правилното
                време.
              </p>
              <ul className={styles.assuranceList}>
                {GUARANTEES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/kontakti" className={styles.ctaButton}>
                Станете партньор
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.value} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.brandsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Портфолио по направления</h2>
            <p>
              Разделихме нашите марки в три основни направления, за да покрием
              пълния цикъл на производство и търговия с растения.
            </p>
          </div>

          <div className={styles.brandClusterGrid}>
            {BRAND_CLUSTERS.map((cluster) => (
              <article key={cluster.title} className={styles.brandCluster}>
                <div>
                  <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                  <p className={styles.clusterDescription}>
                    {cluster.description}
                  </p>
                </div>

                <div className={styles.brandList}>
                  {cluster.brands.map((brand) => (
                    <div key={brand.name} className={styles.brandCard}>
                      <p className={styles.brandName}>{brand.name}</p>
                      <p className={styles.brandDescription}>
                        {brand.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.partnerSection}>
        <div className="container">
          <div className={styles.partnerGrid}>
            <article className={styles.partnerCard}>
              <h3>Гаранция за партньори</h3>
              <p>
                Вярваме в дългосрочните отношения. Когато работите с нас,
                получавате не само стока, а цялостна подкрепа за развитието на
                вашия бизнес.
              </p>
              <ul className={styles.guaranteeList}>
                {GUARANTEES.map((item) => (
                  <li key={`guarantee-${item}`}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.partnerCard}>
              <h3>Как работим?</h3>
              <p>Процесът ни е създаден да бъде лесен и прозрачен за вас.</p>
              <div className={styles.processList}>
                {PROCESS.map((step) => (
                  <div key={step.title} className={styles.processItem}>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaCard}>
            <p className={styles.finalCtaEyebrow}>Готови за работа?</p>
            <h2>Нека изградим успешен сезон заедно</h2>
            <p>
              Свържете се с нас за актуална ценова листа и консултация относно
              най-подходящите продукти за вашия регион и клиенти.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/kontakti" className={styles.finalCtaButtonPrimary}>
                Свържете се с нас
              </Link>
              <Link href="/za-nas" className={styles.finalCtaButtonSecondary}>
                Научете повече за фирмата
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
