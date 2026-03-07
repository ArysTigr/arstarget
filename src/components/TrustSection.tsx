import { BadgeCheck, Instagram, Facebook } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold mb-6">
          <BadgeCheck className="w-5 h-5" />
          Meta Blueprint Certified
        </div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Сертифицированный специалист по рекламе в экосистеме Meta. Знаю алгоритмы и как обходить типичные ошибки.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Instagram className="w-6 h-6" />
            <span className="font-medium">Instagram</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Facebook className="w-6 h-6" />
            <span className="font-medium">Facebook</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChartIcon className="w-6 h-6" />
            <span className="font-medium">Ads Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const BarChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="12" width="4" height="8" rx="1"/>
    <rect x="10" y="8" width="4" height="12" rx="1"/>
    <rect x="17" y="4" width="4" height="16" rx="1"/>
  </svg>
);

export default TrustSection;
