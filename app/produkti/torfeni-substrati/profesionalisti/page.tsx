import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniSegmentProfessional,
  torfeniSegmentHobby,
} from "@content/torfeni-substrati";
import styles from "@styles/pages/TorfeniSegmentPage.module.css";

export const metadata: Metadata = {
  title: `${torfeniSegmentProfessional.title} | Agro Export-Import`,
  description: torfeniSegmentProfessional.description,
};

export default function TorfeniProfesionalistiPage() {
  const segment = torfeniSegmentProfessional;

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className="muted">Durpeta – професионална линия</p>
          <h1>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </div>

        <div className={styles.introBlock}>
          <h2>Какво получавате</h2>
          <ul className={styles.featureList}>
            {segment.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/kontakti" className={`button ${styles.cta}`}>
            Запитване за професионална оферта
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
                <span className={styles.badge}>B2B асортимент</span>
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
          <h2>Хоби линия за препродажба</h2>
          <p className={styles.subtitle}>
            Ако обслужвате и любители клиенти, вижте хоби асортимента ни в отделна
            страница с готови опаковки и инструкции.
          </p>
          <Link
            href={torfeniSegmentHobby.ctaHref}
            className={`button ghost ${styles.cta}`}
          >
            Към хоби субстратите
          </Link>
        </div>
      </div>
    </section>
  );
}
