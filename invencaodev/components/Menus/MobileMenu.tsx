"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden relative">
      {/* Botão do menu com animação */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 text-secundary hover:text-primary focus:outline-none transition-transform duration-300 ${
          isOpen ? "-rotate-90" : "rotate-0"
        }`}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Menu lateral compacto */}
      <div
        className={`fixed top-18 right-4 z-50 flex flex-col items-center bg-tertiary shadow-xl rounded-lg p-4 w-32 
          transform transition-transform duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-4 opacity-0 invisible"
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
                href="#projetos"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">03.</p>Projetos
              </Link>
            </li>
            <li>
              <Link
                className="flex items-baseline gap-1"
                href="#contato"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-primary text-xs">04.</p>Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
