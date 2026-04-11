import { getGitHubData } from "@/lib/github";
import ProjectCarousel from "./ProjectCarousel";

export default async function AboutBento() {
  const githubData = await getGitHubData("invencaosts");

  const techStack = ["TYPESCRIPT", "NODE.JS", "NEST.JS", "POSTGRESQL", "DOCKER", "CYBER_SECURITY", "ERP_SYSTEMS", "HEALTH_TECH"];

  const stats = [
    { id: "01", label: "PROJETOS", value: `${githubData.repos}+`, sub: "Repositórios no GitHub" },
    { id: "02", label: "EXPERIÊNCIA", value: "05", sub: "Anos em engenharia" },
    { id: "03", label: "UPTIME_ANUAL", value: "8.7k", sub: "Horas de infra ativa" },
    { id: "04", label: "CONTRIBUIÇÕES", value: `${githubData.contributions}`, sub: "No último ano (Real)" },
    { id: "05", label: "LINHAS_DE_CÓDIGO", value: `${(githubData.linesOfCode / 1000000).toFixed(1)}k`, sub: "Código em produção (Est.)" },
  ];

  const mobileOrderClasses = [
    "",                    // 0: PROJETOS
    "",                    // 1: EXPERIÊNCIA
    "order-4 lg:order-3", // 2: UPTIME
    "order-5 lg:order-4", // 3: CONTRIBUIÇÕES
    "order-6 lg:order-5", // 4: LINHAS_DE_CÓDIGO
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24 xl:px-40 bg-neutral/5 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 lg:gap-y-32 items-start">
          
          {/* 1. Descrição Técnica (Topo Esquerda) */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            <div>
              <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary mb-8 md:mb-12 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary"></span>
                RESUMO_OPERACIONAL
              </h2>
              <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-relaxed text-foreground/80 font-light pb-4">
                Engenheiro de Software focado em sistemas de alta criticidade (ERP & Saúde), arquitetura escalável e segurança da informação. Transformo desafios de negócio em soluções resilientes, integrando automação operacional e pesquisa em Cyber Segurança para garantir{" "}
                <span className="text-foreground font-medium underline decoration-primary/40 decoration-2 underline-offset-8">
                  performance e integridade em alto nível.
                </span>
              </p>
            </div>
          </div>

          {/* 2. Grid de Estatísticas (Topo Direita) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-1">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`aspect-square bento-card p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between group relative overflow-hidden ${mobileOrderClasses[index]}`}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-primary/60 relative z-10">
                  {stat.id}_{stat.label}
                </span>
                <div className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold group-hover:text-primary transition-colors text-foreground relative z-10">
                  {stat.value}
                </div>
                <p className="font-mono text-[7px] sm:text-[9px] md:text-[10px] text-foreground/50 leading-tight uppercase relative z-10">
                  {stat.sub}
                </p>
                
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}

            {/* Card de Conexão - BIOMETRIC IDENTITY SCAN */}
            <div className="aspect-square bento-card relative overflow-hidden group order-3 lg:order-6 cursor-pointer">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40"></div>

              {/* Linha de Scanner que sobe e desce */}
              <div className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#ff3131] z-20 animate-scan"></div>

              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between z-10">
                <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-primary/60">06_IDENTIDADE</span>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-1 h-3 sm:h-6 bg-primary/20 group-hover:bg-primary/50 transition-colors animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                  <span className="font-mono text-[8px] sm:text-[10px] text-primary uppercase animate-pulse">Scanning...</span>
                </div>

                <div className="space-y-1 sm:space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-left">
                  <div className="font-mono text-[8px] sm:text-[10px] text-white bg-primary px-1 sm:px-2 py-0.5 sm:py-1 inline-block">ACCESS_GRANTED</div>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                    <a href="https://github.com/invencaosts" target="_blank" className="font-mono text-[7px] sm:text-[10px] text-foreground border-b border-primary">GITHUB</a>
                    <a href="https://linkedin.com/in/invencaosts" target="_blank" className="font-mono text-[7px] sm:text-[10px] text-foreground border-b border-primary">LINKEDIN</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
          </div>

          {/* 3. Hierarquia de Tecnologias (Baixo Esquerda) */}
          <div className="lg:col-span-5 self-start">
            <div className="font-mono text-xs text-foreground/40 mb-4 uppercase tracking-widest">Hierarquia de Tecnologias</div>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-6 max-w-md">
              Arquitetura planejada com foco em escalabilidade e segurança. Utilizo uma stack moderna para garantir que cada linha de código contribua para a integridade e alta disponibilidade dos sistemas.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral/10 font-mono text-[10px] md:text-[11px] text-foreground border border-borderColor/20 uppercase hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Projetos Dinâmicos do GitHub (Baixo Direita) */}
          <div className="lg:col-span-7">
            <ProjectCarousel projects={githubData.projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
