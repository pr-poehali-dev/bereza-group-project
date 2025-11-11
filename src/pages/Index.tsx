import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: "Home",
      title: "Полный ремонт квартир",
      description: "Комплексное преображение вашего пространства от демонтажа до финальной отделки"
    },
    {
      icon: "Building2",
      title: "Ремонт загородных домов",
      description: "Реализация проектов любой сложности с учетом архитектурных особенностей"
    },
    {
      icon: "Paintbrush",
      title: "Дизайнерская отделка",
      description: "Эксклюзивные решения с использованием премиальных материалов"
    },
    {
      icon: "Wrench",
      title: "Инженерные системы",
      description: "Современные коммуникации, отопление, вентиляция под ключ"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/5852ad39-5375-4f78-b4e3-80ef67c93900/files/fd67b988-56da-4662-8490-d9daf2b22d33.jpg",
      title: "Квартира в ЖК «Резиденция»",
      area: "120 м²",
      duration: "3 месяца"
    },
    {
      image: "https://cdn.poehali.dev/projects/5852ad39-5375-4f78-b4e3-80ef67c93900/files/538047af-7a75-4a5c-9ba1-9617089845af.jpg",
      title: "Пентхаус на Рублёвке",
      area: "250 м²",
      duration: "6 месяцев"
    },
    {
      image: "https://cdn.poehali.dev/projects/5852ad39-5375-4f78-b4e3-80ef67c93900/files/ed93910f-b368-44bc-92f0-72acb46819f0.jpg",
      title: "Загородный дом",
      area: "180 м²",
      duration: "4 месяца"
    }
  ];

  const testimonials = [
    {
      name: "Елена Соколова",
      text: "Превосходное качество работ! Команда выполнила всё точно в срок, с вниманием к каждой детали.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      text: "Профессионалы своего дела. Помогли с выбором материалов, учли все наши пожелания.",
      rating: 5
    },
    {
      name: "Анна Петрова",
      text: "Результат превзошёл ожидания. Квартира стала настоящим произведением искусства!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
            BEREZA GROUP
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-accent transition-colors">Портфолио</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-accent transition-colors">Отзывы</a>
            <Button className="bg-accent hover:bg-accent/90 text-white">Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
            Элегантность<br />в каждой детали
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексный ремонт квартир и домов премиум-класса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-primary animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 transition-all duration-300 cursor-pointer hover:shadow-xl border-2 ${
                  activeService === index ? 'border-accent shadow-xl scale-105' : 'border-transparent'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="mb-4 text-accent">
                  <Icon name={service.icon} size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-primary animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Ruler" size={16} />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-primary animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-primary animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
            Обсудим ваш проект
          </h2>
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block mb-2 text-sm font-medium">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-sm font-medium">Расскажите о вашем проекте</label>
              <textarea
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none"
                placeholder="Опишите ваши пожелания..."
              />
            </div>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
              Отправить заявку
            </Button>
          </Card>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">info@berezagroup.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Офис</p>
              <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>BEREZA GROUP</p>
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
