"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@styles/components/layout/Header.module.css";

type Theme = "light" | "dark";

const NAV_LINKS = [
  { href: "/", label: "Начало" },
  { href: "/produkti", label: "Продукти" },
  { href: "/marki", label: "Марки" },
  { href: "/video", label: "Видео" },
  { href: "/za-nas", label: "За нас" },
  { href: "/kontakti", label: "Контакти" },
];

const resolveInitialTheme = (): Theme => {
  if (typeof document !== "undefined") {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") {
      return current;
    }
  }

  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    const prefersDark = window
      .matchMedia?.("(prefers-color-scheme: dark)")
      ?.matches;
    return prefersDark ? "dark" : "light";
  }

  return "light";
};

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.theme !== theme) {
      root.dataset.theme = theme;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          {/* Logo / brand */}
          <Link href="/" className={styles.logo}>
            Agro Export-Import
          </Link>

          {/* Desktop nav */}
          <nav className={styles.navDesktop}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive(link.href) ? styles.navLinkActive : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions: theme + hamburger */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Превключване на тема"
            >
              <span className={styles.themeIcon}>
                {theme === "light" ? "🌞" : "🌙"}
              </span>
              <span className={styles.themeLabel}>
                {theme === "light" ? "Светла" : "Тъмна"}
              </span>
            </button>

            <button
              type="button"
              className={`${styles.hamburger} ${
                menuOpen ? styles.hamburgerOpen : ""
              }`}
              onClick={toggleMenu}
              aria-label="Меню"
            >
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.navMobileWrapper} ${
          menuOpen ? styles.navMobileWrapperOpen : ""
        }`}
      >
        <div className="container">
          <nav className={styles.navMobile}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navMobileLink} ${
                  isActive(link.href) ? styles.navMobileLinkActive : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
