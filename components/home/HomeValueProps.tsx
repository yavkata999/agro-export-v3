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
              Защо да работите с нас
            </h2>
            <p>
              Ние не сме просто склад с продукти. За много клиенти сме партньор,
              който им помага да изградят по-силен асортимент, да планират
              сезоните и да дават по-добри решения на своите крайни клиенти.
            </p>
            <p>
              Комбинираме практически опит в градинския сектор с внимателен
              подбор на марки и логистична дисциплина, така че да можете да
              разчитате на нас дългосрочно.
            </p>
          </div>

          {/* RIGHT SIDE – PREMIUM CARDS */}
          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <BriefcaseIcon />
                <h3>Фокус върху B2B</h3>
              </div>
              <p>
                Работим изцяло с търговци, дистрибутори, производители и
                професионални клиенти. Знаем какво е важно за вашия бизнес и
                оптимизираме предложенията си спрямо него.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <TruckIcon />
                <h3>Сигурни доставки и наличности</h3>
              </div>
              <p>
                Планираме сезонно, работим с утвърдени партньори и поддържаме
                складови наличности за ключови позиции, за да не спирате
                продажби заради липса на стока.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <GraduationIcon />
                <h3>Консултация и обучение</h3>
              </div>
              <p>
                Помагаме при избор на продукти, дозировки и комбинации.
                Подготвяме обучителни материали и видеа, които подпомагат вашите
                екипи и крайни клиенти.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
