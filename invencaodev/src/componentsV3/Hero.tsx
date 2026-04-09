export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-background">
      {/* Glow de Fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-primary text-sm tracking-widest bg-neutral/10 px-3 py-1">
              v3.0.0_STABLE
            </span>
            <div className="h-[1px] w-12 bg-borderColor/30"></div>
          </div>
          
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground uppercase">
            GUILHERME<br/>
            <span className="text-foreground/20 italic">DA_INVENÇÃO</span>
          </h1>
          
          <p className="font-headline text-2xl md:text-3xl text-primary tracking-tight uppercase">
            Arquiteto de Software & Engenheiro de Sistemas
          </p>
        </div>

        <div className="lg:col-span-4 relative group">
          <div className="aspect-[4/5] bg-neutral/10 relative overflow-hidden border border-borderColor/20">
            <img 
              alt="Retrato Profissional" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700" 
              src="/MinhaFoto.jpg"
            />
            <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none"></div>
            
            {/* Overlay Técnico */}
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/50 text-right leading-none uppercase">
                LOC_ARACAJU_BR<br/>
                UTC-03:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
