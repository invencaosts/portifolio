const signals = [
  'OPORTUNIDADES:JUNIOR',
  'ATUAÇÃO:SAÚDE_ERP',
  'BOLSA:CNPQ_WEB_GIS',
  'PESQUISA:MOREA_2025',
  'ESTUDO_INDEPENDENTE:CYBER_2026',
  'STACK:TYPESCRIPT_REACT_NODE_POSTGRES',
];
const repeated = Array.from({ length: 6 }, () => signals).flat();
const track = (hidden: boolean) => (
  <div className="flex shrink-0" aria-hidden={hidden}>
    {repeated.map((s, i) => (
      <span
        key={i}
        className="text-foreground/60 shrink-0 pr-8 font-mono text-[10px] tracking-wider uppercase"
      >
        <span className="text-primary-text">●</span> {s}
      </span>
    ))}
  </div>
);
export default function LogStrip() {
  return (
    <div
      aria-label="Evidências profissionais"
      className="border-borderColor/30 bg-neutral/10 overflow-hidden border-y py-3"
    >
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
