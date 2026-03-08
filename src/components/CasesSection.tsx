import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Building2, ShoppingBag } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    label: "Онлайн-школа",
    metric: "680 ₸",
    metricLabel: "стоимость лида",
    before: "Было: 1 200 ₸/лид",
    text: "За 3 недели снизил стоимость заявки на 43%. РОАС вырос до 4.2",
    badge: "−43%",
    badgeColor: "bg-accent/15 text-accent",
    iconGradient: "from-violet/20 to-primary/10",
  },
  {
    icon: Building2,
    label: "Мед. клиника",
    metric: "+140",
    metricLabel: "заявок/мес",
    before: "Бюджет: 150 000 ₸",
    text: "38% заявок конвертировались в запись. Расписание заполнено на 3 недели",
    badge: "38% CR",
    badgeColor: "bg-primary/15 text-primary",
    iconGradient: "from-cyan/20 to-accent/10",
  },
  {
    icon: ShoppingBag,
    label: "Магазин косметики",
    metric: "270",
    metricLabel: "заказов/мес",
    before: "Первый запуск",
    text: "Окупаемость 3.1x с первого месяца. Бюджет масштабирован в 3 раза",
    badge: "3.1x ROI",
    badgeColor: "bg-coral/15 text-coral",
    iconGradient: "from-coral/20 to-highlight/10",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-3" />
      <div className="container-narrow relative">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3">Кейсы</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-2 sm:mb-3 px-2">
            Не обещания — а цифры
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body">
            Реальные результаты за последние 3 месяца
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {cases.map((c) => (
            <div key={c.label} className="bg-background/80 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border border-border/60 hover:border-primary/25 shadow-sm hover:shadow-card-hover transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${c.iconGradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-foreground text-sm sm:text-base block">{c.label}</span>
                  <span className="text-xs text-muted-foreground">{c.before}</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2 sm:mb-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{c.metric}</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-body">{c.metricLabel}</span>
              </div>
              <div className={`inline-block ${c.badgeColor} text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3`}>
                {c.badge}
              </div>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm font-body">{c.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://teletype.in/@wzarz" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group w-full sm:w-auto">
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
