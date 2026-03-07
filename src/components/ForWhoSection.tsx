import { GraduationCap, Building2, ShoppingBag } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Онлайн-школы" },
  { icon: Building2, label: "Локальные услуги" },
  { icon: ShoppingBag, label: "Интернет-магазины" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Работаю с предпринимателями, которые хотят расти
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Если у вас онлайн-школа или локальный бизнес в Казахстане, и вы устали от нестабильных заявок, хотите понимать, за что платите, и готовы масштабироваться — давайте познакомимся.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {audiences.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
