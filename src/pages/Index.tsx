import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import CasesSection from "@/components/CasesSection";
import TrustSection from "@/components/TrustSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ForWhoSection />
      <BenefitsSection />
      <CasesSection />
      <TrustSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
