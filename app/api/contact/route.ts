import { NextResponse } from "next/server";

// --- CONFIGURATION ---
const RECIPIENT_EMAIL = "agroexport69@gmail.com";

// Limits
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 3000;
const MIN_MESSAGE_LENGTH = 10;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_IP = 3; // 3 requests per minute

// --- REGEX PATTERNS ---
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const PHONE_PATTERN = /^[0-9+()\\s-]{6,20}$/;
const XSS_PATTERN = /<\s*script|<\s*iframe|<\s*object|on\w+\s*=|javascript:/i;
const SQL_INJECTION_PATTERN =
  /(\bunion\b.*\bselect\b|\bdrop\b\s+\btable\b|--;|\bupdate\b.*\bset\b)/i;
const THREAT_PATTERN =
  /(\bkill\b|\bmurder\b|\bshoot\b|\bthreat\b|\bterror\b|\b폭탄\b|\bбомба\b|\bзаплаха\b|\bубия\b|\bуби(я|ем|еш|е)\b|\bkill you\b|\bdeath\b)/i;

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

// --- RATE LIMITER STORAGE ---
// Changed to store an ARRAY of numbers (timestamps) per IP
const rateLimitMap = new Map<string, number[]>();

// Helper to sanitize basic inputs (trimming)
const sanitize = (value: string) => value.replace(/\s+/g, " ").trim();

const validatePayload = (payload: ContactPayload) => {
  const name = sanitize(payload.name ?? "");
  const company = sanitize(payload.company ?? "");
  const email = sanitize(payload.email ?? "");
  const phone = sanitize(payload.phone ?? "");
  const topic = sanitize(payload.topic ?? "");
  const message = sanitize(payload.message ?? "");

  // 1. Check Required Fields
  if (!name || !email || !message) {
    return {
      ok: false,
      error: "Моля, попълнете задължителните полета (Име, Имейл, Съобщение).",
    };
  }

  // 2. Check Lengths
  if (name.length > MAX_FIELD_LENGTH || company.length > MAX_FIELD_LENGTH) {
    return { ok: false, error: "Името или фирмата са твърде дълги." };
  }
  if (message.length < MIN_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `Съобщението трябва да е поне ${MIN_MESSAGE_LENGTH} символа.`,
    };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: "Съобщението е твърде дълго." };
  }

  // 3. Check Formats
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Невалиден имейл адрес." };
  }
  if (phone && !PHONE_PATTERN.test(phone)) {
    return { ok: false, error: "Невалиден телефонен номер." };
  }

  // 4. Security Checks
  const allContent = `${name} ${company} ${topic} ${message}`;

  if (THREAT_PATTERN.test(allContent)) {
    return {
      ok: false,
      error: "Съобщението съдържа неподходящ език или заплахи.",
    };
  }
  if (XSS_PATTERN.test(allContent)) {
    return { ok: false, error: "Открит е невалиден код в съобщението." };
  }
  if (SQL_INJECTION_PATTERN.test(allContent)) {
    return { ok: false, error: "Открит е опит за манипулация на данните." };
  }

  return {
    ok: true,
    data: { name, company, email, phone, topic, message },
  };
};

const buildEmailBody = (data: ContactPayload) =>
  `Ново запитване от сайта Agro Export:\n\n` +
  `Име: ${data.name}\n` +
  `Фирма: ${data.company || "-"}\n` +
  `Имейл: ${data.email}\n` +
  `Телефон: ${data.phone || "-"}\n` +
  `Тема: ${data.topic || "-"}\n\n` +
  `Съобщение:\n${data.message}\n`;

export async function POST(request: Request) {
  try {
    // --- Rate Limiting Logic (FIXED) ---
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Get existing timestamps for this IP, or empty array if none
    let requestTimestamps = rateLimitMap.get(ip) || [];

    // Filter out timestamps that are older than the window (older than 1 minute)
    requestTimestamps = requestTimestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
    );

    // Check if the user has reached the limit
    if (requestTimestamps.length >= MAX_REQUESTS_PER_IP) {
      return NextResponse.json(
        { error: "Прекалено много заявки. Моля, изчакайте малко." },
        { status: 429 }
      );
    }

    // Add the current timestamp to the list and update the map
    requestTimestamps.push(now);
    rateLimitMap.set(ip, requestTimestamps);

    // --- Parsing & Validation ---
    const payload = (await request.json()) as ContactPayload;
    const validation = validatePayload(payload);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const data = validation.data!;

    // --- Sending to EmailJS ---
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Failed:", errorText);

      return NextResponse.json(
        { error: "Възникна грешка при изпращането. Моля, опитайте по-късно." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Съобщението е изпратено успешно!",
    });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Невалидни данни или сървърна грешка." },
      { status: 400 }
    );
  }
}
