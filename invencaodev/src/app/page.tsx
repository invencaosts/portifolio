import Navbar from "@/componentsV4/Navbar";
import Hero from "@/componentsV4/Hero";
import LogStrip from "@/componentsV4/LogStrip";
import AboutBento from "@/componentsV4/AboutBento";
import Experience from "@/componentsV4/Experience";
import Contact from "@/componentsV4/Contact";
import Footer from "@/componentsV4/Footer";
import { ThemeProvider } from "@/componentsV4/providers/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <div data-scope="v4" className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-sans">
        <Navbar />

        <main className="pt-20">
          <Hero />

          <LogStrip />

          <AboutBento />

          <Experience />

          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
