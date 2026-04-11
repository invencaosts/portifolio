import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-borderColor/20 bg-neutral/5 px-6 md:px-12 lg:px-24 xl:px-40 py-16 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Logo & Title */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-headline font-bold text-xl tracking-widest text-foreground">
            {"<invencaodev />"}
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-foreground/40 uppercase text-center md:text-left">
            ENGENHEIRO DE SOFTWARE \\ ARQUITETO DE SISTEMAS
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          <a href="mailto:gui.inven@gmail.com" title="Email" className="p-3 bg-neutral/10 rounded-full border border-borderColor/10 hover:border-primary/50 hover:text-primary transition-all duration-300">
            <FiMail className="w-5 h-5" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5579999684200&text=Oi,%20vim%20pelo%20seu%20portifolio%20e%20gostaria%20de%20conversar%20mais%20sobre." target="_blank" title="WhatsApp" className="p-3 bg-neutral/10 rounded-full border border-borderColor/10 hover:border-primary/50 hover:text-primary transition-all duration-300">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href="https://github.com/invencaosts" target="_blank" title="GitHub" className="p-3 bg-neutral/10 rounded-full border border-borderColor/10 hover:border-primary/50 hover:text-primary transition-all duration-300">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/guilherme-da-invencao-santos-556497282/" target="_blank" title="LinkedIn" className="p-3 bg-neutral/10 rounded-full border border-borderColor/10 hover:border-primary/50 hover:text-primary transition-all duration-300">
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="font-mono text-[9px] text-foreground/30 uppercase tracking-widest">
            © {currentYear} ALL_SYSTEMS_OPERATIONAL
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-[9px] text-primary uppercase tracking-widest leading-none">Status: Ativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
