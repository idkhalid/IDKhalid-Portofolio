import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl, isIndexableEnvironment } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexableEnvironment) return [];

  const projectRoutes = projects.map((project) => ({
    url: getSiteUrl(`/work/${project.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: getSiteUrl(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getSiteUrl("/work"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: getSiteUrl("/notes"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: getSiteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projectRoutes,
  ];
}
