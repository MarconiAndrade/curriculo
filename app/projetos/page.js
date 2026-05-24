import SectionHeader from "@/components/SectionHeader";
import GitHubProjects from "@/components/GitHubProjects";
import { manualProjects } from "@/lib/profile";

export default function Projetos() {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Portfólio"
        title="Projetos Desenvolvidos"
        description="Projetos cadastrados manualmente e repositórios carregados dinamicamente pela API pública do GitHub."
      />

      <div className="project-grid">
        {manualProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="project-status">{project.status}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>

      <GitHubProjects />
    </section>
  );
}
