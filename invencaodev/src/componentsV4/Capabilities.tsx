import { capabilities } from '@/content/capabilities';
export default function Capabilities() {
  return (
    <section id="competencias" className="px-6 py-24 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">05_COMPETÊNCIAS_COMPROVADAS</p>
        <h2 className="section-title">Tecnologia ligada à evidência.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article className="bento-card p-7" key={c.title}>
              <h3 className="font-headline text-xl font-bold">{c.title}</h3>
              <p className="text-foreground/60 mt-3 text-sm">{c.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.technologies.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-primary-text mt-6 font-mono text-[10px] uppercase">
                Evidência: {c.evidence}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
