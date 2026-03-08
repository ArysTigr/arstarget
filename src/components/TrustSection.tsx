import { BadgeCheck, Instagram, Facebook } from "lucide-react";

const platforms = [
  { icon: Instagram, label: "Instagram", gradient: "from-pink-500/12 to-purple-500/12", color: "text-pink-600" },
  { icon: Facebook, label: "Facebook", gradient: "from-blue-500/12 to-blue-600/12", color: "text-blue-600" },
  { icon: BarChartIcon, label: "Ads Manager", gradient: "from-primary/12 to-accent/8", color: "text-primary" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-5 py-2.5 rounded-full font-bold mb-6 shadow-sm">
          <BadgeCheck className="w-5 h-5" />
          Meta Blueprint Certified
        </div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed font-body">
          Не «самоучка из YouTube» — а сертифицированный специалист Meta. Знаю, как работают алгоритмы, и использую это для вашей выгоды.
        </p>
        
        <div className="flex items-center justify-center gap-8">
          {platforms.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-2.5 group cursor-default">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm`}>
                <p.icon className={`w-7 h-7 ${p.color}`} />
              </div>
              <span className="text-sm font-semibold text-muted-foreground">{p.label}</span>
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
