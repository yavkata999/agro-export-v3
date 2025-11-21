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
  title: `${torfeniSegmentHobby.title} | Agro Export-Import`,
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
        <div className={styles.header}>
          <p className="muted">Durpeta – хоби линия</p>
          <h1>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </div>

        <div className={styles.introBlock}>
          <h2>Сигурен избор за любители</h2>
          <ul className={styles.featureList}>
            {segment.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/kontakti" className={`button ${styles.cta}`}>
            Намерете най-близкия партньор
          </Link>
        </div>

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
              image={product.product.image}
              href={`/produkti/torfeni-substrati/${product.product.id}`}
            />
          ))}
        </div>

        <div className={styles.introBlock}>
          <h2>Нужни са професионални обеми?</h2>
          <p className={styles.subtitle}>
            За оранжерии, разсадници или градински центрове вижте професионалната
            линия с персонализирани рецепти и доставки на палети.
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
