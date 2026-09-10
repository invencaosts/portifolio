import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/content/profile';
import TypedRoles from '@/componentsV4/TypedRoles';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-background relative flex min-h-[85vh] scroll-mt-20 items-center overflow-hidden px-6 py-20 md:px-20 lg:px-32 xl:px-40"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="text-left lg:col-span-8">
          <p className="text-primary-text mb-6 font-mono text-xs md:text-sm">
            guilherme@invencaodev:~$ whoami
          </p>
          <h1 className="font-headline mb-8 text-4xl leading-[.95] font-bold tracking-tighter uppercase sm:text-6xl md:text-7xl xl:text-8xl">
            GUILHERME
            <br />
            <span className="text-foreground/25">DA_INVENCÃO</span>
          </h1>
          <p className="text-primary-text mb-5 min-h-[1.5em] font-mono text-lg uppercase md:text-2xl">
            <span className="text-foreground/40">&gt; </span>
            <TypedRoles roles={profile.roles} />
          </p>
          <p className="text-foreground/70 max-w-3xl text-lg leading-relaxed md:text-xl">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] tracking-widest uppercase">
            <span className="border-primary text-primary-text border px-3 py-2">
              ● {profile.availability}
            </span>
            <span className="border-borderColor/40 border px-3 py-2">Remoto em todo o Brasil</span>
            <span className="border-borderColor/40 border px-3 py-2">
              Presencial: Aracaju ou Lagarto
            </span>
            <span className="border-borderColor/40 border px-3 py-2">CLT ou PJ</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#projetos"
              className="bg-primary font-headline px-6 py-3 font-bold tracking-wider text-white uppercase"
            >
              Ver projetos
            </Link>
            <Link
              href="#experiencia"
              className="border-foreground/40 font-headline hover:border-primary border px-6 py-3 font-bold tracking-wider uppercase"
            >
              Ver experiência
            </Link>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border-foreground/40 font-headline hover:border-primary border px-6 py-3 font-bold tracking-wider uppercase"
            >
              Visualizar currículo ↗
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <div className="border-foreground/80 bg-neutral relative aspect-[4/5] w-full max-w-[360px] overflow-hidden border">
            <Image
              alt="Guilherme da Invenção, desenvolvedor Full Stack em Aracaju"
              src="/MinhaFoto.jpg"
              fill
              priority
              sizes="(min-width:1024px) 360px, 280px"
              className="object-cover grayscale-[15%]"
            />
            <div className="bg-background/90 border-foreground/80 absolute inset-x-0 top-0 flex justify-between border-b px-3 py-2 font-mono text-[9px]">
              <span>PROFILE.JPG</span>
              <span className="text-primary-text">● REC</span>
            </div>
            <div className="bg-primary absolute inset-x-0 bottom-0 flex justify-between px-3 py-2 font-mono text-[9px] text-white">
              <span>ARACAJU_SE_BR</span>
              <span>JUNIOR_FULLSTACK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
