import Link from "next/link";
import { ArrowRight, Code2, GraduationCap, BriefcaseBusiness, Rocket } from "lucide-react";
import { profile, highlights, skills } from "@/lib/profile";

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Currículo online</span>
          <h1>
            Olá, eu sou <span>{profile.name}</span>.
          </h1>
          <p className="hero-text">{profile.summary}</p>

          <div className="hero-actions">
            <Link className="btn primary" href="/projetos">
              Ver projetos <ArrowRight size={18} />
            </Link>
            <Link className="btn secondary" href="/sobre">
              Sobre mim
            </Link>
          </div>

          <div className="hero-tags">
            {skills.slice(0, 8).map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <aside className="profile-card">
          <div className="avatar">{profile.initials}</div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>

          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </aside>
      </div>

      <div className="stats-grid">
        {highlights.map((item) => (
          <article className="stat-card" key={item.title}>
            <strong>{item.value}</strong>
            <span>{item.title}</span>
          </article>
        ))}
      </div>

      <div className="feature-grid">
        <Link href="/sobre" className="feature-card">
          <Code2 />
          <h3>Sobre</h3>
          <p>Tecnologias, módulos e estrutura utilizada no desenvolvimento do App.</p>
        </Link>

        <Link href="/experiencia-academica" className="feature-card">
          <GraduationCap />
          <h3>Experiência Acadêmica</h3>
          <p>Formação, disciplinas, projetos universitários e evolução técnica.</p>
        </Link>

        <Link href="/experiencia-profissional" className="feature-card">
          <BriefcaseBusiness />
          <h3>Experiência Profissional</h3>
          <p>Vivências profissionais, responsabilidades e competências desenvolvidas.</p>
        </Link>

        <Link href="/projetos" className="feature-card">
          <Rocket />
          <h3>Projetos</h3>
          <p>Projetos desenvolvidos e repositórios carregados via API pública.</p>
        </Link>
      </div>
    </section>
  );
}
