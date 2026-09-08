"use client";

import { SectionHeading } from "@/components/section-heading";
import { ProjectFeature } from "@/components/project-feature";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/locale-context";

export default function WorkPage() {
  const { t } = useLocale();

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <SectionHeading
          number="—"
          title={t.sections.allWork}
          subtitle={t.sections.allWorkSub}
          headingLevel={1}
        />

        {projects.map((project, i) => (
          <ProjectFeature
            key={project.slug}
            project={project}
            reversed={i % 2 !== 0}
          />
        ))}
      </div>
    </main>
  );
}
