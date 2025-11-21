import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniSegmentHobby,
  torfeniSegmentProfessional,
  torfeniSeoHobby,
  type TorfeniSegment,
} from "@content/torfeni-substrati";
import styles from "@styles/pages/TorfeniSegmentPage.module.css";

export function generateMetadata(): Metadata {
  return {
    title: torfeniSeoHobby.title,
    description: torfeniSeoHobby.description,
    alternates: { canonical: torfeniSeoHobby.canonical },
    keywords: torfeniSeoHobby.keywords?.split(",").map((keyword) => keyword.trim()),
    openGraph: {
      title: torfeniSeoHobby.openGraph?.title || torfeniSeoHobby.title,
      description: torfeniSeoHobby.openGraph?.description || torfeniSeoHobby.description,
    },
  };
}

export default function TorfeniHobiPage() {
  const segment: TorfeniSegment = torfeniSegmentHobby;

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

        <div className={styles.grid}>
          {segment.products.map((product) => (
            <article key={product.id} className={styles.productCard}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productDesc}>{product.description}</p>
              {product.features && (
                <ul className={styles.featureList}>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              <div className={styles.badgeRow}>
                {product.packaging && (
                  <span className={styles.badge}>Опаковка: {product.packaging}</span>
                )}
                <span className={styles.badge}>Готов за употреба</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Продукт</th>
                <th>Основно приложение</th>
                <th>Опаковка</th>
              </tr>
            </thead>
            <tbody>
              {segment.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.packaging || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
