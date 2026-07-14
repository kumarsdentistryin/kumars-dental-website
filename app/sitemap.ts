import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllTreatmentSlugs } from "@/lib/treatments";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllPostSlugs } from "@/lib/blog/posts";
import { doctors } from "@/lib/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/team",
    "/blog",
    "/contact",
    "/appointments",
    "/privacy",
    "/terms",
    "/faqs",
    "/testimonials",
    "/patient-resources",
    "/search",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/services" || path === "/appointments" ? 0.9 : 0.7,
  }));

  const treatments = getAllTreatmentSlugs().map((slug) => ({
    url: `${base}/treatments/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locations = getAllLocationSlugs().map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${base}${d.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...treatments, ...locations, ...doctorRoutes, ...posts];
}
