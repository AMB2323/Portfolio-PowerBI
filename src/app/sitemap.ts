import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-powerbi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...profile.projects.map((project) => ({
      url: `${siteUrl}/projets/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
