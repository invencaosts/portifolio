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
      <FiSun className="w-4 h-4" />
    ) : theme === "dark" ? (
      <FiMoon className="w-4 h-4" />
    ) : (
      <FiMonitor className="w-4 h-4" />
    );

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Alternar tema"
      className="
        flex items-center justify-center
        rounded-full
        transition-transform duration-500 ease-in-out
        hover:rotate-180
        active:rotate-[360deg]
      "
    >
      <span key={theme} className="transition-transform duration-500">
        {icon}
      </span>
    </button>
  );
}
