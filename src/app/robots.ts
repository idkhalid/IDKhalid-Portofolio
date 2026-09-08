import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexableEnvironment } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableEnvironment) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: getSiteUrl("/sitemap.xml"),
  };
}
