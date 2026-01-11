"use client";

import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "@/componentsV2/providers/theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  const icon =
    theme === "light" ? (
      <FiSun className="w-6 h-6" />
    ) : theme === "dark" ? (
      <FiMoon className="w-6 h-6" />
    ) : (
      <FiMonitor className="w-6 h-6" />
    );

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Alternar tema"
      className="
        flex items-center justify-center
        rounded-full
        transition-transform duration-700 ease-in-out
        hover:rotate-180
        active:rotate-[360deg]
        cursor-pointer
        outline-none
      "
    >
      <span
        key={theme}
        className="text-primary transition-transform duration-700"
      >
        {icon}
      </span>
    </button>
  );
}
