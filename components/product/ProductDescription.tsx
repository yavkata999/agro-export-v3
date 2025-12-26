import styles from "@styles/components/product/ProductDescription.module.css";

// Define the shape of a download item
export interface ProductDownload {
  label: string;
  url: string;
}

interface ProductDescriptionProps {
  longDescription?: string;
  shortDescription: string;
  downloads?: ProductDownload[];
}

// Simple Icon for the download buttons
const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export function ProductDescription({
  longDescription,
  shortDescription,
  downloads,
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

        {/* --- NEW: Downloads Section --- */}
        {downloads && downloads.length > 0 && (
          <div className={styles.downloadsContainer}>
            <h3 className={styles.downloadsTitle}>Документи и ресурси</h3>
            <div className={styles.downloadsGrid}>
              {downloads.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadLink}
                >
                  <div className={styles.iconWrapper}>
                    <DownloadIcon />
                  </div>
                  <span>{doc.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        {/* ----------------------------- */}
      </div>
    </section>
  );
}
