import styles from "./ProductApplications.module.css";

interface ProductApplicationsProps {
  applications?: string[];
}

export function ProductApplications({ applications }: ProductApplicationsProps) {
  if (!applications || applications.length === 0) {
    return null;
  }

  return (
    <section className={`section ${styles.applicationsSection}`}>
      <div className="container">
        <div className={styles.contentCard}>
          <div>
            <p className={styles.overline}>Приложения</p>
            <h2>Къде работи продуктът най-добре</h2>
            <p className="muted">
              Подбрани сценарии за употреба, базирани на резултати при наши
              клиенти и партньори.
            </p>
          </div>

          <ul className={styles.applicationList}>
            {applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
