import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getSiteUrl, siteConfig } from "@/data/site";
import { CaseStudyContent } from "@/components/case-study-content";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} — ${siteConfig.name}`;
  const url = getSiteUrl(`/work/${project.slug}`);
  const image = project.image
    ? {
        url: getSiteUrl(project.image),
        alt: project.imageAlt ?? `${project.title} project screenshot`,
      }
    : undefined;

  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.summary,
      url,
      type: "website",
      siteName: siteConfig.name,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <CaseStudyContent
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
