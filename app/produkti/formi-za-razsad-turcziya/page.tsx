import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "formi-za-razsad-turcziya" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Agro Export-Import`
      : "Форми за разсад (Турция) | Agro Export-Import",
    description:
      category?.seoDescription ||
      "Каталог с турски табли за разсад – квадратни, кръгли, дълбоки и разделящи се модели за професионални производители.",
  };
})();

export default function FormiZaRazsadTurciaListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>
            Всички продукти – {category?.name || "Форми за разсад (Турция)"}
          </h1>
          <p className="muted">
            Турски професионални табли и подложки за разсад: дълбоки модели,
            разделящи се гнезда и висока плътност от 20 до 128 клетки. Подходящи
            за зеленчуци, цветя, горски култури и продажба на дребно.
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
                href={`/produkti/formi-za-razsad-turcziya/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
