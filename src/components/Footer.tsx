import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-5 md:px-8">
      <div className="container-narrow">
        <div className="premium-divider mb-8 opacity-20" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © Арыстан, 2026 | Таргетолог для бизнеса в Казахстане
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/5">
              <ArrowRight className="w-4 h-4" />
              Написать в WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
