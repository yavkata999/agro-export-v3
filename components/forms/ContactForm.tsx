"use client";

import { FormEvent, useState } from "react";
import styles from "@styles/pages/Kontakti.module.css";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  topic: "Общи въпроси",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Моля, попълнете задължителните полета, маркирани със *.");
      return;
    }

    setSubmitting(true);

    try {
      // TODO: wire this to your real API / email service.
      // For now we just simulate a short delay.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSuccess("Вашето запитване беше изпратено успешно.");
      setValues(initialValues);
    } catch {
      setError("Възникна грешка при изпращане. Моля, опитайте отново.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="name">
            Име *<span aria-hidden="true"></span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Вашето име"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="company">Фирма</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Име на фирма"
            value={values.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="email">
            Имейл *<span aria-hidden="true"></span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@domain.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="phone">Телефон</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+359 ..."
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="topic">Тип запитване</label>
        <select
          id="topic"
          name="topic"
          value={values.topic}
          onChange={handleChange}
        >
          <option value="Общи въпроси">Общи въпроси</option>
          <option value="Асортимент и наличности">
            Асортимент и наличности
          </option>
          <option value="Цени и търговски условия">
            Цени и търговски условия
          </option>
          <option value="Доставки и логистика">Доставки и логистика</option>
          <option value="Друго">Друго</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label htmlFor="message">
          Съобщение *<span aria-hidden="true"></span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Опишете накратко какво ви интересува – продукти, количества, период на доставка..."
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p className={styles.formError}>{error}</p>}
      {success && <p className={styles.formSuccess}>{success}</p>}

      <button
        type="submit"
        className={`button ${styles.contactSubmit}`}
        disabled={submitting}
      >
        {submitting ? "Изпращане..." : "Изпратете запитване"}
      </button>
    </form>
  );
}
