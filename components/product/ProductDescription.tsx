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
    // 1. Split the text by the bold syntax (**...**)
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      // 2. Check if this part is bold
      if (part.startsWith("**") && part.endsWith("**")) {
        // 3. Remove asterisks and return <strong> tag
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      // 4. Return normal text
      return part;
    });
  };

  return (
    <section className={`section ${styles.descriptionSection}`}>
      <div className="container">
        <div className={styles.descriptionCard}>
          <p className={styles.overline}>Детайли за продукта</p>
          <h2>Характеристики и приложение</h2>

          {hasExtendedCopy && <p className={styles.lead}>{shortDescription}</p>}

          {/* whiteSpace: "pre-line" keeps the newlines
              renderContent() handles the bold text */}
          <p style={{ whiteSpace: "pre-line" }}>{renderContent(content)}</p>
        </div>
      </div>
    </section>
  );
}
