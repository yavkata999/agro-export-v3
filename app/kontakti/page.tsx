import type { Metadata } from "next";
import Link from "next/link";
import styles from "@styles/pages/Kontakti.module.css";

export const metadata: Metadata = {
  title: "Контакти | Агро Експорт Импорт ООД",
  description:
    "Свържете се с нас за поръчки, дистрибуция и професионални консултации.",
};

/* --- INLINE ICONS --- */
const Icons = {
  MapPin: () => (
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: () => (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: () => (
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Clock: () => (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Truck: () => (
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
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
  Building: () => (
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  ),
};

type RegionalContact = {
  region: string;
  details: string;
  phone: string;
  extra?: string;
};

const regionalContacts: RegionalContact[] = [
  {
    region: "София, Перник",
    details: "Продажби и обслужване",
    phone: "0889 427 439",
  },
  {
    region: "гр. Бяла (Русе)",
    details: "Бул. Колю Фичето № 25",
    phone: "0897 963 106",
  },
  { region: "Добрич", details: "Агроцентър", phone: "0895 504 930" },
  { region: "Айтос", details: "Регионален дистрибутор", phone: "0897 963 118" },
  { region: "Пловдив", details: "Градински центрове", phone: "0876 659 525" },
  {
    region: "Пловдив (с. Милево)",
    details: "Регионален склад",
    phone: "0886 133 684",
  },
  { region: "Сандански", details: "с. Ново Делчево", phone: "0899 676 567" },
  { region: "Гоце Делчев", details: "Дистрибутор", phone: "0884 553 650" },
  { region: "Харманли", details: "Дистрибутор", phone: "0897 963 109" },
];

export default function KontaktiPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Контакти</h1>
          <p className={styles.heroText}>
            Основни контакти за поръчки, дистрибуция и логистика. Работим изцяло
            с бизнес клиенти – градински центрове, дистрибутори, производители.
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.mainSection}>
          <div className={styles.mainGrid}>
            {/* LEFT: INFO CARD */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Основен офис – Варна</h2>
              <p className={styles.infoSubtitle}>
                Използвайте тези контакти за всички търговски запитвания.
              </p>

              {/* Group 1: Office */}
              <div className={styles.contactGroup}>
                <div className={styles.groupLabel}>
                  <Icons.Building /> Администрация
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Icons.Phone />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Телефон</span>
                    <Link href="tel:0887609587" className={styles.contactValue}>
                      0887 609 587
                    </Link>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Icons.Mail />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Имейл</span>
                    <Link
                      href="mailto:agro_export@abv.bg"
                      className={styles.contactValue}
                    >
                      agro_export@abv.bg
                    </Link>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Icons.Clock />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Работно време</span>
                    <span className={styles.contactValue}>
                      Пон – Пет: 09:00 – 17:30
                    </span>
                  </div>
                </div>
              </div>

              {/* Group 2: Warehouse */}
              <div className={styles.contactGroup}>
                <div className={styles.groupLabel}>
                  <Icons.Truck /> Логистика и Склад
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Icons.Phone />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Телефон склад</span>
                    <Link href="tel:0876755443" className={styles.contactValue}>
                      0876 755 443
                    </Link>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Icons.MapPin />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Адрес</span>
                    <Link
                      href="https://maps.google.com/?q=Varna+ul+Oreh+2"
                      target="_blank"
                      className={styles.contactValue}
                    >
                      ул. Орех № 2, Варна
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM CARD */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2>Изпратете запитване</h2>
                <p>Ще се свържем с вас в рамките на един работен ден.</p>
              </div>

              <form className={styles.formGrid}>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="name">Име</label>
                    <input
                      type="text"
                      id="name"
                      className={styles.input}
                      placeholder="Вашето име"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="company">Фирма</label>
                    <input
                      type="text"
                      id="company"
                      className={styles.input}
                      placeholder="Име на фирма"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="email">Имейл</label>
                    <input
                      type="email"
                      id="email"
                      className={styles.input}
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      className={styles.input}
                      placeholder="088..."
                    />
                  </div>
                </div>

                {/* ADDED MISSING FIELD: TOPIC */}
                <div className={styles.formField}>
                  <label htmlFor="topic">Тема</label>
                  <select id="topic" className={styles.select} defaultValue="">
                    <option value="" disabled>
                      Изберете тема на запитването...
                    </option>
                    <option value="order">Поръчка на едро</option>
                    <option value="distribution">Стани дистрибутор</option>
                    <option value="logistics">Логистика и доставки</option>
                    <option value="other">Друго</option>
                  </select>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message">Съобщение</label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="Как можем да ви помогнем?"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Изпрати запитване
                </button>
              </form>

              <div className={styles.formFooter}>
                *Вашите данни са защитени и ще бъдат използвани само за отговор.
              </div>
            </div>
          </div>
        </div>

        {/* REGIONAL CONTACTS */}
        <section className={styles.regionalSection}>
          <div className={styles.regionalHeader}>
            <h2>Регионални партньори</h2>
            <p>
              Свържете се директно с представител във вашия район за локални
              доставки.
            </p>
          </div>

          <div className={styles.regionalGrid}>
            {regionalContacts.map((rc) => (
              <div key={rc.region} className={styles.regionalCard}>
                <h3 className={styles.regionName}>{rc.region}</h3>
                <p className={styles.regionDetails}>{rc.details}</p>
                <div className={styles.regionContact}>
                  <div
                    className={styles.iconWrapper}
                    style={{ width: 18, height: 18 }}
                  >
                    <Icons.Phone />
                  </div>
                  <Link href={`tel:${rc.phone.replace(/\s+/g, "")}`}>
                    {rc.phone}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
