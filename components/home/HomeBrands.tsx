import styles from "@styles/components/home/HomeBrands.module.css";

const STRATEGIC_BRANDS = ["Durpeta", "Soparco", "GlobalGrass", "Florovit"];

const LINE_BRANDS = [
  "Azofoska",
  "Florovit Pro Natura",
  "Florovit Agro",
  "Гръцки агроперлит",
  "Турски саксии",
];

export default function HomeBrands() {
  return (
    <section className={styles.section} aria-labelledby="brands-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="brands-heading" className={styles.title}>
            Доказани Европейски Брандове
          </h2>
          <p className={styles.subtitle}>
            Ние не просто продаваме стока, ние сме официален представител на
            производителите. Това гарантира на нашите бизнес партньори
            постоянство в качеството, свежи наличности и най-добрите ценови
            условия на пазара.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <span className={styles.rowLabel}>Стратегически партньори</span>
              <p className={styles.rowText}>
                Основните стълбове на вашия асортимент – субстрати, треви,
                саксии и торове.
              </p>
            </div>
            <div className={styles.chipRow}>
              {STRATEGIC_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className={`${styles.chip} ${styles.chipLarge}`}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <span className={styles.rowLabel}>Специализирани серии</span>
              <p className={styles.rowText}>
                Решения за специфични нужди – от професионално земеделие до био
                производство.
              </p>
            </div>
            <div className={styles.chipRow}>
              {LINE_BRANDS.map((brand) => (
                <span key={brand} className={styles.chip}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
