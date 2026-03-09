import { BadgeCheck, Instagram, Facebook } from "lucide-react";

const platforms = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: BarChartIcon, label: "Ads Manager" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-3" />
      <div className="container-narrow text-center relative">
        <div className="inline-flex items-center gap-2.5 text-primary/80 border border-primary/15 bg-primary/5 px-5 py-2.5 rounded-full font-medium mb-8 text-xs tracking-widest uppercase">
          <BadgeCheck className="w-4 h-4" />
          Meta Blueprint Certified
        </div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-base leading-relaxed px-2 font-light">
          Не «самоучка из YouTube» — а сертифицированный специалист Meta. Знаю, как работают алгоритмы, и использую это для вашей выгоды.
        </p>
        
        <div className="flex items-center justify-center gap-10 sm:gap-14">
          {platforms.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700">
                <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary/50 group-hover:text-primary/80 transition-colors duration-500" />
              </div>
              <span className="text-xs text-muted-foreground font-light tracking-wide">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="12" width="4" height="8" rx="1"/>
      <rect x="10" y="8" width="4" height="12" rx="1"/>
      <rect x="17" y="4" width="4" height="16" rx="1"/>
    </svg>
  );
}

export default TrustSection;
