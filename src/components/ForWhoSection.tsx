import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы", desc: "Набор учеников и заполнение потоков", gradient: "from-primary/15 to-primary/5" },
  { icon: Building2, label: "Локальные услуги", desc: "Запись клиентов и рост выручки", gradient: "from-accent/15 to-accent/5" },
  { icon: ShoppingBag, label: "Интернет-магазины", desc: "Заказы и повторные покупки", gradient: "from-highlight/15 to-highlight/5" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3">Для кого</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Узнаёте себя? Тогда мы сработаемся
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-body">
            Вы вкладываете в рекламу, но заявки то есть, то нет. Хотите наконец понимать, <strong className="text-foreground">куда уходит бюджет</strong> и получать стабильный поток клиентов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {audiences.map((item, i) => (
            <div key={item.label} className={`group flex flex-col items-center gap-4 p-7 bg-background rounded-2xl border border-border/60 hover:border-primary/30 shadow-sm hover:shadow-card-hover transition-all duration-300 animate-fade-in-up animate-delay-${(i + 1) * 100}`}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-foreground text-lg">{item.label}</span>
              <span className="text-sm text-muted-foreground text-center font-body">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
