import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/77066980045";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-primary/10">
      <div className="container-narrow flex items-center justify-between h-16 px-5 md:px-8">
        <div className="font-display text-lg text-foreground tracking-tight">
          Арыстан <span className="text-primary/60 font-body font-light text-sm ml-1">таргетолог</span>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="default" size="sm" className="shadow-glow text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Связаться</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
