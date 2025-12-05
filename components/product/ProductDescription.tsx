import styles from "@styles/components/product/ProductDescription.module.css";

interface ProductDescriptionProps {
  longDescription?: string;
  shortDescription: string;
}

export function ProductDescription({
  longDescription,
  shortDescription,
}: ProductDescriptionProps) {
  const content = longDescription || shortDescription;
  const hasExtendedCopy = Boolean(longDescription);

  return (
    <section className={`section ${styles.descriptionSection}`}>
      <div className="container">
        <div className={styles.descriptionCard}>
          <p className={styles.overline}>Детайли за продукта</p>
          <h2>Характеристики и приложение</h2>
          {hasExtendedCopy && <p className={styles.lead}>{shortDescription}</p>}
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      </div>
    </section>
  );
}
