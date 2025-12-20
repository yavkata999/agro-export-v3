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

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = getProductById(params.id);

  if (!product) return { title: "Продуктът не е намерен" };

  return {
    title: `${product.name} | Агро Експорт Импорт`,
    description: product.shortDescription,
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
