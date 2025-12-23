import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProductsByCategory } from "@lib/products";

// Components
import { ProductHero } from "@components/product/ProductHero";
import { ProductSpecs } from "@components/product/ProductSpecs";
import { ProductApplications } from "@components/product/ProductApplications";
import { ProductDescription } from "@components/product/ProductDescription";
import { ProductCTA } from "@components/product/ProductCTA";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Optimization: Only generate static params for peat moss products
export async function generateStaticParams() {
  // We strictly fetch products belonging to this folder's category
  const products = getProductsByCategory("torfeni-substrati");
  return products.map((product) => ({
    id: product.id,
  }));
}

// --- UPDATED METADATA ---
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProductById(params.id);

  if (!product) return { title: "Продуктът не е намерен" };

  const title = `${product.name} | Durpeta | Агро Експорт Импорт`;
  const description = product.shortDescription;
  const url = `https://agro-export.com/produkti/torfeni-substrati/${params.id}`;

  // Dynamic Keywords optimized for Peat Moss context
  const rawKeywords = [
    product.name,
    "Durpeta",
    "торф",
    "торфен субстрат",
    "почва за разсад",
    "професионални субстрати",
    "pH неутрален торф",
    ...(product.applications || []),
    "цена на едро",
    "дистрибуция",
    "Агро Експорт Импорт",
  ];

  // Filter out undefined/empty values to satisfy TypeScript
  const keywords = rawKeywords.filter(
    (k): k is string => !!k && k.trim() !== ""
  );

  return {
    title,
    description,
    keywords,
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

export default async function TorfeniProductPage(props: PageProps) {
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
