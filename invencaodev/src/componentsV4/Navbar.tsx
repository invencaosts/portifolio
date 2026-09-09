"use client";

import { useTheme } from "@/componentsV4/providers/theme-provider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-12 h-20 
        ${scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 64 64" className="w-6 h-6 shrink-0" aria-hidden="true">
            <rect x="24" y="24" width="16" height="16" className="fill-primary" />
            <path
              d="M32 24 V14 M32 50 V40 M24 32 H14 M50 32 H40"
              className="stroke-foreground"
              strokeWidth="3.2"
              strokeLinecap="square"
              fill="none"
            />
            <rect x="12" y="12" width="4" height="4" className="fill-foreground" />
            <rect x="48" y="48" width="4" height="4" className="fill-foreground" />
          </svg>
          <div className="font-headline font-bold text-foreground tracking-widest text-lg">
            {"<invencaodev />"}
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono uppercase tracking-tighter text-sm text-foreground/70 hover:text-primary transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border border-borderColor/40 hover:border-primary/60 transition-all duration-300 transform active:scale-90"
            title="Alternar Tema"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5 text-primary" />
            ) : (
              <FiMoon className="w-5 h-5 text-primary" />
            )}
          </button>

          <Link
            href="#contato"
            className="hidden sm:inline-flex cursor-pointer bg-primary text-white px-6 py-2 font-headline uppercase tracking-wider text-sm font-bold border border-primary
            transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            Contato
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono uppercase tracking-widest text-2xl text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-primary text-white px-12 py-4 font-headline uppercase tracking-widest text-lg font-bold"
          >
            Contato
          </Link>
        </div>
      </div>
    </>
  );
}
