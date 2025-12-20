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

// 2. Dynamic SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProductById(params.id);

  if (!product) {
    return { title: "Продуктът не е намерен" };
  }

  return {
    title: `${product.name} | Агро Експорт Импорт`,
    description: product.shortDescription,
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
