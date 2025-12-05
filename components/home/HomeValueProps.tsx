import styles from "@styles/components/home/HomeValueProps.module.css";

function BriefcaseIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 6V5.5C9 4.12 10.12 3 11.5 3h1C13.88 3 15 4.12 15 5.5V6m-6 0h6m-6 0H6.5A2.5 2.5 0 0 0 4 8.5v7A2.5 2.5 0 0 0 6.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 17.5 6H15m-4 5h2m-6 0h2m4 0h2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 7.5A1.5 1.5 0 0 1 4.5 6H13v9H4.5A1.5 1.5 0 0 1 3 13.5v-6zM13 9h4l2 3v3.5A1.5 1.5 0 0 1 17.5 17H13m-6.5 1.5A1.5 1.5 0 0 0 8 17a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 5 17a1.5 1.5 0 0 0 1.5 1.5zm9 0A1.5 1.5 0 0 0 17 17a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 14 17a1.5 1.5 0 0 0 1.5 1.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Zm3 3.3V14c0 1.66 2.24 3 6 3s6-1.34 6-3v-2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 9v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeValueProps() {
  return (
    <section className={styles.section} aria-labelledby="value-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT SIDE – TEXT */}
          <div className={styles.left}>
            <h2 id="value-heading" className={styles.title}>
              Защо да изберете нас за свой доставчик
            </h2>
            <p>
              В бизнеса с растения времето и качеството са всичко. Ние разбираме
              цикличността на сезона и сме тук, за да ви осигурим спокойствие.
              Не сме просто склад, а логистичен партньор, който планира заедно с
              вас.
            </p>
            <p>
              С над 34 години опит, ние знаем кои продукти се продават най-добре
              на българския пазар и кои субстрати дават най-добри резултати при
              нашия климат.
            </p>
          </div>

          {/* RIGHT SIDE – PREMIUM CARDS */}
          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <BriefcaseIcon />
                <h3>100% B2B Фокус</h3>
              </div>
              <p>
                Ние не се конкурираме с вас. Работим изключително с търговци и
                производители. Нашата цел е вашият бизнес да расте, предлагайки
                най-доброто на крайния клиент.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <TruckIcon />
                <h3>Складови наличности</h3>
              </div>
              <p>
                Поддържаме големи буферни наличности от ключовите продукти в
                нашия склад, за да реагираме бързо на вашите поръчки, дори в
                пика на сезона.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <GraduationIcon />
                <h3>Експертиза и Обучение</h3>
              </div>
              <p>
                Осигуряваме техническа информация и съвети за правилната
                употреба на продуктите, за да можете вие и вашият екип да
                консултирате клиентите си уверено.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
