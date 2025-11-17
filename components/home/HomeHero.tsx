import Link from "next/link";
import styles from "@styles/components/home/HomeHero.module.css";

const HERO_STATS = [
  {
    value: "15+",
    label: "години опит във вноса и логистиката",
  },
  {
    value: "7",
    label: "основни категории продукти",
  },
  {
    value: "100%",
    label: "фокус върху B2B партньори в България",
  },
];

export default function HomeHero() {
  return (
    <section
      className={`${styles.hero} section`}
      aria-labelledby="hero-heading"
    >
      <div className="container">
        <div className={`${styles.heroInner} ${styles.heroAppear}`}>
          <p className={styles.heroBadge}>B2B внос и дистрибуция</p>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Вашият партньор за внос и дистрибуция{" "}
            <span className={styles.heroTitleAccent}>
              на професионални градински продукти
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            Помагаме на градински центрове, дистрибутори и професионални
            производители в България да изградят по-силен асортимент – от
            торфени субстрати Durpeta и тревни смеси GlobalGrass до саксии,
            форми за разсад, перлит, вермикулит и торове Florovit.
          </p>

          <div className={styles.heroActions}>
            <Link href="/kontakti" className="button">
              Свържете се с нас
            </Link>
            <Link href="/produkti" className="button button--ghost">
              Вижте продуктите
            </Link>
          </div>

          <p className={styles.heroNote}>
            Работим изцяло B2B – с магазини, дистрибутори, производители и други
            професионални клиенти.
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
