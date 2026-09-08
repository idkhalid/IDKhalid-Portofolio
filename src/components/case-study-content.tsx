"use client";

import Link from "next/link";
import Image from "next/image";
import { type Project, getProjectCaseStudy, localizedString } from "@/data/projects";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

interface CaseStudyContentProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function CaseStudyContent({
  project,
  prevProject,
  nextProject,
}: CaseStudyContentProps) {
  const { locale, t } = useLocale();
  const caseStudy = getProjectCaseStudy(project, locale);

  const sections = [
    { number: "01", title: t.caseStudy.context, content: caseStudy.context },
    {
      number: "02",
      title: t.caseStudy.constraints,
      content: null,
      list: caseStudy.constraints,
    },
    {
      number: "03",
      title: t.caseStudy.systemDesign,
      content: caseStudy.systemDesign,
    },
    {
      number: "04",
      title: t.caseStudy.keyDecisions,
      content: null,
      list: caseStudy.keyDecisions,
    },
    {
      number: "05",
      title: t.caseStudy.verification,
      content: caseStudy.verification,
    },
    {
      number: "06",
      title: t.caseStudy.improvements,
      content: null,
      list: caseStudy.improvements,
    },
  ];

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-4">
              {project.index} / {project.category} / {project.year}
            </p>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              {localizedString(project.summary, project.summary_id, locale)}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group mt-4"
              >
                {t.project.liveSite}{" "}
                <span className="ml-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted hover:text-ink transition-colors duration-200 group mt-4 ml-4"
              >
                {t.project.sourceCode}{" "}
                <span className="ml-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}
          </div>
        </Reveal>

        {/* Hero artifact */}
        <Reveal delay={80}>
          {project.image ? (
            <div className="relative aspect-[16/9] max-w-4xl rounded overflow-hidden border border-line mb-16 md:mb-24">
              <Image
                src={project.image}
                alt={project.imageAlt ?? `${project.title} screenshot`}
                fill
                className={
                  project.imageFit === "contain"
                    ? "object-contain"
                    : "object-cover"
                }
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          ) : (
            <div className="bg-surface border border-line rounded aspect-[16/9] max-w-4xl flex flex-col items-center justify-center p-8 mb-16 md:mb-24">
              <span className="font-mono text-xs text-muted/60">
                CASE_STUDY_HERO_{project.index}
              </span>
            </div>
          )}
        </Reveal>

        {/* Case study sections */}
        <div className="max-w-3xl">
          {sections.map((section, i) => (
            <Reveal key={section.number} delay={i * 60}>
              <div className="mb-12 md:mb-16">
                <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3">
                  {section.number} — {section.title}
                </h2>
                {section.content && (
                  <p className="text-base leading-relaxed text-ink/90">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-2 mt-2">
                    {section.list.map((item, j) => (
                      <li
                        key={j}
                        className="text-base text-ink/90 flex items-start gap-3"
                      >
                        <span className="text-accent mt-1.5 text-[8px]">■</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Metadata bar */}
        <Reveal>
          <div className="border-t border-line pt-8 mt-8 max-w-3xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                  {t.caseStudy.stack}
                </span>
                <span className="text-sm">{project.stack.join(", ")}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                  {t.caseStudy.role}
                </span>
                <span className="text-sm">{caseStudy.role}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                  {t.caseStudy.duration}
                </span>
                <span className="text-sm">{caseStudy.duration}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-1">
                  {t.caseStudy.status}
                </span>
                <span className="text-sm">{caseStudy.status}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Navigation */}
        <Reveal>
          <div className="border-t border-line pt-8 mt-12 flex justify-between max-w-3xl">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="text-sm text-muted hover:text-ink transition-colors duration-200 group"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1 inline-block mr-2">
                  ←
                </span>
                {prevProject.title}
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-sm text-muted hover:text-ink transition-colors duration-200 group text-right"
              >
                {nextProject.title}
                <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block ml-2">
                  →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
