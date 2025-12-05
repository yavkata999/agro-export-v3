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
  title: `${torfeniSegmentProfessional.title} | Агро Експорт Импорт ООД`,
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
            „Durpeta“ произвежда широка гама професионални торфени субстрати –
            от стандартни решения до специализирани смеси, разработени за
            конкретни култури и технологии. В портфолиото влизат субстрати за
            примула и виола, за разсадопроизводство, както и за контейнерно
            отглеждане на декоративни растения с торове с продължително
            действие.
          </p>
          <p>
            Можете да изберете продукт според необходимата фракция: 0–5, 5–10,
            10–20, 20–40, 0–10, 0–20, 0–40 и &gt; 50 мм. Произвеждат се в торби
            5–80 литра, в опаковки 150–250 литра и в биг бегове 3000–6000 литра.
            Всяка опаковка носи номер на оригиналната рецепта и информация за
            състава и структурата, управлявани чрез автоматизирана система за
            етикетиране.
          </p>
          <p className={styles.subtitle}>
            Ако не откривате точната рецепта за вашето производство, можем да
            разработим индивидуална смес. За персонализирани рецепти минималното
            количество е един цял камион.
          </p>
        </div>

        <div className={styles.introBlock}>
          <h2>Какво получавате</h2>
          <p className={styles.subtitle}>
            Професионалната линия на Durpeta е разработена така, че да осигури
            повторяеми резултати и предвидимо поведение на субстрата във всеки
            цикъл на производство.
          </p>
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
              image={product.product.images?.[0]}
              href={`/produkti/torfeni-substrati/${product.product.id}`}
            />
          ))}
        </div>

        <div className={styles.introBlock}>
          <h2>Хоби линия за вашите клиенти</h2>
          <p className={styles.subtitle}>
            Ако обслужвате и любители градинари, можете да допълните своето
            портфолио с хоби субстратите Durpeta – готови опаковки с ясни
            инструкции, подходящи за препродажба в градински центрове и
            търговски обекти.
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
