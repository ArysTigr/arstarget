import { Button } from "@/components/ui/button";
import { MessageCircle, Gift } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/77066980045";

const HeroSection = () => {
  const scrollToAudit = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="relative container-narrow section-padding w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-[2.75rem] font-extrabold leading-tight text-foreground mb-6">
            Привожу клиентов из Instagram и Facebook — а&nbsp;не&nbsp;просто клики
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Настраиваю таргет для онлайн-школ и локального бизнеса в Казахстане. Прозрачная отчётность и окупаемые лиды — без воды.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToAudit}>
              <Gift className="w-5 h-5" />
              Получить бесплатный аудит
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Отвечаю в течение часа. Без спама и долгих презентаций.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
