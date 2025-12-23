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
  title: `${torfeniSegmentProfessional.title} | Агро Експорт Импорт`,
  description:
    "Професионални субстрати Durpeta за оранжерии и разсадници. Big Bale опаковки, контролирано pH и специализирани рецепти за масово производство.",
  keywords: [
    "професионален торф",
    "субстрати за оранжерии",
    "торф на едро",
    "big bale торф",
    "Durpeta професионални",
    "субстрат за разсад",
    "торф за контейнери",
  ],
  openGraph: {
    title: `${torfeniSegmentProfessional.title} | Агро Експорт Импорт`,
    description: torfeniSegmentProfessional.description,
    type: "website",
    locale: "bg_BG",
    url: "https://agro-export.com/produkti/torfeni-substrati/profesionalisti",
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

export default function TorfeniProfesionalistiPage() {
  const segment = torfeniSegmentProfessional;

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
          <span className={styles.overline}>Durpeta – професионална линия</span>
          <h1 className={styles.title}>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </header>

        {/* ---------------- INTRO / TECHNICAL DETAILS CARD ---------------- */}
        <div className={styles.introCard}>
          <div className={styles.introContent}>
            <h2 className={styles.cardTitle}>
              Стандарти за модерното земеделие
            </h2>

            <div
              className={styles.cardText}
              style={{ display: "grid", gap: "1rem" }}
            >
              <p>
                „Durpeta“ произвежда широка гама професионални субстрати – от
                стандартни решения до специализирани смеси за конкретни
                технологии. В портфолиото влизат субстрати за
                разсадопроизводство, примула, виола и контейнерно отглеждане с
                дългодействащи торове.
              </p>

              <div>
                <strong
                  style={{
                    color: "var(--color-text)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Налични фракции и опаковки:
                </strong>
                <p style={{ margin: 0 }}>
                  Изберете фракция според нуждите: 0–5, 5–10, 10–20, 20–40 мм (и
                  др.). Опаковките варират от 70 до 250 литра, както и
                  индустриални
                  <strong> Big Bale (3000–6000 л)</strong>. Всяка партида е с
                  проследим номер и лабораторно качество.
                </p>
              </div>

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--color-bg)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                  }}
                >
                  <strong>Индивидуална рецепта?</strong> Ако не откривате
                  точната смес, можем да разработим персонализирана рецепта за
                  вашето производство (минимално количество: един камион).
                </p>
              </div>
            </div>

            <Link href="/kontakti" className="button">
              Запитване за оферта
            </Link>
          </div>

          {/* Right: Highlights List */}
          <div>
            <span
              className={styles.overline}
              style={{ marginBottom: "1rem", display: "block" }}
            >
              Какво получавате
            </span>
            <ul className={styles.featureList}>
              {segment.highlights.map((item) => (
                <li key={item} className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <CheckIcon />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
              <li className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>
                <span>Пълна проследимост на партидите</span>
              </li>
              <li className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>
                <span>Автоматизирано етикетиране</span>
              </li>
            </ul>
          </div>
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
            Хоби линия за вашите клиенти
          </h2>
          <p className={styles.crossLinkText}>
            Ако обслужвате и любители градинари, можете да допълните своето
            портфолио с хоби субстратите Durpeta – готови опаковки с ясни
            инструкции, подходящи за препродажба в градински центрове и
            търговски обекти.
          </p>
          <Link
            href={torfeniSegmentHobby.ctaHref}
            className="button button-outline"
          >
            Към хоби субстратите
          </Link>
        </div>
      </div>
    </section>
  );
}
