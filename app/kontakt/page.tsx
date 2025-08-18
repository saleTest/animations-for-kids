import HeroTitle from "@/components/HeroTitle";
import CardContent from "@/components/Kontakt/CardContent";
import CardHeader from "@/components/Kontakt/CardHeader";
import CardInformation from "@/components/Kontakt/CardInformation";
import React from "react";

function Kontakt() {
  return (
    <section>
      {/* Animacija za naslov */}
      <div data-aos="fade-up">
        <HeroTitle
          title="Kontaktirajte"
          highlight="Nas"
          description="Rezervišite termin za nezaboravnu proslavu"
        />
      </div>

      <section className="min-h-screen ">
        <div className="py-20 px-4 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Forma za kontakt */}
              <div
                className="bg-white rounded-2xl shadow-lg p-6  bg-white/80"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <CardHeader title="Rezervacija termina" />
                {/* <CardContent /> */}
                <CardContent />
              </div>

              {/* Informacije */}
              <div data-aos="fade-left" data-aos-delay="200">
                <CardInformation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Kontakt;
