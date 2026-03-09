import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const Footer = () => {
  return (
    <footer className="bg-background py-12 px-5 md:px-8 border-t border-border/20">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/40 font-light tracking-wide">
            © Арыстан, 2026 · Таргетолог для бизнеса в Казахстане
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-muted-foreground/40 hover:text-primary text-xs">
              <ArrowRight className="w-3.5 h-3.5" />
              Написать в WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
