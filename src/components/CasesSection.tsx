import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Building2, ShoppingBag } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    label: "Онлайн-школа",
    metric: "680 ₸",
    metricLabel: "за заявку",
    before: "Было: 1 200 ₸/лид",
    text: "Снизил стоимость лида на 43% за 3 недели. Поток заполнен. РОАС — 4,2×.",
    badge: "−43% за лид",
    badgeColor: "bg-accent/10 text-accent",
    iconGradient: "from-violet/15 to-primary/8",
    lineColor: "from-violet to-accent",
  },
  {
    icon: Building2,
    label: "Стоматология",
    metric: "+140",
    metricLabel: "записей/мес",
    before: "Бюджет: 150 000 ₸",
    text: "38% заявок стали реальными пациентами. Расписание закрыто на 3 недели вперёд.",
    badge: "38% в запись",
    badgeColor: "bg-primary/10 text-primary",
    iconGradient: "from-cyan/15 to-accent/8",
    lineColor: "from-primary to-cyan",
  },
  {
    icon: ShoppingBag,
    label: "Магазин косметики",
    metric: "270",
    metricLabel: "заказов/мес",
    before: "С нуля",
    text: "Окупаемость ×3.1 с первого месяца. Бюджет масштабирован в 3 раза без потери ROAS.",
    badge: "×3.1 ROI",
    badgeColor: "bg-coral/10 text-coral",
    iconGradient: "from-coral/15 to-highlight/8",
    lineColor: "from-coral to-highlight",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-3" />
      <div className="container-narrow relative">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-primary/70 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">Кейсы</span>
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-extrabold text-foreground mb-3 px-2">
            Цифры вместо обещаний
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Результаты за последние 90 дней
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {cases.map((c) => (
            <div key={c.label} className="group relative overflow-hidden bg-card/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-500"
                 style={{ boxShadow: 'var(--shadow-premium)' }}>
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br ${c.iconGradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-foreground text-sm sm:text-base block">{c.label}</span>
                  <span className="text-xs text-muted-foreground">{c.before}</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{c.metric}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{c.metricLabel}</span>
              </div>
              <div className={`inline-block ${c.badgeColor} text-xs font-bold px-3 py-1.5 rounded-full mb-3`}>
                {c.badge}
              </div>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{c.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://teletype.in/@wzarz" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group w-full sm:w-auto border-border/60 hover:border-primary/40">
              <ExternalLink className="w-4 h-4" />
              Смотреть все кейсы
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
