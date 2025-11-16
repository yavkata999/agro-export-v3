import styles from "@styles/components/product/ProductCTA.module.css";

interface ProductCTAProps {
  productId: string;
}

export function ProductCTA({ productId }: ProductCTAProps) {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <p className={styles.overline}>Запитване</p>
            <h2>Получете персонализирана оферта</h2>
            <p>
              Експертният ни екип ще се свърже с вас до 48 часа с конкретни
              условия и цени за продукта.
            </p>
            <ul className={styles.trustList}>
              <li>Сертифицирани агрономи и технолози</li>
              <li>Доставка на територията на България и ЕС</li>
              <li>Пълно съдействие при избор на смеси</li>
            </ul>
          </div>
          <div className={styles.actions}>
            <a
              className="button"
              href={`/kontakti?product=${encodeURIComponent(productId)}`}
            >
              Изпратете запитване
            </a>
            <p className="muted">
              или ни пишете на
              <a className="link" href="mailto:office@agroexport.bg">
                office@agroexport.bg
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
