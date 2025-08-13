// components/FooterCTA.tsx
import React from "react";
import Link from "next/link";

type FooterCTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const FooterCTA: React.FC<FooterCTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-20 px-4 gradient-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{description}</p>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 hover:scale-105 transition-transform shadow-button ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {buttonText}
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
        </Link>
      </div>
    </section>
  );
};

export default FooterCTA;
