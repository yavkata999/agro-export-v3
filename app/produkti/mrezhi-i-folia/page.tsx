import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "mrezhi-i-folia" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Мрежи и фолиа | Агро Експорт Импорт ООД",
    description:
      category?.seoDescription ||
      "Професионални мрежи за земеделието: почвопокривно фолио против плевели, засенчващи мрежи и защита от птици.",
  };
})();

export default function MrezhiIFoliaListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Мрежи и фолиа",
    description:
      "Специализирани мрежи за контрол на климата, плевелите и вредителите в земеделието.",
    url: `https://agro-export.com/produkti/${slug}`,
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
          name: "Мрежи и фолиа",
          item: `https://agro-export.com/produkti/${slug}`,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://agro-export.com/produkti/${slug}/${product.id}`,
        name: product.name,
      })),
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
          <h1>Всички продукти – {category?.name || "Мрежи и фолиа"}</h1>

          {/* Updated Marketing Text */}
          <p className="muted">
            Осигурете професионална защита за вашата реколта. Предлагаме
            висококачествени
            <strong> почвопокривни мрежи (геотекстил)</strong> за пълен контрол
            над плевелите без хербициди, както и{" "}
            <strong>засенчващи мрежи</strong> с UV стабилизация за предпазване
            от слънчев пригор и градушка. Налични са и олекотени
            <strong> мрежи против птици</strong> за опазване на плодните
            насаждения. Всички продукти са с дълъг експлоатационен живот.
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
