'use client';

import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from 'react-icons/hi2';

import GlowLinkButton from '@/componentsV2/GlowLinkButton';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const menuIcon = isOpen ? (
    <HiMiniBars3BottomRight className="h-6 w-6" />
  ) : (
    <HiMiniBars3BottomLeft className="h-6 w-6" />
  );

  return (
    <div className="relative w-full">
      {/* Header (botões) */}
      <div className="flex items-center justify-end">
        {/* Toggle Menu */}
        <button
          onClick={handleToggleMenu}
          aria-label="Abrir menu"
          className="flex cursor-pointer items-center justify-center rounded-full transition-transform duration-600 ease-in-out active:scale-90"
        >
          {menuIcon}
        </button>
      </div>

      {isOpen && (
        <nav className="bg-background fixed top-[3.5rem] left-0 z-[9999] min-h-[19rem] w-full border-t-2 border-[var(--borderColor)] p-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-end text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#sobre"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#projetos"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#habilidades"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Habilidades
              </a>
            </li>

            <li>
              <a
                href="#conquistas"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Conquistas
              </a>
            </li>

            <li>
              <a
                href="#contato"
                className="hover:text-primary cursor-pointer opacity-80 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>

          <div className="mt-4 text-end">
            <GlowLinkButton
              blank={true}
              href="https://drive.google.com/file/d/1UEqj05hKkTWgyKCU0T_nIwsj4kMdqcBT/view?usp=sharing"
            >
              Currículo
            </GlowLinkButton>
          </div>
        </nav>
      )}
    </div>
  );
}
