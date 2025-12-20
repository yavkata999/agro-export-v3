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
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={name}
            className={styles.image}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link href={href} className={styles.button}>
            Виж детайли
          </Link>
        </div>
      </div>
    </article>
  );
}
