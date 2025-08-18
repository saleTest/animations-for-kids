import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Clock as LucideClock,
  Shield as LucideShield,
  Heart as LucideHeart,
  Star as LucideStar,
} from "lucide-react";
import FooterCTA from "@/components/Footer";
import HeroTitle from "@/components/HeroTitle";
import PlanningChecklist from "@/components/PlanningChecklist";
import LoyaltyProgram from "@/components/LoyaltyProgram";

export default function Home() {
  const services = [
    {
      title: "Profesionalni Animatori",
      description: "Iskusni animatori koji će učiniti vaš događaj nezaboravnim",
      // image: "/assets/animator-service-09G6_WEU.jpg",
      image:
        "https://img.freepik.com/free-vector/illustration-kids-concept_53876-26954.jpg?semt=ais_hybrid&w=740&q=80",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      gradient: "from-primary to-blue-500",
    },
    {
      title: "Tobogani",
      description: "Sigurna i zabavna oprema za sve uzraste",
      // image: "/assets/slides-service-Bq60fQl7.jpg",
      image:
        "https://img.freepik.com/free-vector/illustration-kids-concept_53876-26954.jpg?semt=ais_hybrid&w=740&q=80",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ),
      gradient: "from-accent to-pink-500",
    },
    {
      title: "Igračke i Igre",
      description: "Raznolike igračke i igre za nezaboravnu zabavu",
      // image: "/assets/toys-service-CDRqwSNj.jpg",
      image:
        "https://img.freepik.com/free-vector/illustration-kids-concept_53876-26954.jpg?semt=ais_hybrid&w=740&q=80",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M20 12h-8m0 0V4m0 8v8m8-4h-8" />
        </svg>
      ),
      gradient: "from-secondary to-yellow-500",
    },
  ];

  return (
    <section>
      <section className="relative h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--overlay)" }}
        ></div>
        <img
          // src="/assets/hero-image-COcV7XWY.jpg"
          src="https://img.freepik.com/free-vector/illustration-kids-concept_53876-26954.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Dječja zabava"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div
            className="flex justify-center mb-6 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles className="h-16 w-16 text-[var(--primary)] animate-pulse" />
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[var(--foreground)] fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Nezaboravne{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Proslave
            </span>
            <br />
            za Vašu Decu
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-[var(--muted)] max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Profesionalno iznajmljivanje animatora, tobogana i igračaka za
            rođendane i specijalne događaje
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-[var(--primary)] h-11 rounded-md px-8 text-white shadow-button button-glow"
            >
              Rezerviši Sada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/usluge"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-[var(--background)] h-11 rounded-md px-8 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              Pogledaj Usluge
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše Usluge</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sve što trebate za savršenu dječju proslavu na jednom mjestu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/60 rounded-lg text-card-foreground shadow-sm group hover:shadow-playful transition-all duration-300 hover:-translate-y-2 border-0"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <div className="p-6">
                  <div className="relative mb-4 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r ${service.gradient} text-white`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
            Naše Karakteristike
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🔒",
                title: "Sigurnost",
                text: "Vaša sigurnost nam je prioritet.",
              },
              {
                icon: "⏰",
                title: "Punktualnost",
                text: "Uvijek dolazimo na vrijeme.",
              },
              {
                icon: "💼",
                title: "Profesionalnost",
                text: "Stručni i pristojni u svakom trenutku.",
              },
              {
                icon: "⭐",
                title: "Kvalitet",
                text: "Uvijek pružamo vrhunski kvalitet.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 text-white text-3xl transition-transform hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="py-20">
          <HeroTitle
            title=""
            highlight="Alati za Savršenu Zabavu"
            description="Koristite naše alate za planiranje nezaboravne proslave"
          />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="px-4 mt-12 " data-aos="fade-up">
              <PlanningChecklist />
            </div>
            {/* <div className="px-4 mt-12" data-aos="fade-up">
              <LoyaltyProgram />
            </div> */}
          </div>
        </section>
      </section>
      <FooterCTA
        title="Spremni Za Nezaboravan Rođendan?"
        description="Kontaktirajte nas danas i rezervišite termin za vašu posebnu proslavu"
        buttonText="Kontaktiraj Nas"
        buttonLink="/kontakt"
      />
      {/* <section className="py-20 px-4 gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Spremni Za Nezaboravan Rođendan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktirajte nas danas i rezervišite termin za vašu posebnu
            proslavu
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 hover:scale-105 transition-transform shadow-button ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Kontaktiraj Nas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section> */}
    </section>
  );
}
