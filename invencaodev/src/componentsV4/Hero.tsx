"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex flex-col justify-start pt-24 md:pt-32 pb-16 px-6 md:px-20 lg:px-32 xl:px-40 overflow-hidden bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 lg:pb-12 text-left order-1">
          <div className="mb-6 flex items-center justify-start gap-3 font-mono text-primary-text text-xs md:text-sm">
            <span>guilherme@invencaodev:~$</span>
            <span className="text-foreground/60">whoami</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[0.95] mb-8 text-foreground uppercase">
            GUILHERME<br />
            <span className="text-foreground/25">DA_INVENÇÃO</span>
          </h1>

          <div className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-primary-text tracking-tight uppercase min-h-[3em] sm:min-h-[1.5em] flex items-center">
            <span className="text-foreground/40 mr-2">&gt;</span>
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

          <div className="mt-10 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
            <span className="border border-primary text-primary-text px-3 py-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary animate-cursor"></span>
              Disponível
            </span>
            <span className="border border-borderColor/40 text-foreground/50 px-3 py-1.5">Aracaju_SE_BR</span>
            <span className="border border-borderColor/40 text-foreground/50 px-3 py-1.5">UTC-03:00</span>
          </div>
        </div>

        <div className="lg:col-span-4 relative flex justify-center lg:justify-end order-2 mt-8 lg:mt-0">
          <div className="aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] bg-neutral relative overflow-hidden border border-foreground/80">
            <Image
              alt="Guilherme da Invenção palestrando sobre desenvolvimento de sistemas, Engenheiro de Software especializado em sistemas críticos e segurança da informação"
              className="object-cover grayscale-[15%]"
              src="/MinhaFoto.jpg"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 280px"
            />

            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-background/90 border-b border-foreground/80 font-mono text-[9px] uppercase tracking-widest text-foreground/60">
              <span>IMG_001.JPG</span>
              <span className="text-primary-text">●REC</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 font-mono text-[9px] md:text-[10px] font-bold text-white uppercase bg-primary px-3 py-2.5 border-t border-foreground/80">
              <div className="flex justify-between opacity-90">
                <span>LOC_ARACAJU_SE_BR</span>
                <span>UTC-03:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
