import { BadgeCheck, Instagram, Facebook } from "lucide-react";

const platforms = [
  { icon: Instagram, label: "Instagram", gradient: "from-rose/15 to-violet/12", color: "text-rose" },
  { icon: Facebook, label: "Facebook", gradient: "from-primary/15 to-cyan/12", color: "text-primary" },
  { icon: BarChartIcon, label: "Ads Manager", gradient: "from-violet/12 to-accent/8", color: "text-violet" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow text-center relative">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold mb-5 sm:mb-6 shadow-sm text-sm">
          <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          Meta Blueprint Certified
        </div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed font-body px-2">
          Не «самоучка из YouTube» — а сертифицированный специалист Meta. Знаю, как работают алгоритмы, и использую это для вашей выгоды.
        </p>
        
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          {platforms.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-2 sm:gap-2.5 group cursor-default">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm`}>
                <p.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${p.color}`} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
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
