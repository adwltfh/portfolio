import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adawiyyahlatifah.dev";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/cute`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/professional`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
