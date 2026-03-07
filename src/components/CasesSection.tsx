import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Building2, ShoppingBag } from "lucide-react";

const cases = [
  {
    icon: GraduationCap,
    label: "Онлайн-школа",
    text: "Стоимость лида с 1 200 ₸ до 680 ₸ за 3 недели, РОАС 4.2",
  },
  {
    icon: Building2,
    label: "Медицина",
    text: "+140 заявок за месяц при бюджете 150 000 ₸, конверсия в запись 38%",
  },
  {
    icon: ShoppingBag,
    label: "Косметика",
    text: "270 заказов за первый месяц, окупаемость 3.1x",
  },
];

const CasesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          Результаты, которые говорят сами за себя
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((c) => (
            <div key={c.label} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-foreground">{c.label}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://teletype.in/@wzarz" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
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
