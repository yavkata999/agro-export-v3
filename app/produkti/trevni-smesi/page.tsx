import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "trevni-smesi" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Тревни смеси | Агро Експорт Импорт ООД",
    description:
      category?.seoDescription ||
      "Професионални тревни смеси GlobalGrass за паркове, спортни терени, сухи и сенчести зони. Внос и дистрибуция.",
  };
})();

export default function TrevniSmesiListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Тревни смеси",
    description:
      "Специализирани семена за трева: спорт, сянка, суша и възстановяване.",
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
          name: "Тревни смеси",
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
          <h1>Всички продукти – {category?.name || "Тревни смеси"}</h1>

          {/* Updated Marketing Text */}
          <p className="muted">
            Открийте професионалните решения за озеленяване на{" "}
            <strong>GlobalGrass</strong>. Нашето портфолио покрива всяко
            предизвикателство на терена – от
            <strong> сухоустойчиви и сенколюбиви</strong> смеси за паркове и
            частни дворове, до специализирани серии за{" "}
            <strong>спортни стадиони</strong> с висока натовареност. Предлагаме
            и иновативни продукти за бърза рекултивация (ремонт на трева) и
            семена с влагозадържащо покритие за гарантиран резултат.
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
                href={`/produkti/${slug}/${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
