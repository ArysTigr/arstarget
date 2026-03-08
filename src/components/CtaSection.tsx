import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const CtaSection = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(230 70% 42%), hsl(270 65% 50%), hsl(230 70% 35%))'
    }}>
      {/* Vibrant decorative blobs */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-bl from-coral/20 via-highlight/15 to-transparent rounded-full blur-3xl animate-blob-drift" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan/15 via-accent/10 to-transparent rounded-full blur-3xl animate-blob-drift-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-rose/8 rounded-full blur-3xl" />
      
      <div className="container-narrow text-center relative px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3 sm:mb-4 px-2">
          Каждый день без рекламы — это клиенты, которые уходят к конкурентам
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6 sm:mb-8 text-base sm:text-lg font-body">
          Напишите прямо сейчас — я бесплатно разберу вашу рекламу и покажу, где вы теряете деньги.
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
          <Button variant="cta" size="lg" className="mb-5 sm:mb-6 bg-accent-foreground text-primary hover:bg-accent-foreground/90 shadow-xl group w-full sm:w-auto text-base">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Написать в WhatsApp — это бесплатно</span>
            <span className="sm:hidden">Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:block" />
          </Button>
        </a>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-primary-foreground/70 text-xs sm:text-sm mb-5 sm:mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Ответ за 1 час</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Без спама и обязательств</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Или: <a href="tel:+77066980045" className="underline text-primary-foreground/90 hover:text-primary-foreground transition-colors">+7 706 698 00 45</a></span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
