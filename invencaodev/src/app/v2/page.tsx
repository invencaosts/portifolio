import Link from "next/link";

import MobileMenu from "@/componentsV2/Menus/MobileMenu";
import DesktopMenu from "@/componentsV2/Menus/DesktopMenu";
import ThemeToggle from "@/componentsV2/ThemeToggle";

export default function V2() {
  return (
    <header className="w-full flex items-center justify-between p-4 md:px-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="">
          <p className="text-primary font-bold md:text-xl">
            &lt;invencaodev/&gt;
          </p>
        </Link>
      </div>

      {/* Ações (direita) */}
      <div className="flex items-center gap-4">
        {/* Toggle de tema */}
        <ThemeToggle />

        {/* Menu mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:block">
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
}
