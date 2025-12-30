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
  const [highlightAccept, setHighlightAccept] = useState(false);

  // --- HELPER: Set Cookies ---
  const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === "undefined") return;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  // --- HELPER: Get Cookies ---
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

  // --- CORE: Update Google Consent Mode ---
  const updateGtmConsent = (status: "granted" | "denied") => {
    if (typeof window === "undefined") return;

    // 1. Send the official command to Google (Requires window.gtag)
    // We use window.gtag if available, or push arguments to dataLayer manually
    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
      });
    } else {
      // Fallback if gtag isn't defined yet (rare, but safe)
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push("consent", "update", {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
      });
    }

    // 2. Push a Custom Event
    // This allows GTM Triggers to listen for "cookie_consent_update"
    (window as any).dataLayer.push({
      event: "cookie_consent_update",
    });
  };

  useEffect(() => {
    const consent = getCookie("cookie_consent");

    if (consent === "granted") {
      setConsentGranted(true);
      // Even on reload, we enforce the 'granted' state update
      updateGtmConsent("granted");
      setShowBanner(false);
    } else if (consent === "denied") {
      setConsentGranted(false);
      // We explicitly enforce 'denied' just to be safe
      updateGtmConsent("denied");
      setShowBanner(false);
    } else {
      // --- USER HAS NOT CHOSEN YET (Ignore Scenario) ---
      // We do NOT set cookies or block GTM.
      // The Script tag below handles the default 'denied' state.
      // This allows 'Advanced Mode' (cookieless pings) to run automatically.

      setConsentGranted(false);

      // Show Banner with delay
      const timer = setTimeout(() => setShowBanner(true), 1500);

      // Pulse Logic
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
    updateGtmConsent("granted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    setCookie("cookie_consent", "denied", 365);
    setConsentGranted(false);
    updateGtmConsent("denied");
    setShowBanner(false);
  };

  return (
    <>
      {/* --- 1. INITIALIZE CONSENT DEFAULTS --- 
        This must run BEFORE GTM loads. 
        It sets everything to 'denied' but allows the tags to load in "listening" mode.
      */}
      <Script
        id="gtm-consent-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 2000 
            });
            // Optional: Redact ads data for privacy
            gtag('set', 'ads_data_redaction', true);
          `,
        }}
      />

      {/* --- 2. LOAD GTM ---
        We load this UNCONDITIONALLY. 
        GTM will respect the 'denied' state set above (no cookies),
        but will still send anonymous pings (Advanced Mode).
      */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      {/* --- 3. SHINYSTAT (Strict Block) ---
        Third-party scripts that don't support Google Consent Mode 
        must be hard-blocked until 'consentGranted' is true.
      */}
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
