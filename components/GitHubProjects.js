"use client";

import { useEffect, useState } from "react";
import { Code2, Star, GitBranch } from "lucide-react";
import { profile } from "@/lib/profile";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(`/api/github?username=${profile.githubUser}`);
        if (!response.ok) throw new Error("Erro ao buscar repositórios");
        const data = await response.json();
        setRepos(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }

    loadRepos();
  }, []);

  return (
    <article className="content-card github-section">
      <div className="github-heading">
        <div>
          <span className="eyebrow">Integração com API</span>
          <h2>Repositórios públicos do GitHub</h2>
          <p>
            Estes cards são carregados dinamicamente usando uma rota interna do Next.js que consome a API pública do GitHub.
          </p>
        </div>
        <Code2 size={38} />
      </div>

      {status === "loading" && <p className="feedback">Carregando repositórios...</p>}
      {status === "error" && <p className="feedback error">Não foi possível carregar os repositórios agora.</p>}

      {status === "success" && (
        <div className="repo-grid">
          {repos.map((repo) => (
            <a className="repo-card" href={repo.url} target="_blank" rel="noreferrer" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>

              <div className="repo-meta">
                <span>{repo.language || "Sem linguagem"}</span>
                <span><Star size={15} /> {repo.stars}</span>
                <span><GitBranch size={15} /> {repo.forks}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
