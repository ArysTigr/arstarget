import { BarChart3, Coins, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Полная прозрачность",
    text: "Каждую неделю вы получаете понятный отчёт: сколько потрачено, сколько лидов, какая цена за заявку. Никаких «мутных» метрик.",
    highlight: "Отчёт каждую неделю",
    iconColor: "text-violet",
    gradient: "from-violet/20 to-primary/8",
    borderAccent: "group-hover:border-violet/30",
  },
  {
    icon: Coins,
    title: "Деньги → клиенты",
    text: "Оптимизирую не по CTR, а по реальным продажам. Средний РОАС моих клиентов — 3.5x. Вы платите за результат, который видно в кассе.",
    highlight: "РОАС 3.5x в среднем",
    iconColor: "text-accent",
    gradient: "from-accent/20 to-cyan/8",
    borderAccent: "group-hover:border-accent/30",
  },
  {
    icon: Target,
    title: "Под вашу задачу",
    text: "Заполнить поток курса за 2 недели? Загрузить клинику записями? Я подберу стратегию под конкретную цель, а не шаблон «для всех».",
    highlight: "Стратегия под цель",
    iconColor: "text-coral",
    gradient: "from-coral/20 to-highlight/8",
    borderAccent: "group-hover:border-coral/30",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow relative">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3">Преимущества</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-2 sm:mb-3 px-2">
            Почему предприниматели выбирают меня
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body">
            Три причины, которые превращают бюджет в прибыль
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b) => (
            <div key={b.title} className={`group p-5 sm:p-7 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/60 ${b.borderAccent} shadow-sm hover:shadow-card-hover transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet via-accent to-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-start sm:block gap-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center sm:mb-5 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                  <b.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${b.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3">
                    {b.highlight}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body text-sm sm:text-[15px]">{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
