import Navbar from "@/componentsV3/Navbar";
import Hero from "@/componentsV3/Hero";
import LogStrip from "@/componentsV3/LogStrip";
import AboutBento from "@/componentsV3/AboutBento";
import Footer from "@/componentsV3/Footer";

export default function V3Page() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-20">
        <Hero />
        
        <LogStrip />
        
        <AboutBento />
        
        {/* Espaçador para simular seção de experiência mencionada no design */}
        <section id="experiencia" className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto border-l border-borderColor/20 pl-8 space-y-12">
            <h2 className="font-headline text-3xl font-bold text-foreground">TRAJETÓRIA_PROFISSIONAL</h2>
            <div className="space-y-4 opacity-50 italic">
              <p>[Sessão em desenvolvimento - Espaço reservado para experiências]</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
