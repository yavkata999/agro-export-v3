import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getProductsByCategory } from "@lib/products";
import detailStyles from "@styles/ProductDetail.module.css";

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
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>{product.name}</h1>
          <p className="muted">
            Тревна смес за професионална и хоби употреба. За цени и условия за
            доставка, свържете се с нас.
          </p>
        </div>

        <div className={detailStyles.wrapper}>
          {product.image && (
            <div className={detailStyles.imageCol}>
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className={detailStyles.image}
              />
            </div>
          )}

          <div className={detailStyles.contentCol}>
            <p>
              <strong>Марка:</strong> {product.brand || "GlobalGrass"}
            </p>

            {product.packaging && (
              <p>
                <strong>Опаковки:</strong> {product.packaging}
              </p>
            )}

            <p style={{ marginTop: "1rem" }}>
              {product.longDescription || product.shortDescription}
            </p>

            {product.features && product.features.length > 0 && (
              <>
                <h2>Основни предимства</h2>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {product.applications && product.applications.length > 0 && (
              <>
                <h2>Приложения</h2>
                <ul>
                  {product.applications.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-2">Запитване за този продукт</h2>
            <p className="muted">
              Изпратете ни запитване, като посочите този продукт и
              ориентировъчни количества. Ще се свържем с вас с конкретна оферта.
            </p>

            <a
              className="button mt-2"
              href={`/kontakti?product=${encodeURIComponent(product.id)}`}
            >
              Изпратете запитване
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
