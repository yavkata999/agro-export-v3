import type { Metadata } from "next";
import HomeHero from "@components/home/HomeHero";
import HomeCategoryGrid from "@components/home/HomeCategoryGrid";
import HomeBrands from "@components/home/HomeBrands";
import HomeValueProps from "@components/home/HomeValueProps";
import HomeVideoTeaser from "@components/home/HomeVideoTeaser";
import HomeFinalCta from "@components/home/HomeFinalCta";

export const metadata: Metadata = {
  title: "Агро Експорт Импорт ООД | Внос и дистрибуция на градински стоки",
  description:
    "Вашият стратегически бизнес партньор за торф, субстрати, тревни смеси, саксии и торове. Официален представител на Durpeta, GlobalGrass и Florovit за България.",
  alternates: {
    canonical: "https://agro-export.com",
  },
  openGraph: {
    title: "Агро Експорт Импорт ООД | Професионални решения за вашия бизнес",
    description:
      "Директен внос на качествени субстрати, семена и торове. Свържете се с нас за партньорство.",
    url: "https://agro-export.com",
    images: [
      {
        url: "/og-home.jpg", // Make sure you have this image or remove this line
        width: 1200,
        height: 630,
        alt: "Агро Експорт Импорт Склад",
      },
    ],
  },
};

export default function HomePage() {
  // --- SEO CONFIGURATION (Structured Data) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Агро Експорт Импорт ООД",
    url: "https://agro-export.com",
    logo: "https://agro-export.com/logo.png",
    description:
      "Вашият бизнес партньор за внос и дистрибуция на професионални градински продукти. Над 34 години опит с торфени субстрати Durpeta, тревни смеси GlobalGrass, саксии и торове Florovit.",
    foundingDate: "1990",
    areaServed: {
      "@type": "Country",
      name: "Bulgaria",
    },
    // List the specific brands you distribute to boost ranking for them
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Brand", name: "Durpeta" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Brand", name: "GlobalGrass" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Brand", name: "Florovit" } },
      { "@type": "Offer", itemOffered: { "@type": "Brand", name: "Soparco" } },
      { "@type": "Offer", itemOffered: { "@type": "Brand", name: "Azofoska" } },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-887-609-587",
      contactType: "sales",
      areaServed: "BG",
      availableLanguage: "Bulgarian",
    },
    potentialAction: {
      "@type": "BuyAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://agro-export.com/kontakti",
      },
      description: "Свържете се за оферта на едро",
    },
  };

  return (
    <main>
      {/* Injecting the Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HomeHero />
      <HomeCategoryGrid />
      <HomeBrands />
      <HomeValueProps />
      <HomeVideoTeaser />
      <HomeFinalCta />
    </main>
  );
}
