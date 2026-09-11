import { profile } from '@/content/profile';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="border-borderColor/20 border-t px-6 pt-14 pb-28 md:px-12 md:pb-14 lg:px-24 xl:px-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <p className="font-headline flex items-center gap-2 text-xl font-bold">
            <Image src="/icon.svg" alt="" width={22} height={22} />
            {'<invencaodev />'}
          </p>
          <p className="text-foreground/60 mt-2 font-mono text-[10px] uppercase">
            Desenvolvedor Full Stack · Júnior
          </p>
        </div>
        <div className="flex gap-4">
          <a aria-label="Email" href={`mailto:${profile.email}`}>
            <FiMail />
          </a>
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <p className="text-foreground/60 font-mono text-[9px] uppercase">
          © {new Date().getFullYear()} · Aracaju_SE_BR
        </p>
      </div>
    </footer>
  );
}
