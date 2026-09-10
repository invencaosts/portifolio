'use client';

import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme } from '@/componentsV2/providers/theme-provider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  }

  const icon =
    theme === 'light' ? (
      <FiMoon className="h-6 w-6" />
    ) : theme === 'dark' ? (
      <FiMonitor className="h-6 w-6" />
    ) : (
      <FiSun className="h-6 w-6" />
    );

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Alternar tema"
      className="flex cursor-pointer items-center justify-center rounded-full transition-transform duration-700 ease-in-out outline-none hover:rotate-180 active:rotate-[360deg]"
    >
      <span key={theme} className="text-primary transition-transform duration-700">
        {icon}
      </span>
    </button>
  );
}
