import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@styles/globals.css";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const THEME_BOOTSTRAP_SCRIPT = `(() => {
  const stored = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  const resolved = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
  document.documentElement.dataset.theme = resolved;
})();`;

export const metadata: Metadata = {
  title: "Agro Export-Import – Вносител на градински продукти",
  description:
    "B2B вносител на торф, субстрати, тревни смеси, саксии, перлит и др.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
