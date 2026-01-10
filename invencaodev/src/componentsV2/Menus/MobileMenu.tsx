"use client";

import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from "react-icons/hi2";

import GlowLinkButton from "@/componentsV2/GlowLinkButton";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const menuIcon = isOpen ? (
    <HiMiniBars3BottomRight className="w-4 h-4" />
  ) : (
    <HiMiniBars3BottomLeft className="w-4 h-4" />
  );

  return (
    <div className="relative w-full">
      {/* Header (botões) */}
      <div className="flex items-center justify-end ">
        {/* Toggle Menu */}
        <button
          onClick={handleToggleMenu}
          aria-label="Abrir menu"
          className="
            flex items-center justify-center
            rounded-full
            transition-transform duration-300 ease-in-out
            active:scale-90
            cursor-pointer
          "
        >
          {menuIcon}
        </button>
      </div>

      {isOpen && (
        <nav
          className="
            fixed
            top-[3.5rem] left-0
            w-full
            min-h-[calc(75rem-100vh)]
            bg-background
            border-t-2 border-[var(--borderColor)]
            shadow-lg
            p-4
            z-[9999]"
        >
          <ul className="flex flex-col gap-4 text-sm">
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Home
            </li>
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Sobre
            </li>
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Projetos
            </li>
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Habilidades
            </li>
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Conquistas
            </li>
            <li className="opacity-80 cursor-pointer hover:text-primary">
              Contato
            </li>
          </ul>

          <div className="mt-4">
            <GlowLinkButton href="/curriculo">Currículo</GlowLinkButton>
          </div>
        </nav>
      )}
    </div>
  );
}
