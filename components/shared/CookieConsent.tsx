"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import styles from "@styles/components/shared/CookieConsent.module.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGranted, setConsentGranted] = useState(false);

  // New state: Should the button pulse?
  const [highlightAccept, setHighlightAccept] = useState(false);

  // Helper: Set a cookie natively
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  // Helper: Get a cookie natively
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const consent = getCookie("cookie_consent");

    if (consent === "granted") {
      setConsentGranted(true);
      setShowBanner(false);
    } else if (consent === "denied") {
      setConsentGranted(false);
      setShowBanner(false);
    } else {
      // No choice made yet -> Show Banner
      setConsentGranted(false);
      const timer = setTimeout(() => setShowBanner(true), 1500);

      // --- NUDGE LOGIC ---
      // 1. Time Trigger: Pulse after 10 seconds
      const pulseTimer = setTimeout(() => {
        setHighlightAccept(true);
      }, 10000);

      // 2. Scroll Trigger: Pulse if user scrolls > 300px
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setHighlightAccept(true);
          // Remove listener once triggered to save performance
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        clearTimeout(timer);
        clearTimeout(pulseTimer);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookie_consent", "granted", 365);
    setConsentGranted(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    setCookie("cookie_consent", "denied", 365);
    setConsentGranted(false);
    setShowBanner(false);
  };

  return (
    <>
      {/* 1. Conditionally Render Analytics Scripts */}
      {consentGranted && (
        <>
          {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
          <Script
            id="shinystat"
            src="https://codice.shinystat.com/cgi-bin/getcod.cgi?NODW=yes&USER=AgroExport"
            strategy="lazyOnload"
          />
        </>
      )}

      {/* 2. Render the Banner UI */}
      {showBanner && (
        <div className={styles.banner}>
          <div className={`container ${styles.content}`}>
            <p className={styles.text}>
              Ние използваме бисквитки, за да подобрим вашето преживяване и да
              анализираме трафика.{" "}
              <Link
                href="/politika-za-zashtita-na-lichnite-danni"
                className={styles.link}
              >
                Политика за поверителност
              </Link>
            </p>
            <div className={styles.buttons}>
              <button onClick={declineCookies} className={styles.buttonDecline}>
                Отказвам
              </button>
              <button
                onClick={acceptCookies}
                className={`${styles.buttonAccept} ${
                  highlightAccept ? styles.pulse : ""
                }`}
              >
                Приемам
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
