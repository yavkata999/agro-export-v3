import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "trevni-smesi";

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Всички тревни смеси | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Пълен списък с тревни смеси, които предлагаме за B2B клиенти.",
  };
})();

export default function TrevniSmesiListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Тревни смеси"}</h1>
          <p className="muted">
            Тук можете да видите пълния асортимент от тревни смеси, които
            предлагаме. За ценови условия, минимални количества и логистика
            моля, изпратете запитване.
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
                image={product.image}
                href={`/produkti/trevni-smesi/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
