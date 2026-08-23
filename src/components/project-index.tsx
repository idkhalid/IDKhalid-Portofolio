"use client";

import Link from "next/link";
import Image from "next/image";
import { type Project, localizedString } from "@/data/projects";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

interface ProjectIndexProps {
  projects: Project[];
}

export function ProjectIndex({ projects }: ProjectIndexProps) {
  const { locale } = useLocale();

  return (
    <div className="divide-y divide-line">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 60}>
          <Link
            href={`/work/${project.slug}`}
            className="group block py-6 md:py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
              {/* Image thumbnail */}
              <div className="md:col-span-2 hidden md:block">
                {project.image ? (
                  <div className="relative aspect-[4/3] rounded overflow-hidden border border-line">
                    <Image
                      src={project.image}
                      alt={`${project.title}`}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="120px"
                    />
                  </div>
                ) : (
                  <div className="bg-surface border border-line rounded aspect-[4/3] flex items-center justify-center">
                    <span className="font-mono text-[9px] text-muted/50">
                      {project.index}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="md:col-span-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted tracking-[0.15em] shrink-0">
                      {project.index}
                    </span>
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted tracking-wide shrink-0">
                    {project.category} / {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed max-w-xl mb-2 sm:ml-7">
                  {localizedString(project.summary, project.summary_id, locale)}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:ml-7">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-muted/70"
                    >
                      {tech}
                      {project.stack.indexOf(tech) <
                      Math.min(3, project.stack.length - 1)
                        ? " ·"
                        : ""}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="font-mono text-[10px] text-muted/50">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
