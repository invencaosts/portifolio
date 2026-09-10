import { getGitHubData } from '@/lib/github';
export default async function GitHubArchive() {
  const data = await getGitHubData('invencaosts');
  return (
    <section aria-labelledby="github-title" className="px-6 py-20 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">07_ARQUIVO_GITHUB</p>
        <h2 id="github-title" className="section-title">
          Outros experimentos e repositórios.
        </h2>
        {data.projects.length ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.projects.slice(0, 6).map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card hover:border-primary/60 p-6"
              >
                <h3 className="font-headline font-bold">{p.name}</h3>
                <p className="text-foreground/55 mt-2 line-clamp-2 text-sm">{p.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-foreground/60 mt-8">
            A integração está indisponível neste momento.{' '}
            <a
              className="text-primary-text underline"
              href="https://github.com/invencaosts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja todos os repositórios no GitHub ↗
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
