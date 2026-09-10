import Link from 'next/link';
import { ReactNode } from 'react';

type GlowLinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  blank?: boolean;
};

export default function GlowLinkButton({
  href,
  children,
  className = '',
  blank = false,
}: GlowLinkButtonProps) {
  return (
    <Link
      href={href}
      target={blank ? '_blank' : undefined}
      rel={blank ? 'noopener noreferrer' : undefined}
      className={`bg-primary /* Glow vermelho em volta */ /* Brilho claro vindo de cima */ relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-sm text-white transition-all duration-300 before:absolute before:top-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:shadow-[0_0_15px_rgba(153,1,0,0.55)] hover:before:opacity-100 md:text-base ${className} `}
    >
      {children}
    </Link>
  );
}
