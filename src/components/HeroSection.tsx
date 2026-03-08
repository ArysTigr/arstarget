import { Button } from "@/components/ui/button";
import { MessageCircle, Gift, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/77066980045";

const HeroSection = () => {
  const scrollToAudit = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-14 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
      
      {/* Decorative elements - hidden on small screens */}
      <div className="hidden sm:block absolute top-32 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 left-5 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float animate-delay-200" />
      
      <div className="relative container-narrow px-4 py-10 sm:section-padding w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-highlight/10 text-highlight border border-highlight/20 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-highlight rounded-full animate-pulse-soft" />
            Уже 50+ предпринимателей выбрали результат
          </div>
          
          <h1 className="text-[1.65rem] leading-[1.2] sm:text-3xl md:text-5xl lg:text-[3rem] font-extrabold sm:leading-[1.15] text-foreground mb-4 sm:mb-6 animate-fade-in-up animate-delay-100">
            Привожу клиентов из Instagram и&nbsp;Facebook — <span className="gradient-text">а&nbsp;не&nbsp;просто&nbsp;клики</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 sm:mb-10 leading-relaxed max-w-xl font-body animate-fade-in-up animate-delay-200">
            Вы тратите на рекламу, но не видите заявок? Настраиваю таргет для онлайн-школ и локального бизнеса в Казахстане так, чтобы <strong className="text-foreground font-semibold">каждый вложенный тенге возвращался с прибылью.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5 animate-fade-in-up animate-delay-300">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="lg" className="w-full sm:w-auto group text-base">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:block" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base" onClick={scrollToAudit}>
              <Gift className="w-5 h-5" />
              Бесплатный аудит
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground font-body animate-fade-in-up animate-delay-400">
            ⏱ Отвечаю за 1 час · Аудит бесплатно · Без обязательств
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
