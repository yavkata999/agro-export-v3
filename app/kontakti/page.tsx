import type { Metadata } from "next";
import Link from "next/link";
import styles from "@styles/pages/Kontakti.module.css";
import ContactForm from "@components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Контакти | Agro Export-Import",
  description:
    "Свържете се с Agro Export-Import за поръчки, дистрибуция и професионални консултации за торфени субстрати, тревни смеси, саксии и градински продукти.",
};

type RegionalContact = {
  region: string;
  details: string;
  phone: string;
  extra?: string;
};

const regionalContacts: RegionalContact[] = [
  {
    region: "София, Перник, Кюстендил",
    details: "Продажби и обслужване на клиенти.",
    phone: "0889 427 439",
  },
  {
    region: "гр. Бяла, обл. Русе",
    details: "",
    phone: "0897 963 106",
    extra: "Бул. Колю Фичето № 25, Бяла",
  },
  {
    region: "гр. Добрич – Агроцентър",
    details: "Търговски представител за региона.",
    phone: "0895 504 930",
    extra: "0885 330 824",
  },
  {
    region: "гр. Айтос",
    details: "Регионален дистрибутор.",
    phone: "0897 963 118",
  },
  {
    region: "Пловдив",
    details: "Партньори и градински центрове в региона.",
    phone: "0876 659 525",
  },
  {
    region: "Пловдив – с. Милево",
    details: "Регионален склад.",
    phone: "0886 133 684",
  },
  {
    region: "Пловдив – с. Чешнегирово",
    details: "Търговски представител.",
    phone: "0889 447 444",
  },
  {
    region: "Сандански – с. Ново Делчево",
    details: "Регионален партньор.",
    phone: "0899 676 567",
  },
  {
    region: "Сандански – с. Струма",
    details: "Покрива Югозападна България.",
    phone: "0878 263 160",
  },
  {
    region: "Гоце Делчев",
    details: "Регионален дистрибутор.",
    phone: "0884 553 650",
  },
  {
    region: "Пазарджик – с. Черногорово",
    details: "Търговски представител.",
    phone: "0887 314 837",
  },
  {
    region: "Харманли",
    details: "Регионален дистрибутор.",
    phone: "0897 963 109",
  },
];

