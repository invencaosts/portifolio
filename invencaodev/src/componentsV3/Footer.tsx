export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contato" className="w-full border-t border-borderColor/20 bg-neutral/5 flex flex-col md:flex-row justify-between items-center px-12 py-12 mt-24">
      <div className="font-mono text-[10px] tracking-tight uppercase text-foreground/50 mb-4 md:mb-0">
        © {currentYear} ARQUITETO_SISTEMAS // MONÓLITO_CINÉTICO
      </div>
      
      <div className="flex gap-8 items-center">
        <a className="font-mono text-[10px] tracking-tight uppercase text-foreground/50 hover:text-primary transition-colors duration-300" href="#">Stack</a>
        <a className="font-mono text-[10px] tracking-tight uppercase text-foreground/50 hover:text-primary transition-colors duration-300" href="#">GitHub</a>
        <a className="font-mono text-[10px] tracking-tight uppercase text-foreground/50 hover:text-primary transition-colors duration-300" href="#">LinkedIn</a>
      </div>
      
      <div className="mt-4 md:mt-0 font-mono text-[10px] text-primary uppercase">
        STATUS_CONEXÃO: ATIVA
      </div>
    </footer>
  );
}
