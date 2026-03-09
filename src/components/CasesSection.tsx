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
  },
  {
    icon: Building2,
    label: "Мед. клиника",
    metric: "+140",
    metricLabel: "заявок/мес",
    before: "Бюджет: 150 000 ₸",
    text: "38% заявок конвертировались в запись. Расписание заполнено на 3 недели",
    badge: "38% CR",
  },
  {
    icon: ShoppingBag,
    label: "Магазин косметики",
    metric: "270",
    metricLabel: "заказов/мес",
    before: "Первый запуск",
    text: "Окупаемость 3.1x с первого месяца. Бюджет масштабирован в 3 раза",
    badge: "3.1x ROI",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-4">Кейсы</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 px-2">
            Не обещания — а цифры
          </h2>
          <p className="text-muted-foreground text-base font-light">
            Реальные результаты за последние 3 месяца
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {cases.map((c) => (
            <div key={c.label} className="group relative overflow-hidden premium-card p-6 sm:p-8 hover:border-primary/15 transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all duration-500">
                  <c.icon className="w-5 h-5 text-primary/60" />
                </div>
                <div>
                  <span className="font-display text-foreground text-sm block">{c.label}</span>
                  <span className="text-xs text-muted-foreground font-light">{c.before}</span>
                </div>
              </div>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-display text-foreground">{c.metric}</span>
                <span className="text-xs text-muted-foreground font-light">{c.metricLabel}</span>
              </div>
              
              <div className="inline-block text-primary/80 text-[11px] font-medium px-3 py-1 rounded-full border border-primary/15 bg-primary/5 mb-4 tracking-wider">
                {c.badge}
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm font-light">{c.text}</p>
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
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default CasesSection;
