import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhySaahvan from "@/components/sections/WhySaahvan";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import InsightsSection from "@/components/sections/InsightsSection";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <ServicesGrid />
      <WhySaahvan />
      <IndustriesSection />
      <CaseStudiesPreview />
      <InsightsSection />
      <CTABanner />
    </>
  );
}
