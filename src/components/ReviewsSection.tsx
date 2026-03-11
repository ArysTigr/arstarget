import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Айгерим К.",
    role: "Онлайн-школа английского",
    text: "До Арыстана два таргетолога просто сливали деньги. Здесь — еженедельный отчёт, прозрачные цифры. За месяц набрали полный поток: 48 учеников. Наконец-то вижу, за что плачу.",
    rating: 5,
    result: "48 учеников/мес",
  },
  {
    name: "Дамир Т.",
    role: "Стоматология, Алматы",
    text: "Мне нужны были записи, а не клики. Зашли через акцию на чистку — пациенты остались на лечение. 38% заявок превратились в реальные записи. Расписание забито на 3 недели.",
    rating: 5,
    result: "38% конверсия",
  },
  {
    name: "Мадина С.",
    role: "Магазин корейской косметики",
    text: "Раньше — только Reels и сарафанное радио. Первый запуск таргета: 270 заказов, окупаемость ×3,1. Арыстан не просто настроил рекламу — переделал оффер, и всё полетело.",
    rating: 4,
    result: "270 заказов, ×3,1",
  },
  {
    name: "Ержан М.",
    role: "Сеть автомоек, Астана",
    text: "Думал, таргет не для локального бизнеса. Ошибался. Геотаргетинг и правильный оффер дали 90+ новых клиентов за месяц. Стоимость привлечения — 800 ₸ при среднем чеке 3 500 ₸.",
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
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-accent/80 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">Отзывы</span>
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-extrabold text-foreground mb-3">
            Им уже приносит деньги
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Слово тем, кто проверил на своём бизнесе
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative premium-card p-6 sm:p-10 md:p-12">
            <Quote className="absolute top-5 left-5 sm:top-8 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 text-violet/10" />

            <div className="relative pt-4 sm:pt-0">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-highlight fill-highlight" : "text-border"}`}
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed text-sm sm:text-base mb-6 min-h-[80px] sm:min-h-[100px]">
                «{review.text}»
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{review.role}</div>
                </div>
                <div className="inline-block self-start sm:self-auto bg-accent/8 text-accent text-xs font-bold px-4 py-2 rounded-full">
                  {review.result}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/40 bg-card hover:bg-secondary active:bg-muted flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "bg-gradient-to-r from-primary to-violet w-7" : "bg-border/60 hover:bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/40 bg-card hover:bg-secondary active:bg-muted flex items-center justify-center transition-all duration-300 shadow-sm"
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
