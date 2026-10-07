import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = "2026-10-07";
  const paths = [
    "",
    "/menu",
    "/kerala-food",
    "/rooftop-pub",
    "/visit",
    "/occasions",
    "/about",
    "/craft-beer",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/menu" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/menu" || path === "/visit" ? 0.9 : 0.7,
  }));
}
