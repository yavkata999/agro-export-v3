import Link from "next/link";
import type { Metadata } from "next";
import {
  torfeniSegmentProfessional,
  torfeniSegmentHobby,
} from "@content/torfeni-substrati";
import ProductCard from "@components/shared/ProductCard";
import { getProductById } from "@lib/products";
import styles from "@styles/pages/TorfeniSegmentPage.module.css";

export const metadata: Metadata = {
  title: `${torfeniSegmentProfessional.title} | Agro Export-Import`,
  description: torfeniSegmentProfessional.description,
};

export default function TorfeniProfesionalistiPage() {
  const segment = torfeniSegmentProfessional;
  const resolvedProducts = segment.products.flatMap((item) => {
    const product = getProductById(item.productId);
    return product ? [{ ...item, product }] : [];
  });

  const standardRecipes = [
    {
      name: "Субстрат за Бегони",
      salt: "0.2 - 0.5",
      ph: "5.0 - 5.5",
      fraction: "Средна",
      moisture: "50",
      peatType: "Светъл",
      npk: "14 - 16 - 18",
      additives: "Перлит, минерален тор",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за рози",
      salt: "0.3 - 0.5",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "50",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Торове",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за разсад",
      salt: "0.4 - 0.8",
      ph: "5.5 - 6.5",
      fraction: "Ситна",
      moisture: "50",
      peatType: "Светъл",
      npk: "14 - 16 - 18",
      additives: "Торове",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за кактуси и палми",
      salt: "0.4 - 0.6",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "40",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "-",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за сеитба и пикиране",
      salt: "1.0 - 1.4",
      ph: "5.0 - 5.5",
      fraction: "Средна",
      moisture: "65",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Агроглина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за изящни цветя",
      salt: "1.0 - 1.4",
      ph: "5.0 - 5.5",
      fraction: "Средна",
      moisture: "70",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Агроглина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за иглолистни",
      salt: "1.0 - 1.4",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "60",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "-",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за трева",
      salt: "1.0 - 1.4",
      ph: "5.5 - 6.5",
      fraction: "Ситна",
      moisture: "70",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Торове, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Универсален субстрат",
      salt: "1.0 - 1.4",
      ph: "5.0 - 6.0",
      fraction: "Средна",
      moisture: "60",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Агроглина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за гъби",
      salt: "1.0 - 1.4",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "60",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за стапелии",
      salt: "1.5 - 2.0",
      ph: "5.5 - 6.5",
      fraction: "Едра",
      moisture: "50",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Агроглина, перлит",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат за азалии и рододендрони",
      salt: "1.8 - 2.2",
      ph: "4.5 - 5.5",
      fraction: "Средна",
      moisture: "55",
      peatType: "Тъмен",
      npk: "20 - 10 - 20",
      additives: "Торове",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат RDDP MIX 1 за разсад",
      salt: "0.9 - 1.1",
      ph: "5.5 - 6.5",
      fraction: "Ситна",
      moisture: "70",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Вермикулит",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат RDDP MIX 2 за засаждане в оранжерия",
      salt: "0.9 - 1.1",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "70",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Глина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат RDDP MIX 4 за засаждане в контейнери",
      salt: "0.9 - 1.1",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "60",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Глина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат PRDP MIX 5 за разсад",
      salt: "0.8 - 1.0",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "70",
      peatType: "Смес",
      npk: "20 - 10 - 20",
      additives: "Перлит, глина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат PRDP MIX 6 за засаждане в оранжерия",
      salt: "0.8 - 1.0",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "60",
      peatType: "Тъмен",
      npk: "20 - 10 - 20",
      additives: "Глина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
    {
      name: "Субстрат PRDP MIX 7 за засаждане в контейнери",
      salt: "0.8 - 1.0",
      ph: "5.5 - 6.5",
      fraction: "Средна",
      moisture: "60",
      peatType: "Тъмен",
      npk: "20 - 10 - 20",
      additives: "Глина, микроелементи",
      packaging: "20, 70 л; 250, 3,0 м3 Big Bag",
    },
  ];

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className="muted">Durpeta – професионална линия</p>
          <h1>{segment.title}</h1>
          <p className={styles.subtitle}>{segment.description}</p>
        </div>

        <div className={styles.introBlock}>
          <p>
            „Durpeta" АД произвежда широка гама от продукти от по-евтини стандартни
            субстрати до смеси според специфичните нужди на клиента, например
            субстрати за примула/виола или за контейнерно отглеждани декоративни
            растения с торове с продължително действие. Можете да изберете желания
            продукт от следните фракции на торфа: 0 - 5, 5 - 10, 10 - 20, 20 - 40,
            0 - 10, 0 - 20, 0 - 40 и &gt; 50 мм.
          </p>
          <p>
            Производството е опаковано в торби 5 - 80 литра, в 150 - 250 литра и в
            различни размери на биг бег 3000 - 6000 литра. Всяка опаковка има
            отпечатан номер на оригиналната рецепта, както и информация за състава
            и структурата на съдържанието, идентифицирани чрез автоматична система
            за етикетиране.
          </p>
          <p className={styles.subtitle}>
            Ако не откривате точната рецепта за вашите нужди, можем да създадем
            индивидуална, но поръчката трябва да е минимум един камион.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="muted">Стандартизирани рецепти</p>
              <h2>Премиум каталог с готови смеси</h2>
              <p className={styles.subtitle}>
                Подредихме характеристиките на всяка рецепта в прегледни карти, за
                да виждате набързо солеви профил, pH, фракция, влажност, N-P-K и
                добавки.
              </p>
            </div>
            <div className={styles.sectionBadge}>Готови за производство</div>
          </div>

          <div className={styles.recipeGrid}>
            {standardRecipes.map((recipe) => (
              <article key={recipe.name} className={styles.recipeCard}>
                <header className={styles.recipeHeader}>
                  <div>
                    <p className="muted">Субстрат</p>
                    <h3>{recipe.name}</h3>
                  </div>
                  <div className={styles.pillStack}>
                    <span className={styles.pill}>{recipe.fraction}</span>
                    <span className={styles.pill}>{recipe.peatType}</span>
                  </div>
                </header>

                <dl className={styles.metrics}>
                  <div>
                    <dt>Сол (г/д.л.)</dt>
                    <dd>{recipe.salt}</dd>
                  </div>
                  <div>
                    <dt>pH (CaCl2)</dt>
                    <dd>{recipe.ph}</dd>
                  </div>
                  <div>
                    <dt>Влага %</dt>
                    <dd>{recipe.moisture}</dd>
                  </div>
                  <div>
                    <dt>N-P-K %</dt>
                    <dd>{recipe.npk}</dd>
                  </div>
                </dl>

                <div className={styles.metaLine}>
                  <span className={styles.metaLabel}>Добавени материали</span>
                  <span className={styles.metaValue}>{recipe.additives}</span>
                </div>
                <div className={styles.metaLine}>
                  <span className={styles.metaLabel}>Опаковки</span>
                  <span className={styles.metaValue}>{recipe.packaging}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.introBlock}>
          <h2>Какво получавате</h2>
          <ul className={styles.featureList}>
            {segment.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/kontakti" className={`button ${styles.cta}`}>
            Запитване за професионална оферта
          </Link>
        </div>

        <div className="grid grid-3">
          {resolvedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.product.name}
              description={
                product.product.packaging
                  ? `${product.product.shortDescription} | Опаковки: ${product.product.packaging}`
                  : product.product.shortDescription
              }
              image={product.product.image}
              href={`/produkti/torfeni-substrati/${product.product.id}`}
            />
          ))}
        </div>

        <div className={styles.introBlock}>
          <h2>Хоби линия за препродажба</h2>
          <p className={styles.subtitle}>
            Ако обслужвате и любители клиенти, вижте хоби асортимента ни в отделна
            страница с готови опаковки и инструкции.
          </p>
          <Link
            href={torfeniSegmentHobby.ctaHref}
            className={`button ghost ${styles.cta}`}
          >
            Към хоби субстратите
          </Link>
        </div>
      </div>
    </section>
  );
}
