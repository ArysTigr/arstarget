import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы", desc: "Набор учеников и заполнение потоков" },
  { icon: Building2, label: "Локальные услуги", desc: "Запись клиентов и рост выручки" },
  { icon: ShoppingBag, label: "Интернет-магазины", desc: "Заказы и повторные покупки" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Узнаёте себя? Тогда мы сработаемся
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Вы вкладываете в рекламу, но заявки то есть, то нет. Хотите наконец понимать, <strong className="text-foreground">куда уходит бюджет</strong> и получать стабильный поток клиентов — без сюрпризов.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {audiences.map((item) => (
            <div key={item.label} className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-foreground text-lg">{item.label}</span>
              <span className="text-sm text-muted-foreground text-center">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
