import Image from "next/image";
import Link from "next/link";
import styles from "@styles/components/shared/ProductCard.module.css";

type Props = {
  name: string;
  description: string;
  image?: string;
  href: string;
};

export default function ProductCard({ name, description, image, href }: Props) {
  return (
    <article className={styles.card}>
      {image && (
        <Image
          src={image}
          alt={name}
          className={styles.image}
          width={640}
          height={480}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      )}

      <h3 className={styles.title}>{name}</h3>
      <p className={`muted ${styles.description}`}>{description}</p>

      <div className={styles.actions}>
        <Link href={href} className="button">
          Виж детайли
        </Link>
      </div>
    </article>
  );
}
