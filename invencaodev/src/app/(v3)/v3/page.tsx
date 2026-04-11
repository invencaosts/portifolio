import Navbar from "@/componentsV3/Navbar";
import Hero from "@/componentsV3/Hero";
import LogStrip from "@/componentsV3/LogStrip";
import AboutBento from "@/componentsV3/AboutBento";
import Experience from "@/componentsV3/Experience";
import Footer from "@/componentsV3/Footer";

export default function V3Page() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-20">
        <Hero />
        
        <LogStrip />
        
        <AboutBento />
        
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
