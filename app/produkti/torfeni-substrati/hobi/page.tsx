import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniSegmentHobby,
  torfeniSegmentProfessional,
} from "@content/torfeni-substrati";
import ProductCard from "@components/shared/ProductCard";
import { getProductById } from "@lib/products";
import styles from "@styles/pages/TorfeniSegmentPage.module.css";

export const metadata: Metadata = {
  title: `${torfeniSegmentHobby.title} | Агро Експорт Импорт ООД`,
  description: torfeniSegmentHobby.description,
};

export default function TorfeniHobiPage() {
  const segment = torfeniSegmentHobby;
  const resolvedProducts = segment.products.flatMap((item) => {
    const product = getProductById(item.productId);
    return product ? [{ ...item, product }] : [];
  });

  return (
    <section className={styles.page}>
      <div className="container">
        {/* ---------------- HEADER ---------------- */}
        <div className={styles.header}>
          <p className="muted">Durpeta – хоби линия</p>
          <h1>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </div>

        {/* ---------------- INTRO ---------------- */}
        <div className={styles.introBlock}>
          <h2>Сигурен избор за дома и градината</h2>
          <p className={styles.subtitle}>
            Хоби линията на Durpeta е създадена за любители, които искат
            професионално качество без сложност. Смесите са готови за употреба,
            лесни за работа и подходящи за различни видове стайни, балконски и
            дворни растения.
          </p>

          <ul className={styles.featureList}>
            {segment.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link href="/kontakti" className={`button ${styles.cta}`}>
            Намерете най-близкия партньор
          </Link>
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

        {/* ---------------- CROSS-LINK ---------------- */}
        <div className={styles.introBlock}>
          <h2>Търсите професионални решения?</h2>
          <p className={styles.subtitle}>
            За оранжерии, разсадници и градински центрове е налична отделна
            професионална линия с контролирани параметри, персонализирани
            рецепти и доставки на палети или биг бегове.
          </p>
          <Link
            href={torfeniSegmentProfessional.ctaHref}
            className={`button ghost ${styles.cta}`}
          >
            Към професионалните субстрати
          </Link>
        </div>
      </div>
    </section>
  );
}
