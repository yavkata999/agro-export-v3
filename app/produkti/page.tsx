// app/produkti/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@content/categories";
import styles from "@styles/ProduktiPage.module.css";

export const metadata: Metadata = {
  title: "Продукти | Agro Export-Import",
  description:
    "Каталог с професионални продукти – торфени субстрати, тревни смеси, саксии, форми за разсад, перлит, вермикулит и градински продукти за B2B клиенти.",
};

export default function ProduktiPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* PAGE INTRO */}
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <h1 className={styles.title}>Каталог продукти</h1>
            <p className={styles.subtitle}>
              Подбран асортимент за професионални клиенти – торфени субстрати,
              тревни смеси, саксии, форми за разсад, перлит, вермикулит и
              градински продукти. Работим изцяло B2B с градински центрове,
              дистрибутори и производители.
            </p>
          </div>

          <div className={styles.headerSide}>
            <h2 className={styles.sideTitle}>Как да поръчате</h2>
            <p className={styles.sideText}>
              Изберете категория, разгледайте продуктите и ни изпратете
              запитване за конкретна оферта. Организираме доставки за цялата
              страна чрез транспортни партньори.
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
                    Вижте продуктите<span className={styles.cardArrow}>→</span>
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
