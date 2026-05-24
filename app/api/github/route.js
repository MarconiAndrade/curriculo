export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "marconiandradefilho";

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "curriculo-next-app",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return Response.json(
        { message: "Não foi possível carregar os repositórios do GitHub." },
        { status: response.status }
      );
    }

    const repos = await response.json();

    const formattedRepos = repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "Repositório público no GitHub.",
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
    }));

    return Response.json(formattedRepos);
  } catch (error) {
    return Response.json(
      { message: "Erro interno ao consultar a API do GitHub." },
      { status: 500 }
    );
  }
}
