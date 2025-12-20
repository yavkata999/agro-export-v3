import styles from "@styles/components/product/ProductDescription.module.css";
import React from "react";

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

  // Helper function to turn "**text**" into <strong>text</strong>
  const renderContent = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Centered Header */}
        <div className={styles.header}>
          <span className={styles.label}>Детайли за продукта</span>
          <h2 className={styles.title}>Характеристики и приложение</h2>
        </div>

        {/* Lead Text (Short Description) */}
        {hasExtendedCopy && (
          <div className={styles.lead}>{shortDescription}</div>
        )}

        {/* Divider */}
        {hasExtendedCopy && <div className={styles.divider} />}

        {/* Main Content Body */}
        <div className={styles.body} style={{ whiteSpace: "pre-line" }}>
          {renderContent(content)}
        </div>
      </div>
    </section>
  );
}
