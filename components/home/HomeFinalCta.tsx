import Link from "next/link";
import styles from "@styles/components/home/HomeFinalCta.module.css";

export default function HomeFinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>
              Готови ли сте да планирате следващия сезон?
            </h2>
            <p className={styles.text}>
              Изпратете ни запитване за асортимент, наличности и условия за
              доставка. Ще се свържем с вас с конкретна оферта и предложения.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/kontakti" className="button">
              Изпратете запитване
            </Link>

            <Link href="/produkti" className={styles.ghostWhite}>
              Вижте всички продукти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
