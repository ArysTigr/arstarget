import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Аудит и анализ",
    text: "Глубоко разбираю вашу нишу, конкурентов и текущую рекламу. Нахожу точки роста и слабые места, которые сливают бюджет.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Стратегия под цель",
    text: "Создаю индивидуальную стратегию: подбираю аудитории, форматы, креативы и офферы — всё заточено под вашу конкретную задачу.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Запуск и тестирование",
    text: "Запускаю рекламу, тестирую гипотезы, отключаю неэффективное. В первую неделю вы уже видите первые заявки и понимаете динамику.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Масштабирование",
    text: "Оптимизирую то, что работает, масштабирую бюджет и снижаю стоимость лида. Еженедельные отчёты — вы всегда в курсе.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-3" />

      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-4">
            Процесс
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
            Как я решаю вашу проблему
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base font-light leading-relaxed">
            Четыре шага от аудита до стабильного потока клиентов
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical gold line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="group relative flex gap-5 sm:gap-8 items-start">
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700">
                    <s.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                  </div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="premium-card p-5 sm:p-7 hover:border-primary/15 transition-all duration-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

                    <span className="text-[11px] font-medium text-primary/50 tracking-[0.3em] uppercase mb-2 block">
                      Шаг {s.step}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default ProcessSection;
