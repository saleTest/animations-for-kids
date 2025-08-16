"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // za aktivni link
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Početna", href: "/" },
    { name: "Usluge", href: "/usluge" },
    { name: "Galerija", href: "/galerija" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[var(--background)]/70 backdrop-blur-sm border-b border-[var(--border)] z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 stroke-[var(--primary)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Zabava Za Decu
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors
                    ${
                      isActive ? "text-[var(--primary)]" : "text-[var(--muted)]"
                    }
                    hover:text-[var(--primary)]
                  `}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link href="/kontakt">
              <button className="h-9 rounded-md px-3 bg-[var(--primary)] text-white hover:bg-[var(--accent)] shadow-button">
                Rezerviši Sada
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium hover:bg-[var(--accent)] hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 stroke-[var(--primary)]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium
                    ${
                      isActive ? "text-[var(--primary)]" : "text-[var(--muted)]"
                    }
                    hover:text-[var(--primary)] hover:bg-[var(--accent)]/10
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/kontakt">
              <button className="w-full h-9 rounded-md px-3 bg-[var(--primary)] text-white hover:bg-[var(--accent)] shadow-button">
                Rezerviši Sada
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
