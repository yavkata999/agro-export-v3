import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategory,
  getProductsByCategory,
  getAllCategorySlugs,
} from "@lib/products";
import ProductCard from "@components/shared/ProductCard";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate pages for all categories EXCEPT 'torfeni-substrati' (which has its own folder)
export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs
    .filter((slug) => slug !== "torfeni-substrati")
    .map((slug) => ({ slug }));
}

// --- UPDATED METADATA WITH KEYWORDS ---
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const category = getCategory(params.slug);

  if (!category) return { title: "Категорията не е намерена" };

  const title =
    category.seoTitle ||
    `${category.name} | Професионални решения | Агро Експорт Импорт`;

  const description =
    category.seoDescription ||
    category.shortDescription ||
    `Разгледайте нашата селекция от ${category.name.toLowerCase()}. Високо качество, директен внос и конкурентни цени за търговци.`;

  return {
    title,
    description,
    // ADDED: Inject specific keywords from the category data
    keywords: category.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "bg_BG",
      url: `https://agro-export.com/produkti/${params.slug}`,
    },
  };
}

export default async function CategoryPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const category = getCategory(slug);
  const products = getProductsByCategory(slug);

  if (!category) return notFound();

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.seoDescription,
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
          name: category.name,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="page-header">
          <h1>{category.name}</h1>
          <p className="muted">
            {category.longDescription || category.shortDescription}
          </p>
        </div>

        {products.length === 0 ? (
          <p
            className="muted"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
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
