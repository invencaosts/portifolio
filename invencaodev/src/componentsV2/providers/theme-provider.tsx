"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored) {
      applyTheme(stored);
      setThemeState(stored);
    }
  }, []);

  function applyTheme(theme: Theme) {
    const html = document.documentElement;

    html.classList.remove("light", "dark");

    if (theme === "light") html.classList.add("light");
    if (theme === "dark") html.classList.add("dark");
    // system → não adiciona nada (CSS decide)
  }

  function setTheme(theme: Theme) {
    setThemeState(theme);

    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }

    applyTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
