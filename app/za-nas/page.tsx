import type { Metadata } from "next";
import Link from "next/link";
import styles from "@styles/pages/AboutPage.module.css";

export const metadata: Metadata = {
  title: "За Нас | История и Ценности на Агро Експорт Импорт",
  description:
    "Над 34 години опит във вноса и дистрибуцията на градински продукти...",
};

/* --- ICONS (Inline for zero dependencies) --- */
const Icons = {
  Award: () => (
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
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Globe: () => (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Handshake: () => (
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
      <path d="m11 17 2 2a6 6 0 0 0 8-8" />
      <path d="M16.2 9h.01" />
      <path d="M11.5 11.5a2 2 0 0 0 0 2.8" />
      <path d="M15 15a6 6 0 0 0-8-8" />
      <path d="M5 16a6 6 0 0 0 8-8" />
      <path d="M5 20a4 4 0 0 1 4-4" />
    </svg>
  ),
  Leaf: () => (
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
  ),
  Check: () => (
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Chart: () => (
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
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

/* --- CONTENT --- */
const HIGHLIGHTS = [
  {
    icon: Icons.Award,
    title: "34 Години Традиция",
    text: "Семеен бизнес от 1989 г., изграден върху честност и приемственост.",
  },
  {
    icon: Icons.Globe,
    title: "Глобални Връзки",
    text: "Директен внос от Литва, Полша, Франция и Азия за най-добри цени.",
  },
  {
    icon: Icons.Handshake,
    title: "Партньори, не конкуренти",
    text: "Работим само с търговци. Не продаваме на крайни клиенти.",
  },
];

const STATS = [
  { label: "Години опит", value: "34+" },
  { label: "Активни артикула", value: "2000+" },
  { label: "Търговски партньори", value: "300+" },
];

const STORIES = [
  {
    title: "Откъде започнахме",
    text: "Всичко започва през 1989 г. във Варна, когато г-н Камен Крайчев поставя основите на бизнеса с визия за внос на качествени аграрни стоки. През 1997 г. компанията приема името „Агро Експорт – Импорт“ ООД и се утвърждава като лидер в региона.",
    reverse: false,
    imageAlt: "Архивна снимка на първия склад",
  },
  {
    title: "Нашата мисия днес",
    text: "Днес ние сме мостът между българския бизнес и европейските иновации. Като ексклузивен представител на Durpeta и Inco Group (Florovit), ние носим отговорност за успеха на нашите партньори, осигурявайки им продукти, които се продават сами.",
    reverse: true,
    imageAlt: "Модерен склад и продукти",
  },
  {
    title: "Логистична сила",
    text: "С централен склад в с. Окол (София) и база във Варна, ние покриваме цялата страна. Разполагаме със собствен транспорт и гъвкава логистична мрежа, за да гарантираме, че стоката е при вас точно когато ви трябва.",
    reverse: false,
    imageAlt: "Логистичен камион",
  },
];

const TIMELINE = [
  {
    year: "1989",
    title: "Основаване",
    desc: "Начало на търговската дейност във Варна.",
  },
  {
    year: "1997",
    title: "Регистрация",
    desc: "Официално създаване на дружеството и директен внос.",
  },
  {
    year: "2005",
    title: "Експанзия",
    desc: "Ексклузивни договори с европейски гиганти.",
  },
  {
    year: "Днес",
    title: "Лидер",
    desc: "Национално покритие и доверие от стотици партньори.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <Icons.Award /> История на успеха
            </span>
            <h1 className={styles.heroTitle}>
              Партньорство, градено с <br /> десетилетия
            </h1>
            <p className={styles.heroLead}>
              Повече от 30 години ние сме надеждната връзка между световните
              производители и българския градински бизнес.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FLOATING HIGHLIGHTS (Overlap Hero) */}
      <div className="container">
        <div className={styles.highlightGrid}>
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.iconBox}>
                <item.icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STATS STRIP */}
      <div className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. STORY (Zig Zag) */}
      <section className={styles.storySection}>
        <div className="container">
          {STORIES.map((story, idx) => (
            <div
              key={idx}
              className={`${styles.storyRow} ${
                story.reverse ? styles.rowReverse : ""
              }`}
            >
              <div className={styles.storyContent}>
                <span className={styles.sectionTag}>Етап {idx + 1}</span>
                <h2>{story.title}</h2>
                <p>{story.text}</p>
              </div>
              <div className={styles.imagePlaceholder}>
                <span>{story.imageAlt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.centerHeader}>
            <h2>Нашият път през годините</h2>
            <p>История на растеж, адаптация и непрекъснат стремеж.</p>
          </div>
          <div className={styles.timelineContainer}>
            {TIMELINE.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Търсите надежден доставчик?</h2>
              <p>
                Свържете се с нас, за да обсъдим как можем да подкрепим вашия
                бизнес с качествени продукти и гъвкави условия.
              </p>
            </div>
            <Link href="/kontakti" className={styles.ctaButton}>
              Свържете се с нас
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
