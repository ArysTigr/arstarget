import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Айгерим К.",
    role: "Основатель онлайн-школы английского",
    text: "Честно, сначала сомневалась — до Арыстана работала с двумя таргетологами, и оба просто сливали бюджет. Здесь всё по-другому: каждую неделю отчёт с цифрами, я вижу стоимость каждой заявки. За первый месяц набрали полный поток — 48 учеников. Не идеально всё было с первого дня, но Арыстан быстро тестировал гипотезы и нашёл то, что работает.",
    rating: 5,
    result: "48 учеников за месяц",
  },
  {
    name: "Дамир Т.",
    role: "Владелец стоматологии, Алматы",
    text: "Мне важно было не просто «клики», а реальные записи на приём. Арыстан предложил стратегию, которую я бы сам не придумал — зашли через акцию на чистку, а дальше пациенты оставались на лечение. Конверсия в запись — 38%, это выше, чем я ожидал. Единственное — хотелось бы чуть быстрее на старте, первая неделя ушла на тесты.",
    rating: 5,
    result: "Конверсия в запись 38%",
  },
  {
    name: "Мадина С.",
    role: "Интернет-магазин корейской косметики",
    text: "Раньше продвигались только через reels и сарафанку. Решили попробовать таргет — и не пожалели. 270 заказов за первый месяц, окупаемость 3.1x. Арыстан не просто настроил рекламу, а помог переделать оффер и посадочную. Сейчас масштабируем бюджет. Из минусов — иногда долго отвечает по вечерам, но результат перекрывает.",
    rating: 4,
    result: "270 заказов, ROI 3.1x",
  },
  {
    name: "Ержан М.",
    role: "Сеть автомоек, Астана",
    text: "У нас специфичный бизнес — локальный, с привязкой к району. Думал, таргет не для нас. Арыстан настроил гео-таргетинг по районам, и за месяц мы получили 90+ новых клиентов. Стоимость привлечения — 800 тенге, при среднем чеке 3 500. Работаем уже 4 месяца, стабильный поток.",
    rating: 5,
    result: "90+ клиентов по 800₸",
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
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block text-accent text-sm font-bold uppercase tracking-widest mb-3">Отзывы</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Реальные отзывы предпринимателей, с которыми я работаю
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-background rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />

            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-highlight fill-highlight" : "text-border"}`}
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed font-body text-[15px] mb-6 min-h-[120px]">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground font-body">{review.role}</div>
                </div>
                <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                  {review.result}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/60 bg-background hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/60 bg-background hover:bg-secondary flex items-center justify-center transition-colors"
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
