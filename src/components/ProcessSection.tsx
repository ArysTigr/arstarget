import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Нахожу, где утекают деньги",
    text: "Разбираю вашу рекламу, нишу и конкурентов. Показываю конкретные дыры в бюджете — бесплатно.",
    accent: "primary",
    gradient: "from-primary/20 via-violet/10 to-transparent",
    lineColor: "from-primary to-violet",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Собираю стратегию под вас",
    text: "Аудитории, офферы, креативы — всё заточено под вашу цель. Никаких шаблонов «для всех».",
    accent: "violet",
    gradient: "from-violet/20 via-coral/10 to-transparent",
    lineColor: "from-violet to-coral",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Запускаю и тестирую за 48 часов",
    text: "Первые заявки — в течение недели. Слабые гипотезы отключаю мгновенно, рабочие — усиливаю.",
    accent: "coral",
    gradient: "from-coral/20 via-accent/10 to-transparent",
    lineColor: "from-coral to-accent",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Масштабирую прибыль",
    text: "Снижаю цену лида, увеличиваю бюджет. Каждую неделю — отчёт. Вы всегда в курсе.",
    accent: "accent",
    gradient: "from-accent/20 via-cyan/10 to-transparent",
    lineColor: "from-accent to-cyan",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-8 lg:px-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-3" />

      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-gradient-to-bl from-violet/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-gradient-to-tr from-accent/6 to-transparent rounded-full blur-3xl" />

      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-violet text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Как это работает
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 px-2">
            От аудита до потока клиентов — за 4 шага
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-body">
            Простой процесс с понятным результатом на каждом этапе
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-violet/20 to-accent/30 hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="group relative flex gap-5 sm:gap-8 items-start"
              >
                {/* Step number / icon */}
                <div className="relative z-10 shrink-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${s.gradient} border border-border/40 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm`}>
                    <s.icon className={`w-5 h-5 sm:w-7 sm:h-7 text-${s.accent}`} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-2">
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 p-5 sm:p-7 hover:border-primary/20 hover:shadow-card-hover transition-all duration-500 relative overflow-hidden">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${s.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />

                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold text-${s.accent} tracking-widest opacity-60`}>
                        ШАГ {s.step}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-body text-sm sm:text-[15px]">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
