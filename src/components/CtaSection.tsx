import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const CtaSection = () => {
  return (
    <section id="cta" className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Готовы получить предсказуемый поток клиентов?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
          Напишите сейчас — отвечу в течение часа и бесплатно разберу вашу текущую стратегию.
        </p>
        
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="mb-6">
            <MessageCircle className="w-5 h-5" />
            Написать в WhatsApp
          </Button>
        </a>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
          <Phone className="w-4 h-4" />
          <span>Или позвоните: <a href="tel:+77066980045" className="underline text-primary-foreground/90 hover:text-primary-foreground">+7 706 698 00 45</a></span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
