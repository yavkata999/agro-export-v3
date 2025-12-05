import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "perlit-i-vermikulit" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Перлит и вермикулит | Агро Експорт Импорт ООД",
    description:
      category?.seoDescription ||
      "Висококачествен гръцки агроперлит и вермикулит за професионално земеделие. Подобрете аерацията и водния баланс на почвата.",
  };
})();

export default function PerlitVermikulitListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Перлит и вермикулит",
    description: "Минерални подобрители за почва и субстрати.",
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
          name: "Перлит и вермикулит",
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
          <h1>Всички продукти – {category?.name || "Перлит и вермикулит"}</h1>

          {/* Updated Marketing Text */}
          <p className="muted">
            Постигнете перфектния баланс между въздух и вода в кореновата зона.
            Предлагаме първокласен <strong>гръцки агроперлит</strong>, който
            предотвратява сбиването на почвата и осигурява жизненоважния
            кислород за корените, както и<strong> вермикулит</strong>, действащ
            като естествен резервоар за влага и хранителни вещества. Тези
            минерали са задължителен компонент за всяка професионална смес за
            разсад, вкореняване на резници и хидропонни системи.
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
