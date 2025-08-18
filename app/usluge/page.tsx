import FooterCTA from "@/components/Footer";
import HeroTitle from "@/components/HeroTitle";
import { paketi } from "@/data/paketi";
import { Check, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function Usluge() {
  return (
    <section>
      <div data-aos="fade-up">
        <HeroTitle
          title="Naše"
          highlight="Usluge"
          description="Odaberite savršen paket za vašu proslavu"
        />
      </div>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {paketi.map((paket, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-white/60 text-card-foreground shadow-sm relative group hover:shadow-playful transition-all duration-300 hover:-translate-y-2 gradient-card border-0 overflow-visible flex flex-col h-full ${
                  paket.popularno ? "ring-2 ring-primary scale-105" : ""
                }`}
                data-aos="zoom-in"
                data-aos-delay={idx * 150} // Efekat jedan po jedan
              >
                {paket.popularno && (
                  <div className="inline-flex items-center rounded-full text-xs font-semibold absolute bg-purple-600 -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 shadow-md">
                    <Star className="w-4 h-4 mr-1" /> Najpopularniji
                  </div>
                )}
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${paket.bojaIkone} flex items-center justify-center`}
                  >
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="tracking-tight text-2xl font-bold">
                    {paket.naziv}
                  </h3>
                  <p className="text-muted-foreground">{paket.opis}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {paket.cena}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {paket.trajanje}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <ul className="space-y-3 mb-6">
                    {paket.stavke.map((stavka, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{stavka}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={paket.link}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full h-10 px-4 py-2 transition-colors ${
                      paket.popularno
                        ? "bg-purple-600 hover:bg-purple/80 text-white shadow-button"
                        : "bg-white/60 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Rezerviši {paket.naziv}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        title="Pridružite Nam Se Danas"
        description="Saznajte više o našim uslugama i prijavite se za besplatnu konsultaciju"
        buttonText="Kontaktiraj Nas"
        buttonLink="/kontakt"
      />
    </section>
  );
}
