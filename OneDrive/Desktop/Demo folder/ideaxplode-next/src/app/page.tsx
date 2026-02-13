import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CardsSection from "@/components/CardsSection";
import CTASection from "@/components/CTASection";
import FounderSection from "@/components/FounderSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <CardsSection />
        <CTASection />
        <FounderSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
