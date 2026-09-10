'use client';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => update();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: 'smooth' });
  };

  const arrowCls = (visible: boolean) =>
    `absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center border border-borderColor bg-menu-surface text-foreground/70 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] transition-all duration-200 hover:border-primary hover:text-primary-text ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`;

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        onScroll={update}
        className="scrollbar-hide flex snap-x gap-5 overflow-x-auto pb-2"
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scroll(-1)}
        className={`${arrowCls(canLeft)} left-0 -translate-x-1/2`}
      >
        <FiChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => scroll(1)}
        className={`${arrowCls(canRight)} right-0 translate-x-1/2`}
      >
        <FiChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
