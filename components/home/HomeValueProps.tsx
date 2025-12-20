import styles from "@styles/components/home/HomeValueProps.module.css";

/* --- ICONS --- */
const Icons = {
  Briefcase: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Truck: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
  Graduation: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

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
            <p className={styles.description}>
              В бизнеса с растения времето и качеството са всичко. Ние разбираме
              цикличността на сезона и сме тук, за да ви осигурим спокойствие.
              Не сме просто склад, а логистичен партньор, който планира заедно с
              вас.
            </p>
            <p className={styles.description}>
              С над 34 години опит, ние знаем кои продукти се продават най-добре
              на българския пазар и кои субстрати дават най-добри резултати при
              нашия климат.
            </p>
          </div>

          {/* RIGHT SIDE – CARDS */}
          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.iconBox}>
                <Icons.Briefcase />
              </div>
              <h3>100% Фокус върху бизнес клиенти</h3>
              <p>
                Ние не се конкурираме с вас. Работим изключително с търговци и
                производители. Нашата цел е вашият бизнес да расте.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconBox}>
                <Icons.Truck />
              </div>
              <h3>Складови наличности</h3>
              <p>
                Поддържаме големи буферни наличности от ключовите продукти в
                нашия склад, за да реагираме бързо на вашите поръчки.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconBox}>
                <Icons.Graduation />
              </div>
              <h3>Експертиза и Обучение</h3>
              <p>
                Осигуряваме техническа информация и съвети за правилната
                употреба на продуктите, за да консултирате клиентите си уверено.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
