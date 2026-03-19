import { useEffect, useState } from "react";
import { Play, Star, Tv, Smartphone, Download, Shield, ArrowRight, Film } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};

    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-accent rounded-lg flex items-center justify-center">
              <Icon name="Film" size={18} className="text-white" />
            </div>
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              ОнлайнКино
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как это работает
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Подписка
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all text-white">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white rounded-full hover:shadow-lg hover:shadow-red-600/40 transition-all font-semibold">
              Смотреть бесплатно
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Cinema background" className="w-auto h-3/4 object-contain opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-red-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Кино, сериалы и мультфильмы — в одном месте
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Смотри всё.
                </span>
                <br />
                <span className="text-accent">Всего за 70 ₽.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Тысячи фильмов, сериалов и мультфильмов без рекламы. Смотри на телевизоре, компьютере или телефоне — где угодно и когда угодно.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:shadow-2xl hover:shadow-red-600/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  <Icon name="Play" size={20} className="text-white" />
                  Начать смотреть
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition text-white" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Посмотреть каталог
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">10 000+</div>
                  <p className="text-sm text-white/60">Фильмов и сериалов</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">4K</div>
                  <p className="text-sm text-white/60">Качество картинки</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">70 ₽</div>
                  <p className="text-sm text-white/60">В месяц</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-accent/20 to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-full max-w-sm lg:max-w-md">
                <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-r from-red-600/20 to-accent/10 px-6 py-4 flex items-center gap-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-accent/60" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <span className="text-xs text-white/50">onlinekino.ru</span>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { title: "Интерстеллар", genre: "Фантастика", rating: "9.0" },
                      { title: "Игра в кальмара 2", genre: "Триллер", rating: "8.4" },
                      { title: "Один дома", genre: "Комедия", rating: "8.3" },
                    ].map((film, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-16 bg-gradient-to-br from-red-600/40 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-red-600/60 transition">
                          <Icon name="Film" size={20} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-white truncate">{film.title}</p>
                          <p className="text-xs text-white/50">{film.genre}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={12} className="text-accent fill-accent" />
                          <span className="text-xs text-accent font-bold">{film.rating}</span>
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-600/40 transition-all mt-2">
                      <Icon name="Play" size={16} className="text-white" />
                      Смотреть за 70 ₽/мес
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё включено
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Play",
                title: "Без рекламы",
                desc: "Смотри фильмы и сериалы без единого рекламного ролика — чистое удовольствие",
              },
              {
                icon: "Tv",
                title: "Full HD и 4K",
                desc: "Кристально чёткая картинка и объёмный звук для полного погружения",
              },
              {
                icon: "Smartphone",
                title: "Любое устройство",
                desc: "Телевизор, ноутбук, планшет или смартфон — смотри везде",
              },
              {
                icon: "Download",
                title: "Скачивай офлайн",
                desc: "Загружай фильмы и смотри в самолёте или метро без интернета",
              },
              {
                icon: "Star",
                title: "Новинки сразу",
                desc: "Свежие фильмы и сериалы добавляются еженедельно",
              },
              {
                icon: "Shield",
                title: "Безопасно для детей",
                desc: "Детский профиль с возрастными ограничениями и родительским контролем",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-accent/30 transition">
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Начало</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Три простых шага
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Регистрируйся", desc: "Создай аккаунт за 30 секунд — только email и пароль" },
              { num: "02", title: "Подключай", desc: "Оформи подписку за 70 ₽ — первые 7 дней бесплатно" },
              { num: "03", title: "Смотри", desc: "Открывай каталог и наслаждайся тысячами фильмов и сериалов" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Подписка</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Честная цена
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Стандарт",
                price: "70 ₽/мес",
                sub: "Первые 7 дней — бесплатно",
                features: ["10 000+ фильмов и сериалов", "Full HD качество", "2 устройства одновременно", "Скачивание офлайн", "Без рекламы"],
                highlight: false,
                btn: "Попробовать бесплатно",
              },
              {
                name: "Семейный",
                price: "150 ₽/мес",
                sub: "До 5 профилей",
                features: ["Всё из Стандарта", "4K Ultra HD", "5 устройств одновременно", "Детский профиль", "Приоритетная поддержка"],
                highlight: true,
                btn: "Оформить подписку",
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      {plan.highlight && (
                        <div className="mb-4 inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs font-medium text-accent">
                          Популярный выбор
                        </div>
                      )}
                      <h3 className="font-display font-bold text-2xl mb-1">{plan.name}</h3>
                      <p className="text-4xl font-black text-accent mb-1">{plan.price}</p>
                      <p className="text-sm text-white/50 mb-8">{plan.sub}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <Icon name="ArrowRight" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.highlight
                          ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-xl hover:shadow-red-600/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-white"
                      }`}
                    >
                      {plan.btn}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готов смотреть?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйся к тысячам зрителей, которые уже смотрят любимые фильмы и сериалы без рекламы.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:shadow-2xl hover:shadow-red-600/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            <Icon name="Play" size={20} className="text-white" />
            Начать бесплатно — 7 дней
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition text-white" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-accent rounded-md flex items-center justify-center">
              <Icon name="Film" size={13} className="text-white" />
            </div>
            <p>© 2025 ОнлайнКино — Смотри без ограничений</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Помощь
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
