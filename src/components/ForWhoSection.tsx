import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы", desc: "Набор учеников и заполнение потоков" },
  { icon: Building2, label: "Локальные услуги", desc: "Запись клиентов и рост выручки" },
  { icon: ShoppingBag, label: "Интернет-магазины", desc: "Заказы и повторные покупки" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-4">Для кого</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 px-2">
            Узнаёте себя? Тогда мы сработаемся
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed px-2 font-light">
            Вы вкладываете в рекламу, но заявки то есть, то нет. Хотите наконец понимать,{" "}
            <strong className="text-foreground font-medium">куда уходит бюджет</strong> и получать стабильный поток клиентов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {audiences.map((item) => (
            <div key={item.label} className="group flex flex-row sm:flex-col items-center gap-4 sm:gap-5 p-6 sm:p-10 premium-card hover:border-primary/15 transition-all duration-700">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary/70 group-hover:text-primary transition-colors duration-500" />
              </div>
              <div className="sm:text-center">
                <span className="font-display text-foreground text-base sm:text-lg block mb-1">{item.label}</span>
                <span className="text-sm text-muted-foreground font-light">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default ForWhoSection;
