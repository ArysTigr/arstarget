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
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2" />
      <div className="container-narrow relative">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3">Отзывы</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-2 sm:mb-3">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-body">
            Реальные отзывы предпринимателей
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/60 p-5 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 text-violet/15" />

            <div className="relative pt-4 sm:pt-0">
              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < review.rating ? "text-highlight fill-highlight" : "text-border"}`}
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed font-body text-sm sm:text-[15px] mb-5 sm:mb-6 min-h-[100px] sm:min-h-[120px]">
                "{review.text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body">{review.role}</div>
                </div>
                <div className="inline-block self-start sm:self-auto bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                  {review.result}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/60 bg-background hover:bg-secondary active:bg-muted flex items-center justify-center transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gradient-to-r from-primary to-violet w-6" : "bg-border hover:bg-muted-foreground/30 w-2.5"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/60 bg-background hover:bg-secondary active:bg-muted flex items-center justify-center transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
