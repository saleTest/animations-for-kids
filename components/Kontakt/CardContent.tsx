"use client";
import { paketi } from "@/data/paketi";
import { format } from "date-fns";
import React, { useState } from "react";
import { Users, MapPin, Calendar, Send } from "lucide-react";
import { toast } from "react-toastify";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

function CardContent() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [location, setLocation] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const isTimeSlotAvailable = (time: string) => {
    const bookedSlots = ["10:00", "14:00"];
    return !bookedSlots.includes(time);
  };

  const handleBooking = () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !selectedPackage ||
      !contactName ||
      !contactPhone
    ) {
      //   showToast("Molimo popunite sva obavezna polja.");
      toast.error("Molimo popunite sva obavezna polja.");

      return;
    }

    const booking = {
      date: format(selectedDate, "dd.MM.yyyy"),
      time: selectedTime,
      package: paketi.find((pkg) => pkg.id === selectedPackage)?.naziv,
      guests: guestCount,
      location,
      contact: {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
      },
      created: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    existingBookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    // showToast(
    //   `Vaša rezervacija za ${booking.date} u ${booking.time} je zabeležena. Kontaktiraćemo vas uskoro.`
    // );
    toast.success(
      `Vaša rezervacija za ${booking.date} u ${booking.time} je zabeležena. Kontaktiraćemo vas uskoro.`
    );

    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedPackage("");
    setGuestCount("");
    setLocation("");
    setContactName("");
    setContactPhone("");
    setContactEmail("");
  };

  const selectedPackageData = paketi.find((pkg) => pkg.id === selectedPackage);

  return (
    <section className="space-y-6">
      {/* Odabir datuma */}
      <div className="space-y-2">
        <label>Datum događaja *</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
            placeholder="Izaberite datum"
            onFocus={(e) => {
              e.target.type = "date";
              e.target.showPicker?.(); // 👈 ovo forsira da se odmah otvori kalendar
            }}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text"; // vrati na text da se vidi placeholder
            }}
            onChange={(e) =>
              setSelectedDate(
                e.target.value ? new Date(e.target.value) : undefined
              )
            }
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             hover:border-blue-400 hover:shadow-sm transition"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
      {/* Odabir vremena */}
      <div className="space-y-2">
        <label>Vreme početka *</label>
        <div className="grid grid-cols-5 gap-2">
          {timeSlots.map((time) => {
            const available = isTimeSlotAvailable(time);
            return (
              <button
                key={time}
                type="button"
                onClick={() => available && setSelectedTime(time)}
                disabled={!available}
                className={`rounded-md border px-2 py-1 text-xs transition     ${
                  selectedTime === time
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:border-blue-400 hover:shadow-sm transition"
                } ${!available ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {time}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-gray-500">Sivi termini su već zauzeti</p>
      </div>

      {/* Odabir paketa */}
      <div className="space-y-2">
        <label>Paket usluga *</label>
        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Izaberite paket</option>
          {paketi.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.naziv} - {pkg.cena} KM
            </option>
          ))}
        </select>
      </div>

      {/* Broj gostiju */}
      <div className="space-y-2">
        <label htmlFor="guests">Broj dece</label>
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            id="guests"
            type="number"
            placeholder="npr. 10"
            min="1"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Lokacija */}
      <div className="space-y-2">
        <label htmlFor="location">Lokacija događaja</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            id="location"
            type="text"
            placeholder="Adresa ili naziv lokacije"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Kontakt informacije */}
      <div className="space-y-4">
        <h4 className="font-semibold">Kontakt informacije</h4>

        <div className="space-y-2">
          <label htmlFor="name">Ime i prezime *</label>
          <input
            id="name"
            type="text"
            placeholder="Vaše ime"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone">Telefon *</label>
          <input
            id="phone"
            type="tel"
            placeholder="+381 6X XXX XXX"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="vas@email.com"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="poruka" className="block text-sm font-medium">
          Dodatne Napomene
        </label>
        <textarea
          id="poruka"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="Opišite specifične zahteve ili pitanja..."
        />
      </div>

      {/* Rezime rezervacije */}
      {selectedDate && selectedTime && selectedPackageData && (
        <div className="rounded-lg bg-gray-100 p-4 space-y-2">
          <h4 className="font-semibold">Rezime rezervacije:</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Datum:</span>{" "}
              {format(selectedDate, "dd.MM.yyyy")}
            </p>
            <p>
              <span className="font-medium">Vreme:</span> {selectedTime}
            </p>
            <p>
              <span className="font-medium">Paket:</span>{" "}
              {selectedPackageData.naziv}
            </p>
            <p>
              <span className="font-medium">Cena:</span>{" "}
              {selectedPackageData.cena} KM
            </p>
            {guestCount && (
              <p>
                <span className="font-medium">Broj dece:</span> {guestCount}
              </p>
            )}
            {message && (
              <p>
                <span className="font-medium">Napomene:</span> {message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* <button
        onClick={handleBooking}
        className="w-full rounded-md bg-blue-600 px-3 py-3 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Potvrdi rezervaciju
      </button> */}

      <button
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
      >
        <Send className="h-5 w-5 mr-2" />
        Potvrdi rezervaciju
      </button>

      <p className="text-center text-xs text-gray-500">
        * Obavezna polja. Rezervacija će biti potvrđena nakon našeg poziva.
      </p>
    </section>
  );
}

export default CardContent;
