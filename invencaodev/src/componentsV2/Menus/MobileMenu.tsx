"use client";

import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
// import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from "react-icons/hi2";

import { useTheme } from "@/componentsV2/providers/theme-provider";

export default function MobileMenu() {
  const { theme, setTheme } = useTheme();

  function handleToggle() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  const icon =
    theme === "light" ? (
      <FiSun />
    ) : theme === "dark" ? (
      <FiMoon />
    ) : (
      <FiMonitor />
    );

  return (
    <div className="flex gap-4 items-center justify-center">
      {/* Toggle Theme */}
      <button
        onClick={handleToggle}
        aria-label="Alternar tema"
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          transition-transform duration-600 ease-in-out
          hover:rotate-180
          active:rotate-[360deg]
        "
      >
        <span
          key={theme}
          className="transition-transform duration-600 rotate-0"
        >
          {icon}
        </span>
      </button>

      {/* Menu
      <button aria-label="Abrir menu">
        <HiMiniBars3BottomLeft />
      </button> */}
    </div>
  );
}
