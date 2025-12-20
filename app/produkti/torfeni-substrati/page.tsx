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

// Reusable Icon for lists
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const segments = [torfeniSegmentProfessional, torfeniSegmentHobby];

export const metadata: Metadata = {
  title: "Торфени субстрати Durpeta | Агро Експорт Импорт ООД",
  description:
    "Премиум торфени субстрати за професионални производители и хоби градинари. Контролирано pH, структурирани фракции и специализирани рецепти.",
};

export default function TorfeniSubstratiHubPage() {
  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Торфени субстрати Durpeta",
    description:
      "Внос и дистрибуция на висококачествени литовски торфени субстрати.",
    url: "https://agro-export.com/produkti/torfeni-substrati",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO --- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          {/* Left: Text */}
          <div className={styles.heroContent}>
            <span className={styles.overline}>{torfeniHero.eyebrow}</span>
            <h1 className={styles.title}>{torfeniHero.title}</h1>
            <p className={styles.subtitle}>{torfeniHero.subtitle}</p>

            <div className={styles.ctaGroup}>
              <Link href={torfeniHero.primaryCtaHref} className="button">
                {torfeniHero.primaryCtaLabel}
              </Link>
              <Link
                href={torfeniHero.secondaryCtaHref}
                className="button button-outline"
              >
                {torfeniHero.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          {/* Right: Feature Card */}
          <div className={styles.heroCard}>
            <span className={styles.heroBadge}>
              Официален партньор на Durpeta
            </span>
            <ul className={styles.heroList}>
              <li>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>{" "}
                Стандартизирани рецепти
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>{" "}
                Лабораторно гарантирано pH
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>{" "}
                Палетни доставки (Big Bale)
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <CheckIcon />
                </div>{" "}
                Удобни хоби опаковки
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS (Why Durpeta?) --- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headerCentered}>
            <span className={styles.overline}>Технология</span>
            <h2 className={styles.sectionTitle}>
              Защо професионалистите избират Durpeta?
            </h2>
            <p className={styles.subtitle}>
              Нашите субстрати са прецизно балансирани смеси, които осигуряват
              предвидими резултати. Използваме компютъризирано смесване на
              фракции за идеалното съотношение въздух/вода.
            </p>
          </div>

          <div className={styles.grid3}>
            {torfeniHighlights.map((item) => (
              <div key={item.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEGMENTS (The Split) --- */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.headerCentered}>
            <span className={styles.overline}>Асортимент</span>
            <h2 className={styles.sectionTitle}>Решения за всеки мащаб</h2>
            <p className={styles.subtitle}>
              Независимо дали зареждате агроаптека или управлявате хектари
              оранжерии, ние имаме правилната опаковка и рецепта за вас.
            </p>
          </div>

          <div className={styles.segmentsGrid}>
            {segments.map((segment) => (
              <div key={segment.slug} className={styles.segmentCard}>
                <div>
                  <span className={styles.segmentAudience}>
                    {segment.audience}
                  </span>
                  <h3 className={styles.segmentTitle}>{segment.title}</h3>
                </div>

                <p className={styles.subtitle}>{segment.description}</p>

                <ul className={styles.segmentList}>
                  {segment.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.segmentFooter}>
                  <Link
                    href={segment.ctaHref}
                    className="button button-outline"
                  >
                    {segment.ctaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- USE CASES / APPLICATIONS --- */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headerCentered}>
            <span className={styles.overline}>Приложение</span>
            <h2 className={styles.sectionTitle}>Специализирани рецепти</h2>
            <p className={styles.subtitle}>
              Освен универсалните смеси, предлагаме субстрати, разработени за
              специфични култури и нужди.
            </p>
          </div>

          <div className={styles.useCasesGrid}>
            {torfeniUseCases.map((useCase) => (
              <div key={useCase.title} className={styles.useCaseCard}>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseText}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.faqGrid}>
            {/* FAQ Intro */}
            <div>
              <span className={styles.overline}>Въпроси и Отговори</span>
              <h2 className={styles.sectionTitle}>Често задавани въпроси</h2>
              <p className={styles.subtitle} style={{ marginBottom: "2rem" }}>
                Научете повече за логистиката, минималните количества и
                условията за доставка.
              </p>
              <Link href="/kontakti" className="button">
                Свържете се с нас
              </Link>
            </div>

            {/* FAQ List */}
            <div className={styles.faqList}>
              {torfeniFaq.map((item, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    {item.question}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "var(--color-primary)",
                      }}
                    >
                      +
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
