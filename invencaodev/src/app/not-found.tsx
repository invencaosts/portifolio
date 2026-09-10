import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="text-primary-text font-mono">ERROR_404</p>
        <h1 className="font-headline mt-4 text-5xl font-bold">Página não encontrada.</h1>
        <Link
          href="/"
          className="bg-primary mt-8 inline-block px-6 py-3 font-mono text-white uppercase"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
