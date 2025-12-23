import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniSegmentHobby,
  torfeniSegmentProfessional,
} from "@content/torfeni-substrati";
import ProductCard from "@components/shared/ProductCard";
import { getProductById } from "@lib/products";
import styles from "@styles/pages/TorfeniSegmentPage.module.css";

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: `${torfeniSegmentHobby.title} | Агро Експорт Импорт`,
  description:
    "Висококачествени торфени субстрати за дома и градината. Готови смеси за цветя, разсад и зеленчуци в удобни опаковки за любители.",
  keywords: [
    "хоби торф",
    "субстрат за цветя",
    "почва за разсад",
    "градинска пръст",
    "Durpeta хоби",
    "торф за домати",
    "универсален субстрат",
  ],
  openGraph: {
    title: `${torfeniSegmentHobby.title} | Агро Експорт Импорт`,
    description: torfeniSegmentHobby.description,
    type: "website",
    locale: "bg_BG",
    // FIX: Updated slug to 'hobi'
    url: "https://agro-export.com/produkti/torfeni-substrati/hobi",
  },
};

// Reusable Check Icon
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function TorfeniHobiPage() {
  const segment = torfeniSegmentHobby;

  // Resolve product data
  const resolvedProducts = segment.products.flatMap((item) => {
    const product = getProductById(item.productId);
    return product ? [{ ...item, product }] : [];
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ---------------- HEADER ---------------- */}
        <header className={styles.header}>
          <span className={styles.overline}>Durpeta – Хоби линия</span>
          <h1 className={styles.title}>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </header>

        {/* ---------------- INTRO CARD (Split Layout) ---------------- */}
        <div className={styles.introCard}>
          {/* Left: Text Content */}
          <div className={styles.introContent}>
            <h2 className={styles.cardTitle}>
              Сигурен избор за дома и градината
            </h2>
            <p className={styles.cardText}>
              Хоби линията на Durpeta е създадена за любители, които искат
              професионално качество без сложност. Смесите са готови за
              употреба, лесни за работа и подходящи за различни видове стайни,
              балконски и дворни растения.
            </p>
            <Link href="/kontakti" className="button">
              Намерете най-близкия партньор
            </Link>
          </div>

          {/* Right: Feature List */}
          <ul className={styles.featureList}>
            {segment.highlights.map((item) => (
              <li key={item} className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- PRODUCT GRID ---------------- */}
        <div className="grid grid-3">
          {resolvedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.product.name}
              description={
                product.product.packaging
                  ? `${product.product.shortDescription} | Опаковки: ${product.product.packaging}`
                  : product.product.shortDescription
              }
              image={product.product.images?.[0]}
              href={`/produkti/torfeni-substrati/${product.product.id}`}
            />
          ))}
        </div>

        {/* ---------------- CROSS-LINK (Bottom CTA) ---------------- */}
        <div className={styles.crossLinkCard}>
          <h2 className={styles.crossLinkTitle}>
            Търсите професионални решения?
          </h2>
          <p className={styles.crossLinkText}>
            За оранжерии, разсадници и градински центрове е налична отделна
            професионална линия с контролирани параметри, персонализирани
            рецепти и доставки на палети или биг бегове.
          </p>
          <Link
            href={torfeniSegmentProfessional.ctaHref}
            className="button button-outline"
          >
            Към професионалните субстрати
          </Link>
        </div>
      </div>
    </section>
  );
}
