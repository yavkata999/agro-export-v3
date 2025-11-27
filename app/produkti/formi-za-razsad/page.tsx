import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "formi-za-razsad" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Форми за разсад | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог с пластмасови табли за разсад и подложки за долно поливане – различни дълбочини и брой гнезда.",
  };
})();

export default function FormiZaRazsadListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Форми за разсад"}</h1>
          <p className="muted">
            Професионални пластмасови табли и подложки за разсад – от 4 до 512
            гнезда. Подходящи за зеленчуци, цветя, горски култури и автоматизирани
            линии. Изберете модел според дълбочината и броя клетки.
          </p>
        </div>

        {products.length === 0 ? (
          <p className="muted">
            В момента няма добавени продукти в тази категория.
          </p>
        ) : (
          <div className="grid grid-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={
                  product.packaging
                    ? `${product.shortDescription} | Опаковки: ${product.packaging}`
                    : product.shortDescription
                }
                image={product.images?.[0]}
                href={`/produkti/formi-za-razsad/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
