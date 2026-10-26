import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { patientGuides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clinical Patient Guides | Kumar's Microscopic Dental Care Bengaluru",
  description:
    "Evidence-based dental guides on root canal cost factors, microscopic RCT, pediatric dentistry, clear aligners, and dental emergencies by Dr. Prem Kumar R, MDS.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Clinical Patient Guides | Kumar's Microscopic Dental Care",
    description:
      "Evidence-based dental guides reviewed by Dr. Prem Kumar R, MDS. Understand procedures, costs, and prevention clearly.",
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Patient Guides", path: "/guides" },
  ];

  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-blue-200 mb-2 font-semibold">
            Evidence-Based Patient Education
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Clinical Dental Guides</h1>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
            Direct clinical answers on treatment procedures, cost factors, pediatric milestones, and microscope-assisted tooth preservation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={crumbs} />

        <div className="grid gap-6 mt-8">
          {patientGuides.map((guide) => (
            <article
              key={guide.slug}
              className="border border-slate-200 rounded-xl p-6 bg-white hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block mb-3">
                  {guide.relatedTreatmentName}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  <Link href={`/guides/${guide.slug}`} className="hover:text-blue-600 transition-colors">
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {guide.directAnswer}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Medically reviewed by Dr. Prem Kumar R, MDS</span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Read full guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
