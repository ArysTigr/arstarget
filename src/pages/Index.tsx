import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import ReviewsSection from "@/components/ReviewsSection";
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
      <ProcessSection />
      <CasesSection />
      <ReviewsSection />
      <TrustSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
