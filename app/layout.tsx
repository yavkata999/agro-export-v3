import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@styles/globals.css";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import CookieConsent from "@components/shared/CookieConsent";

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
    template: "%s | Агро Експорт Импорт",
  },
  description:
    "Вашият стратегически бизнес партньор за внос и дистрибуция на торф, субстрати, тревни смеси, саксии и торове. Официален представител на Durpeta, GlobalGrass и Florovit.",
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
    siteName: "Агро Експорт Импорт",
    images: [
      {
        url: "/agro-export-logo.png",
        width: 1100,
        height: 270,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Агро Експорт Импорт",
    alternateName: ["Agro Export Import", "Agro Export"],
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
