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
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={name} className={styles.image} />
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
