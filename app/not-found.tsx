import Link from "next/link";
import styles from "@styles/pages/NotFound.module.css";

// SVG Икона за "къща/начало"
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Голямото число 404 */}
        <div className={styles.errorCode}>404</div>

        <h1 className={styles.title}>Страницата не е намерена</h1>

        <p className={styles.description}>
          Изглежда сте попаднали на място, което не съществува. Страницата може
          да е била преместена или изтрита.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.buttonPrimary}>
            <HomeIcon />
            Към началото
          </Link>

          <Link href="/kontakti" className={styles.buttonSecondary}>
            Свържете се с нас
          </Link>
        </div>
      </div>
    </div>
  );
}
