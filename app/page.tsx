import HomeHero from "@components/HomeHero";
import HomeCategoryGrid from "@components/HomeCategoryGrid";
import HomeBrands from "@components/HomeBrands";
import HomeValueProps from "@components/HomeValueProps";
import HomeVideoTeaser from "@components/HomeVideoTeaser";
import HomeFinalCta from "@components/HomeFinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCategoryGrid />
      <HomeBrands />
      <HomeValueProps />
      <HomeVideoTeaser />
      <HomeFinalCta />
    </>
  );
}
