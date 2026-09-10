import { getGitHubData } from '@/lib/github';
import ProjectCarousel from './ProjectCarousel';

export default async function AboutBento() {
  const githubData = await getGitHubData('invencaosts');

  const techStack = [
    'TYPESCRIPT',
    'NODE.JS',
    'NEST.JS',
    'POSTGRESQL',
    'DOCKER',
    'CYBER_SECURITY',
    'ERP_SYSTEMS',
    'HEALTH_TECH',
  ];

  const stats = [
    { id: '01', label: 'PROJETOS', value: `${githubData.repos}+`, sub: 'Repositórios no GitHub' },
    { id: '02', label: 'EXPERIÊNCIA', value: '05', sub: 'Anos em engenharia' },
    { id: '03', label: 'UPTIME_ANUAL', value: '8.7k', sub: 'Horas de infra ativa' },
    {
      id: '04',
      label: 'CONTRIBUIÇÕES',
      value: `${githubData.contributions}`,
      sub: 'No último ano (Real)',
    },
    {
      id: '05',
      label: 'LINHAS_DE_CÓDIGO',
      value: `${(githubData.linesOfCode / 1000000).toFixed(1)}k`,
      sub: 'Código em produção (Est.)',
    },
  ];

  const mobileOrderClasses = [
    '', // 0: PROJETOS
    '', // 1: EXPERIÊNCIA
    'order-4 lg:order-3', // 2: UPTIME
    'order-5 lg:order-4', // 3: CONTRIBUIÇÕES
    'order-6 lg:order-5', // 4: LINHAS_DE_CÓDIGO
  ];

  return (
    <section
      id="sobre"
      className="bg-neutral/5 overflow-hidden px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 lg:grid-cols-12 lg:gap-y-32">
          {/* 1. Descrição Técnica (Topo Esquerda) */}
          <div className="flex flex-col justify-between self-stretch lg:col-span-5">
            <div>
              <h2 className="font-headline text-primary-text mb-8 flex items-center gap-3 text-sm tracking-[0.3em] uppercase md:mb-12">
                <span className="bg-primary h-2 w-2"></span>
                RESUMO_OPERACIONAL
              </h2>
              <p className="text-foreground/80 pb-4 font-sans text-lg leading-relaxed font-light sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
                Engenheiro de Software focado em sistemas de alta criticidade (ERP & Saúde),
                arquitetura escalável e segurança da informação. Transformo desafios de negócio em
                soluções resilientes, integrando automação operacional e pesquisa em Cyber Segurança
                para garantir{' '}
                <span className="text-foreground decoration-primary/40 font-medium underline decoration-2 underline-offset-8">
                  performance e integridade em alto nível.
                </span>
              </p>
            </div>
          </div>

          {/* 2. Grid de Estatísticas (Topo Direita) */}
          <div className="grid grid-cols-3 gap-1 lg:col-span-7">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`bento-card group relative flex aspect-square flex-col justify-between overflow-hidden p-3 sm:p-5 md:p-6 lg:p-8 ${mobileOrderClasses[index]}`}
              >
                {/* Corner Accents */}
                <div className="border-primary/20 absolute top-0 right-0 h-2 w-2 border-t border-r opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="border-primary/20 absolute bottom-0 left-0 h-2 w-2 border-b border-l opacity-0 transition-opacity group-hover:opacity-100"></div>

                <span className="text-primary-text/60 relative z-10 font-mono text-[8px] sm:text-[10px] md:text-xs">
                  {stat.id}_{stat.label}
                </span>
                <div className="font-headline group-hover:text-primary-text text-foreground relative z-10 text-xl font-bold transition-colors sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {stat.value}
                </div>
                <p className="text-foreground/60 relative z-10 font-mono text-[7px] leading-tight uppercase sm:text-[9px] md:text-[10px]">
                  {stat.sub}
                </p>

                {/* Hover Background Glow */}
                <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            ))}

            {/* Card de Conexão - BIOMETRIC IDENTITY SCAN */}
            <div className="bento-card group relative order-3 aspect-square cursor-pointer overflow-hidden lg:order-6">
              {/* Corner Accents */}
              <div className="border-primary/40 absolute top-0 right-0 h-4 w-4 border-t border-r"></div>
              <div className="border-primary/40 absolute bottom-0 left-0 h-4 w-4 border-b border-l"></div>

              {/* Linha de Scanner que sobe e desce */}
              <div className="bg-primary animate-scan absolute left-0 z-20 h-[2px] w-full shadow-[0_0_15px_#ff3131]"></div>

              <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-8">
                <span className="text-primary-text/60 font-mono text-[8px] sm:text-[10px] md:text-xs">
                  06_IDENTIDADE
                </span>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-primary/20 group-hover:bg-primary/50 h-3 w-1 animate-pulse transition-colors sm:h-6"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-primary-text animate-pulse font-mono text-[8px] uppercase sm:text-[10px]">
                    Scanning...
                  </span>
                </div>

                <div className="translate-y-4 space-y-1 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:space-y-2">
                  <div className="bg-primary inline-block px-1 py-0.5 font-mono text-[8px] text-white sm:px-2 sm:py-1 sm:text-[10px]">
                    ACCESS_GRANTED
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <a
                      href="https://github.com/invencaosts"
                      target="_blank"
                      className="text-foreground border-primary border-b font-mono text-[7px] sm:text-[10px]"
                    >
                      GITHUB
                    </a>
                    <a
                      href="https://linkedin.com/in/invencaosts"
                      target="_blank"
                      className="text-foreground border-primary border-b font-mono text-[7px] sm:text-[10px]"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            </div>
          </div>

          {/* 3. Hierarquia de Tecnologias (Baixo Esquerda) */}
          <div className="self-start lg:col-span-5">
            <div className="text-foreground/60 mb-4 font-mono text-xs tracking-widest uppercase">
              Hierarquia de Tecnologias
            </div>
            <p className="text-foreground/60 mb-6 max-w-md font-sans text-sm leading-relaxed">
              Arquitetura planejada com foco em escalabilidade e segurança. Utilizo uma stack
              moderna para garantir que cada linha de código contribua para a integridade e alta
              disponibilidade dos sistemas.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral/10 text-foreground border-borderColor/20 hover:border-primary/50 border px-3 py-1 font-mono text-[10px] uppercase transition-colors md:text-[11px]"
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
