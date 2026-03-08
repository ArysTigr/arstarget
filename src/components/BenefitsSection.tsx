import { BarChart3, Coins, Target, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Полная прозрачность",
    text: "Каждую неделю вы получаете понятный отчёт: сколько потрачено, сколько лидов, какая цена за заявку. Никаких «мутных» метрик.",
    highlight: "Отчёт каждую неделю",
    iconColor: "text-primary",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: Coins,
    title: "Деньги → клиенты",
    text: "Оптимизирую не по CTR, а по реальным продажам. Средний РОАС моих клиентов — 3.5x. Вы платите за результат, который видно в кассе.",
    highlight: "РОАС 3.5x в среднем",
    iconColor: "text-accent",
    gradient: "from-accent/15 to-accent/5",
  },
  {
    icon: Target,
    title: "Под вашу задачу",
    text: "Заполнить поток курса за 2 недели? Загрузить клинику записями? Я подберу стратегию под конкретную цель, а не шаблон «для всех».",
    highlight: "Стратегия под цель",
    iconColor: "text-highlight",
    gradient: "from-highlight/15 to-highlight/5",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block text-accent text-sm font-bold uppercase tracking-widest mb-3">Преимущества</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
            Почему предприниматели выбирают меня
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Три причины, которые превращают рекламный бюджет в прибыль
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="group p-7 rounded-2xl bg-card border border-border/60 hover:border-primary/25 shadow-sm hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                <b.icon className={`w-7 h-7 ${b.iconColor}`} />
              </div>
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                {b.highlight}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body text-[15px]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
