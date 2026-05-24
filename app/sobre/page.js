import SectionHeader from "@/components/SectionHeader";
import { modulesUsed, profile, skills } from "@/lib/profile";

export default function Sobre() {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Sobre"
        title="Quem sou eu e como este App foi desenvolvido"
        description="Esta página apresenta meu perfil profissional e lista todas as tecnologias, módulos e recursos usados no desenvolvimento do currículo online."
      />

      <div className="two-column">
        <article className="content-card large">
          <h2>Perfil</h2>
          <p>{profile.about}</p>

          <h3>Objetivo</h3>
          <p>{profile.objective}</p>
        </article>

        <article className="content-card">
          <h2>Dados rápidos</h2>
          <ul className="clean-list">
            <li><strong>Nome:</strong> {profile.name}</li>
            <li><strong>Área:</strong> {profile.role}</li>
            <li><strong>Localização:</strong> {profile.location}</li>
            <li><strong>E-mail:</strong> {profile.email}</li>
          </ul>
        </article>
      </div>

      <article className="content-card">
        <h2>Tecnologias utilizadas no desenvolvimento</h2>
        <div className="tech-grid">
          {modulesUsed.map((item) => (
            <div className="tech-card" key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="content-card">
        <h2>Competências técnicas</h2>
        <div className="pill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
