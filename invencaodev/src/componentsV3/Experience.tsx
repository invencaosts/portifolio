import React from "react";
import Image from "next/image";
import { 
  FiMap, 
  FiZap, 
  FiShield, 
  FiDatabase, 
  FiCpu, 
  FiCloud, 
  FiCode, 
  FiLayers, 
  FiLock 
} from "react-icons/fi";

const experiences = [
  {
    year: "06/2025 — 06/2026",
    company: "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    role: "Engenheiro de Software",
    description: [
      { icon: "map", text: "Desenvolvimento de uma aplicação para mapeamento de terras indígenas griladas." },
      { icon: "bolt", text: "Otimização de consultas SQL e criação de índices para melhorar a performance da aplicação." },
      { icon: "shield", text: "Implementação de protocolos de segurança e conformidade de dados sensíveis." },
    ],
    logo: "/images/cnpq_logo.jpeg",
  },
  {
    year: "12/2025 — 03/2026",
    company: "WM Saúde - Gestão e Tecnologia",
    role: "Estágio em engenharia de software",
    description: [
      { icon: "database", text: "Manutenção de sistemas para o setor de saúde." },
      { icon: "memory", text: "Desenvolvimento de automações para otimização de processos." },
      { icon: "cloud_done", text: "Manutenção em servidores para garantir a disponibilidade dos sistemas em todo momento." },
    ],
    logo: "/images/wm_sade_logo.jpeg",
  },
  {
    year: "03/2026 — Atual",
    company: "WM Saúde - Gestão e Tecnologia",
    role: "Engenheiro de Software",
    description: [
      { icon: "code", text: "Desenvolvimento e manutenção em sistema de alta criticidade para o setor da Saúde" },
      { icon: "layers", text: "Migração de arquitetura legada para uma arquitetura escalável e resiliente" },
      { icon: "security", text: "Implementação de protocolos de segurança e conformidade de dados sensíveis." },
    ],
    logo: "/images/wm_sade_logo.jpeg",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  map: <FiMap className="w-4 h-4" />,
  bolt: <FiZap className="w-4 h-4" />,
  shield: <FiShield className="w-4 h-4" />,
  database: <FiDatabase className="w-4 h-4" />,
  memory: <FiCpu className="w-4 h-4" />,
  cloud_done: <FiCloud className="w-4 h-4" />,
  code: <FiCode className="w-4 h-4" />,
  layers: <FiLayers className="w-4 h-4" />,
  security: <FiLock className="w-4 h-4" />,
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 md:px-12 lg:px-24 xl:px-40 bg-neutral/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary mb-16 md:mb-24 flex items-center gap-3">
          <span className="w-2 h-2 bg-primary animate-pulse"></span>
          TRAJETÓRIA_PROFISSIONAL
        </h2>

        {/* Experience Timeline Grid */}
        <div className="relative">
          {/* Central Timeline Path (The Crimson Thread) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 shadow-[0_0_15px_rgba(255,49,49,0.2)] md:-translate-x-1/2">
            <div className="absolute inset-0 bg-primary/40 animate-pulse"></div>
          </div>

          <div className="space-y-24 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 relative">
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right order-2 md:order-1" : "md:pl-16 md:ml-auto order-2 md:order-2"
                      }`}
                  >
                    <div className={`bento-card p-8 border-l-2 ${isEven ? "md:border-l-0 md:border-r-2" : "md:border-l-2"
                      } border-primary relative group`}>
                      {/* Corner Accents */}
                      <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-2 border-t ${isEven ? 'border-l' : 'border-r'} border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      
                      <span className="font-mono text-xs text-primary mb-2 block">{exp.year}</span>
                      <h3 className="font-headline text-2xl font-bold mb-1 tracking-tight text-foreground">{exp.company}</h3>
                      <p className="font-mono text-sm text-foreground/60 mb-6 uppercase">{exp.role}</p>

                      <ul className={`text-foreground/70 text-sm space-y-3 leading-relaxed ${isEven ? "md:ml-auto" : ""}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex items-start gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                            <span className="text-primary mt-1 flex-shrink-0">
                              {iconMap[item.icon] || <FiCode className="w-4 h-4" />}
                            </span>
                            <span className="group-hover:text-foreground transition-colors">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dot (Geometric indicator) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary z-10 border-4 border-background rotate-45 shadow-[0_0_15px_#ff3131] animate-pulse"></div>

                  {/* Logo/Visual indicator */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pl-16 order-1 md:order-2" : "md:pr-16 md:mr-auto order-1 md:order-1 flex justify-end"
                    }`}>
                    <div className="w-32 h-32 bento-card flex items-center justify-center overflow-hidden p-6 rounded-sm relative group">
                      <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          fill
                          className="object-contain opacity-40 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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
