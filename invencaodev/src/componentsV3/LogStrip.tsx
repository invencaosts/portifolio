"use client";

export default function LogStrip() {
  const logs = [
    "SETOR: SAÚDE_EFICIÊNCIA_OPERACIONAL",
    "ARQUITETURA: ESCALABILIDADE_CRÍTICA",
    "SEGURANÇA: CYBER_PESQUISA_ATIVA",
    "STATUS: RESILIÊNCIA_ESTÁVEL",
    "OPTIMIZAÇÃO: PROCESSOS_ERP",
    "INTEGRIDADE: DADOS_PROTEGIDOS",
    "ENGENHARIA: BOAS_PRÁTICAS_VALIDADAS",
    "PERFORMANCE: ALTA_CAPACIDADE",
  ];

  return (
    <section className="border-y border-borderColor/20 bg-neutral/5 py-8 overflow-hidden">
      <div className="flex whitespace-nowrap gap-12 animate-marquee">
        {logs.map((log, index) => (
          <span
            key={index}
            className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            {log}
          </span>
        ))}
        {/* Repetir para o loop contínuo */}
        {logs.map((log, index) => (
          <span
            key={`repeat-${index}`}
            className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            {log}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
