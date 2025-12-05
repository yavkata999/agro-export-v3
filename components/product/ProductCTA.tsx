import Link from "next/link";
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
            <h2>Поискайте индивидуална оферта на едро</h2>
            <p>
              Свържете се с нас за актуални цени, наличности и условия за
              дистрибуция. Ще получите отговор от нас в рамките на работния ден.
            </p>
            <ul className={styles.trustList}>
              <li>Директен внос и гарантиран произход</li>
              <li>Логистика до ваш склад или обект</li>
              <li>Професионална консултация</li>
            </ul>
          </div>
          <div className={styles.actions}>
            <Link
              className="button"
              href={`/kontakti?product=${encodeURIComponent(productId)}`}
            >
              Изпратете запитване
            </Link>
            <p className="muted">
              или ни пишете на{" "}
              <Link className="link" href="mailto:office@agroexport.bg">
                office@agroexport.bg
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
