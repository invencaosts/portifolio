import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-borderColor/20 bg-neutral/5 mt-24 w-full border-t px-6 py-16 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Logo & Title */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="font-headline text-foreground text-xl font-bold tracking-widest">
            {'<invencaodev />'}
          </div>
          <div className="text-foreground/40 text-center font-mono text-[10px] tracking-[0.2em] uppercase md:text-left">
            ENGENHEIRO DE SOFTWARE \\ ARQUITETO DE SISTEMAS
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:gui.inven@gmail.com"
            title="Email"
            className="bg-neutral/10 border-borderColor/10 hover:border-primary/50 hover:text-primary rounded-full border p-3 transition-all duration-300"
          >
            <FiMail className="h-5 w-5" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5579999684200&text=Oi,%20vim%20pelo%20seu%20portifolio%20e%20gostaria%20de%20conversar%20mais%20sobre."
            target="_blank"
            title="WhatsApp"
            className="bg-neutral/10 border-borderColor/10 hover:border-primary/50 hover:text-primary rounded-full border p-3 transition-all duration-300"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/invencaosts"
            target="_blank"
            title="GitHub"
            className="bg-neutral/10 border-borderColor/10 hover:border-primary/50 hover:text-primary rounded-full border p-3 transition-all duration-300"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/"
            target="_blank"
            title="LinkedIn"
            className="bg-neutral/10 border-borderColor/10 hover:border-primary/50 hover:text-primary rounded-full border p-3 transition-all duration-300"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col items-center gap-1 md:items-end">
          <div className="text-foreground/30 font-mono text-[9px] tracking-widest uppercase">
            © {currentYear} ALL_SYSTEMS_OPERATIONAL
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
            <span className="text-primary font-mono text-[9px] leading-none tracking-widest uppercase">
              Status: Ativo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
