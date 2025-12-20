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
  { href: "/video", label: "Видео" }, // Uncomment when page is ready
  { href: "/za-nas", label: "За нас" },
  { href: "/kontakti", label: "Контакти" },
];

/* --- ICONS --- */
const SunIcon = () => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
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
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light"); // Default to light to match server
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Fix Hydration Mismatch: Track if we are on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read the actual theme from the DOM (set by your layout script)
    const currentTheme = document.documentElement.dataset.theme as Theme;
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  // Sync theme changes to DOM and LocalStorage
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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
          {/* LOGO */}
          <Link
            href="/"
            className={styles.logo}
            onClick={() => setMenuOpen(false)}
          >
            Агро Експорт Импорт
          </Link>

          {/* DESKTOP NAV */}
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

          {/* ACTIONS */}
          <div className={styles.actions}>
            {/* Theme Toggle - Only render icon after mount to prevent hydration error */}
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Превключване на тема"
            >
              {mounted ? (
                theme === "light" ? (
                  <SunIcon />
                ) : (
                  <MoonIcon />
                )
              ) : (
                <SunIcon /> // Default placeholder matching server render
              )}
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
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`${styles.navMobileWrapper} ${
          menuOpen ? styles.navMobileWrapperOpen : ""
        }`}
      >
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
    </header>
  );
}
