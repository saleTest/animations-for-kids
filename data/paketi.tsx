interface Paket {
  id?: string; // ID je opcionalan za pakete koji se ne koriste u ruti
  naziv: string;
  opis: string;
  cena: string;
  trajanje: string;
  popularno?: boolean;
  bojaIkone: string; // Tailwind klasa za gradient
  stavke: string[];
  link: string;
}

export const paketi: Paket[] = [
  {
    id: "osnovna",
    naziv: "Osnovna Ponuda",
    opis: "Savršena za manje proslave",
    cena: "150 EUR",
    trajanje: "/ 2 sata",
    bojaIkone: "from-blue-500 to-blue-600",
    stavke: [
      "Jedan profesionalni animator",
      "Organizovane igre i aktivnosti",
      "Slikanje lica",
      "Baloni i osnovne dekoracije",
      "Muzika i animacija",
    ],
    link: "/kontakt",
  },
  {
    id: "premium",
    naziv: "Premium Ponuda",
    opis: "Najpopularniji izbor",
    cena: "280 EUR",
    trajanje: "/ 3 sata",
    popularno: true,
    bojaIkone: "from-primary to-purple-600",
    stavke: [
      "Dva profesionalna animatora",
      "Tobogan",
      "Slikanje lica i tetoviranje",
      "Pravljenje balona",
      "Igre i takmičenja",
      "Dekoracija prostora",
      "Muzika i DJ",
    ],
    link: "/kontakt",
  },
  {
    id: "luksuzna",
    naziv: "Luksuzna Ponuda",
    opis: "Za nezaboravne događaje",
    cena: "450 EUR",
    trajanje: "/ 4 sata",
    bojaIkone: "from-accent to-pink-600",
    stavke: [
      "Tri profesionalna animatora",
      "Tobogan ",
      "Profesionalno slikanje lica",
      "Baloni po želji",
      "Igre, takmičenja i nagrade",
      "Potpuna dekoracija prostora",
      "DJ i profesionalno ozvučenje",
    ],
    link: "/kontakt",
  },
];
