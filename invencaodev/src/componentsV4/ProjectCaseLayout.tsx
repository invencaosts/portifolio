import Link from 'next/link';
import type { ProjectCase } from '@/types/portfolio';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
const Block = ({ title, items }: { title: string; items: string[] }) => (
  <section className="mt-14">
    <h2 className="font-headline text-2xl font-bold md:text-3xl">{title}</h2>
    <ul className="text-foreground/70 mt-5 space-y-3">
      {items.map((i) => (
        <li key={i} className="border-primary border-l-2 pl-4">
          {i}
        </li>
      ))}
    </ul>
  </section>
);
export default function ProjectCaseLayout({ project }: { project: ProjectCase }) {
  return (
    <main className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#projetos"
          className="text-primary-text inline-flex items-center gap-1.5 font-mono text-xs uppercase transition-all hover:gap-2.5"
        >
          <FiArrowLeft className="h-3.5 w-3.5" /> Voltar aos projetos
        </Link>
        <div className="mt-10">
          <p className="text-primary-text font-mono text-xs uppercase">
            {project.category} · {project.status}
          </p>
          <h1 className="font-headline mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {project.shortTitle}
          </h1>
          <p className="text-foreground/65 mt-7 text-xl leading-relaxed">{project.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="bento-card p-5">
              <span className="section-label">PAPEL</span>
              <p className="mt-2">{project.role}</p>
            </div>
            <div className="bento-card p-5">
              <span className="section-label">COLABORAÇÃO</span>
              <p className="mt-2">{project.collaboration}</p>
            </div>
          </div>
        </div>
        <Block title="Contexto e problema" items={project.context} />
        <section className="mt-14">
          <h2 className="font-headline text-2xl font-bold md:text-3xl">Minha contribuição</h2>
          <p className="text-foreground/75 mt-5 text-lg leading-relaxed">{project.narrative}</p>
        </section>
        <section className="mt-14">
          <h2 className="font-headline text-3xl font-bold">Stack</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.technologies.map((t) => (
              <div className="bento-card p-5" key={t.name}>
                <span className="text-primary-text font-mono text-xs uppercase">{t.name}</span>
                <p className="text-foreground/65 mt-2 text-sm leading-relaxed">{t.use}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-14 flex flex-wrap gap-4">
          {project.links.map((l) => (
            <a
              className="bg-primary inline-flex items-center gap-1.5 px-6 py-3 font-mono text-xs text-white uppercase"
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label} <FiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
          <Link
            href="/#contato"
            className="border-foreground/40 border px-6 py-3 font-mono text-xs uppercase"
          >
            Entrar em contato
          </Link>
        </div>
      </article>
    </main>
  );
}
