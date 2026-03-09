import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Айгерим К.",
    role: "Основатель онлайн-школы английского",
    text: "Честно, сначала сомневалась — до Арыстана работала с двумя таргетологами, и оба просто сливали бюджет. Здесь всё по-другому: каждую неделю отчёт с цифрами, я вижу стоимость каждой заявки. За первый месяц набрали полный поток — 48 учеников.",
    rating: 5,
    result: "48 учеников/мес",
  },
  {
    name: "Дамир Т.",
    role: "Владелец стоматологии, Алматы",
    text: "Мне важно было не просто «клики», а реальные записи на приём. Арыстан предложил стратегию — зашли через акцию на чистку, а дальше пациенты оставались на лечение. Конверсия в запись — 38%, это выше, чем я ожидал.",
    rating: 5,
    result: "Конверсия 38%",
  },
  {
    name: "Мадина С.",
    role: "Интернет-магазин корейской косметики",
    text: "Раньше продвигались только через reels и сарафанку. Решили попробовать таргет — и не пожалели. 270 заказов за первый месяц, окупаемость 3.1x. Арыстан не просто настроил рекламу, а помог переделать оффер.",
    rating: 4,
    result: "270 заказов, 3.1x",
  },
  {
    name: "Ержан М.",
    role: "Сеть автомоек, Астана",
    text: "У нас специфичный бизнес — локальный, с привязкой к району. Думал, таргет не для нас. Арыстан настроил гео-таргетинг, и за месяц мы получили 90+ новых клиентов. Стоимость привлечения — 800 тенге при среднем чеке 3 500.",
    rating: 5,
    result: "90+ клиентов",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2" />
      <div className="container-narrow relative">
        <div className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-primary/60 text-xs font-medium uppercase tracking-[0.25em] mb-4">Отзывы</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground text-base font-light">
            Реальные отзывы предпринимателей
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative premium-card p-8 sm:p-12 md:p-14">
            <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-8 h-8 sm:w-10 sm:h-10 text-primary/8" />

            <div className="relative pt-4 sm:pt-0">
              <div className="flex items-center gap-1.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-border"}`}
                  />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base mb-8 min-h-[100px] sm:min-h-[120px] font-light italic">
                "{review.text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="font-display text-foreground text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-light">{review.role}</div>
                </div>
                <div className="inline-block self-start sm:self-auto text-primary/80 text-[11px] font-medium px-4 py-2 rounded-full border border-primary/15 bg-primary/5 tracking-wider">
                  {review.result}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/30 bg-card/50 hover:bg-card hover:border-primary/20 flex items-center justify-center transition-all duration-500"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-700 ${
                    i === current ? "bg-primary w-8" : "bg-border/40 hover:bg-muted-foreground/30 w-1.5"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/30 bg-card/50 hover:bg-card hover:border-primary/20 flex items-center justify-center transition-all duration-500"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 premium-divider" />
    </section>
  );
};

export default ReviewsSection;
