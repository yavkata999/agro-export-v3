import type { Metadata } from "next";
import Link from "next/link";

import styles from "@styles/pages/AboutPage.module.css";

export const metadata: Metadata = {
  title: "За Нас | История и Ценности на Агро Експорт Импорт",
  description:
    "Над 34 години опит във вноса и дистрибуцията на градински продукти. Научете повече за семейната история, ценностите и партньорствата зад успеха на Агро Експорт Импорт ООД.",
};

const HIGHLIGHTS = [
  {
    title: "34 Години Традиция",
    text: "От 1989 г. до днес, ние сме семеен бизнес, който цени дългосрочните отношения. Приемствеността и честността са в основата на всяка наша сделка.",
  },
  {
    title: "Глобални Партньорства",
    text: "Изградили сме директни връзки с водещи производители от Литва, Полша, Франция и Азия, за да гарантираме най-добрите цени и качество на българския пазар.",
  },
  {
    title: "100% B2B Фокус",
    text: "Ние не се конкурираме с нашите клиенти. Нашият бизнес модел е изцяло насочен към подкрепа на търговци, дистрибутори и професионални производители.",
  },
];

const STATS = [
  { label: "години на пазара", value: "34+" },
  { label: "активни артикула", value: "2000+" },
  { label: "държави партньори", value: "10+" },
];

const STORY_BLOCKS = [
  {
    title: "Откъде започнахме",
    text: `Всичко започва през 1989 г. във Варна, когато г-н Камен Крайчев поставя основите на бизнеса с визия за внос на качествени аграрни стоки. През 1997 г. компанията приема името „Агро Експорт – Импорт“ ООД и се утвърждава като лидер в региона.`,
  },
  {
    title: "Нашата мисия днес",
    text: `Днес ние сме мостът между българския бизнес и европейските иновации в градинарството. Като ексклузивен представител на Durpeta и Inco Group (Florovit), ние носим отговорност за успеха на нашите партньори, осигурявайки им продукти, които се продават сами.`,
  },
  {
    title: "Логистична сила",
    text: `С централен склад в с. Окол (София) и регионална база във Варна, ние покриваме цялата страна. Разполагаме със собствен транспорт и гъвкава логистична мрежа, за да гарантираме, че стоката е при вас точно когато ви трябва.`,
  },
];

const TIMELINE = [
  {
    year: "1989",
    title: "Основаване",
    description:
      "Начало на търговската дейност във Варна под ръководството на Камен Крайчев.",
  },
  {
    year: "1997",
    title: "Регистрация на ООД",
    description:
      "Официално създаване на „Агро Експорт – Импорт“ ООД и старт на директен внос.",
  },
  {
    year: "2005",
    title: "Експанзия",
    description:
      "Подписване на ключови договори за ексклузивно дистрибуторство с европейски гиганти.",
  },
  {
    year: "Днес",
    title: "Национален Лидер",
    description:
      "Утвърден партньор за стотици градински центрове и вериги в цяла България.",
  },
];

const VALUE_PROPS = [
  {
    title: "Професионални Субстрати",
    description:
      "Над 2000 рецепти торф от Durpeta за всяка култура – от разсад до контейнерно производство.",
  },
  {
    title: "Цялостни Решения",
    description:
      "Не просто продукти, а системи: саксии, торове, тревни смески и покривала, които работят заедно за по-добър резултат.",
  },
  {
    title: "Експертиза и Опит",
    description:
      "Нашият екип познава пазара в детайли. Помагаме ви да планирате сезонните кампании и да оптимизирате наличностите си.",
  },
];

export default function AboutPage() {
  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Агро Експорт Импорт ООД",
      foundingDate: "1989",
      founder: {
        "@type": "Person",
        name: "Камен Крайчев",
      },
      description:
        "Семейна компания за внос и дистрибуция на професионални градински продукти с над 30 години история.",
      areaServed: "Bulgaria",
    },
  };

  return (
    <div className={styles.page}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>История на успеха</p>
              <h1 className={styles.title}>
                Партньорство, градено с десетилетия
              </h1>
              <p className={styles.lead}>
                Повече от 30 години ние сме надеждната връзка между световните
                производители и българския градински бизнес. Научете повече за
                хората и ценностите, които стоят зад името „Агро Експорт
                Импорт“.
              </p>
            </div>

            <div className={styles.heroHighlights}>
              {HIGHLIGHTS.map((item) => (
                <article key={item.title} className={styles.highlightCard}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Кои сме ние?</h2>
            <p>
              Ние сме екип от професионалисти, отдадени на мисията да повишим
              стандарта в българското земеделие и градинарство чрез достъп до
              най-добрите европейски продукти.
            </p>
          </div>

          <div className={styles.storyGrid}>
            {STORY_BLOCKS.map((block) => (
              <article key={block.title} className={styles.storyCard}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Нашият път</h2>
            <p>
              История на растеж, адаптация и непрекъснат стремеж към
              съвършенство.
            </p>
          </div>
          <div className={styles.timelineGrid}>
            {TIMELINE.map((item) => (
              <article key={item.year} className={styles.timelineCard}>
                <p className={styles.timelineYear}>{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>С какво сме полезни за вас</h2>
            <p>
              Ние доставяме повече от стока. Ние доставяме сигурност и решения
              за вашия бизнес.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUE_PROPS.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.eyebrow}>Станете част от семейството</p>
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
