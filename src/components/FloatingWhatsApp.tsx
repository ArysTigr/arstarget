import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[1000] w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-glow hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-gold-glow"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;
