import Image from 'next/image';
import { experiences } from '@/content/experiences';
export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-neutral/5 scroll-mt-20 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-label">02_TRAJETÓRIA_PROFISSIONAL</p>
        <h2 className="section-title">Experiência aplicada.</h2>
        <p className="section-intro">
          Atuação em saúde, gestão empresarial e desenvolvimento web, com progressão apresentada por
          organização.
        </p>
        <div className="mt-14 space-y-7">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="bento-card grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      width={56}
                      height={56}
                      alt={`Logo ${exp.organization}`}
                      className="object-contain"
                    />
                  )}
                  <h3 className="font-headline text-2xl font-bold">{exp.organization}</h3>
                </div>
                <p className="text-foreground/60 mt-4">{exp.context}</p>
                <p className="text-foreground/60 mt-3 font-mono text-xs">{exp.location}</p>
              </div>
              <div>
                <div className="space-y-4">
                  {exp.roles.map((role) => (
                    <div key={role.title + role.period} className="border-primary border-l-2 pl-4">
                      <p className="font-headline font-bold">{role.title}</p>
                      <p className="text-foreground/60 font-mono text-xs">
                        {role.contract} · {role.period}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="text-foreground/70 mt-6 space-y-2 text-sm">
                  {exp.contributions.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span className="tech-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
