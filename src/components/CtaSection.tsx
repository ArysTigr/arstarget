import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 px-5 md:px-8 lg:px-16 relative overflow-hidden" style={{
      background: 'linear-gradient(145deg, hsl(235 65% 18%), hsl(268 50% 22%), hsl(235 65% 14%))'
    }}>
      {/* Refined decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-violet/12 via-coral/8 to-transparent rounded-full blur-[120px] animate-blob-drift" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-primary/10 via-cyan/6 to-transparent rounded-full blur-[120px] animate-blob-drift-slow" />
      
      <div className="container-narrow text-center relative px-4">
        <h2 className="text-xl sm:text-2xl md:text-[2rem] font-extrabold text-primary-foreground mb-4 px-2 leading-tight">
          Каждый день без рекламы — это клиенты, которые уходят к конкурентам
        </h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 text-base sm:text-lg">
          Напишите прямо сейчас — я бесплатно разберу вашу рекламу и покажу, где вы теряете деньги.
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
          <Button variant="cta" size="lg" className="mb-6 shadow-xl group w-full sm:w-auto text-base">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Написать в WhatsApp — это бесплатно</span>
            <span className="sm:hidden">Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:block" />
          </Button>
        </a>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/50 text-xs sm:text-sm mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Ответ за 1 час</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Без спама и обязательств</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/40 text-sm">
          <Phone className="w-4 h-4" />
          <span>Или: <a href="tel:+77066980045" className="underline text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">+7 706 698 00 45</a></span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
