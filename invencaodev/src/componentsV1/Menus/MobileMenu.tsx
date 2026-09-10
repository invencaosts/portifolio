'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative md:hidden">
      {/* Botão do menu com animação */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-secundary hover:text-primary p-2 transition-transform duration-300 focus:outline-none ${
          isOpen ? '-rotate-90' : 'rotate-0'
        }`}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Menu lateral compacto */}
      <div
        className={`bg-tertiary fixed top-18 right-4 z-50 flex w-32 w-[180px] transform flex-col items-center rounded-lg p-4 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        {/* Conteúdo do menu */}
        <nav className="mt-4">
          <ul className="space-y-4 text-left">
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">01.</p>Home
              </Link>
            </li>
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#sobre"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">02.</p>Sobre
              </Link>
            </li>
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#experiencia"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">03.</p>Experiência
              </Link>
            </li>
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#projetos"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">04.</p>Projetos
              </Link>
            </li>
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#contato"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">05.</p>Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
