import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "formi-za-razsad" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Форми за разсад | Агро Експорт Импорт ООД",
    description:
      category?.seoDescription ||
      "Каталог с пластмасови табли за разсад и подложки за долно поливане – различни дълбочини и брой гнезда.",
  };
})();

export default function FormiZaRazsadListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Форми за разсад",
    description:
      "Професионални пластмасови табли и подложки за разсад – от 4 до 512 гнезда.",
    url: `https://agro-export.com/produkti/${slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://agro-export.com/produkti/${slug}/${product.id}`,
        name: product.name,
      })),
    },
    // Breadcrumbs help Google show the path in search results
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://agro-export.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Продукти",
          item: "https://agro-export.com/produkti",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: category?.name || "Форми за разсад",
          item: `https://agro-export.com/produkti/${slug}`,
        },
      ],
    },
  };

  return (
    <section className="section">
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="page-header">
          <h1>Всички продукти – {category?.name || "Форми за разсад"}</h1>

          <p className="muted">
            Оптимизирайте производството си с нашата селекция от професионални
            табли за разсад. Покриваме пълния спектър от нужди –
            <strong> от табли с 4 до 10 гнезда </strong> за пазарна реализация
            на готов разсад (тиквички, краставици, цветя), до индустриални форми
            с<strong> 288 и 512 микро-клетки </strong> за автоматизирано
            засяване. Налични са модели с квадратни и кръгли гнезда, както и
            специализирани дълбоки форми за силна коренова система.
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
                    ? `${product.shortDescription} | Опаковка: ${product.packaging}`
                    : product.shortDescription
                }
                image={product.images?.[0]}
                href={`/produkti/${slug}/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
