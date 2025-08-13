import FooterCTA from "@/components/Footer";
import { Check, Sparkles, Star } from "lucide-react";
import Link from "next/link";

interface Paket {
  naziv: string;
  opis: string;
  cijena: string;
  trajanje: string;
  popularno?: boolean;
  bojaIkone: string; // Tailwind klasa za gradient
  stavke: string[];
  link: string;
}

const paketi: Paket[] = [
  {
    naziv: "Osnovna Ponuda",
    opis: "Savršena za manje proslave",
    cijena: "150 EUR",
    trajanje: "/ 2 sata",
    bojaIkone: "from-blue-500 to-blue-600",
    stavke: [
      "Jedan profesionalni animator",
      "Organizovane igre i aktivnosti",
      "Farbanje lica",
      "Baloni i osnovne dekoracije",
      "Muzika i animacija",
    ],
    link: "/kontakt",
  },
  {
    naziv: "Premium Ponuda",
    opis: "Najpopularniji izbor",
    cijena: "280 EUR",
    trajanje: "/ 3 sata",
    popularno: true,
    bojaIkone: "from-primary to-purple-600",
    stavke: [
      "Dva profesionalna animatora",
      "Tobogan",
      "Farbanje lica i tetoviranje",
      "Pravljenje balona",
      "Igre i takmičenja",
      "Dekoracija prostora",
      "Muzika i DJ",
    ],
    link: "/kontakt",
  },
  {
    naziv: "Luksuzna Ponuda",
    opis: "Za nezaboravne događaje",
    cijena: "450 EUR",
    trajanje: "/ 4 sata",
    bojaIkone: "from-accent to-pink-600",
    stavke: [
      "Tri profesionalna animatora",
      "Tobogan ",
      "Profesionalno farbanje lica",
      "Baloni po želji",
      "Igre, takmičenja i nagrade",
      "Potpuna dekoracija prostora",
      "DJ i profesionalno ozvučenje",
    ],
    link: "/kontakt",
  },
];

export default function Usluge() {
  return (
    <section>
      <section
        className="py-16 px-4 "
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Ikonica */}
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[var(--primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </div>

          {/* Naslov */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Naše{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Usluge
            </span>
          </h1>

          {/* Opis */}
          <p className="text-xl text-[var(--muted-foreground)]">
            Odaberite savršen paket za vašu proslavu
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {paketi.map((paket, idx) => (
              <div
                key={idx}
                className={`rounded-lg bg-card text-card-foreground shadow-sm relative group hover:shadow-playful transition-all duration-300 hover:-translate-y-2 gradient-card border-0 overflow-visible flex flex-col h-full ${
                  paket.popularno ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {paket.popularno && (
                  <div
                    className="inline-flex items-center rounded-full text-xs font-semibold absolute bg-purple-600 -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 shadow-md"
                    // style={{ background: "var(--primary)" }}
                  >
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
                      {paket.cijena}
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
                        : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
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
