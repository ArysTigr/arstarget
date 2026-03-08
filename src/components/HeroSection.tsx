import { Button } from "@/components/ui/button";
import { MessageCircle, Gift, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/77066980045";

const HeroSection = () => {
  const scrollToAudit = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-5 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float animate-delay-200" />
      
      <div className="relative container-narrow section-padding w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight border border-highlight/20 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-highlight rounded-full animate-pulse-soft" />
            Уже 50+ предпринимателей выбрали результат
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-[3rem] font-extrabold leading-[1.15] text-foreground mb-6 animate-fade-in-up animate-delay-100">
            Привожу клиентов из Instagram и&nbsp;Facebook — <span className="gradient-text">а&nbsp;не&nbsp;просто&nbsp;клики</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-body animate-fade-in-up animate-delay-200">
            Вы тратите на рекламу, но не видите заявок? Настраиваю таргет для онлайн-школ и локального бизнеса в Казахстане так, чтобы <strong className="text-foreground font-semibold">каждый вложенный тенге возвращался с прибылью.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-5 animate-fade-in-up animate-delay-300">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full sm:w-auto group">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToAudit}>
              <Gift className="w-5 h-5" />
              Бесплатный аудит
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground font-body animate-fade-in-up animate-delay-400">
            ⏱ Отвечаю за 1 час · Аудит бесплатно · Без обязательств
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
