import Link from "next/link";
import styles from "@styles/components/home/HomeVideoTeaser.module.css";

/* --- ICONS --- */
const Icons = {
  Play: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: "2px" }}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Hourglass: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  ),
};

type VideoItem = {
  slug: string;
  title: string;
  description: string;
  status: "soon" | "live";
  category: string;
  duration?: string;
};

const VIDEOS: VideoItem[] = [
  {
    slug: "/video/izbor-na-trevna-smes",
    title: "Как да изберем подходяща тревна смес GlobalGrass",
    description:
      "Ръководство за избор според натоварването – двор, спортен терен или парк.",
    status: "soon",
    category: "Тревни смеси",
    duration: "10 мин",
  },
  {
    slug: "/video/torfeni-substrati-durpeta",
    title: "Тънкости при работа с професионални субстрати",
    description:
      "Практически съвети за поливане, торене и пикиране за максимален добив.",
    status: "soon",
    category: "Торфени субстрати",
    duration: "12 мин",
  },
  {
    slug: "/video/organizacia-na-proizvodstvoto",
    title: "Оптимизация на производството със саксии",
    description: "Преглед на логистични решения за разсадници и оранжерии.",
    status: "soon",
    category: "Саксии",
    duration: "15 мин",
  },
];

export default function HomeVideoTeaser() {
  return (
    <section className={styles.section} aria-labelledby="videos-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="videos-heading" className={styles.title}>
            Академия за партньори
          </h2>
          <p className={styles.subtitle}>
            Вярваме, че информираният избор води до по-добри резултати.
            Подготвяме серия от видео обучения за нашите продукти.
          </p>
        </header>

        <div className={styles.grid}>
          {VIDEOS.map((video) => (
            <article key={video.slug} className={styles.card}>
              {/* Visual Thumbnail Placeholder */}
              <div className={styles.thumbnail}>
                <div className={styles.playButton}>
                  <Icons.Play />
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{video.category}</span>
                  <span className={styles.status}>
                    <Icons.Hourglass /> Очаквайте
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{video.title}</h3>
                <p className={styles.cardDesc}>{video.description}</p>

                <div className={styles.footer}>
                  <Icons.Clock />
                  <span>{video.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/video" className={styles.ctaButton}>
            Вижте всички теми
          </Link>
        </div>
      </div>
    </section>
  );
}
