import { BarChart3, Coins, Target } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Прозрачная отчётность",
    text: "Вы видите каждый тенге: сколько потрачено, сколько лидов, какая окупаемость. Еженедельные отчёты без сложных терминов.",
  },
  {
    icon: Coins,
    title: "Фокус на окупаемости",
    text: "Моя цель — не клики, а заявки, которые конвертируются в продажи. Работаю с воронкой, а не только с рекламой.",
  },
  {
    icon: Target,
    title: "Решение бизнес-задач",
    text: "Не просто «настраиваю рекламу», а помогаю достичь ваших целей: заполнить группу, увеличить продажи, запустить продукт.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          Что вы получите
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
