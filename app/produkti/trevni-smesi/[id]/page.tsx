import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductApplications } from "@components/product/ProductApplications";
import { ProductCTA } from "@components/product/ProductCTA";
import { ProductDescription } from "@components/product/ProductDescription";
import { ProductHero } from "@components/product/ProductHero";
import { ProductSpecs } from "@components/product/ProductSpecs";
import { getProductById, getProductsByCategory } from "@lib/products";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  const trevniProducts = getProductsByCategory("trevni-smesi");
  return trevniProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Продуктът не беше намерен | Agro Export-Import",
    };
  }

  return {
    title: `${product.name} | Agro Export-Import`,
    description: product.longDescription || product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return notFound();

  return (
    <>
      <ProductHero
        productId={product.id}
        name={product.name}
        brand={product.brand}
        shortDescription={product.shortDescription}
        packaging={product.packaging}
        image={product.image}
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
