import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Building2, ShoppingBag, TrendingDown, TrendingUp, ArrowUpRight } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    label: "Онлайн-школа",
    metric: "680 ₸",
    metricLabel: "стоимость лида",
    before: "Было: 1 200 ₸/лид",
    text: "За 3 недели снизил стоимость заявки на 43%. РОАС вырос до 4.2 — каждый вложенный тенге вернул четыре.",
    badge: "−43% за 3 недели",
  },
  {
    icon: Building2,
    label: "Медицинская клиника",
    metric: "+140",
    metricLabel: "заявок за месяц",
    before: "Бюджет: 150 000 ₸",
    text: "38% заявок конвертировались в запись. Клиника загрузила расписание врачей на 3 недели вперёд.",
    badge: "Конверсия 38%",
  },
  {
    icon: ShoppingBag,
    label: "Магазин косметики",
    metric: "270",
    metricLabel: "заказов за месяц",
    before: "Первый запуск рекламы",
    text: "Окупаемость 3.1x с первого месяца. Клиент масштабировал бюджет в 3 раза и продолжает расти.",
    badge: "Окупаемость 3.1x",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
          Не обещания — а цифры
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Реальные результаты клиентов за последние 3 месяца
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((c) => (
            <div key={c.label} className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-bold text-foreground">{c.label}</span>
              </div>
              <div className="mb-3">
                <span className="text-3xl font-extrabold text-primary">{c.metric}</span>
                <span className="text-sm text-muted-foreground ml-2">{c.metricLabel}</span>
              </div>
              <div className="text-xs text-muted-foreground mb-2">{c.before}</div>
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                {c.badge}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://teletype.in/@wzarz" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <ExternalLink className="w-4 h-4" />
              Смотреть все кейсы с цифрами
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
