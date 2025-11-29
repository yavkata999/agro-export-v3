import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "rabotni-saksii-i-kontejneri" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Работни саксии и контейнери | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог с работни саксии и контейнери Agro Export – кръгли, квадратни и висящи модели за професионални разсадници и оранжерии.",
  };
})();

export default function RabotniSaksiiListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>
            Всички продукти – {category?.name || "Работни саксии и контейнери"}
          </h1>
          <p className="muted">
            Професионални работни саксии Agro Export за производство на разсад,
            оранжерии и градински центрове. Включва кръгли и квадратни модели,
            паници и висящи саксии с надежден дренаж, UV защита и стабилно
            стифиране. За количества и логистика изпратете запитване.
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
                href={`/produkti/rabotni-saksii-i-kontejneri/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
