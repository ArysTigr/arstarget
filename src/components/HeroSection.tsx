import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/77066980045";

const HeroSection = () => {
  const scrollToAudit = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Luxurious gold ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/6 via-primary/3 to-transparent rounded-full blur-[150px] animate-blob-drift" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet/4 to-transparent rounded-full blur-[120px] animate-blob-drift-slow" />
      
      <div className="relative container-narrow px-5 py-16 sm:section-padding w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 bg-primary/5 border border-primary/15 px-5 py-2 rounded-full text-xs font-medium mb-8 animate-fade-in-up tracking-widest uppercase text-primary/80">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-soft" />
            50+ предпринимателей доверяют результат
          </div>
          
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold sm:leading-[1.1] text-foreground mb-6 sm:mb-8 animate-fade-in-up animate-delay-100">
            Привожу клиентов из Instagram и&nbsp;Facebook —{" "}
            <span className="gradient-text-gold italic">а&nbsp;не&nbsp;просто&nbsp;клики</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200 font-light">
            Вы тратите на рекламу, но не видите заявок? Настраиваю таргет для онлайн-школ и локального бизнеса в Казахстане так, чтобы{" "}
            <strong className="text-foreground font-medium">каждый вложенный тенге возвращался с прибылью.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 animate-fade-in-up animate-delay-300">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="lg" className="w-full sm:w-auto group text-base animate-gold-glow">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden sm:block" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base" onClick={scrollToAudit}>
              Бесплатный аудит
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground/50 animate-fade-in-up animate-delay-400 tracking-wide uppercase">
            <span>⏱ Ответ за 1 час</span>
            <span className="w-px h-3 bg-border" />
            <span>Аудит бесплатно</span>
          </div>
        </div>
      </div>
      
      {/* Bottom premium divider */}
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default HeroSection;
