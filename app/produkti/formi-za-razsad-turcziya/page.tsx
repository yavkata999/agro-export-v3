import type { Metadata } from "next";
import { getCategory, getProductsByCategory } from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

const slug = "formi-za-razsad-turcziya" as const;

export const metadata: Metadata = (() => {
  const category = getCategory(slug);
  return {
    title: category
      ? `Всички продукти – ${category.name} | Агро Експорт Импорт ООД`
      : "Форми за разсад (Турция) | Агро Експорт Импорт ООД",
    description:
      category?.seoDescription ||
      "Каталог с турски табли за разсад – квадратни, кръгли, дълбоки и разделящи се модели за професионални производители.",
  };
})();

export default function FormiZaRazsadTurciaListPage() {
  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  // --- SEO SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category?.name || "Форми за разсад (Турция)",
    description:
      "Специализирани турски табли за разсад – дълбоки, разделящи се и стандартни модели.",
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
          name: "Форми за разсад (Турция)",
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
          <h1>
            Всички продукти – {category?.name || "Форми за разсад (Турция)"}
          </h1>

          {/* Updated Marketing Text */}
          <p className="muted">
            Открийте специализираната ни селекция от турски форми за разсад,
            проектирани за гъвкавост и здравина. Тази серия предлага уникални
            решения като
            <strong> разделящи се тави </strong> – идеални за пазарна реализация
            без вадене на корена, и{" "}
            <strong>екстра дълбоки квадратни гнезда</strong> за култури с мощна
            коренова система (овошки, лози). Отличен баланс между качество и
            цена за професионалното земеделие.
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
