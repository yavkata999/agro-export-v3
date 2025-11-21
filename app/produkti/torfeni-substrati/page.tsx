import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniFaq,
  torfeniHero,
  torfeniHighlights,
  torfeniSegmentHobby,
  torfeniSegmentProfessional,
  torfeniUseCases,
  torfeniSeoHub,
  type TorfeniSegment,
} from "@content/torfeni-substrati";
import styles from "@styles/pages/TorfeniSubstratiPage.module.css";

export const metadata: Metadata = {
  title: torfeniSeoHub.title,
  description: torfeniSeoHub.description,
  alternates: { canonical: torfeniSeoHub.canonical },
  keywords: torfeniSeoHub.keywords?.split(",").map((keyword) => keyword.trim()),
  openGraph: {
    title: torfeniSeoHub.openGraph?.title || torfeniSeoHub.title,
    description: torfeniSeoHub.openGraph?.description || torfeniSeoHub.description,
  },
};

const segments: TorfeniSegment[] = [
  torfeniSegmentProfessional,
  torfeniSegmentHobby,
];

export default function TorfeniSubstratiHubPage() {

  return (
    <main>
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
              <Link href={torfeniHero.secondaryCtaHref} className="button ghost">
                {torfeniHero.secondaryCtaLabel}
              </Link>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroBadge}>Premium substrate partner</div>
            <ul className={styles.heroList}>
              <li>Структурирани смеси със светъл и тъмен торф</li>
              <li>Буферирано pH и лабораторен контрол</li>
              <li>Доставки на палети и биг-бегове за B2B клиенти</li>
              <li>Готови хоби опаковки с ясни инструкции</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Качество и последователност</p>
            <h2>Какво прави субстратите ни премиум</h2>
            <p className={styles.lead}>
              Работим само с контролирана суровина и рецепти, валидирани в
              професионални производства. Поддържаме едновременно решения за
              оранжерии и готови смеси за любители, без компромис в качеството.
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

      <section id="segments" className={styles.sectionAlt}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Две ясни линии</p>
            <h2>Професионални и хоби решения</h2>
            <p className={styles.lead}>
              Изберете подходящата линия според обема и приложението. Сегментираме
              асортимента, за да поддържаме яснота и доверие и за двата типа
              клиенти.
            </p>
          </header>

          <div className={styles.segmentGrid}>
            {segments.map((segment) => (
              <article key={segment.slug} className={styles.segmentCard}>
                <div className={styles.segmentHeader}>
                  <p className={styles.segmentAudience}>{segment.audience}</p>
                  <h3>{segment.title}</h3>
                  <p className={styles.segmentDescription}>{segment.description}</p>
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

      <section className={styles.section}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Употреби</p>
            <h2>Сигурни резултати в различни приложения</h2>
            <p className={styles.lead}>
              От разсад до контейнерно производство и домашни растения –
              поддържаме фракции и рецепти за всеки тип нужда.
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

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.faqWrapper}>
            <div className={styles.faqIntro}>
              <p className={styles.kicker}>Подкрепа и логистика</p>
              <h2>Често задавани въпроси</h2>
              <p className={styles.lead}>
                Ако имате специфичен казус, свържете се с нас – адаптираме
                рецепти и организираме доставки според сезона.
              </p>
              <Link href="/kontakti" className="button">
                Изпратете запитване
              </Link>
            </div>
            <div className={styles.faqList}>
              {torfeniFaq.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
