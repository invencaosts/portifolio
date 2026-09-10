'use client';
import { useTheme } from '@/componentsV4/providers/theme-provider';
import { profile } from '@/content/profile';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
const links = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Experiência', href: '/#experiencia' },
  { name: 'Projetos', href: '/#projetos' },
  { name: 'Pesquisa & Formação', href: '/#pesquisa-formacao' },
  { name: 'Competências', href: '/#competencias' },
  { name: 'Contato', href: '/#contato' },
];
const radialItems = [
  ...links.map((l) => ({ name: l.name, href: l.href, external: false })),
  { name: 'Currículo', href: profile.cv, external: true },
];
const GAP = 46;
const STACK_OFFSET = 28;
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrolling(false), 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <nav
        aria-label="Navegação principal"
        className="bg-background/90 border-borderColor/15 fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b px-6 backdrop-blur-xl md:px-12"
      >
        <Link
          href="/#inicio"
          className="font-headline flex items-center gap-2 text-lg font-bold tracking-widest"
        >
          <Image src="/icon.svg" alt="" width={24} height={24} priority />
          {'<invencaodev />'}
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="text-foreground/70 hover:text-primary-text font-mono text-xs uppercase"
            >
              {l.name}
            </Link>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary font-headline inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider text-white uppercase"
          >
            Currículo <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Alternar tema"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="border-borderColor/40 border p-2"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>

      {open && <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="fixed right-4 bottom-6 z-50 h-14 w-14 lg:hidden">
        {radialItems.map((item, i) => {
          const ty = open ? -((i + 1) * GAP + STACK_OFFSET) : 0;
          const cls =
            'absolute bottom-0 right-0 h-10 min-w-[10.5rem] border border-borderColor border-l-[3px] border-l-primary bg-menu-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.45)] flex items-center justify-between gap-2 px-3.5 font-mono text-[11px] font-bold uppercase tracking-wide text-foreground hover:border-l-primary-text transition-all';
          const style = {
            transform: `translateY(${ty}px)`,
            opacity: open ? 1 : 0,
            pointerEvents: open ? ('auto' as const) : ('none' as const),
            transitionDelay: open ? `${i * 30}ms` : '0ms',
            transitionDuration: '220ms',
            transitionProperty: 'transform,opacity',
          };
          return item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cls}
              style={style}
            >
              {item.name} <FiArrowUpRight className="h-3 w-3 shrink-0" />
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cls}
              style={style}
            >
              {item.name}
            </Link>
          );
        })}
        <button
          ref={closeRef}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className={`bg-primary relative flex h-14 w-14 items-center justify-center text-white shadow-lg transition-opacity duration-300 ${open || scrolling ? 'opacity-100' : 'opacity-40'}`}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </>
  );
}
