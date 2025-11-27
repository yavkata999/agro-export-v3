import Link from "next/link";
import styles from "@styles/components/home/HomeCategoryGrid.module.css";

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
      "Професионални и хоби субстрати Durpeta за разсадопроизводство, цветя и зеленчуци.",
  },
  {
    slug: "/produkti/trevni-smesi",
    title: "Тревни смеси",
    description:
      "Тревни смеси GlobalGrass за дворове, спортни терени и обществени пространства.",
  },
  {
    slug: "/produkti/saksii-i-kontejneri-soparco",
    title: "Саксии",
    description:
      "Работни саксии и контейнери – френски Soparco и подбрани турски производители.",
  },
  {
    slug: "/produkti/formi-za-razsad",
    title: "Форми за разсад",
    description:
      "Транспортни тарелки и форми за разсад за професионални производители.",
  },
  {
    slug: "/produkti/perlit-vermikulit",
    title: "Перлит и вермикулит",
    description:
      "Гръцки перлит и вермикулит за подобряване на структурата и аерацията на субстрата.",
  },
  {
    slug: "/produkti/gradinski-produkti",
    title: "Градински продукти и торове",
    description:
      "Azofoska, Florovit, Florovit Pro Natura, Florovit Agro и други решения за торене.",
  },
];

export default function HomeCategories() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="categories-heading" className={styles.title}>
            Основни продуктови категории
          </h2>
          <p className={styles.subtitle}>
            Поддържаме добре структуриран асортимент за професионални клиенти –
            от субстрати и тревни смеси до саксии, форми за разсад, перлит,
            вермикулит и торове.
          </p>
        </header>

        <div className={styles.grid}>
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={category.slug}
              className={styles.card}
              aria-label={`Вижте продуктите в категория „${category.title}“`}
            >
              <article className={styles.cardInner}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardText}>{category.description}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.cardLink}>
                    Вижте продуктите
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
