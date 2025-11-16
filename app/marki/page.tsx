import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Марки | Agro Export-Import",
  description:
    "Партньорски марки – Durpeta, Soparco, GlobalGrass, Florovit и други производители, с които работим.",
};

const BRANDS = [
  {
    name: "Durpeta",
    description: "Професионални и хоби торфени субстрати от Литва.",
  },
  {
    name: "Soparco",
    description: "Френски саксии и контейнери за професионално производство.",
  },
  {
    name: "GlobalGrass",
    description: "Тревни смеси за дворове, паркове и спортни терени.",
  },
  {
    name: "Florovit / Florovit Pro Natura / Florovit Agro",
    description: "Торове и торови решения за различни култури и приложения.",
  },
  {
    name: "Гръцки перлит",
    description:
      "Перлит за подобряване на структурата и аерацията на субстратите.",
  },
  {
    name: "Турски производители на саксии и форми за разсад",
    description: "Решения за работни саксии и контейнери на конкурентни цени.",
  },
];

export default function BrandsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1>Марки</h1>
          <p className="muted">
            Работим с доказани европейски и регионални производители на
            субстрати, саксии, тревни смеси, торове и допълващи продукти.
          </p>
        </div>

        <div className="grid">
          {BRANDS.map((brand) => (
            <article
              key={brand.name}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem",
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <h3>{brand.name}</h3>
              <p className="muted">{brand.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
