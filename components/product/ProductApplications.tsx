import styles from "@styles/components/product/ProductApplications.module.css";

interface ProductApplicationsProps {
  applications?: string[];
}

// Minimal Leaf Icon
const LeafIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export function ProductApplications({
  applications,
}: ProductApplicationsProps) {
  if (!applications || applications.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.layout}>
          {/* Header Column */}
          <div className={styles.header}>
            <span className={styles.overline}>Приложение</span>
            <h2 className={styles.title}>Подходящ за</h2>
          </div>

          {/* List Column */}
          <div className={styles.list}>
            {applications.map((application, idx) => (
              <div key={idx} className={styles.item}>
                <div className={styles.icon}>
                  <LeafIcon />
                </div>
                <span className={styles.text}>{application}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
