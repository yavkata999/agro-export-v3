import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniFaq,
  torfeniHero,
  torfeniHighlights,
  torfeniSegmentHobby,
  torfeniSegmentProfessional,
  torfeniUseCases,
} from "@content/torfeni-substrati";
import styles from "@styles/pages/TorfeniSubstratiPage.module.css";

const segments = [torfeniSegmentProfessional, torfeniSegmentHobby];

export const metadata: Metadata = {
  title: "Торфени субстрати Durpeta | Агро Експорт Импорт ООД",
  description:
    "Премиум торфени субстрати за професионални производители и хоби градинари. Контролирано pH, структурирани фракции, лабораторно гарантирано качество и оптимизирани рецепти.",
};

export default function TorfeniSubstratiHubPage() {
  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Торфени субстрати Durpeta",
    description:
      "Внос и дистрибуция на висококачествени литовски торфени субстрати.",
    url: "https://agro-export.com/produkti/torfeni-substrati",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://agro-export.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Продукти",
          item: "https://agro-export.com/produkti",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Торфени субстрати",
          item: "https://agro-export.com/produkti/torfeni-substrati",
        },
      ],
    },
  };
  return (
    <main>
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* -------------------------- HERO -------------------------- */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>{torfeniHero.eyebrow}</p>

            <h1 className={styles.title}>{torfeniHero.title}</h1>

            <p className={styles.subtitle}>{torfeniHero.subtitle}</p>

            <div className={styles.ctaGroup}>
              <Link href={torfeniHero.primaryCtaHref} className="button">
                {torfeniHero.primaryCtaLabel}
              </Link>
              <Link
                href={torfeniHero.secondaryCtaHref}
                className="button ghost"
              >
                {torfeniHero.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroBadge}>
              Официален партньор на Durpeta
            </div>
            <ul className={styles.heroList}>
              <li>Стандартизирани рецепти със светъл и тъмен торф</li>
              <li>Лабораторно гарантирано pH и електропроводимост</li>
              <li>Доставки на палети и биг бегове за професионални клиенти</li>
              <li>Хоби опаковки с ясни инструкции и удобство при употреба</li>
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------- PREMIUM HIGHLIGHTS -------------------------- */}
      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>
              Защо професионалистите избират Durpeta?
            </p>
            <h2>Технология зад всяка рецепта</h2>
            <p className={styles.lead}>
              Торфът не е просто пръст. Нашите субстрати са прецизно балансирани
              смеси, които осигуряват предвидими резултати. Използваме
              компютъризирано смесване на фракции, за да постигнем идеалното
              съотношение въздух/вода за всяка култура.
            </p>
          </header>

          <div className={styles.cards}>
            {torfeniHighlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- SEGMENTS -------------------------- */}
      <section id="segments" className={styles.sectionAlt}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Решения за всеки мащаб</p>
            <h2>Асортимент, покриващ целия пазар</h2>
            <p className={styles.lead}>
              Независимо дали зареждате агроаптека или управлявате хектари
              оранжерии, ние имаме правилната опаковка и рецепта за вас.
            </p>
          </header>

          <div className={styles.segmentGrid}>
            {segments.map((segment) => (
              <article key={segment.slug} className={styles.segmentCard}>
                <div className={styles.segmentHeader}>
                  <p className={styles.segmentAudience}>{segment.audience}</p>
                  <h3>{segment.title}</h3>
                  <p className={styles.segmentDescription}>
                    {segment.description}
                  </p>
                </div>

                <ul className={styles.segmentList}>
                  {segment.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.segmentFooter}>
                  <Link href={segment.ctaHref} className={styles.segmentCta}>
                    {segment.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- USE CASES -------------------------- */}
      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Специфични приложения</p>
            <h2>Специализирани рецепти</h2>
            <p className={styles.lead}>
              Освен универсалните смеси, предлагаме субстрати, разработени за
              капризните изисквания на специфични култури.
            </p>
          </header>

          <div className={styles.useCases}>
            {torfeniUseCases.map((useCase) => (
              <article key={useCase.title} className={styles.useCaseCard}>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- FAQ -------------------------- */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.faqWrapper}>
            <div className={styles.faqIntro}>
              <p className={styles.kicker}>Логистика и Поръчки</p>
              <h2>Често задавани въпроси</h2>
              <p className={styles.lead}>
                Научете повече за минималните количества, условията за доставка
                на палети и възможностите за производство на рецепти по поръчка
              </p>
              <Link href="/kontakti" className="button">
                Свържете се с нас
              </Link>
            </div>

            <div className={styles.faqAccordion}>
              {torfeniFaq.map((item, index) => (
                <details
                  key={item.question}
                  className={styles.faqItem}
                  open={index === 0}
                >
                  <summary className={styles.faqQuestion}>
                    <span>{item.question}</span>
                    <span className={styles.faqToggle} aria-hidden>
                      ➜
                    </span>
                  </summary>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
