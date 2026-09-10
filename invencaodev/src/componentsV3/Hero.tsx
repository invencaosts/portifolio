'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-background relative flex min-h-[85vh] flex-col justify-start overflow-hidden px-6 pt-24 pb-16 md:px-20 md:pt-32 lg:px-32 xl:px-40"
    >
      {/* Glow de Fundo */}
      <div className="bg-primary/5 absolute top-1/2 left-1/4 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[120px]"></div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="order-1 text-left lg:col-span-8 lg:pb-12">
          <div className="mb-6 flex items-center justify-start gap-4">
            <span className="text-primary bg-neutral/10 px-3 py-1 font-mono text-xs tracking-widest md:text-sm">
              v3.0.0_STABLE
            </span>
            <div className="bg-borderColor/30 h-[1px] w-12"></div>
          </div>

          <h1 className="font-headline text-foreground mb-8 text-4xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            GUILHERME
            <br />
            <span className="text-foreground/20 italic">DA_INVENÇÃO</span>
          </h1>

          <div className="font-headline text-primary min-h-[3em] text-lg tracking-tight uppercase sm:min-h-[1.5em] sm:text-xl md:text-2xl lg:text-3xl">
            <TypeAnimation
              sequence={[
                'Arquiteto de Sistemas',
                2000,
                'Engenheiro de Software',
                2000,
                'Desenvolvedor Full Stack',
                2000,
                'Pesquisador de Cibersegurança',
                2000,
                'Arquiteto de Sistemas & Engenheiro de Software',
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="group relative order-2 mt-8 flex justify-center lg:col-span-4 lg:mt-0 lg:justify-end">
          <div className="bg-neutral/10 border-borderColor/20 relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border shadow-2xl sm:max-w-[320px] lg:max-w-[420px]">
            <img
              alt="Retrato Profissional"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/MinhaFoto.jpg"
            />
            {/* Overlay de borda interna sutil */}
            <div className="border-background/5 pointer-events-none absolute inset-0 rounded-2xl border-[8px] md:border-[12px]"></div>

            {/* Overlay Técnico - Destaque Máximo */}
            <div className="bg-primary absolute right-4 bottom-4 z-10 rounded-md border border-white/20 px-3 py-2 text-right font-mono text-[9px] leading-tight font-bold text-white uppercase shadow-[0_10px_30px_rgba(255,49,49,0.5)] md:right-6 md:bottom-6 md:px-4 md:py-3 md:text-[11px] lg:px-3 lg:py-2 lg:text-[10px] xl:px-4 xl:py-3 xl:text-[11px]">
              <span className="mb-1 block inline-block bg-white/10 px-1 text-[7px] tracking-widest opacity-80 md:text-[9px] lg:text-[8px] xl:text-[9px]">
                LOCALIZAÇÃO_SISTEMA
              </span>
              <div className="flex flex-col">
                <span>LOC_ARACAJU_SE_BR</span>
                <span className="text-white/70">UTC-03:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
