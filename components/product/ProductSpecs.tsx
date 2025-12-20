import styles from "@styles/components/product/ProductSpecs.module.css";

interface ProductSpecsProps {
  brand?: string;
  packaging?: string;
  features?: string[];
}

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
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

export function ProductSpecs({
  brand,
  packaging,
  features,
}: ProductSpecsProps) {
  const highlights = [
    brand ? { label: "Производител", value: brand } : null,
    packaging ? { label: "Налични опаковки", value: packaging } : null,
    { label: "Качество", value: "Premium Class" }, // Добавен placeholder за баланс (по желание)
  ].filter(Boolean) as { label: string; value: string }[];

  const hasFeatures = Boolean(features && features.length > 0);
  const hasHighlights = highlights.length > 0;

  if (!hasFeatures && !hasHighlights) return null;

  return (
    <section id="technical-specs" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Технически Спецификации</h2>
          <p className={styles.subtitle}>
            Детайлна информация и ключови предимства на продукта
          </p>
        </div>

        {/* The "Data Strip" (Highlights) */}
        {hasHighlights && (
          <div className={styles.dataStrip}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.dataItem}>
                <span className={styles.dataLabel}>{item.label}</span>
                <span className={styles.dataValue}>{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* The "Clean List" (Features) */}
        {hasFeatures && (
          <div className={styles.featuresGrid}>
            {features!.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <CheckIcon />
                </div>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
