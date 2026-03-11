import { BadgeCheck, Instagram, Facebook } from "lucide-react";

const platforms = [
  { icon: Instagram, label: "Instagram", gradient: "from-rose/12 to-violet/8", color: "text-rose" },
  { icon: Facebook, label: "Facebook", gradient: "from-primary/12 to-cyan/8", color: "text-primary" },
  { icon: BarChartIcon, label: "Ads Manager", gradient: "from-violet/10 to-accent/6", color: "text-violet" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow text-center relative">
        <div className="inline-flex items-center gap-2.5 bg-card/80 backdrop-blur-sm text-accent border border-accent/15 px-5 py-2.5 rounded-full font-bold mb-6 shadow-sm text-sm">
          <BadgeCheck className="w-5 h-5" />
          Meta Blueprint Certified
        </div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm sm:text-lg leading-relaxed px-4 sm:px-2">
          Сертифицированный специалист Meta. Знаю алгоритмы изнутри и использую их, чтобы ваш бюджет работал на максимум.
        </p>
        
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          {platforms.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-3 group cursor-default">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 shadow-sm border border-border/30`}>
                <p.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${p.color}`} />
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
