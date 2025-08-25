import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://truefitrecruits.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/sports`, lastModified: new Date() },
    { url: `${base}/sports/lacrosse/men`, lastModified: new Date() },
    { url: `${base}/sports/lacrosse/women`, lastModified: new Date() },
    { url: `${base}/sports/football/men`, lastModified: new Date() },
    { url: `${base}/sports/soccer/men`, lastModified: new Date() },
    { url: `${base}/sports/soccer/women`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
