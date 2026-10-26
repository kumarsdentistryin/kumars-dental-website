import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { patientGuides, getGuideBySlug } from "@/lib/guides";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return patientGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };

  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ];

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE_URL}/guides/${guide.slug}#webpage`,
    url: `${SITE_URL}/guides/${guide.slug}`,
    name: guide.title,
    description: guide.directAnswer,
    reviewedBy: {
      "@id": "https://drpremkumar.in/#doctor",
    },
    lastReviewed: guide.lastReviewed,
    author: {
      "@id": "https://drpremkumar.in/#doctor",
    },
    publisher: {
      "@id": `${SITE_URL}/#clinic`,
    },
  };

  return (
    <SiteShell>
      <JsonLd
        data={[
          medicalWebPageSchema,
          breadcrumbSchema(crumbs),
          faqSchema(guide.faqs),
        ]}
      />

      <article className="min-h-screen bg-slate-50 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          {/* Header Card */}
          <header className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                Patient Guide
              </span>
              <span className="text-xs text-slate-500">
                Medically reviewed by Dr. Prem Kumar R, MDS – last reviewed {guide.lastReviewed}
              </span>
            </div>

            {/* Exactly One H1 Phrased As The Question */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {guide.title}
            </h1>

            {/* 40-60 Word Direct Answer (Featured Snippet Block) */}
            <div className="p-5 sm:p-6 bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl">
              <p className="text-xs uppercase tracking-wider font-bold text-blue-900 mb-2">
                Quick Clinical Answer
              </p>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                {guide.directAnswer}
              </p>
            </div>
          </header>

          {/* Main Content Sections */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-10 mb-8">
            {guide.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  {section.title}
                </h2>
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    {p}
                  </p>
                ))}

                {/* Steps if present */}
                {section.steps && (
                  <ol className="list-decimal pl-6 space-y-2.5 text-slate-700 my-4 text-base">
                    {section.steps.map((st, sIdx) => (
                      <li key={sIdx} className="leading-relaxed">
                        {st}
                      </li>
                    ))}
                  </ol>
                )}

                {/* Comparison Table if present */}
                {section.table && (
                  <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-xs">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 sm:p-4">Criteria</th>
                          <th className="p-3.5 sm:p-4">{section.table.headerA}</th>
                          <th className="p-3.5 sm:p-4">{section.table.headerB}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="p-3.5 sm:p-4 font-semibold text-slate-900">{row.feature}</td>
                            <td className="p-3.5 sm:p-4">{row.colA}</td>
                            <td className="p-3.5 sm:p-4">{row.colB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Related Treatment & Appointment Booking Block */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-50 rounded-xl">
              <div>
                <p className="text-xs uppercase font-bold text-slate-500 mb-1">Related Treatment</p>
                <Link
                  href={`/treatments/${guide.relatedTreatmentSlug}`}
                  className="text-lg font-bold text-blue-700 hover:underline"
                >
                  {guide.relatedTreatmentName} →
                </Link>
              </div>
              <Link
                href="/appointments"
                className="px-6 py-3 rounded-lg bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-xs"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* 4-6 FAQs Section */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {guide.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Medical Review Line Footer */}
          <footer className="text-center text-xs text-slate-500 py-4">
            <p>
              Medically reviewed by Dr. Prem Kumar R, MDS (Pediatric &amp; Preventive Dentistry, KSDC Reg. 47094 A) – last reviewed {guide.lastReviewed}.
            </p>
            <p className="mt-1">
              Kumar&apos;s Microscopic Dental Care, No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru.
            </p>
          </footer>
        </div>
      </article>
    </SiteShell>
  );
}
