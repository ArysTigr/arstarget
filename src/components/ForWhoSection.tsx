import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы", desc: "Полный поток учеников за 2–3 недели", gradient: "from-violet/15 to-primary/8", iconColor: "text-violet" },
  { icon: Building2, label: "Клиники и услуги", desc: "Расписание забито на месяц вперёд", gradient: "from-accent/15 to-cyan/8", iconColor: "text-accent" },
  { icon: ShoppingBag, label: "Интернет-магазины", desc: "Заказы с первого дня запуска", gradient: "from-coral/15 to-highlight/8", iconColor: "text-coral" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2" />
      <div className="container-narrow relative">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-primary/70 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">Для кого</span>
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-extrabold text-foreground mb-3 sm:mb-4 px-2">
            Если это про вас — мы сработаемся
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            Вы тратите на рекламу, но заявки нестабильны. Хотите наконец <strong className="text-foreground">предсказуемый поток клиентов</strong> и понимать, куда уходит каждый тенге.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {audiences.map((item) => (
            <div key={item.label} className="group flex flex-row sm:flex-col items-center gap-4 sm:gap-5 p-5 sm:p-8 premium-card hover:border-primary/20 transition-all duration-500">
              <div className={`w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500`}>
                <item.icon className={`w-7 h-7 sm:w-9 sm:h-9 ${item.iconColor}`} />
              </div>
              <div className="sm:text-center">
                <span className="font-bold text-foreground text-base sm:text-lg block mb-1">{item.label}</span>
                <span className="text-sm text-muted-foreground">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
