export interface GitHubProject {
  name: string;
  description: string;
  url: string;
}
export interface GitHubData {
  projects: GitHubProject[];
  updatedAt?: string;
  repos: number;
  contributions: number;
  linesOfCode: number;
}
export async function getGitHubData(username: string): Promise<GitHubData> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) throw new Error(`GitHub HTTP ${response.status}`);
    const repos = (await response.json()) as {
      name: string;
      description: string | null;
      html_url: string;
      fork: boolean;
    }[];
    const originals = repos.filter((r) => !r.fork);
    return {
      projects: originals
        .filter(
          (r) =>
            !['quizlab-app', 'quizlab-api', 'geoserver', 'demo_palestra_cybersecurity'].includes(
              r.name,
            ),
        )
        .map((r) => ({
          name: r.name,
          description: r.description || 'Repositório público no GitHub.',
          url: r.html_url,
        })),
      updatedAt: new Date().toISOString(),
      repos: originals.length,
      contributions: 0,
      linesOfCode: 0,
    };
  } catch (error) {
    console.error('GitHub indisponível:', error);
    return { projects: [], repos: 0, contributions: 0, linesOfCode: 0 };
  }
}
