import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "saksii-i-kontejneri-soparco" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Саксии и контейнери Soparco | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог със саксии, висящи контейнери и фиксатори Soparco за професионална употреба.",
  };
})();

export default function SoparcoProductsPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Soparco"}</h1>
          <p className="muted">
            Пълна гама от саксии DUO, висящи саксии и фиксатори Soparco за
            оранжерии, производствени бази и градински центрове. За оферта и
            логистика изпратете ни запитване.
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
                href={`/produkti/saksii-i-kontejneri-soparco/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
