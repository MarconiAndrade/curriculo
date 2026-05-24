import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { professionalExperience } from "@/lib/profile";

export default function ExperienciaProfissional() {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Carreira"
        title="Experiência Profissional"
        description="Vivências práticas, responsabilidades e habilidades desenvolvidas em projetos, estudos e atuação profissional."
      />

      <Timeline items={professionalExperience} />
    </section>
  );
}
