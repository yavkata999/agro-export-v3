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
  topic: "",
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

    // 1. UPDATED VALIDATION: Added phone check
    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.phone.trim() ||
      !values.message.trim()
    ) {
      setError("Моля, попълнете всички задължителни полета.");
      return;
    }

    if (!values.topic) {
      setError("Моля, изберете тема на запитването.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Възникна грешка.");
      }

      setSuccess("Вашето запитване беше изпратено успешно.");
      setValues(initialValues);
    } catch (err: any) {
      setError(
        err.message || "Възникна грешка при изпращане. Моля, опитайте отново."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.formGrid} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="name">Име *</label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
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
            className={styles.input}
            placeholder="Име на фирма"
            value={values.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="email">Имейл *</label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="name@company.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formField}>
          {/* UPDATED LABEL AND INPUT */}
          <label htmlFor="phone">Телефон *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="088..."
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="topic">Тема</label>
        <select
          id="topic"
          name="topic"
          className={styles.select}
          value={values.topic}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Изберете тема на запитването...
          </option>
          <option value="Поръчка на едро">Поръчка на едро</option>
          <option value="Стани дистрибутор">Стани дистрибутор</option>
          <option value="Логистика и доставки">Логистика и доставки</option>
          <option value="Друго">Друго</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label htmlFor="message">Съобщение *</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Как можем да ви помогнем?"
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p className={styles.formError}>{error}</p>}
      {success && <p className={styles.formSuccess}>{success}</p>}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={submitting}
      >
        {submitting ? "Изпращане..." : "Изпрати запитване"}
      </button>
    </form>
  );
}
