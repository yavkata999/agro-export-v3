import type { Metadata } from "next";
import Link from "next/link";
import styles from "@styles/pages/MarkiPage.module.css";

export const metadata: Metadata = {
  title: "Марки и Партньори | Агро Експорт Импорт ООД",
  description:
    "Официален вносител на Durpeta, Soparco, GlobalGrass и Florovit за България. Вижте пълното портфолио от професионални градински марки.",
};

/* --- ICONS (Zero Deps) --- */
const Icons = {
  Award: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Shield: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Leaf: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Droplet: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.74 5.88a6 6 0 0 1-8.48 8.48A6 6 0 0 1 5.5 15.03l.64-.64z" />
      <path d="M12 2.69l1.65 1.7a3 3 0 0 0 4.15-4.39z" />
    </svg>
  ),
  Box: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Check: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

const HERO_FEATURES = [
  {
    icon: Icons.Award,
    title: "Качество без компромис",
    text: "Работим само с доказани европейски производители, гарантиращи постоянство във всяка партида.",
  },
  {
    icon: Icons.Shield,
    title: "Сигурност на доставките",
    text: "Планираме складови наличности месеци напред, за да сте спокойни през активния сезон.",
  },
  {
    icon: Icons.TrendingUp,
    title: "Маркетинг и Обучение",
    text: "Не просто доставяме палети – ние обучаваме вашия екип и осигуряваме рекламни материали.",
  },
];

const STATS = [
  { value: "6+", label: "Ексклузивни бранда" },
  { value: "200+", label: "Активни артикула" },
  { value: "100%", label: "Гарантиран произход" },
];

const BRAND_CLUSTERS = [
  {
    title: "Субстрати и подобрители",
    icon: Icons.Leaf,
    description: "Основата на успеха. Професионални решения за разсадници.",
    brands: [
      {
        name: "Durpeta",
        origin: "Литва",
        description:
          "Лидер в добива на торф. Професионални субстрати с прецизни рецепти за всяка култура.",
      },
      {
        name: "Agroperlite Greece",
        origin: "Гърция",
        description:
          "Висококачествен гръцки перлит за подобряване на аерацията и дренажа.",
      },
    ],
  },
  {
    title: "Торове и тревни смеси",
    icon: Icons.Droplet,
    description: "Цялостни решения за подхранване и професионално озеленяване.",
    brands: [
      {
        name: "Florovit & Azofoska",
        origin: "Полша",
        description:
          "Полският стандарт за качество. Комплексни торове за всяка фаза на растеж.",
      },
      {
        name: "GlobalGrass",
        origin: "Полша",
        description:
          "Премиум тревни смески за паркове, спортни терени и частни градини.",
      },
    ],
  },
  {
    title: "Саксии и производство",
    icon: Icons.Box,
    description:
      "Всичко необходимо за модерната оранжерия – от табли до контейнери.",
    brands: [
      {
        name: "Soparco",
        origin: "Франция",
        description:
          "Френски иновации в пластмасовите саксии. Лидер в контейнерите за разсадници.",
      },
      {
        name: "IPPL",
        origin: "Турция",
        description:
          "Баланс между качество и цена. Надеждни работни саксии за масово производство.",
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
    title: "Анализ на нуждите",
    description:
      "Разглеждаме вашия бизнес модел, за да предложим най-подходящия микс от марки.",
  },
  {
    title: "Тестване и мостри",
    description:
      "Възможност за поръчка на малки количества, за да се уверите в качеството.",
  },
  {
    title: "Дългосрочно партньорство",
    description:
      "Планиране на заявките, маркетингова подкрепа и регулярни посещения.",
  },
];

export default function BrandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Агро Експорт Импорт ООД",
    description: "Официален вносител на водещи европейски марки.",
    brand: [
      { "@type": "Brand", name: "Durpeta" },
      { "@type": "Brand", name: "Soparco" },
      { "@type": "Brand", name: "GlobalGrass" },
      { "@type": "Brand", name: "Florovit" },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <Icons.Shield /> Европейско качество
            </span>
            <h1 className={styles.title}>Марки, които изграждат репутация</h1>
            <p className={styles.lead}>
              Вашият успех зависи от продуктите, които предлагате. Като
              официален вносител, ние ви даваме директен достъп до най-доброто
              от Европа.
            </p>

            <div className={styles.heroHighlights}>
              {HERO_FEATURES.map((feature, idx) => (
                <div key={idx} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <feature.icon />
                  </div>
                  <p className={styles.highlightTitle}>{feature.title}</p>
                  <p className={styles.highlightText}>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BRAND CLUSTERS */}
      <section className={styles.brandsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Портфолио по направления</h2>
            <p>Пълен цикъл решения за производство и търговия.</p>
          </div>

          <div className={styles.brandClusterGrid}>
            {BRAND_CLUSTERS.map((cluster) => (
              <div key={cluster.title} className={styles.brandCluster}>
                <div className={styles.clusterHeader}>
                  <div className={styles.clusterInfo}>
                    <h3>
                      <span className={styles.clusterIcon}>
                        <cluster.icon />
                      </span>
                      {cluster.title}
                    </h3>
                    <p className={styles.clusterDescription}>
                      {cluster.description}
                    </p>
                  </div>
                </div>

                <div className={styles.brandList}>
                  {cluster.brands.map((brand) => (
                    <div key={brand.name} className={styles.brandCard}>
                      <div className={styles.brandName}>
                        {brand.name}
                        <span className={styles.brandBadge}>
                          {brand.origin}
                        </span>
                      </div>
                      <p className={styles.brandDescription}>
                        {brand.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className={styles.partnerSection}>
        <div className="container">
          <div className={styles.partnerGrid}>
            {/* Guarantee Card */}
            <article className={styles.partnerCard}>
              <h3>Гаранция за партньори</h3>
              <p>Когато работите с нас, получавате цялостна подкрепа.</p>
              <div className={styles.guaranteeList}>
                {GUARANTEES.map((item, i) => (
                  <div key={i} className={styles.guaranteeItem}>
                    <div className={styles.checkIcon}>
                      <Icons.Check />
                    </div>
                    <span className={styles.guaranteeText}>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Process Card */}
            <article className={styles.partnerCard}>
              <h3>Как работим?</h3>
              <p>Процесът ни е създаден да бъде лесен и прозрачен.</p>
              <div className={styles.processList}>
                {PROCESS.map((step, idx) => (
                  <div key={idx} className={styles.processItem}>
                    <div className={styles.stepNumber}>{idx + 1}</div>
                    <div className={styles.processTitle}>{step.title}</div>
                    <div className={styles.processDesc}>{step.description}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaCard}>
            <div className={styles.finalCtaContent}>
              <span className={styles.finalCtaEyebrow}>Готови за работа?</span>
              <h2>Нека изградим успешен сезон заедно</h2>
              <p>Свържете се с нас за актуална ценова листа и консултация.</p>
            </div>
            <div className={styles.finalCtaActions}>
              <Link href="/kontakti" className={styles.finalCtaButtonPrimary}>
                Свържете се с нас
              </Link>
              <Link href="/za-nas" className={styles.finalCtaButtonSecondary}>
                За компанията
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
