import Link from "next/link";
import styles from "@styles/components/product/ProductCTA.module.css";

interface ProductCTAProps {
  productId: string;
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function ProductCTA({ productId }: ProductCTAProps) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          {/* CONTENT */}
          <div className={styles.ctaContent}>
            <span className={styles.overline}>Запитване</span>
            <h2 className={styles.title}>Поискайте индивидуална оферта</h2>
            <p className={styles.text}>
              Свържете се с нас за актуални цени, наличности и условия за
              дистрибуция. Гарантираме отговор в рамките на работния ден.
            </p>

            <div className={styles.trustList}>
              <div className={styles.trustItem}>
                <div className={styles.iconWrapper}>
                  <CheckIcon />
                </div>
                <span>Директен внос и гарантиран произход</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.iconWrapper}>
                  <CheckIcon />
                </div>
                <span>Логистика до ваш склад или обект</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.iconWrapper}>
                  <CheckIcon />
                </div>
                <span>Професионална консултация</span>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <Link
              className={styles.button}
              href={`/kontakti?product=${encodeURIComponent(productId)}`}
            >
              Изпратете запитване
            </Link>

            <p className={styles.contactText}>
              или ни пишете на
              <Link className={styles.link} href="mailto:office@agroexport.bg">
                office@agroexport.bg
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
