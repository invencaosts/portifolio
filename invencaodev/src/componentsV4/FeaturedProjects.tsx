import Link from 'next/link';
import { projects } from '@/content/projects';
import { FiArrowUpRight } from 'react-icons/fi';
import Carousel from './Carousel';

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <article className="bento-card flex h-full flex-col p-7">
      <div className="text-primary-text flex justify-between font-mono text-[10px] uppercase">
        <span>PRJ_{String(i + 1).padStart(2, '0')}</span>
        <span>{p.status}</span>
      </div>
      <p className="text-foreground/50 mt-8 font-mono text-xs uppercase">{p.category}</p>
      <h3 className="font-headline mt-2 text-2xl font-bold">{p.shortTitle}</h3>
      <p className="text-foreground/65 mt-4 flex-grow leading-relaxed">{p.summary}</p>
      <p className="mt-5 text-sm">
        <span className="text-primary-text font-mono">PAPEL // </span>
        {p.role}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.technologies.slice(0, 5).map((t) => (
          <span className="tech-chip" key={t.name}>
            {t.name}
          </span>
        ))}
      </div>
      <div className="mt-7 flex gap-4 font-mono text-xs uppercase">
        <Link
          className="text-primary-text flex items-center gap-1 hover:underline"
          href={`/projetos/${p.slug}`}
        >
          Ver case <FiArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        {p.links[0] && (
          <a
            href={p.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text flex items-center gap-1"
          >
            Código <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projetos" className="scroll-mt-20 px-6 py-24 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">03_PROJETOS_SELECIONADOS</p>
        <h2 className="section-title">Código com contexto.</h2>
        <p className="section-intro">
          Projetos escolhidos pela profundidade técnica e pela relação com minha atuação.
        </p>

        <Carousel>
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="w-[82vw] max-w-sm flex-shrink-0 snap-start lg:w-96 lg:max-w-none"
            >
              <ProjectCard p={p} i={i} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
