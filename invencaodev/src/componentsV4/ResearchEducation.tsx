import Link from 'next/link';
import { academics, education } from '@/content/academics';
import { FiArrowUpRight } from 'react-icons/fi';
import Carousel from './Carousel';

function AcademicCard({ a }: { a: (typeof academics)[number] }) {
  return (
    <article className="bento-card flex h-full flex-col p-7">
      <p className="text-primary-text font-mono text-[10px] uppercase">
        {a.kind} · {a.status}
      </p>
      <h3 className="font-headline mt-4 text-xl font-bold">{a.title}</h3>
      <p className="text-foreground/60 mt-2 font-mono text-xs">
        {a.institution} · {a.period}
      </p>
      <p className="text-foreground/65 mt-5 flex-grow text-sm">{a.description}</p>
      <p className="mt-5 font-mono text-[10px] uppercase">Autoria: {a.contributionMode}</p>
      {a.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {a.technologies.map((t) => (
            <span className="tech-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      {a.href &&
        (a.href.startsWith('/') ? (
          <Link
            href={a.href}
            className="text-primary-text mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase"
          >
            Ver detalhes <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-text mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase"
          >
            Fonte externa <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ))}
    </article>
  );
}

export default function ResearchEducation() {
  return (
    <section
      id="pesquisa-formacao"
      className="bg-neutral/5 scroll-mt-20 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-label">04_PESQUISA_E_FORMAÇÃO</p>
        <h2 className="section-title">Do estudo à prática.</h2>
        <p className="section-intro">
          Projetos acadêmicos, estudos independentes e formação com vínculo e autoria explícitos.
        </p>

        <Carousel>
          {academics.map((a) => (
            <div
              key={a.id}
              className="w-[82vw] max-w-sm flex-shrink-0 snap-start lg:w-96 lg:max-w-none"
            >
              <AcademicCard a={a} />
            </div>
          ))}
        </Carousel>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.institution} className="border-primary border-l-2 py-2 pl-5">
              <p className="font-headline text-lg font-bold">{e.credential}</p>
              <p className="text-foreground/60">{e.institution}</p>
              <p className="text-foreground/60 font-mono text-xs">
                {e.period} · {e.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
