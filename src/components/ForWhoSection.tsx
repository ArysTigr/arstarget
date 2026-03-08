import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы", desc: "Набор учеников и заполнение потоков", gradient: "from-violet/20 to-primary/10", iconColor: "text-violet" },
  { icon: Building2, label: "Локальные услуги", desc: "Запись клиентов и рост выручки", gradient: "from-accent/20 to-cyan/10", iconColor: "text-accent" },
  { icon: ShoppingBag, label: "Интернет-магазины", desc: "Заказы и повторные покупки", gradient: "from-coral/20 to-highlight/10", iconColor: "text-coral" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2" />
      <div className="container-narrow relative">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3">Для кого</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-3 sm:mb-4 px-2">
            Узнаёте себя? Тогда мы сработаемся
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-body px-2">
            Вы вкладываете в рекламу, но заявки то есть, то нет. Хотите наконец понимать, <strong className="text-foreground">куда уходит бюджет</strong> и получать стабильный поток клиентов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-3xl mx-auto">
          {audiences.map((item) => (
            <div key={item.label} className="group flex flex-row sm:flex-col items-center gap-3 sm:gap-4 p-4 sm:p-7 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/60 hover:border-primary/30 shadow-sm hover:shadow-card-hover transition-all duration-300">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.iconColor}`} />
              </div>
              <div className="sm:text-center">
                <span className="font-bold text-foreground text-base sm:text-lg block">{item.label}</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-body">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
