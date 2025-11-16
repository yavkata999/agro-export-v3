import Image from "next/image";
import styles from "./ProductHero.module.css";

interface ProductHeroProps {
  productId: string;
  name: string;
  brand?: string;
  shortDescription: string;
  packaging?: string;
  image?: string;
}

export function ProductHero({
  productId,
  name,
  brand,
  shortDescription,
  packaging,
  image,
}: ProductHeroProps) {
  return (
    <section className={`section ${styles.heroSection}`}>
      <div className="container">
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            {brand && <span className={styles.brandBadge}>{brand}</span>}
            <h1 className={styles.heroTitle}>{name}</h1>
            <p className="muted">{shortDescription}</p>

            <div className={styles.metaGrid}>
              {packaging && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Опаковки</span>
                  <span className={styles.metaValue}>{packaging}</span>
                </div>
              )}

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Отговор до</span>
                <span className={styles.metaValue}>48 часа</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <a
                className="button"
                href={`/kontakti?product=${encodeURIComponent(productId)}`}
              >
                Изпратете запитване
              </a>
              <a className="button button--ghost" href="#product-details">
                Вижте спецификациите
              </a>
            </div>
          </div>

          {image && (
            <div className={styles.imageWrapper}>
              <div className={styles.imageSurface}>
                <Image
                  src={image}
                  alt={name}
                  width={640}
                  height={640}
                  className={styles.heroImage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
