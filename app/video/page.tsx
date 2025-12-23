import type { Metadata } from "next";
import Link from "next/link";
import styles from "@styles/pages/VideoPage.module.css";

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: "Видео Академия | Агро Експорт Импорт - Обучения за Партньори",
  description:
    "Специализирана библиотека с видео обучения и продуктови презентации. Научете тънкостите при работа с Durpeta, Florovit и Soparco за по-високи продажби.",
  openGraph: {
    title: "Видео Академия | Агро Експорт Импорт",
    description:
      "Предстоящи видео обучения и ръководства за нашите търговски партньори.",
    type: "website",
    locale: "bg_BG",
  },
};

const Icons = {
  Play: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: "2px" }}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const UPCOMING_TOPICS = [
  {
    title: "Как да изберем подходяща тревна смес GlobalGrass",
    description:
      "Ръководство за избор според натоварването – двор, спортен терен или парк.",
  },
  {
    title: "Тънкости при работа с професионални субстрати Durpeta",
    description:
      "Практически съвети за поливане, торене и пикиране за максимален добив.",
  },
  {
    title: "Оптимизация на производството със саксии и тарелки",
    description: "Преглед на логистични решения за разсадници и оранжерии.",
  },
];

export default function VideoPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}></span>В процес на заснемане
          </div>
          <h1 className={styles.heroTitle}>Видео Академия</h1>
          <p className={styles.heroText}>
            В момента изграждаме специализирана библиотека с видео обучения.
            Нашата цел е да помогнем на{" "}
            <strong>търговските ни партньори</strong> да използват и продават
            продуктите ни по възможно най-ефективния начин.
          </p>
        </div>
      </section>

      {/* VIDEO GRID */}
      <div className="container">
        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {UPCOMING_TOPICS.map((topic, index) => (
              <article key={index} className={styles.card}>
                {/* Visual Thumbnail Placeholder */}
                <div className={styles.cardThumbnail}>
                  <div className={styles.playIconWrapper}>
                    <Icons.Play />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{topic.title}</h3>
                  <p className={styles.cardDesc}>{topic.description}</p>

                  <div className={styles.cardFooter}>
                    <Icons.Clock />
                    <span>Очаквайте скоро</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA (Updated Structure) --- */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>ИМАТЕ ВЪПРОСИ?</span>
              <h3>Започнете с професионалните решения</h3>
              <p>
                Не е нужно да чакате видеата. На разположение сме за лична
                консултация още сега.
              </p>
            </div>

            <div className={styles.ctaActions}>
              {/* Primary Button */}
              <Link href="/kontakti" className={styles.ctaButtonPrimary}>
                Свържете се с нас
              </Link>

              {/* Secondary Button */}
              <Link href="/produkti" className={styles.ctaButtonSecondary}>
                Вижте продуктите
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
