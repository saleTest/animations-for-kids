"use client";
import React, { useState } from "react";

function Galerija() {
  // Gallery categories
  const categories = ["Sve", "Proslave", "Muzika", "Dekoracija"];

  // Sample gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      category: "Proslave",
      title: "Rođendanska proslava",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      category: "Muzika",
      title: "DJ nastup",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      category: "Dekoracija",
      title: "Cvetna dekoracija",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      category: "Proslave",
      title: "Venčanje",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      category: "Muzika",
      title: "Živi bend",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1561484930-974554019ade",
      category: "Dekoracija",
      title: "Stolnjaci",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      category: "Proslave",
      title: "Korporativno okupljanje",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      category: "Muzika",
      title: "DJ nastup",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      category: "Dekoracija",
      title: "Svečana dekoracija",
    },
  ];

  // State for active category and selected image
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "Sve"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Function to open lightbox
  interface GalleryImage {
    id: number;
    src: string;
    category: string;
    title: string;
  }

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

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
            Galerija{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Uspomena
            </span>
          </h1>

          {/* Opis */}
          <p className="text-xl text-[var(--muted-foreground)]">
            Pogledajte najljepše momente sa naših proslava
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Naša <span className="text-[#8B5CF6]">Galerija</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pogledajte fotografije sa naših proslava i događaja koje smo
              organizovali
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#8B5CF6] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border  border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid relative group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-2xl">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-6xl w-full max-h-[90vh]">
                <button
                  className="absolute top-4 right-4  text-white bg-black/50 rounded-full p-2 z-10"
                  onClick={closeLightbox}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[90vh]  w-auto mx-auto object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center  text-white">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-10">
            <button className="bg-[#8B5CF6] hover:bg-[#7c4fe0] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1">
              Učitaj još slika
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Galerija;
