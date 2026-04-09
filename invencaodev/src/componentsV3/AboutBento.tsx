export default function AboutBento() {
  const techStack = ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "POSTGRESQL", "DOCKER"];
  
  const stats = [
    { id: "01", label: "PROJETOS", value: "42+", sub: "Infraestruturas globais" },
    { id: "02", label: "EXPERIÊNCIA", value: "12", sub: "Anos em engenharia" },
    { id: "03", label: "DISPONIBILIDADE", value: "99.9", sub: "SLA de manutenção" },
    { id: "04", label: "CONTRIBUIÇÕES", value: "1.2k", sub: "Commits open source" },
    { id: "05", label: "PATENTES", value: "04", sub: "Sistemas distribuídos" },
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 bg-neutral/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Intro Concisa */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary"></span>
              FILOSOFIA_CENTRAL
            </h2>
            <p className="font-sans text-2xl md:text-3xl leading-relaxed text-foreground/80 font-light">
              Arquitetando sistemas distribuídos resilientes e de alta escala onde a <span className="text-foreground font-medium underline decoration-primary/40 decoration-2 underline-offset-8">performance encontra a previsibilidade.</span> Meu foco está na interseção entre liderança técnica e engenharia de precisão.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-borderColor/10">
            <div className="font-mono text-xs text-foreground/40 mb-4 uppercase">Hierarquia de Tecnologias</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-neutral/10 font-mono text-[11px] text-foreground border border-borderColor/20 uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Estatísticas (Estilo Bento) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-1">
          {stats.map((stat) => (
            <div key={stat.id} className="aspect-square bg-neutral/10 p-8 flex flex-col justify-between hover:bg-neutral/20 transition-colors group border border-borderColor/5">
              <span className="font-mono text-xs text-primary/60">{stat.id}_{stat.label}</span>
              <div className="font-headline text-5xl md:text-6xl font-bold group-hover:text-primary transition-colors text-foreground">
                {stat.value}
              </div>
              <p className="font-mono text-[10px] text-foreground/50 leading-tight uppercase">
                {stat.sub}
              </p>
            </div>
          ))}
          
          <div className="aspect-square bg-primary p-8 flex flex-col justify-between group cursor-pointer hover:brightness-110 transition-all">
            <span className="font-mono text-xs text-white/60">06_CONEXÃO</span>
            <span className="material-symbols-outlined text-6xl text-white">terminal</span>
            <a className="font-mono text-[10px] text-white font-bold uppercase tracking-widest hover:underline" href="#contato">
              Iniciar Sequência -&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
