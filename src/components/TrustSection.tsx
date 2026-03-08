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
          Не «самоучка из YouTube» — а сертифицированный специалист Meta. Знаю, как работают алгоритмы, и использую это для вашей выгоды.
        </p>
        
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-6 h-6 text-pink-600" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Facebook className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BarChartIcon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Ads Manager</span>
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
