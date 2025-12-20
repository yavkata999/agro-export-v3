import Link from "next/link";
import styles from "@styles/components/home/HomeCategoryGrid.module.css";

// --- INLINE ICONS ---
const Icons = {
  Leaf: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Droplet: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.74 5.88a6 6 0 0 1-8.48 8.48A6 6 0 0 1 5.5 15.03l.64-.64z" />
      <path d="M12 2.69l1.65 1.7a3 3 0 0 0 4.15-4.39z" />
    </svg>
  ),
  Sun: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  Box: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Layers: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  Arrow: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
};

type Category = {
  slug: string;
  title: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    slug: "/produkti/torfeni-substrati",
    title: "Торфени субстрати",
    description:
      "Професионални смеси Durpeta за разсадници и хоби субстрати за градински центрове. Над 2000 рецепти.",
  },
  {
    slug: "/produkti/trevni-smesi",
    title: "Тревни смеси",
    description:
      "Висококачествени семена GlobalGrass за паркове, спортни терени и частни градини. Устойчиви и гъсти.",
  },
  {
    slug: "/produkti/saksii-i-kontejneri-soparco",
    title: "Саксии и контейнери",
    description:
      "Пълна гама работни саксии – от френските Soparco до икономични решения за масово производство.",
  },
  {
    slug: "/produkti/formi-za-razsad",
    title: "Форми за разсад",
    description:
      "Транспортни тарелки и форми за разсад за ефективна логистика и здравословно вкореняване.",
  },
  {
    slug: "/produkti/perlit-i-vermikulit",
    title: "Перлит и вермикулит",
    description:
      "Подобрители на почвата за аерация и задържане на влага. Вносен гръцки агроперлит с високо качество.",
  },
  {
    slug: "/produkti/gradinski-produkti",
    title: "Торове и препарати",
    description:
      "Комплексни решения за подхранване от Florovit и Azofoska. Течни и гранулирани формули за всяка култура.",
  },
];

/** Match slugs to visual icons */
function getCategoryIcon(slug: string) {
  const s = slug.toLowerCase();
  if (s.includes("torf") || s.includes("substrat") || s.includes("pochva"))
    return <Icons.Layers />;
  if (s.includes("tor") || s.includes("technid") || s.includes("gradinski"))
    return <Icons.Droplet />;
  if (s.includes("trev") || s.includes("grass")) return <Icons.Sun />;
  if (s.includes("saksi") || s.includes("konteyn")) return <Icons.Box />;
  return <Icons.Leaf />;
}

export default function HomeCategoryGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Основни направления</h2>
          <p className={styles.subtitle}>
            Разгледайте пълната гама професионални продукти, подбрани за нуждите
            на модерното земеделие.
          </p>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((category) => {
            const IconComponent = getCategoryIcon(category.slug);

            return (
              <Link
                key={category.slug}
                href={category.slug}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>{IconComponent}</div>

                <h3 className={styles.cardTitle}>{category.title}</h3>

                <p className={styles.cardDesc}>{category.description}</p>

                <div className={styles.cardFooter}>
                  Разгледайте
                  <div className={styles.arrow}>
                    <Icons.Arrow />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
