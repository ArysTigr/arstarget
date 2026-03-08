import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <div className="font-bold text-lg text-foreground tracking-tight">
          Арыстан <span className="text-muted-foreground font-medium">| Таргетолог</span>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="sm">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Написать в WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
