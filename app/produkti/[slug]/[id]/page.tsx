import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getAllProductPaths } from "@lib/products";

// Components
import { ProductHero } from "@components/product/ProductHero";
import { ProductSpecs } from "@components/product/ProductSpecs";
import { ProductApplications } from "@components/product/ProductApplications";
import { ProductDescription } from "@components/product/ProductDescription";
import { ProductCTA } from "@components/product/ProductCTA";

type PageProps = {
  params: Promise<{ slug: string; id: string }>;
};

// 1. Generate all product pages at build time
export async function generateStaticParams() {
  const paths = getAllProductPaths();
  return paths;
}

// 2. Dynamic SEO with Smart Keywords
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProductById(params.id);

  if (!product) {
    return { title: "Продуктът не е намерен" };
  }

  const title = `${product.name} | ${product.brand} | Агро Експорт Импорт`;
  const description = product.shortDescription;
  const url = `https://agro-export.com/produkti/${params.slug}/${params.id}`;

  // --- DYNAMIC KEYWORD GENERATION ---
  const rawKeywords = [
    // 1. Specific Product Details
    product.name,
    product.brand, // This might be undefined, causing the error
    `${product.brand} ${product.id}`,

    // 2. Category Context
    params.slug.replace(/-/g, " "),

    // 3. Product Applications
    ...(product.applications || []),

    // 4. Standard Business Terms
    "цена на едро",
    "дистрибуция",
    "склад Варна",
    "Агро Експорт Импорт",
  ];

  // FIX: Filter out any undefined/null/empty strings to satisfy TypeScript
  const keywords = rawKeywords.filter(
    (k): k is string => !!k && k.trim() !== ""
  );

  return {
    title,
    description,
    keywords: keywords,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "bg_BG",
      images:
        product.images && product.images.length > 0
          ? [
              {
                url: product.images[0],
                width: 800,
                height: 600,
                alt: product.name,
              },
            ]
          : [],
    },
  };
}

// 3. The Page Template
export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  const product = getProductById(params.id);

  if (!product) return notFound();

  return (
    <>
      <ProductHero
        productId={product.id}
        name={product.name}
        brand={product.brand}
        shortDescription={product.shortDescription}
        packaging={product.packaging}
        images={product.images}
      />

      <ProductSpecs
        brand={product.brand}
        packaging={product.packaging}
        features={product.features}
      />

      <ProductApplications applications={product.applications} />

      <ProductDescription
        shortDescription={product.shortDescription}
        longDescription={product.longDescription}
      />

      <ProductCTA productId={product.id} />
    </>
  );
}
