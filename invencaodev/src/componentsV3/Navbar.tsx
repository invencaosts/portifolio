"use client";

import { useTheme } from "@/componentsV3/providers/theme-provider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-12 h-20 
      ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-borderColor" : "bg-transparent"}`}
    >
      <div className="font-headline font-bold text-foreground tracking-widest text-lg">
        INVENCÃO_DEV
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {[
          { name: "Início", href: "#inicio" },
          { name: "Sobre", href: "#sobre" },
          { name: "Experiência", href: "#experiencia" },
          { name: "Contato", href: "#contato" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-headline uppercase tracking-tighter text-sm text-foreground/70 hover:text-primary transition-all duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden lg:block font-headline uppercase tracking-tighter text-[10px] text-foreground/50">
          Status: Disponível
        </span>
        
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-neutral/10 transition-colors"
          title="Alternar Tema"
        >
          <span className="material-symbols-outlined text-sm">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        <button className="bg-primary text-white px-6 py-2 font-headline uppercase tracking-wider text-sm font-bold active:scale-95 transition-transform">
          Contato
        </button>
      </div>
    </nav>
  );
}
