import type { Metadata } from "next";
import Link from "next/link";

import styles from "@styles/pages/AboutPage.module.css";

export const metadata: Metadata = {
  title: "За нас | Agro Export-Import",
  description:
    "Agro Export-Import – семейна българска компания с над 30 години опит във внос, логистика и дистрибуция на професионални аграрни продукти за B2B клиенти.",
};

const HIGHLIGHTS = [
  {
    title: "Семейна приемственост",
    text: "Основани от Камен Крайчев през 1989 г. във Варна и развивани вече трето десетилетие като доверен семеен бизнес.",
  },
  {
    title: "Международни партньорства",
    text: "Пряка работа с производители от ЕС, Полша, Литва, Франция, Китай и други азиатски пазари.",
  },
  {
    title: "100% B2B фокус",
    text: "Подкрепяме професионални клиенти – вериги, дистрибутори, агроаптеки и производители на разсад.",
  },
];

const STATS = [
  { label: "години опит", value: "34+" },
  { label: "предлагани продукта", value: "500+" },
  { label: "държави с доставки", value: "10+" },
];

const STORY_BLOCKS = [
  {
    title: "История и стабилност",
    text: `„Агро Експорт – Импорт" ООД е основана през 1989 г., а от 1997 г. работим под настоящото си име. През годините изградихме репутация на надежден партньор за търговия на едро с аграрни продукти и битова химия.`,
  },
  {
    title: "Портфолио и представителства",
    text: `Селектираме висококачествени стоки за клиенти в България и чужбина. Гордеем се, че сме ексклузивен представител за марки като Дурпета АД и Група Инко АД, комбинирайки техните решения в завършени продуктови програми.`,
  },
  {
    title: "Гъвкава логистика",
    text: `Поддържаме централен склад в с. Окол (Софийска област) с наличности от основните ни линии и разполагаме със собствен транспорт за доставки до клиента.`,
  },
];

const TIMELINE = [
  {
    year: "1989",
    title: "Началото във Варна",
    description: "Камен Крайчев създава семейната компания с фокус върху внос на аграрни продукти.",
  },
  {
    year: "1997",
    title: "Agro Export-Import",
    description: "Компанията приема настоящото си име и разширява портфолиото си с международни партньорства.",
  },
  {
    year: "2000+",
    title: "Европейска мрежа",
    description: "Създаваме дългосрочни отношения с производители от ЕС, Китай и други азиатски държави.",
  },
  {
    year: "Днес",
    title: "Премиум B2B решения",
    description: "Консолидираме субстрати, торове, аксесоари и битова химия в мащабируеми програми за професионални клиенти.",
  },
];

const VALUE_PROPS = [
  {
    title: "Торфени субстрати",
    description: "Основният ни продукт – високоефективни смеси за разсадопроизводство и градински центрове, налични в различни формули и обеми.",
  },
  {
    title: "Комплементарни решения",
    description: "Саксии, форми за разсад, тревни смеси, перлити, мрежи, торове и продукти за поддръжка на зелени площи.",
  },
  {
    title: "Пазарна експертиза",
    description: "Подкрепяме търговските вериги с продуктов микс, планиране на кампании и оперативна координация на доставките.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Agro Export-Import</p>
              <h1 className={styles.title}>Премиум B2B партньор с доказано наследство</h1>
              <p className={styles.lead}>
                Семейна компания, основана във Варна през 1989 г., която изгражда
                дългосрочни взаимоотношения с европейски и азиатски
                производители, за да осигурява надеждни доставки на
                професионални аграрни продукти.
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
            <h2>История, позициониране и доверие</h2>
            <p>
              Инвестираме в устойчив растеж и прозрачни процеси – от избора на
              производители до управлението на наличности и доставките към
              клиентите ни.
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
            <h2>Пътят ни до днешния обхват</h2>
            <p>
              Развиваме компанията поетапно, за да поддържаме високи стандарти и
              надеждни партньорства във всеки етап от веригата за доставки.
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
            <h2>Какво доставяме на нашите партньори</h2>
            <p>
              Комбинираме продуктови линии, логистични решения и търговска
              подкрепа, за да осигурим последователен резултат във всяка B2B
              програма.
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
              <p className={styles.eyebrow}>Следваща стъпка</p>
              <h2>Да планираме вашата продуктова програма</h2>
              <p>
                Споделете вашите цели – от внедряване на нови линии до оптимизиране
                на текущите доставки – и ще предложим конкретни стъпки и
                наличности.
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
