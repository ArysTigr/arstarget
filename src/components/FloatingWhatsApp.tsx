import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-[1000] w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full flex items-center justify-center shadow-glow-accent hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
