'use client';

export default function LogStrip() {
  const logs = [
    'SETOR: SAÚDE_EFICIÊNCIA_OPERACIONAL',
    'ARQUITETURA: ESCALABILIDADE_CRÍTICA',
    'SEGURANÇA: CYBER_PESQUISA_ATIVA',
    'STATUS: RESILIÊNCIA_ESTÁVEL',
    'OPTIMIZAÇÃO: PROCESSOS_ERP',
    'INTEGRIDADE: DADOS_PROTEGIDOS',
    'ENGENHARIA: BOAS_PRÁTICAS_VALIDADAS',
    'PERFORMANCE: ALTA_CAPACIDADE',
  ];

  return (
    <section className="border-borderColor/20 bg-neutral/5 overflow-hidden border-y py-8">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {logs.map((log, index) => (
          <span
            key={index}
            className="text-foreground/40 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase"
          >
            <span className="bg-primary h-1 w-1 rounded-full"></span>
            {log}
          </span>
        ))}
        {/* Repetir para o loop contínuo */}
        {logs.map((log, index) => (
          <span
            key={`repeat-${index}`}
            className="text-foreground/40 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase"
          >
            <span className="bg-primary h-1 w-1 rounded-full"></span>
            {log}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
