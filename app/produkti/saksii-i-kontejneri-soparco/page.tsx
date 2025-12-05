import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "saksii-i-kontejneri-soparco" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Саксии и контейнери Soparco | Агро Експорт Импорт ООД",
    description:
      "Каталог с професионални саксии DUO, висящи контейнери и фиксатори Soparco (Франция).",
  };
})();

export default function SoparcoProductsPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Саксии и контейнери Soparco",
    description:
      "Висококачествени френски саксии с DUO технология за професионално производство.",
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
          name: "Soparco",
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
          <h1>Всички продукти – {category?.name || "Soparco"}</h1>

          {/* Updated Marketing Text - Focused on Black Pots benefits */}
          <p className="muted">
            Инвестирайте във френско качество със <strong>Soparco</strong>.
            Серията се отличава с патентованата <strong>DUO технология</strong>{" "}
            , която осигурява пълна непрозрачност на стените за защита на
            корените и висока механична здравина. Предлагаме ги в{" "}
            <strong>класически черен цвят</strong> – стандартът за професионални
            разсадници, който гарантира отлична UV устойчивост и спомага за
            по-бързото затопляне на субстрата през пролетта.
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
