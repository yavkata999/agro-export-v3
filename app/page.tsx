import HomeHero from "@components/home/HomeHero";
import HomeCategoryGrid from "@components/home/HomeCategoryGrid";
import HomeBrands from "@components/home/HomeBrands";
import HomeValueProps from "@components/home/HomeValueProps";
import HomeVideoTeaser from "@components/home/HomeVideoTeaser";
import HomeFinalCta from "@components/home/HomeFinalCta";

export default function HomePage() {
  // --- SEO CONFIGURATION ---
  // This data helps Google understand your business model (B2B Distributor)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore", // Signals B2B nature
    name: "Агро Експорт Импорт ООД",
    url: "https://agro-export.com", // Ensure this matches your real domain
    logo: "https://agro-export.com/logo.png", // Ensure you have a logo at this path
    description:
      "Вашият B2B партньор за внос и дистрибуция на професионални градински продукти. Над 34 години опит с торфени субстрати Durpeta, тревни смеси GlobalGrass, саксии и торове Florovit.",
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
      telephone: "+359-887-609-587", // CHANGE THIS to your real phone
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
