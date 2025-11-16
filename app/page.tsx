import HomeHero from "@components/home/HomeHero";
import HomeCategoryGrid from "@components/home/HomeCategoryGrid";
import HomeBrands from "@components/home/HomeBrands";
import HomeValueProps from "@components/home/HomeValueProps";
import HomeVideoTeaser from "@components/home/HomeVideoTeaser";
import HomeFinalCta from "@components/home/HomeFinalCta";

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
