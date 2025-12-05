import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@content/categories";
import styles from "@styles/pages/ProduktiPage.module.css";

export const metadata: Metadata = {
  title: "Продуктов Каталог | Агро Експорт Импорт",
  description:
    "Пълна гама професионални решения за градинарството: субстрати, семена, торове и производствени консумативи. Внос и дистрибуция на едро.",
};

export default function ProduktiPage() {
  // --- SEO SCHEMA ---
  // CollectionPage schema helps Google understand this is a hub for other product lists
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Продуктов Каталог - Агро Експорт Импорт",
    description: "Каталог с професионални продукти за градинарството.",
    url: "https://agro-export.com/produkti",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((cat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cat.name,
        url: `https://agro-export.com${
          cat.rootPath ?? `/produkti/${cat.slug}`
        }`,
      })),
    },
  };

  return (
    <section className={styles.page}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        {/* PAGE INTRO */}
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <h1 className={styles.title}>Вашият професионален избор</h1>
            <p className={styles.subtitle}>
              Събрахме на едно място всичко необходимо за успешния сезон. От
              доказани европейски субстрати и семена до специализирани торове и
              производствени контейнери. Качество, което гарантира растеж за
              вашия бизнес.
            </p>
          </div>

          <div className={styles.headerSide}>
            <h2 className={styles.sideTitle}>Лесна поръчка на едро</h2>
            <p className={styles.sideText}>
              Разгледайте асортимента и се свържете с нас за индивидуална оферта
              и условия за дистрибуция. Доставяме до всяка точка на страната.
            </p>
          </div>
        </header>

        {/* CATEGORY GRID */}
        <div className={styles.grid}>
          {categories.map((category) => {
            const href = category.rootPath ?? `/produkti/${category.slug}`;

            return (
              <Link key={category.slug} href={href} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardHeading}>
                    <h2 className={styles.cardTitle}>{category.name}</h2>
                  </div>

                  {category.shortDescription && (
                    <p className={styles.cardText}>
                      {category.shortDescription}
                    </p>
                  )}

                  <span className={styles.cardCta}>
                    Разгледайте категорията
                    <span className={styles.cardArrow}>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
