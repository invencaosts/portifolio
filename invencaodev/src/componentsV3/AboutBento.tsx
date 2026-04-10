import { getGitHubData } from "@/lib/github";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* 1. Descrição Técnica (Esquerda no Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary mb-8 md:mb-12 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary"></span>
                RESUMO_OPERACIONAL
              </h2>
              <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-relaxed text-foreground/80 font-light">
                Engenheiro de Software focado em sistemas de alta criticidade (ERP & Saúde), arquitetura escalável e segurança da informação. Transformo desafios de negócio em soluções resilientes, integrando automação operacional e pesquisa em Cyber Segurança para garantir{" "}
                <span className="text-foreground font-medium underline decoration-primary/40 decoration-2 underline-offset-8">
                  performance e integridade em alto nível.
                </span>
              </p>
            </div>

            {/* Hierarquia de Tecnologias (Abaixo da descrição no Desktop) */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-borderColor/10 hidden lg:block">
              <div className="font-mono text-xs text-foreground/40 mb-6 uppercase tracking-widest">Hierarquia de Tecnologias</div>
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
          </div>

          {/* 2. Grid de Estatísticas (Direita no Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-1">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`aspect-square bg-neutral/10 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between hover:bg-neutral/20 transition-colors group border border-borderColor/5 ${mobileOrderClasses[index]}`}
              >
                <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-primary/60">
                  {stat.id}_{stat.label}
                </span>
                <div className="font-headline text-xl sm:text-3xl md:text-4xl lg:text-7xl font-bold group-hover:text-primary transition-colors text-foreground">
                  {stat.value}
                </div>
                <p className="font-mono text-[7px] sm:text-[9px] md:text-[10px] text-foreground/50 leading-tight uppercase">
                  {stat.sub}
                </p>
              </div>
            ))}

            {/* Card de Conexão - BIOMETRIC IDENTITY SCAN */}
            <div className="aspect-square bg-neutral/10 relative overflow-hidden group border border-borderColor/5 order-3 lg:order-6 cursor-pointer">
              {/* Linha de Scanner que sobe e desce */}
              <div className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#ff3131] z-20 animate-scan"></div>
              
              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between z-10">
                  <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-primary/60">06_IDENTIDADE</span>
                  
                  <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                          {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-1 h-3 sm:h-6 bg-primary/20 group-hover:bg-primary/50 transition-colors animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                          ))}
                      </div>
                      <span className="font-mono text-[8px] sm:text-[10px] text-primary uppercase animate-pulse">Scanning...</span>
                  </div>

                  <div className="space-y-1 sm:space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-left">
                      <div className="font-mono text-[8px] sm:text-[10px] text-white bg-primary px-1 sm:px-2 py-0.5 sm:py-1 inline-block">ACCESS_GRANTED</div>
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                          <a href="https://github.com/invencaosts" target="_blank" className="font-mono text-[7px] sm:text-[10px] text-foreground border-b border-primary">GITHUB</a>
                          <a href="https://linkedin.com" target="_blank" className="font-mono text-[7px] sm:text-[10px] text-foreground border-b border-primary">LINKEDIN</a>
                      </div>
                  </div>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
          </div>
          
          {/* Hierarquia de Tecnologias (Apenas Mobile/Tablet - Abaixo do Grid) */}
          <div className="lg:hidden pt-8 border-t border-borderColor/10 w-full">
            <div className="font-mono text-sm text-foreground/40 mb-6 uppercase tracking-widest text-center">Hierarquia de Tecnologias</div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={`m-${tech}`}
                  className="px-4 py-2 bg-neutral/10 font-mono text-[10px] md:text-[12px] text-foreground border border-borderColor/20 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
