import { SITE_URL } from "@/lib/site";
import { getAllTreatmentSlugs } from "@/lib/treatments";
import { getAllLocationSlugs } from "@/lib/locations";
import { getAllPostSlugs } from "@/lib/blog/posts";
import { doctors } from "@/lib/doctors";

export async function GET() {
  const urls = [
    "/",
    "/about",
    "/services",
    "/team",
    "/doctors/dr-prem-kumar",
    "/doctors/dr-rv-roshini",
    "/faqs",
    "/testimonials",
    "/patient-resources",
    "/contact",
    "/appointments",
    "/llms.txt",
    "/llms-full.txt",
    "/ai-directives.txt",
    "/discovery.json",
    ...getAllTreatmentSlugs().map((s) => `/treatments/${s}`),
    ...getAllLocationSlugs().map((s) => `/locations/${s}`),
    ...getAllPostSlugs().map((s) => `/blog/${s}`),
    ...doctors.map((d) => d.path),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
