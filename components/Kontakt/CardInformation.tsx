import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function CardInformation() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+387 33 123 456",
      link: "tel:+38733123456",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@zabavazadecu.com",
      link: "mailto:info@zabavazadecu.com",
    },
    {
      icon: MapPin,
      title: "Adresa",
      content: "Nis, Republika Srbija",
      link: null,
    },
    {
      icon: Clock,
      title: "Radno Vreme",
      content: "Pon-Pet: 8:00-20:00\nSub-Ned: 9:00-18:00",
      link: null,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-primary hover:underline">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
          <h2 className="text-xl font-bold">Zašto Odabrati Nas?</h2>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <span>Licencirani i iskusni animatori</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <span>Sigurna i proverena oprema</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <span>Fleksibilni termini i lokacije</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <span>Prilagođeni paketi</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
            <span>5+ godina iskustva</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardInformation;
