"use client";

import Link from "next/link";
import Image from "next/image";
import { type Project, localizedString, localizedArray } from "@/data/projects";
import { Reveal } from "./reveal";
import { useLocale } from "@/i18n/locale-context";

interface ProjectFeatureProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectFeature({
  project,
  reversed = false,
}: ProjectFeatureProps) {
  const { locale, t } = useLocale();

  return (
    <Reveal>
      <article className="mb-16 md:mb-24 last:mb-0">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`lg:col-span-5 ${
              reversed ? "lg:col-start-8 lg:order-2" : "lg:order-1"
            }`}
          >
            {project.image ? (
              <div className="relative aspect-[4/3] rounded overflow-hidden border border-line">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} screenshot`}
                  fill
                  className={
                    project.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            ) : (
              <div className="bg-surface border border-line rounded aspect-[4/3] flex flex-col items-center justify-center p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted mb-2">
                  {project.category} / {project.year}
                </span>
                <span className="font-mono text-xs text-muted/60">
                  PROJECT_SCREENSHOT_{project.index}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 ${
              reversed ? "lg:col-start-1 lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Index */}
            <span className="font-mono text-xs text-muted tracking-[0.15em] block mb-3">
              {project.index}
            </span>

            {/* Category + Year */}
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-2">
              {project.category} / {project.year}
            </p>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              {project.title}
            </h2>

            {/* Summary */}
            <p className="text-base text-muted leading-relaxed mb-6 max-w-lg">
              {localizedString(project.summary, project.summary_id, locale)}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-muted px-2.5 py-1 border border-line rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Verified results */}
            {project.verifiedResults.length > 0 && (
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-2">
                  {t.project.verified}
                </span>
                <ul className="space-y-1">
                  {localizedArray(
                    project.verifiedResults,
                    project.verifiedResults_id,
                    locale
                  ).map((result, i) => (
                    <li
                      key={i}
                      className="text-sm text-ink/80 flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5 text-xs">■</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Design targets */}
            {project.designTargets && project.designTargets.length > 0 && (
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-2">
                  {t.project.designTarget}
                </span>
                <ul className="space-y-1">
                  {localizedArray(
                    project.designTargets,
                    project.designTargets_id,
                    locale
                  ).map((target, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-muted mt-0.5 text-xs">□</span>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scope */}
            {project.scope && project.scope.length > 0 && (
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-2">
                  {t.project.scope}
                </span>
                <ul className="space-y-1">
                  {localizedArray(project.scope, project.scope_id, locale).map(
                    (item, i) => (
                      <li
                        key={i}
                        className="text-sm text-ink/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 text-xs">■</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Operational target */}
            {project.operationalTarget && (
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted block mb-2">
                  {t.project.operationalScale}
                </span>
                <p className="text-sm text-ink/80">
                  {localizedString(
                    project.operationalTarget,
                    project.operationalTarget_id,
                    locale
                  )}
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200 group"
              >
                {t.project.viewCaseStudy}{" "}
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted hover:text-ink transition-colors duration-200 group"
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
                  className="inline-flex items-center text-sm text-muted hover:text-ink transition-colors duration-200 group"
                >
                  {t.project.sourceCode}{" "}
                  <span className="ml-1.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
