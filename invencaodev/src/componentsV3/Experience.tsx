import React from 'react';
import Image from 'next/image';
import {
  FiMap,
  FiZap,
  FiShield,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiCode,
  FiLayers,
  FiLock,
} from 'react-icons/fi';

const experiences = [
  {
    year: '03/2026 — Atual',
    company: 'WM Saúde - Gestão e Tecnologia',
    role: 'Engenheiro de Software',
    description: [
      {
        icon: 'code',
        text: 'Desenvolvimento e manutenção em sistema de alta criticidade para o setor da Saúde',
      },
      {
        icon: 'layers',
        text: 'Migração de arquitetura legada para uma arquitetura escalável e resiliente',
      },
      {
        icon: 'security',
        text: 'Implementação de protocolos de segurança e conformidade de dados sensíveis.',
      },
    ],
    logo: '/images/wm_sade_logo.jpeg',
  },
  {
    year: '12/2025 — 03/2026',
    company: 'WM Saúde - Gestão e Tecnologia',
    role: 'Estágio em engenharia de software',
    description: [
      { icon: 'database', text: 'Manutenção de sistemas para o setor de saúde.' },
      { icon: 'memory', text: 'Desenvolvimento de automações para otimização de processos.' },
      {
        icon: 'cloud_done',
        text: 'Manutenção em servidores para garantir a disponibilidade dos sistemas em todo momento.',
      },
    ],
    logo: '/images/wm_sade_logo.jpeg',
  },
  {
    year: '06/2025 — 06/2026',
    company: 'CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico',
    role: 'Engenheiro de Software',
    description: [
      {
        icon: 'map',
        text: 'Desenvolvimento de uma aplicação para mapeamento de terras indígenas griladas.',
      },
      {
        icon: 'bolt',
        text: 'Otimização de consultas SQL e criação de índices para melhorar a performance da aplicação.',
      },
      {
        icon: 'shield',
        text: 'Implementação de protocolos de segurança e conformidade de dados sensíveis.',
      },
    ],
    logo: '/images/cnpq_logo.jpeg',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  map: <FiMap className="h-4 w-4" />,
  bolt: <FiZap className="h-4 w-4" />,
  shield: <FiShield className="h-4 w-4" />,
  database: <FiDatabase className="h-4 w-4" />,
  memory: <FiCpu className="h-4 w-4" />,
  cloud_done: <FiCloud className="h-4 w-4" />,
  code: <FiCode className="h-4 w-4" />,
  layers: <FiLayers className="h-4 w-4" />,
  security: <FiLock className="h-4 w-4" />,
};

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-neutral/5 overflow-hidden px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline text-primary mb-16 flex items-center gap-3 text-sm tracking-[0.3em] uppercase md:mb-24">
          <span className="bg-primary h-2 w-2 animate-pulse"></span>
          TRAJETÓRIA_PROFISSIONAL
        </h2>

        {/* Experience Timeline Grid */}
        <div className="relative">
          {/* Central Timeline Path (The Crimson Thread) */}
          <div className="bg-primary/20 absolute top-0 bottom-0 left-0 w-[2px] shadow-[0_0_15px_rgba(255,49,49,0.2)] md:left-1/2 md:-translate-x-1/2">
            <div className="bg-primary/40 absolute inset-0 animate-pulse"></div>
          </div>

          <div className="relative space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-0"
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? 'order-2 md:order-1 md:pr-16 md:text-right'
                        : 'order-2 md:order-2 md:ml-auto md:pl-16'
                    }`}
                  >
                    <div
                      className={`bento-card border-l-2 p-8 ${
                        isEven ? 'md:border-r-2 md:border-l-0' : 'md:border-l-2'
                      } border-primary group relative`}
                    >
                      {/* Corner Accents */}
                      <div
                        className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} h-2 w-2 border-t ${isEven ? 'border-l' : 'border-r'} border-primary/20 opacity-0 transition-opacity group-hover:opacity-100`}
                      ></div>

                      <span className="text-primary mb-2 block font-mono text-xs">{exp.year}</span>
                      <h3 className="font-headline text-foreground mb-1 text-2xl font-bold tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-foreground/60 mb-6 font-mono text-sm uppercase">
                        {exp.role}
                      </p>

                      <ul
                        className={`text-foreground/70 space-y-3 text-sm leading-relaxed ${isEven ? 'md:ml-auto' : ''}`}
                      >
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}
                          >
                            <span className="text-primary mt-1 flex-shrink-0">
                              {iconMap[item.icon] || <FiCode className="h-4 w-4" />}
                            </span>
                            <span className="group-hover:text-foreground transition-colors">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dot (Geometric indicator) */}
                  <div className="bg-primary border-background absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rotate-45 animate-pulse border-4 shadow-[0_0_15px_#ff3131] md:flex"></div>

                  {/* Logo/Visual indicator */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? 'order-1 md:order-2 md:pl-16'
                        : 'order-1 flex justify-end md:order-1 md:mr-auto md:pr-16'
                    }`}
                  >
                    <div className="bento-card group relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-sm p-6">
                      <div className="relative z-10 h-full w-full transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          fill
                          className="object-contain opacity-40 grayscale-[50%] transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </div>
                      <div className="bg-primary/5 absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
