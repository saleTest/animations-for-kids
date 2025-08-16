"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { useToastNotification } from "@/hooks/useToastNotification";

const CardContent = () => {
  const { showToast, Toast } = useToastNotification();

  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    email: "",
    datum: "",
    vreme: "",
    lokacija: "",
    brojDece: "",
    uzrast: "",
    paket: "",
    poruka: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Zahtev poslat! Kontaktiraćemo vas ubrzo.");
    setFormData({
      ime: "",
      telefon: "",
      email: "",
      datum: "",
      vreme: "",
      lokacija: "",
      brojDece: "",
      uzrast: "",
      paket: "",
      poruka: "",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ime" className="block text-sm font-medium">
              Ime i Prezime *
            </label>
            <input
              id="ime"
              value={formData.ime}
              onChange={(e) => handleInputChange("ime", e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="telefon" className="block text-sm font-medium">
              Telefon *
            </label>
            <input
              id="telefon"
              type="tel"
              value={formData.telefon}
              onChange={(e) => handleInputChange("telefon", e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="datum" className="block text-sm font-medium">
              Datum Proslave *
            </label>
            <input
              id="datum"
              type="date"
              value={formData.datum}
              onChange={(e) => handleInputChange("datum", e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="vreme" className="block text-sm font-medium">
              Vreme
            </label>
            <input
              id="vreme"
              type="time"
              value={formData.vreme}
              onChange={(e) => handleInputChange("vreme", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lokacija" className="block text-sm font-medium">
            Lokacija *
          </label>
          <input
            id="lokacija"
            value={formData.lokacija}
            onChange={(e) => handleInputChange("lokacija", e.target.value)}
            required
            className="mt-1 w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Broj dece</label>
            <select
              value={formData.brojDece}
              onChange={(e) => handleInputChange("brojDece", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            >
              <option value="">Odaberite broj</option>
              <option value="5-10">5-10 deteta</option>
              <option value="10-15">10-15 deteta</option>
              <option value="15-20">15-20 deteta</option>
              <option value="20-25">20-25 deteta</option>
              <option value="25+">25+ deteta</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Uzrast Dece</label>
            <select
              value={formData.uzrast}
              onChange={(e) => handleInputChange("uzrast", e.target.value)}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            >
              <option value="">Odaberite uzrast</option>
              <option value="3-5">3-5 godina</option>
              <option value="6-8">6-8 godina</option>
              <option value="9-12">9-12 godina</option>
              <option value="mixed">Mešano</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Željeni Paket</label>
          <select
            value={formData.paket}
            onChange={(e) => handleInputChange("paket", e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2"
          >
            <option value="">Odaberite paket</option>
            <option value="osnovni">Osnovni Paket (150 EUR)</option>
            <option value="premium">Premium Paket (280 EUR)</option>
            <option value="deluxe">Deluxe Paket (450 EUR)</option>
            <option value="custom">Prilagođen Paket</option>
          </select>
        </div>

        <div>
          <label htmlFor="poruka" className="block text-sm font-medium">
            Dodatne Napomene
          </label>
          <textarea
            id="poruka"
            value={formData.poruka}
            onChange={(e) => handleInputChange("poruka", e.target.value)}
            rows={4}
            className="mt-1 w-full border rounded-lg px-3 py-2"
            placeholder="Opišite specifične zahteve ili pitanja..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
        >
          <Send className="h-5 w-5 mr-2" />
          Pošalji Zahtev
        </button>
      </form>
      <Toast />
    </>
  );
};

export default CardContent;
