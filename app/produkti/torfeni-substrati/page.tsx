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
  title: "Торфени субстрати Durpeta | Agro Export-Import",
  description:
    "Премиум торфени субстрати за професионални производители и хоби градинари. Контролирано pH, структурирани фракции, лабораторно гарантирано качество и оптимизирани рецепти.",
};

export default function TorfeniSubstratiHubPage() {
  return (
    <main>
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
            <div className={styles.heroBadge}>Premium substrate partner</div>
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
            <p className={styles.kicker}>Качество и последователност</p>
            <h2>Какво отличава нашите субстрати</h2>
            <p className={styles.lead}>
              Работим със сертифицирана суровина и точно контролирани рецепти,
              използвани в професионални оранжерийни производства. Същата
              последователност прилагаме и в хоби линията, за да гарантираме
              предвидими и стабилни резултати за всеки клиент.
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
            <p className={styles.kicker}>Две професионално дефинирани линии</p>
            <h2>Субстрати за професионална и хоби употреба</h2>
            <p className={styles.lead}>
              Поддържаме ясно сегментиран асортимент, така че всеки клиент да
              открие точния субстрат според обема, културата и нивото на опит.
              Независимо дали произвеждате в оранжерия или се грижите за домашна
              колекция – качеството остава на най-високо ниво.
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
            <p className={styles.kicker}>Употреби</p>
            <h2>Сигурни резултати във всяко приложение</h2>
            <p className={styles.lead}>
              Смесите ни поддържат стабилна структура и хранителен баланс за
              широк обхват култури – от разсади до растения в контейнери.
              Подходящи са за професионални оранжерии, търговски центрове и
              домашни условия.
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
              <p className={styles.kicker}>Подкрепа и логистика</p>
              <h2>Често задавани въпроси</h2>
              <p className={styles.lead}>
                Подкрепяме както професионални производители, така и хоби
                клиенти — от избор на рецепта до планиране на сезонни доставки.
                Свържете се с нас за индивидуално съдействие.
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
