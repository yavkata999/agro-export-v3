import Link from "next/link";
import styles from "@styles/HomeVideoTeaser.module.css";

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
    title: "Как да изберем правилна тревна смес",
    description:
      "Практични насоки за избор на GlobalGrass според приложението – двор, спортно игрище или общинска площ.",
    status: "soon",
    category: "Тревни смеси",
    duration: "10 мин",
  },
  {
    slug: "/video/torfeni-substrati-durpeta",
    title: "Работа с торфени субстрати Durpeta",
    description:
      "Съвети за подготовка, поливане и подхранване на субстрата при разсадопроизводство.",
    status: "soon",
    category: "Торфени субстрати",
    duration: "12 мин",
  },
  {
    slug: "/video/organizacia-na-proizvodstvoto",
    title: "Организация на производството със саксии и форми за разсад",
    description:
      "Как различните форми, тарелки и контейнери оптимизират труда и пространството в оранжерията.",
    status: "soon",
    category: "Саксии и форми за разсад",
    duration: "15 мин",
  },
];

export default function HomeVideos() {
  return (
    <section className={styles.section} aria-labelledby="videos-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="videos-heading" className={styles.title}>
            Видео и обучения
          </h2>
          <p className={styles.subtitle}>
            Подготвяме библиотека от кратки видеа и обучения, насочени към
            професионални производители и търговци. Целта е да използвате
            продуктите възможно най-ефективно – с ясни примери от практиката.
          </p>
        </header>

        <div className={styles.grid}>
          {VIDEOS.map((video) => (
            <article key={video.slug} className={styles.card}>
              <div className={styles.metaRow}>
                <span className={styles.category}>{video.category}</span>
                <span
                  className={
                    video.status === "soon"
                      ? `${styles.status} ${styles.statusSoon}`
                      : `${styles.status} ${styles.statusLive}`
                  }
                >
                  {video.status === "soon" ? "Скоро" : "На живо"}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{video.title}</h3>

              <p className={styles.cardText}>{video.description}</p>

              <div className={styles.footerRow}>
                {video.duration && (
                  <span className={styles.duration}>{video.duration}</span>
                )}

                <span className={styles.spacer} />

                {video.status === "soon" ? (
                  <span className={styles.soonLabel}>Очаквайте онлайн</span>
                ) : (
                  <Link href={video.slug} className={styles.watchLink}>
                    <span className={styles.playIcon} aria-hidden="true">
                      ▶
                    </span>
                    Гледайте видеото
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/video" className={styles.ctaButton}>
            Вижте секцията „Видео и обучения“
          </Link>
        </div>
      </div>
    </section>
  );
}
