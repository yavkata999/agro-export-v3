import Link from "next/link";
import styles from "@styles/components/home/HomeVideoTeaser.module.css";

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
    title: "Как да изберем правилната тревна смес за обекта",
    description:
      "Ръководство за озеленители: кога да използваме GlobalGrass Sport и кога Park Music според натоварването и слънцегреенето.",
    status: "soon",
    category: "Тревни смеси",
    duration: "10 мин",
  },
  {
    slug: "/video/torfeni-substrati-durpeta",
    title: "Оптимизация на разсадопроизводството с Durpeta",
    description:
      "Технически съвети за водозадържане и хранене на разсада при използване на професионалните субстрати Durpeta.",
    status: "soon",
    category: "Торфени субстрати",
    duration: "12 мин",
  },
  {
    slug: "/video/organizacia-na-proizvodstvoto",
    title: "Ефективност в оранжерията: Саксии и форми",
    description:
      "Как изборът на правилната работна саксия (Soparco) намалява фирата и подобрява логистиката на растенията.",
    status: "soon",
    category: "Саксии и контейнери",
    duration: "15 мин",
  },
];

export default function HomeVideos() {
  return (
    <section className={styles.section} aria-labelledby="videos-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="videos-heading" className={styles.title}>
            Академия за партньори
          </h2>
          <p className={styles.subtitle}>
            Вярваме, че информираният избор води до по-добри резултати. Скоро
            тук ще намерите видео обучения, насочени към спецификите на нашите
            продукти и най-добрите практики в бранша.
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
                  {video.status === "soon" ? "Очаквайте" : "На живо"}
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
                  <span className={styles.soonLabel}>Скоро онлайн</span>
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
            Към всички видео материали
          </Link>
        </div>
      </div>
    </section>
  );
}
