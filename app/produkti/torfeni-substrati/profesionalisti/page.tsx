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
