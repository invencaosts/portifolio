"use client";

import { useTheme } from "@/componentsV3/providers/theme-provider";

export default function V3Page() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen p-8 md:p-24 bg-background text-foreground transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-black tracking-tighter text-primary">PORTFÓLIO V3</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded-full border border-borderColor ${theme === "light" ? "bg-primary text-white" : "hover:bg-neutral/10"}`}
            >
              Light
            </button>
            <button 
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded-full border border-borderColor ${theme === "dark" ? "bg-primary text-white" : "hover:bg-neutral/10"}`}
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme("system")}
              className={`px-4 py-2 rounded-full border border-borderColor ${theme === "system" ? "bg-primary text-white" : "hover:bg-neutral/10"}`}
            >
              System
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Nova Identidade Visual</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Iniciando a terceira versão do portfólio com a paleta de cores definida. 
              Este design foca em contraste, legibilidade e uma estética moderna.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Botão Primário
              </button>
              <button className="px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Secundário
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-xl bg-neutral border border-borderColor shadow-lg">
              <h3 className="text-xl font-bold text-tertiary mb-2">Tertiary Color</h3>
              <p className="opacity-70 text-sm">
                A cor terciária é utilizada para destaques específicos e elementos de contraste.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border-2 border-primary border-dashed flex items-center justify-center">
              <span className="text-primary font-mono font-bold">Primary Border Dash</span>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-borderColor flex flex-col md:flex-row justify-between items-center opacity-60 text-sm italic">
          <p>© 2026 invencaodev - Versão 3 em desenvolvimento</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/v1" className="hover:text-primary underline-offset-4 hover:underline transition-all">V1 Archive</a>
            <a href="/v2" className="hover:text-primary underline-offset-4 hover:underline transition-all">V2 Archive</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
