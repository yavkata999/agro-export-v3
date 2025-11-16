import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Видео и обучения | Agro Export-Import",
  description:
    "Обучителни видеа и продуктови презентации за торфени субстрати, тревни смеси, саксии и други продукти.",
};

const VIDEOS = [
  {
    title: "Как да изберем подходяща тревна смес GlobalGrass",
    description:
      "Кратко ръководство за избор според приложението – двор, спортно игрище или обществена площ.",
  },
  {
    title: "Работа с торфени субстрати Durpeta",
    description:
      "Съвети за подготовка, поливане и торене при използване на професионални субстрати.",
  },
  {
    title: "Саксии и форми за разсад – практични решения за производители",
    description:
      "Преглед на различни модели саксии и тарелки за оптимизиране на производството.",
  },
];

export default function VideoPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Видео и обучения</h1>
          <p className="muted">
            Подготвяме съдържание, което да помага на нашите B2B партньори да
            използват продуктите по възможно най-ефективния начин.
          </p>
        </div>

        <div className="grid">
          {VIDEOS.map((video) => (
            <article
              key={video.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem",
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <h3>{video.title}</h3>
              <p className="muted">{video.description}</p>
              <p className="muted">
                (Тук по-късно може да се вгради реално YouTube/Vimeo видео.)
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
