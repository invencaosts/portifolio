import Navbar from "@/componentsV4/Navbar";
import Hero from "@/componentsV4/Hero";
import LogStrip from "@/componentsV4/LogStrip";
import Experience from "@/componentsV4/Experience";
import FeaturedProjects from "@/componentsV4/FeaturedProjects";
import ResearchEducation from "@/componentsV4/ResearchEducation";
import Capabilities from "@/componentsV4/Capabilities";
import About from "@/componentsV4/About";
import GitHubArchive from "@/componentsV4/GitHubArchive";
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

          <Experience />
          <FeaturedProjects />
          <ResearchEducation />
          <Capabilities />
          <About />
          <GitHubArchive />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
