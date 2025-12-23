import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@content/categories";
import styles from "@styles/pages/ProduktiPage.module.css";

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: "Продуктов Каталог | Агро Експорт Импорт - Субстрати, Торове и Саксии",
  description:
    "Разгледайте пълната гама професионални решения за градинарството: торф, тревни смеси, торове и производствени консумативи. Внос и дистрибуция на едро.",
  openGraph: {
    title: "Продуктов Каталог | Агро Експорт Импорт",
    description:
      "Всичко за професионалния агробизнес. Субстрати Durpeta, тревни смеси GlobalGrass, торове Florovit и саксии Soparco.",
    type: "website",
    locale: "bg_BG",
  },
};

/* --- ICONS --- */
const Icons = {
  Leaf: () => (
    <svg
      width="28"
      height="28"
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
      width="28"
      height="28"
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
  Sun: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  Box: () => (
    <svg
      width="28"
      height="28"
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
  Layers: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  ArrowRight: () => (
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Truck: () => (
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
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
};

/**
 * Helper to assign a visual icon based on the category slug/keyword.
 */
function getCategoryIcon(slug: string) {
  const s = slug.toLowerCase();
  if (s.includes("torf") || s.includes("substrat") || s.includes("pochva"))
    return <Icons.Layers />;
  if (s.includes("tor") || s.includes("technid")) return <Icons.Droplet />;
  if (s.includes("trev") || s.includes("grass")) return <Icons.Sun />;
  if (s.includes("saksi") || s.includes("konteyn")) return <Icons.Box />;
  return <Icons.Leaf />; // Default
}

export default function ProduktiPage() {
  // Schema injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Продуктов Каталог - Агро Експорт Импорт",
    description: "Каталог с професионални продукти за градинарството.",
    url: "https://agro-export.com/produkti",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((cat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cat.name,
        url: `https://agro-export.com${
          cat.rootPath ?? `/produkti/${cat.slug}`
        }`,
      })),
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Main Text */}
            <div className={styles.heroMain}>
              <h1 className={styles.heroTitle}>Продуктов Каталог</h1>
              <p className={styles.heroText}>
                Събрахме на едно място всичко необходимо за успешния сезон. От
                доказани европейски субстрати и тревни смеси до специализирани
                торове и производствени контейнери. Качество, което гарантира
                растеж за вашия бизнес.
              </p>
            </div>

            {/* Side Callout */}
            <div className={styles.heroSide}>
              <h2 className={styles.sideTitle}>
                <Icons.Truck /> Поръчка на едро
              </h2>
              <p className={styles.sideText}>
                Разгледайте асортимента и се свържете с нас за индивидуална
                оферта и условия за дистрибуция. Доставяме до всяка точка на
                страната.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {categories.map((category) => {
              const href = category.rootPath ?? `/produkti/${category.slug}`;
              const IconComponent = getCategoryIcon(category.slug);

              return (
                <Link key={category.slug} href={href} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>{IconComponent}</div>
                    <div className={styles.cardArrow}>
                      <Icons.ArrowRight />
                    </div>
                  </div>

                  <h2 className={styles.cardTitle}>{category.name}</h2>

                  {category.shortDescription && (
                    <p className={styles.cardDesc}>
                      {category.shortDescription}
                    </p>
                  )}

                  <div className={styles.cardMeta}>Виж продуктите</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