export default function KontaktiPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* HERO */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Контакти</h1>
          <p className={styles.heroText}>
            Основни контакти за поръчки, дистрибуция и логистика. Работим изцяло
            с B2B клиенти – градински центрове, дистрибутори, производители и
            търговци.
          </p>
        </header>

        {/* MAIN 2-COLUMN LAYOUT: PRIMARY CONTACT CARD + FORM */}
        <div className={styles.mainLayout}>
          {/* LEFT: основен офис и склад */}
          <section
            className={styles.primaryCard}
            aria-label="Основни контакти и координати"
          >
            <div className={styles.primaryCardInner}>
              <h2 className={styles.primaryCardTitle}>
                Основен офис и склад – Варна
              </h2>
              <p className={styles.primaryCardText}>
                Използвайте тези контакти за всички B2B запитвания, поръчки и
                координация на доставки.
              </p>

              {/* Офис – Варна */}
              <div className={styles.primaryBlock}>
                <h3 className={styles.primaryBlockTitle}>Офис – Варна</h3>
                <dl className={styles.primaryDetails}>
                  <div className={styles.primaryRow}>
                    <dt>Телефон</dt>
                    <dd>
                      <a href="tel:0887609587">0887 609 587</a>
                    </dd>
                  </div>
                  <div className={styles.primaryRow}>
                    <dt>Телефон 2</dt>
                    <dd>
                      <a href="tel:052609587">052 609 587</a>
                    </dd>
                  </div>
                  <div className={styles.primaryRow}>
                    <dt>Имейл</dt>
                    <dd>
                      <a href="mailto:agro_export@abv.bg">agro_export@abv.bg</a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Склад – Варна */}
              <div className={styles.primaryBlock}>
                <h3 className={styles.primaryBlockTitle}>Склад – Варна</h3>
                <dl className={styles.primaryDetails}>
                  <div className={styles.primaryRow}>
                    <dt>Телефон</dt>
                    <dd>
                      <a href="tel:0887609587">0887 609 587</a>
                    </dd>
                  </div>
                  <div className={styles.primaryRow}>
                    <dt>Телефон 2</dt>
                    <dd>
                      <a href="tel:0876755443">0876 755 443</a>
                    </dd>
                  </div>
                  <div className={styles.primaryRow}>
                    <dt>Адрес</dt>
                    <dd>
                      <Link
                        href="https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.+%D0%9E%D1%80%D0%B5%D1%85+%E2%84%96+2,+%D0%92%D0%B0%D1%80%D0%BD%D0%B0&ucbcb=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactMapLink}
                      >
                        ул. Орех № 2, Варна (виж на карта)
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Доставки */}
              <div className={styles.primaryBlock}>
                <h3 className={styles.primaryBlockTitle}>
                  Доставки за цялата страна
                </h3>
                <dl className={styles.primaryDetails}>
                  <div className={styles.primaryRow}>
                    <dt>Телефон</dt>
                    <dd>
                      <a href="tel:+359889308754">+359 88 930 8754</a>
                    </dd>
                  </div>
                </dl>
                <p className={styles.primaryHint}>
                  Организираме доставки до всички региони в България чрез
                  куриерски фирми и транспортни партньори.
                </p>
              </div>

              {/* Работно време + допълнителен блок */}
              <div className={styles.primaryBlock}>
                <h3 className={styles.primaryBlockTitle}>Работно време</h3>
                <p className={styles.primaryHint}>Пон – Пет: 09:00 – 17:30</p>
              </div>
            </div>
          </section>

          {/* RIGHT: форма за запитване */}
          <section className={styles.formSection} aria-label="Форма за контакт">
            <h2 className={styles.formTitle}>Изпратете запитване</h2>
            <p className={styles.formIntro}>
              Попълнете формата и ни опишете вашето запитване. Ще се свържем с
              вас до един работен ден.
            </p>

            <ContactForm />

            <p className={styles.formNote}>
              С изпращането на формата потвърждавате, че предоставените данни са
              коректни и могат да бъдат използвани за връзка с вас във връзка
              със запитването.
            </p>
          </section>
        </div>

        {/* REGIONAL CONTACTS */}
        <section
          className={styles.regionalSection}
          aria-labelledby="regional-heading"
        >
          <div className={styles.regionalHeader}>
            <h2 id="regional-heading" className={styles.regionalTitle}>
              Регионални контакти
            </h2>
            <p className={styles.regionalSubtitle}>
              Работим с регионални партньори и дистрибутори в цялата страна.
              Свържете се директно с представител във вашия район за локални
              доставки и обслужване.
            </p>
          </div>

          <div className={styles.regionalGrid}>
            {regionalContacts.map((rc) => {
              const extraTrimmed = rc.extra?.trim() ?? "";
              const isExtraPhone =
                extraTrimmed.startsWith("0") || extraTrimmed.startsWith("+359");

              return (
                <article key={rc.region} className={styles.regionalCard}>
                  <h3 className={styles.regionalName}>{rc.region}</h3>
                  {rc.details && (
                    <p className={styles.regionalDetails}>{rc.details}</p>
                  )}

                  <p className={styles.regionalPhone}>
                    Телефон:{" "}
                    <a href={`tel:${rc.phone.replace(/\s+/g, "")}`}>
                      {rc.phone}
                    </a>
                  </p>

                  {extraTrimmed && isExtraPhone && (
                    <p className={styles.regionalExtra}>
                      Телефон 2:{" "}
                      <a href={`tel:${extraTrimmed.replace(/\s+/g, "")}`}>
                        {extraTrimmed}
                      </a>
                    </p>
                  )}

                  {extraTrimmed && !isExtraPhone && (
                    <p className={styles.regionalExtra}>
                      Адрес:{" "}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          extraTrimmed
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {extraTrimmed}
                      </a>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
