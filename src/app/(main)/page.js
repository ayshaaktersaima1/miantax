
import AboutCompany from "@/components/AboutCompany";
import Banner from "@/components/Banner";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NumbersSection from "@/components/NumberSection";
import OurServices from "@/components/OurServices";
import ReviewSection from "@/components/ReviewSection";

import TaxCtaSection from "@/components/TaxCtaSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <AboutCompany></AboutCompany>
      <NumbersSection></NumbersSection>
      <OurServices></OurServices>
      <ReviewSection></ReviewSection>
      <TaxCtaSection></TaxCtaSection>
      <CaseStudiesSection></CaseStudiesSection>
    </div>
  );
}
