import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const CtaSection = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-primary to-primary/85 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />
      
      <div className="container-narrow text-center relative">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-4">
          Каждый день без рекламы — это клиенты, которые уходят к конкурентам
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg font-body">
          Напишите прямо сейчас — я бесплатно разберу вашу рекламу и покажу, где вы теряете деньги. Без обязательств.
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="mb-6 bg-accent-foreground text-primary hover:bg-accent-foreground/90 shadow-xl group">
            <MessageCircle className="w-5 h-5" />
            Написать в WhatsApp — это бесплатно
            <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
          </Button>
        </a>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-primary-foreground/70 text-sm mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Ответ за 1 час</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Без спама и обязательств</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
          <Phone className="w-4 h-4" />
          <span>Или позвоните: <a href="tel:+77066980045" className="underline text-primary-foreground/90 hover:text-primary-foreground transition-colors">+7 706 698 00 45</a></span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
