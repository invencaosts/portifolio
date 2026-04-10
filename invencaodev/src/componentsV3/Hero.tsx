"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex flex-col justify-start pt-24 md:pt-32 pb-16 px-6 md:px-20 lg:px-32 xl:px-40 overflow-hidden bg-background">
      {/* Glow de Fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 lg:pb-12 text-left order-1">
          <div className="mb-6 flex items-center justify-start gap-4">
            <span className="font-mono text-primary text-xs md:text-sm tracking-widest bg-neutral/10 px-3 py-1">
              v3.0.0_STABLE
            </span>
            <div className="h-[1px] w-12 bg-borderColor/30"></div>
          </div>

          <h1 className="font-headline text-4xl sm:text-7xl md:text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground uppercase">
            GUILHERME<br />
            <span className="text-foreground/20 italic">DA_INVENÇÃO</span>
          </h1>

          <div className="font-headline text-lg sm:text-2xl md:text-3xl text-primary tracking-tight uppercase min-h-[3em] sm:min-h-[1.5em]">
            <TypeAnimation
              sequence={[
                "Arquiteto de Sistemas",
                2000,
                "Engenheiro de Software",
                2000,
                "Desenvolvedor Full Stack",
                2000,
                "Pesquisador de Cibersegurança",
                2000,
                "Arquiteto de Sistemas & Engenheiro de Software",
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="lg:col-span-4 relative group flex justify-center lg:justify-end order-2 mt-8 lg:mt-0">
          <div className="aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] bg-neutral/10 relative overflow-hidden border border-borderColor/20 rounded-2xl shadow-2xl">
            <img
              alt="Retrato Profissional"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/MinhaFoto.jpg"
            />
            {/* Overlay de borda interna sutil */}
            <div className="absolute inset-0 border-[8px] md:border-[12px] border-background/5 pointer-events-none rounded-2xl"></div>

            {/* Overlay Técnico - Destaque Máximo */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-mono text-[9px] md:text-[11px] font-bold text-white text-right leading-tight uppercase bg-primary px-3 py-2 md:px-4 md:py-3 rounded-md shadow-[0_10px_30px_rgba(255,49,49,0.5)] border border-white/20 z-10">
              <span className="opacity-80 block text-[7px] md:text-[9px] mb-1 tracking-widest bg-white/10 px-1 inline-block">LOCALIZAÇÃO_SISTEMA</span>
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
