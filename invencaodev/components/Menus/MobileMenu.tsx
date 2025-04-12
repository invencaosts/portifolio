"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      {/* Botão do menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-secundary hover:text-primary focus:outline-none"
        aria-label="Abrir menu"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* Overlay para o menu Lateral */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Menu lateral */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-tertiary shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Botão de fechar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-secundary hover:text-primary focus:outline-none"
            aria-label="Fechar menu"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Conteúdo do menu */}
          <nav className="mt-16 px-4">
            <ul className="space-y-4">
              <li>
                <Link className="flex items-baseline gap-1" href="#home">
                  <p className="text-primary text-xs">01.</p>Home
                </Link>
              </li>
              <li>
                <Link className="flex items-baseline gap-1" href="#sobre">
                  <p className="text-primary text-xs">02.</p>Sobre
                </Link>
              </li>
              <li>
                <Link className="flex items-baseline gap-1" href="#projetos">
                  <p className="text-primary text-xs">03.</p>Projetos
                </Link>
              </li>
              <li>
                <Link className="flex items-baseline gap-1" href="#contato">
                  <p className="text-primary text-xs">04.</p>Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
