import { CONFIG } from '@/data/config';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  homepage: string | null;
}

interface FetchOptions {
  all?: boolean;
}

// Curated copy (with measured results) overrides the raw GitHub description.
function curate(repo: GitHubRepo): GitHubRepo {
  const match = CONFIG.projects.find(
    (p) => p.github.toLowerCase() === repo.html_url.toLowerCase()
  );
  if (!match) return repo;
  return {
    ...repo,
    name: match.name,
    description: match.description,
    topics: match.tags,
    homepage: match.demo || repo.homepage,
  };
}

// Fallback uses only curated config data. No invented numbers.
function getFallbackProjects(): GitHubRepo[] {
  return CONFIG.projects
    .filter((p) => p.pinned)
    .map((p) => ({
      name: p.name,
      description: p.description,
      html_url: p.github,
      stargazers_count: 0,
      topics: p.tags,
      homepage: p.demo || null,
    }));
}

export async function fetchGitHubProjects(options: FetchOptions = {}): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };

    // Without a token, GitHub rate-limits shared hosting IPs (60 req/hour).
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${CONFIG.github}/repos?per_page=100&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos: GitHubRepo[] = (await response.json()).filter(
      (r: GitHubRepo & { fork?: boolean }) => !r.fork
    );

    if (options.all) {
      return repos.map(curate);
    }

    const order = CONFIG.pinnedRepos;
    const pinned = repos
      .filter((repo) => order.includes(repo.name))
      .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

    return pinned.length > 0 ? pinned.map(curate) : getFallbackProjects();
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return getFallbackProjects();
  }
}
