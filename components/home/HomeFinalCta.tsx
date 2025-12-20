import Link from "next/link";
import styles from "@styles/components/home/HomeFinalCta.module.css";

export default function HomeFinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.content}>
            <h2 className={styles.title}>Планирайте следващия сезон с нас</h2>
            <p className={styles.text}>
              Не чакайте последния момент. Свържете се с нас за актуални ценови
              листи, условия за доставка и консултация за най-подходящите
              продукти за вашия бизнес.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/kontakti" className={styles.buttonPrimary}>
              Поискайте оферта
            </Link>

            <Link href="/produkti" className={styles.buttonGhost}>
              Вижте пълния каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
