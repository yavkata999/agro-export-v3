import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@styles/globals.css";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

const THEME_BOOTSTRAP_SCRIPT = `(() => {
  const stored = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  const resolved = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
  document.documentElement.dataset.theme = resolved;
})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://agro-export.com"),
  title: {
    default: "Агро Експорт Импорт ООД | Професионални градински решения",
    template: "%s | Агро Експорт Импорт", // Now pages will look like "Контакти | Агро Експорт Импорт"
  },
  description:
    "Вашият стратегически B2B партньор за внос и дистрибуция на торф, субстрати, тревни смеси, саксии и торове. Официален представител на Durpeta, GlobalGrass и Florovit.",
  keywords: [
    "торф на едро",
    "субстрати Durpeta",
    "тревни смески GlobalGrass",
    "саксии Soparco",
    "вносител градински продукти",
    "агро борса",
  ],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://agro-export.com",
    title: "Агро Експорт Импорт ООД",
    description: "Професионални решения за градински центрове и производители.",
    // Using Cyrillic here looks much better when shared on Viber/Facebook in Bulgaria
    siteName: "Агро Експорт Импорт",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Агро Експорт Импорт Склад",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  // --- GLOBAL SCHEMA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Агро Експорт Импорт", // Primary name in Cyrillic
    alternateName: ["Agro Export Import", "Agro Export"], // English variations help Google connect the dots
    url: "https://agro-export.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://agro-export.com/produkti?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6b54063a-97ad-4f5c-8d76-92f1cf879a52"
          data-blockingmode="auto"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body>
        {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://codice.shinystat.com/cgi-bin/getcod.cgi?NODW=yes&USER=AgroExport"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
