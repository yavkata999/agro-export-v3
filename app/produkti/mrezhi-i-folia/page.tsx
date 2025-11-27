import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "mrezhi-i-folia" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Мрежи и фолиа | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог с мрежи за плевели, птици и засенчване за професионална употреба.",
  };
})();

export default function MrezhiIFoliaListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Мрежи и фолиа"}</h1>
          <p className="muted">
            Изберете подходящата мрежа за контрол на плевели, защита от птици или
            засенчване. Свържете се с нас за оферта, наличности и транспортни
            условия.
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
                href={`/produkti/mrezhi-i-folia/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
