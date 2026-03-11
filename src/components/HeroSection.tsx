import { Button } from "@/components/ui/button";
import { MessageCircle, Gift, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/77066980045";

const HeroSection = () => {
  const scrollToAudit = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet/3" />
      
      {/* Refined animated blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-violet/8 via-primary/6 to-transparent rounded-full blur-[100px] animate-blob-drift" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/8 via-cyan/5 to-transparent rounded-full blur-[100px] animate-blob-drift-slow" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-coral/4 to-rose/4 rounded-full blur-[80px] animate-blob-drift animate-delay-300" />
      
      <div className="relative container-narrow px-5 py-12 sm:section-padding w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-foreground border border-border/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
            Уже 50+ предпринимателей выбрали результат
          </div>
          
          <h1 className="text-[1.75rem] leading-[1.18] sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold sm:leading-[1.12] text-foreground mb-5 sm:mb-7 animate-fade-in-up animate-delay-100">
            Привожу клиентов из Instagram и&nbsp;Facebook — <span className="gradient-text-vivid">а&nbsp;не&nbsp;просто&nbsp;клики</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
            Вы тратите на рекламу, но не видите заявок? Настраиваю таргет для онлайн-школ и локального бизнеса в Казахстане так, чтобы <strong className="text-foreground font-semibold">каждый вложенный тенге возвращался с прибылью.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 animate-fade-in-up animate-delay-300">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="lg" className="w-full sm:w-auto group text-base shadow-xl">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:block" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-border/60 hover:border-primary/40" onClick={scrollToAudit}>
              <Gift className="w-5 h-5" />
              Бесплатный аудит
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground/70 animate-fade-in-up animate-delay-400">
            ⏱ Отвечаю за 1 час · Аудит бесплатно · Без обязательств
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
