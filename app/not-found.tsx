import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Страницата не беше намерена</h1>
        <p className="muted">
          Съжаляваме, но страницата, която търсите, не съществува или е
          преместена.
        </p>

        <div className="mt-2">
          <Link href="/" className="button">
            Към началната страница
          </Link>
        </div>
      </div>
    </section>
  );
}
