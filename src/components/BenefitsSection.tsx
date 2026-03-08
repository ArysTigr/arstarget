import { BarChart3, Coins, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Полная прозрачность",
    text: "Каждую неделю вы получаете понятный отчёт: сколько потрачено, сколько лидов, какая цена за заявку. Никаких «мутных» метрик.",
    highlight: "Отчёт каждую неделю",
  },
  {
    icon: Coins,
    title: "Деньги → клиенты, а не клики",
    text: "Оптимизирую не по CTR, а по реальным продажам. Средний РОАС моих клиентов — 3.5x. Вы платите за результат, который видно в кассе.",
    highlight: "РОАС 3.5x в среднем",
  },
  {
    icon: Target,
    title: "Под вашу задачу",
    text: "Заполнить поток курса за 2 недели? Загрузить клинику записями? Я подберу стратегию под конкретную цель, а не шаблон «для всех».",
    highlight: "Стратегия под цель",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
          Почему предприниматели выбирают работать со мной
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Три причины, которые превращают рекламный бюджет в прибыль
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="group p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                {b.highlight}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
