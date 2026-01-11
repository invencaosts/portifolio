import Link from "next/link";
import { ReactNode } from "react";

type GlowLinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function GlowLinkButton({
  href,
  children,
  className = "",
}: GlowLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`
        relative
        inline-flex items-center justify-center
        overflow-hidden
        rounded-lg
        bg-primary
        px-4 py-2
        text-sm md:text-base text-white
        cursor-pointer

        transition-all duration-300

        /* Glow vermelho em volta */
        hover:shadow-[0_0_15px_rgba(153,1,0,0.55)]

        /* Brilho claro vindo de cima */
        before:absolute
        before:top-0
        before:left-0
        before:h-1/2
        before:w-full
        before:bg-gradient-to-b
        before:from-white/10
        before:to-transparent
        before:opacity-0
        before:transition-opacity
        before:duration-300

        hover:before:opacity-100

        ${className}
      `}
    >
      {children}
    </Link>
  );
}
