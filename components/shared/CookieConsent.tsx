"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import styles from "@styles/components/shared/CookieConsent.module.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

// Define the shape of the window object for TypeScript
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGranted, setConsentGranted] = useState(false);
  const [highlightAccept, setHighlightAccept] = useState(false);

  // --- 1. GTM Helper: Updates Google's "Consent Mode" ---
  // This tells Google: "The user said YES/NO, update the tracking method now."
  const updateGtmConsent = (status: "granted" | "denied") => {
    if (typeof window === "undefined") return;
    const dataLayer =
      (window as unknown as WindowWithDataLayer).dataLayer || [];

    // Send the update event to GTM
    dataLayer.push({
      event: "consent_update",
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
    });
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

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
      updateGtmConsent("granted"); // Ensure GTM knows it's granted on reload
      setShowBanner(false);
    } else if (consent === "denied") {
      setConsentGranted(false);
      updateGtmConsent("denied"); // Ensure GTM stays restricted
      setShowBanner(false);
    } else {
      // --- NO CHOICE YET ---
      // 1. Set Default GTM to 'Denied' (Implicitly done via Script below, but good practice)
      updateGtmConsent("denied");
      setConsentGranted(false);

      // 2. Show Banner
      const timer = setTimeout(() => setShowBanner(true), 1500);

      // 3. Pulse Logic (The Nudge)
      const pulseTimer = setTimeout(() => {
        setHighlightAccept(true);
      }, 10000);

      const handleScroll = () => {
        if (window.scrollY > 300) {
          setHighlightAccept(true);
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
    updateGtmConsent("granted"); // Unlocks full Google Data
    setShowBanner(false);
  };

  const declineCookies = () => {
    setCookie("cookie_consent", "denied", 365);
    setConsentGranted(false);
    updateGtmConsent("denied"); // Keeps Google in "Ping only" mode
    setShowBanner(false);
  };

  return (
    <>
      {/* --- GOOGLE ANALYTICS (Resilient Strategy) --- */}
      {/* 1. Initialize Consent Defaults: Deny everything by default */}
      <Script
        id="gtm-consent-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `,
        }}
      />

      {/* 2. Always Load GTM (It listens to the consent state above) */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      {/* --- SHINYSTAT (Strict Strategy) --- */}
      {/* Only load if explicitly granted, because it tracks profiles */}
      {consentGranted && (
        <Script
          id="shinystat"
          src="https://codice.shinystat.com/cgi-bin/getcod.cgi?NODW=yes&USER=AgroExport"
          strategy="lazyOnload"
        />
      )}

      {/* --- BANNER UI --- */}
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
