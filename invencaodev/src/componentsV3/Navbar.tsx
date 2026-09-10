'use client';

import { useTheme } from '@/componentsV3/providers/theme-provider';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-50 flex h-20 w-full items-center justify-between px-6 transition-all duration-300 md:px-12 ${scrolled ? 'bg-background/80 backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="font-headline text-foreground text-lg font-bold tracking-widest">
          {'<invencaodev />'}
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-headline text-foreground/70 hover:text-primary text-sm tracking-tighter uppercase transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-neutral/10 transform rounded-full p-2 transition-all duration-300 active:scale-90"
            title="Alternar Tema"
          >
            {theme === 'dark' ? (
              <FiSun className="text-primary h-5 w-5" />
            ) : (
              <FiMoon className="text-primary h-5 w-5" />
            )}
          </button>

          <Link
            href="#contato"
            className="bg-primary font-headline hidden cursor-pointer px-6 py-2 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,49,49,0.4)] active:scale-95 sm:inline-flex"
          >
            Contato
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className="text-foreground p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`bg-background fixed inset-0 z-40 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-headline text-foreground/80 hover:text-primary text-2xl tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary font-headline mt-4 px-12 py-4 text-lg font-bold tracking-widest text-white uppercase"
          >
            Contato
          </Link>
        </div>
      </div>
    </>
  );
}
