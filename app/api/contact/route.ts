import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "yavor.kr@abv.bg";
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;
const EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/i;
const PHONE_PATTERN = /^[0-9+()\\s-]{6,20}$/;
const THREAT_PATTERN =
  /(\\bkill\\b|\\bmurder\\b|\\bshoot\\b|\\bthreat\\b|\\bterror\\b|\\b폭탄\\b|\\bбомба\\b|\\bзаплаха\\b|\\bубия\\b|\\bуби(я|ем|еш|е)\\b|\\bkill you\\b|\\bdeath\\b)/i;
const HTML_OR_SCRIPT_PATTERN = /<\\s*script|<\\s*iframe|<\\s*svg|<\\s*img|on\\w+\\s*=|javascript:/i;
const SQL_INJECTION_PATTERN =
  /(\\bselect\\b|\\binsert\\b|\\bupdate\\b|\\bdelete\\b|\\bdrop\\b|\\bunion\\b|--|;)/i;

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

const sanitize = (value: string) =>
  value.replace(/[<>]/g, "").replace(/\\s+/g, " ").trim();

const validatePayload = (payload: ContactPayload) => {
  const name = sanitize(payload.name ?? "");
  const company = sanitize(payload.company ?? "");
  const email = sanitize(payload.email ?? "");
  const phone = sanitize(payload.phone ?? "");
  const topic = sanitize(payload.topic ?? "");
  const message = sanitize(payload.message ?? "");

  if (!name || !email || !message) {
    return { ok: false, error: "Моля, попълнете задължителните полета." };
  }

  if (name.length > MAX_FIELD_LENGTH || company.length > MAX_FIELD_LENGTH) {
    return { ok: false, error: "Прекалено дълго име или фирма." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Моля, въведете валиден имейл адрес." };
  }

  if (phone && !PHONE_PATTERN.test(phone)) {
    return { ok: false, error: "Моля, въведете валиден телефонен номер." };
  }

  if (topic.length > MAX_FIELD_LENGTH) {
    return { ok: false, error: "Прекалено дълга тема на запитването." };
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return { ok: false, error: "Съобщението трябва да е поне 10 символа." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: "Съобщението е прекалено дълго." };
  }

  if (
    THREAT_PATTERN.test(message) ||
    THREAT_PATTERN.test(name) ||
    THREAT_PATTERN.test(company)
  ) {
    return {
      ok: false,
      error: "Съобщението съдържа неприемливо съдържание.",
    };
  }

  if (
    HTML_OR_SCRIPT_PATTERN.test(message) ||
    HTML_OR_SCRIPT_PATTERN.test(name) ||
    HTML_OR_SCRIPT_PATTERN.test(company)
  ) {
    return {
      ok: false,
      error: "Съобщението съдържа неподдържани символи или код.",
    };
  }

  if (
    SQL_INJECTION_PATTERN.test(message) ||
    SQL_INJECTION_PATTERN.test(name) ||
    SQL_INJECTION_PATTERN.test(company)
  ) {
    return {
      ok: false,
      error: "Съобщението съдържа неподдържани символи.",
    };
  }

  return {
    ok: true,
    data: { name, company, email, phone, topic, message },
  };
};

const buildEmailBody = (data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}) =>
  `Ново запитване от сайта Agro Export:\n\n` +
  `Име: ${data.name}\n` +
  `Фирма: ${data.company || "-"}\n` +
  `Имейл: ${data.email}\n` +
  `Телефон: ${data.phone || "-"}\n` +
  `Тема: ${data.topic || "-"}\n\n` +
  `Съобщение:\n${data.message}\n`;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validation = validatePayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const data = validation.data;

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: RECIPIENT_EMAIL,
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          phone: data.phone,
          topic: data.topic,
          message: data.message,
          reply_to: data.email,
          text_body: buildEmailBody(data),
        },
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Неуспешно изпращане. Моля, опитайте отново." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Невалидни данни за изпращане." },
      { status: 400 }
    );
  }
}
