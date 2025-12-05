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

export default function HomeCategories() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="categories-heading" className={styles.title}>
            Пълен асортимент за вашия бизнес
          </h2>
          <p className={styles.subtitle}>
            Структурирали сме портфолиото си така, че да покрием всички нужди на
            един модерен градински център или производствен разсадник – от
            посяването до продажбата.
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
                    Разгледайте категорията
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
