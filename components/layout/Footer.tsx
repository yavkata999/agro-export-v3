import Link from "next/link";
import styles from "@styles/components/layout/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} Агро Експорт Импорт ООД. Всички права запазени.
          </p>

          <div className={styles.links}>
            <Link href="/kontakti" className={styles.link}>
              Контакти
            </Link>

            {/* Essential Legal Link */}
            <Link
              href="/politika-za-zashtita-na-lichnite-danni"
              className={styles.link}
            >
              Политика за защита на личните данни
            </Link>

            {/* Optional: if you add Terms later */}
            {/* <Link href="/obshi-usloviya" className={styles.link}>Общи условия</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
