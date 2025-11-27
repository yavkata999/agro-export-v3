import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "perlit-vermikulit" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Перлит и вермикулит | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Перлит и вермикулит за подобряване на аерацията и влагозадържането в субстрати и почви.",
  };
})();

export default function PerlitVermikulitListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Перлит и вермикулит"}</h1>
          <p className="muted">
            Минерални подобрители за субстрати и почви – перлит и вермикулит
            от гръцки производител. Подходящи са за професионални оранжерии и
            хоби градинари. За конкретна оферта изпратете запитване.
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
                href={`/produkti/perlit-vermikulit/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
