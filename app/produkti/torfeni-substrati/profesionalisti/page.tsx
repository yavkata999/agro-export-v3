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
      name: "Субстрат за Ерика",
      salt: "0,2 - 0,5",
      ph: "3,5 - 4,5",
      fraction: "Средна",
      lightPeat: "100",
      darkPeat: "0",
      additives: "-",
      packaging: "20, 80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за рози",
      salt: "0,9 - 1,5",
      ph: "5,5 - 6,5",
      fraction: "Средна",
      lightPeat: "70",
      darkPeat: "30",
      additives: "Пясък, микроелементи",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за мушкато",
      salt: "1,1 - 1,4",
      ph: "5,8 - 6,5",
      fraction: "Средна",
      lightPeat: "70",
      darkPeat: "30",
      additives: "Глина, вкоренител, микроелементи",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за сурфиня",
      salt: "0,9 - 1,3",
      ph: "5,0 - 5,5",
      fraction: "Средна",
      lightPeat: "60",
      darkPeat: "40",
      additives: "Хелатно желязо, вкоренител, глина, микроелементи",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за хризантема",
      salt: "1,1 - 1,4",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "30",
      darkPeat: "70",
      additives: "Вкоренител",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за циклама и коледна звезда",
      salt: "0,9 - 1,2",
      ph: "5,2 - 5,8",
      fraction: "Средна",
      lightPeat: "90",
      darkPeat: "10",
      additives: "Агроперлит, микроелементи",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за кактус",
      salt: "0,6 - 1,1",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "50",
      darkPeat: "50",
      additives: "Пясък, глина",
      packaging: "10, 80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за ягоди",
      salt: "0,9 - 1,3",
      ph: "5,3 - 5,8",
      fraction: "Средна до едра",
      lightPeat: "70",
      darkPeat: "30",
      additives: "Агроперлит, вкоренител",
      packaging: "50, 80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за зеле, салати",
      salt: "0,9 - 1,3",
      ph: "6,0 - 6,5",
      fraction: "Фина до средна",
      lightPeat: "60",
      darkPeat: "40",
      additives: "Глина, вкоренител",
      packaging: "80, 250 л, Биг Бег 5 м3",
    },
    {
      name: "Субстрат за гъби",
      salt: "0,1 - 0,2",
      ph: "7,5 - 8,0",
      fraction: "Фина",
      lightPeat: "30",
      darkPeat: "70",
      additives: "-",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Универсален субстрат",
      salt: "1,0 - 1,5",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "60",
      darkPeat: "40",
      additives: "-",
      packaging: "10, 20, 80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 1а за засяване на семена",
      salt: "0,6 - 0,9",
      ph: "5,5 - 6,0",
      fraction: "Фина",
      lightPeat: "60",
      darkPeat: "40",
      additives: "Вкоренител",
      packaging: "20, 80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 1б за засяване на семена и отглеждане на разсади",
      salt: "0,9 - 1,4",
      ph: "5,5 - 6,0",
      fraction: "Фина",
      lightPeat: "70",
      darkPeat: "30",
      additives: "Глина, агроперлит, вкоренител, микроелементи",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 2а за отглеждане на зеленчуци",
      salt: "1,0 - 1,5",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "60",
      darkPeat: "40",
      additives: "Микроелементи, вкоренител",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 2б за отглеждане на цветя",
      salt: "0,9 - 1,3",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "70",
      darkPeat: "30",
      additives: "Глина, вкоренител, микроелементи",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 3а за декоративни иглолистни",
      salt: "0,9 - 1,3",
      ph: "4,0 - 4,5",
      fraction: "Средна",
      lightPeat: "80",
      darkPeat: "20",
      additives: "-",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 3а за декоративни широколистни",
      salt: "0,9 - 1,3",
      ph: "5,5 - 6,0",
      fraction: "Средна",
      lightPeat: "80",
      darkPeat: "20",
      additives: "-",
      packaging: "80, 250 л, Биг Бег 4 м3",
    },
    {
      name: "Субстрат PROFI MIX 3б за дългосрочно отглеждане, за растения в контейнери",
      salt: "1,0 - 1,3",
      ph: "5,5 - 6,5",
      fraction: "Едра",
      lightPeat: "80",
      darkPeat: "20",
      additives: "Глина, вкоренител, торове с продължително действие, микроелементи",
      packaging: "80, 250 л, Биг Бег 4 м3",
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
            &bdquo;Durpeta&ldquo; АД произвежда широка гама от продукти от по-евтини
            стандартни
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
                да виждате набързо солеви профил, pH, фракция, съотношение светъл
                и тъмен торф, както и добавки.
              </p>
            </div>
            <div className={styles.sectionBadge}>Готови за производство</div>
          </div>

          <div className={styles.recipeGrid}>
            {standardRecipes.map((recipe) => (
              <article key={recipe.name} className={styles.recipeCard}>
                <header className={styles.recipeHeader}>
                  <div>
                    <h3>{recipe.name}</h3>
                  </div>
                </header>

                <dl className={styles.metrics}>
                  <div className={styles.metricItem}>
                    <dt>Фракция</dt>
                    <dd className={styles.accentValue}>{recipe.fraction}</dd>
                  </div>
                  <div>
                    <dt>Сол (г/д.л.)</dt>
                    <dd>{recipe.salt}</dd>
                  </div>
                  <div>
                    <dt>pH (CaCl2)</dt>
                    <dd>{recipe.ph}</dd>
                  </div>
                  <div>
                    <dt>Светъл торф (%)</dt>
                    <dd>{recipe.lightPeat}</dd>
                  </div>
                  <div>
                    <dt>Тъмен торф (%)</dt>
                    <dd>{recipe.darkPeat}</dd>
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
