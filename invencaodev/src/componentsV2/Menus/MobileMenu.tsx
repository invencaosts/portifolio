"use client";

import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from "react-icons/hi2";

import ThemeToggle from "@/componentsV2/ThemeToggle";

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
      <div className="flex items-center justify-end gap-4 px-4 py-3">
        <ThemeToggle />

        {/* Toggle Menu */}
        <button
          onClick={handleToggleMenu}
          aria-label="Abrir menu"
          className="
            flex items-center justify-center
            rounded-full
            transition-transform duration-300 ease-in-out
            active:scale-90
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
            border-b border-[var(--border)]
            shadow-lg
            px-6 py-6
            z-[9999]"
        >
          <ul className="space-y-4 text-sm">
            <li className="opacity-80">Home</li>
            <li className="opacity-80">Sobre</li>
            <li className="opacity-80">Projetos</li>
            <li className="opacity-80">Habilidades</li>
            <li className="opacity-80">Conquistas</li>
            <li className="opacity-80">Contato</li>
          </ul>

          <div className="mt-6">
            <button className="rounded-lg bg-primary px-4 py-2 text-white text-sm">
              Resume
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
