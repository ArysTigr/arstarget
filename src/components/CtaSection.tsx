import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 px-5 md:px-8 lg:px-16 relative overflow-hidden bg-card/50">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/6 to-transparent rounded-full blur-[150px] animate-blob-drift" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet/4 to-transparent rounded-full blur-[150px] animate-blob-drift-slow" />
      
      <div className="container-narrow text-center relative px-4">
        <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-6">Начните сейчас</span>
        
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-5 px-2 leading-tight">
          Каждый день без рекламы — это клиенты,{" "}
          <span className="gradient-text-gold italic">которые уходят к конкурентам</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-base font-light leading-relaxed">
          Напишите прямо сейчас — я бесплатно разберу вашу рекламу и покажу, где вы теряете деньги.
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
          <Button variant="cta" size="lg" className="mb-8 group w-full sm:w-auto text-base animate-gold-glow">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Написать в WhatsApp — это бесплатно</span>
            <span className="sm:hidden">Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden sm:block" />
          </Button>
        </a>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-muted-foreground/50 text-xs mb-8 tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Ответ за 1 час</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Без спама и обязательств</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground/40 text-sm font-light">
          <Phone className="w-3.5 h-3.5" />
          <span>Или: <a href="tel:+77066980045" className="text-primary/60 hover:text-primary transition-colors duration-500">+7 706 698 00 45</a></span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
