import styles from "@styles/components/home/HomeBrands.module.css";

const STRATEGIC_BRANDS = ["Durpeta", "Soparco", "GlobalGrass", "Florovit"];

const LINE_BRANDS = [
  "Azofoska",
  "Florovit Pro Natura",
  "Florovit Agro",
  "Гръцки перлит",
  "Турски саксии и тарелки",
];

export default function HomeBrands() {
  return (
    <section className={styles.section} aria-labelledby="brands-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="brands-heading" className={styles.title}>
            Марки, с които работим
          </h2>
          <p className={styles.subtitle}>
            Представляваме утвърдени европейски производители на торфени
            субстрати, тревни смеси, саксии, торове и допълващи продукти. Това
            ни позволява да предлагаме последователно качество и сигурни
            доставки към B2B партньорите ни.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <span className={styles.rowLabel}>Стратегически партньори</span>
              <p className={styles.rowText}>
                Основните марки, около които изграждаме асортимента си за
                градински центрове, дистрибутори и производители.
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
              <span className={styles.rowLabel}>
                Допълващи продуктови линии
              </span>
              <p className={styles.rowText}>
                Марки и серии, които разширяват решенията ни – органични
                продукти, специализирани торове, перлит и аксесоари.
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
