import styles from "./ProductSpecs.module.css";

interface ProductSpecsProps {
  brand?: string;
  packaging?: string;
  features?: string[];
}

export function ProductSpecs({ brand, packaging, features }: ProductSpecsProps) {
  const highlightItems = [
    brand ? { label: "Марка", value: brand } : null,
    packaging ? { label: "Опаковки", value: packaging } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  const hasFeatures = Boolean(features && features.length > 0);
  const hasHighlights = highlightItems.length > 0;

  if (!hasFeatures && !hasHighlights) {
    return null;
  }

  return (
    <section id="product-details" className={`section ${styles.specSection}`}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <p className={styles.overline}>Детайли</p>
            <h2>Основни характеристики</h2>
          </div>
          <p className="muted">
            Изчерпателна информация за продукта, подготвена за агро специалисти
            и партньори.
          </p>
        </div>

        {hasHighlights && (
          <div className={styles.highlightGrid}>
            {highlightItems.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span className={styles.highlightLabel}>{item.label}</span>
                <span className={styles.highlightValue}>{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {hasFeatures && (
          <div className={styles.featuresCard}>
            <h3>Предимства</h3>
            <ul>
              {features!.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
