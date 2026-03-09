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
    title: "Деньги → клиенты",
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
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2" />
      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-4">Преимущества</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 px-2">
            Почему предприниматели выбирают меня
          </h2>
          <p className="text-muted-foreground text-base font-light">
            Три причины, которые превращают бюджет в прибыль
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="group p-6 sm:p-8 premium-card hover:border-primary/15 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-500">
                <b.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-500" />
              </div>
              
              <div className="inline-block text-primary/70 text-[11px] font-medium px-3 py-1 rounded-full border border-primary/10 mb-4 tracking-wider uppercase">
                {b.highlight}
              </div>
              
              <h3 className="font-display text-lg text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default BenefitsSection;
