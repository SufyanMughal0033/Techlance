import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyTechlance } from "@/components/WhyTechlance";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { FoundersSection } from "@/components/FoundersSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { MarketingSection } from "@/components/MarketingSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyTechlance />
        <PortfolioSection />
        <AboutSection />
        <FoundersSection />
        <ValuesSection />
        <ProcessSection />
        <MarketingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
