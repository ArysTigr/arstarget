import { BarChart3, Coins, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Вы видите каждый тенге",
    text: "Еженедельный отчёт: расход, лиды, цена заявки. Ноль «мутных» метрик — только то, что влияет на прибыль.",
    highlight: "Отчёт каждую неделю",
    iconColor: "text-violet",
    gradient: "from-violet/15 to-primary/6",
    borderAccent: "group-hover:border-violet/25",
    lineColor: "from-violet to-primary",
  },
  {
    icon: Coins,
    title: "Платите за продажи, не клики",
    text: "Оптимизирую по реальной выручке, а не по CTR. Средний возврат — ×3,5 с каждого вложенного тенге.",
    highlight: "РОАС ×3.5",
    iconColor: "text-accent",
    gradient: "from-accent/15 to-cyan/6",
    borderAccent: "group-hover:border-accent/25",
    lineColor: "from-accent to-cyan",
  },
  {
    icon: Target,
    title: "Стратегия ≠ шаблон",
    text: "Заполнить поток за 2 недели? Загрузить клинику? Под каждую цель — своя связка аудитории, оффера и креатива.",
    highlight: "Под вашу цель",
    iconColor: "text-coral",
    gradient: "from-coral/15 to-highlight/6",
    borderAccent: "group-hover:border-coral/25",
    lineColor: "from-coral to-highlight",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow relative">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-accent/80 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">Почему я</span>
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-extrabold text-foreground mb-3 px-2">
            3 причины доверить бюджет мне
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Не обещания — а система, которая приносит деньги
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((b) => (
            <div key={b.title} className={`group p-6 sm:p-8 rounded-2xl bg-card/95 backdrop-blur-sm border border-border/40 ${b.borderAccent} hover:shadow-card-hover transition-all duration-500 relative overflow-hidden`}
                 style={{ boxShadow: 'var(--shadow-premium)' }}>
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${b.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              <div className="flex items-start sm:block gap-4">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center sm:mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                  <b.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${b.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-accent/8 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    {b.highlight}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{b.text}</p>
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
