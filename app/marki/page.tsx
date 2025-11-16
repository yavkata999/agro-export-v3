import type { Metadata } from "next";
import Link from "next/link";

import styles from "@styles/pages/MarkiPage.module.css";

export const metadata: Metadata = {
  title: "Марки | Agro Export-Import",
  description:
    "Партньорски марки – Durpeta, Soparco, GlobalGrass, Florovit и други производители, с които работим.",
};

const HERO_FEATURES = [
  {
    title: "Фокус върху качеството",
    text: "Работим със сертифицирани производители и контролираме всяка доставка, за да запазим повторяемостта на партидите.",
  },
  {
    title: "Прозрачни доставки",
    text: "Планираме наличности и транспорти предварително, така че сезонните кампании да вървят без прекъсване.",
  },
  {
    title: "Търговска подкрепа",
    text: "Подготвяме екипите на клиентите с продуктови обучения, каталози и POS материали.",
  },
];

const STATS = [
  { value: "6+ марки", label: "стратегически партньорства в портфолиото" },
  { value: "3 направления", label: "субстрати, храни и производствени системи" },
  { value: "100% B2B", label: "работим само с професионални клиенти" },
];

const BRAND_CLUSTERS = [
  {
    title: "Субстрати и подобрители",
    description:
      "Професионални смеси и добавки, които гарантират чистота, правилна структура и отлична аерация за разсадопроизводство и отглеждане.",
    brands: [
      {
        name: "Durpeta",
        description: "Професионални и хоби торфени субстрати от Литва.",
      },
      {
        name: "Гръцки перлит",
        description: "Перлит за подобряване на структурата и аерацията на субстратите.",
      },
    ],
  },
  {
    title: "Торове и зелени площи",
    description:
      "Минерални и органични решения за подхранване, тревни площи и поддръжка на градски и жилищни зелени системи.",
    brands: [
      {
        name: "Florovit / Florovit Pro Natura / Florovit Agro",
        description: "Торове и торови решения за различни култури и приложения.",
      },
      {
        name: "GlobalGrass",
        description: "Тревни смеси за дворове, паркове и спортни терени.",
      },
    ],
  },
  {
    title: "Саксии и производствени системи",
    description:
      "Решения за професионални оранжерии, разсадници и градински центрове – от премиум саксии до работни контейнери.",
    brands: [
      {
        name: "Soparco",
        description: "Френски саксии и контейнери за професионално производство.",
      },
      {
        name: "Турски производители на саксии и форми за разсад",
        description: "Решения за работни саксии и контейнери на конкурентни цени.",
      },
    ],
  },
];

const GUARANTEES = [
  "Регулярни доставки и буферирани количества за сезонни кампании.",
  "Съвместно планиране на асортимент и позициониране на ценови нива.",
  "Поддръжка с POS материали, каталози и технически листове.",
  "Асистенция при внедряване на нови продуктови линии и обучения.",
];

const PROCESS = [
  {
    title: "Откриване на нуждите",
    description: "Анализираме таргет клиенти, желани формати и логистични възможности.",
  },
  {
    title: "Селекция и тестове",
    description: "Организираме мостри и сравнения на продуктови серии преди по-големи поръчки.",
  },
  {
    title: "Въвеждане и развитие",
    description: "Планираме промо активности, обучения и следим резултатите за устойчив растеж.",
  },
];

export default function BrandsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Подбрани европейски производители</p>
              <h1 className={styles.title}>Марки, които носят доверие и последователност</h1>
              <p className={styles.lead}>
                Представляваме премиум и допълващи марки за субстрати, торове,
                тревни смеси и производствени системи. Комбинираме продуктите в
                завършени решения за градински центрове, дистрибутори и
                професионални производители.
              </p>

              <div className={styles.heroHighlights}>
                {HERO_FEATURES.map((feature) => (
                  <div key={feature.title} className={styles.highlightItem}>
                    <p className={styles.highlightTitle}>{feature.title}</p>
                    <p className={styles.highlightText}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.assuranceCard}>
              <h2 className={styles.assuranceTitle}>Премиум отношение към партньорите</h2>
              <p className={styles.assuranceText}>
                Влизаме в ролята на разширение на вашия екип – от избор на
                продукти до позициониране и продажби на място.
              </p>
              <ul className={styles.assuranceList}>
                {GUARANTEES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/kontakti" className={styles.ctaButton}>
                Планирайте среща
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.value} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.brandsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Ясна структура на портфолиото</h2>
            <p>
              Групираме марките по направления, за да комбинираме субстрати,
              подхранване и производствени аксесоари в пълни решения – от
              подготовката на почвата до продажбата в магазина.
            </p>
          </div>

          <div className={styles.brandClusterGrid}>
            {BRAND_CLUSTERS.map((cluster) => (
              <article key={cluster.title} className={styles.brandCluster}>
                <div>
                  <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                  <p className={styles.clusterDescription}>{cluster.description}</p>
                </div>

                <div className={styles.brandList}>
                  {cluster.brands.map((brand) => (
                    <div key={brand.name} className={styles.brandCard}>
                      <p className={styles.brandName}>{brand.name}</p>
                      <p className={styles.brandDescription}>{brand.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.partnerSection}>
        <div className="container">
          <div className={styles.partnerGrid}>
            <article className={styles.partnerCard}>
              <h3>Какво осигуряваме на представяните марки</h3>
              <p>
                Изграждаме доверие чрез прозрачен процес и дългосрочни планове за
                развитие на продажбите.
              </p>
              <ul className={styles.guaranteeList}>
                {GUARANTEES.map((item) => (
                  <li key={`guarantee-${item}`}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.partnerCard}>
              <h3>Процес на въвеждане</h3>
              <p>
                Всяко партньорство преминава през ясни етапи, така че и двете
                страни да имат пълна видимост върху следващите стъпки.
              </p>
              <div className={styles.processList}>
                {PROCESS.map((step) => (
                  <div key={step.title} className={styles.processItem}>
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.finalCtaCard}>
            <p className={styles.finalCtaEyebrow}>Следваща стъпка</p>
            <h2>Да обсъдим как портфолиото може да работи за вас</h2>
            <p>
              Ще подготвим персонализирано предложение с препоръчани марки,
              логистичен план и маркетингова подкрепа.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/kontakti" className={styles.finalCtaButtonPrimary}>
                Свържете се с екипа
              </Link>
              <Link href="/za-nas" className={styles.finalCtaButtonSecondary}>
                Научете повече за Agro Export-Import
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
