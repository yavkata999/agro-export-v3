import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "gradinski-produkti" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Градински продукти | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог с торове, препарати и подобрители на почвата за домашни и професионални градини.",
  };
})();

export default function GradinskiProduktiListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Градински продукти"}</h1>
          <p className="muted">
            Изберете тор или препарат според културата: тревни площи, иглолистни,
            овошки, зеленчуци, цветя и компост. За оферти и логистика изпратете
            запитване.
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
                href={`/produkti/gradinski-produkti/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
