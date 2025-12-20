import Link from "next/link";
import styles from "@styles/components/home/HomeHero.module.css";

const HERO_STATS = [
  {
    value: "34+",
    label: "години традиция",
  },
  {
    value: "200+",
    label: "активни артикула",
  },
  {
    value: "100%",
    label: "бизнес фокус",
  },
];

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Ексклузивен внос и дистрибуция</div>

          <h1 id="hero-heading" className={styles.heroTitle}>
            Вашият надежден партньор за
            <span className={styles.heroTitleAccent}>
              професионални градински решения
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            Снабдяваме градински центрове, оранжерии и дистрибутори с продукти
            от водещи европейски производители. Осигурете си качество и
            предвидимост с торфени субстрати Durpeta, тревни смеси GlobalGrass и
            торове Florovit.
          </p>

          <div className={styles.heroActions}>
            <Link href="/kontakti" className={styles.buttonPrimary}>
              Поискайте оферта
            </Link>
            <Link href="/produkti" className={styles.buttonGhost}>
              Разгледайте каталога
            </Link>
          </div>

          <p className={styles.heroNote}>
            *Работим само с юридически лица и клиенти на едро.
          </p>

          <ul className={styles.heroStats}>
            {HERO_STATS.map((stat) => (
              <li key={stat.label} className={styles.heroStat}>
                <span className={styles.heroStatValue}>{stat.value}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
