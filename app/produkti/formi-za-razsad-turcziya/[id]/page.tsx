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
  const products = getProductsByCategory("formi-za-razsad-turcziya");
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata(pageProps: PageProps): Promise<Metadata> {
  const params = await pageProps.params;
  const product = getProductById(params.id);

  if (!product) {
    return { title: "Продуктът не беше намерен | Agro Export-Import" };
  }

  return {
    title: `${product.name} | Agro Export-Import`,
    description: product.longDescription || product.shortDescription,
  };
}

export default async function ProductPage(pageProps: PageProps) {
  const params = await pageProps.params;
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
