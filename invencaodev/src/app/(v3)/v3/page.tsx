export default function V3Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-primary">Portfólio V3</h1>
        <p className="mt-4 text-lg">Iniciando o desenvolvimento da terceira versão.</p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:border-primary transition-colors">
          <h2 className="text-xl font-bold">Futuro Design</h2>
          <p className="opacity-70">Aguardando o esquema de cores para implementação.</p>
        </div>
        <div className="p-6 border rounded-lg hover:border-primary transition-colors">
          <h2 className="text-xl font-bold">Tecnologias</h2>
          <p className="opacity-70">Next.js 15+, Tailwind CSS v4, TypeScript.</p>
        </div>
        <div className="p-6 border rounded-lg hover:border-primary transition-colors">
          <h2 className="text-xl font-bold">Links</h2>
          <div className="flex flex-col gap-2 mt-2">
            <a href="/v1" className="text-primary hover:underline">Versão 1 (Arquivo)</a>
            <a href="/v2" className="text-primary hover:underline">Versão 2 (Arquivo)</a>
          </div>
        </div>
      </div>
    </main>
  );
}
