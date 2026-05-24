import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { academicExperience } from "@/lib/profile";

export default function ExperienciaAcademica() {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Formação"
        title="Experiência Acadêmica"
        description="Minha trajetória acadêmica, disciplinas relevantes, projetos desenvolvidos e conhecimentos aplicados na área de tecnologia."
      />

      <Timeline items={academicExperience} />
    </section>
  );
}
