import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, whatsappBookingUrl } from "@/lib/site";
import { getDoctor } from "@/lib/doctors";
import { getTreatment, getRelatedTreatments } from "@/lib/treatments";
import { getGuidesForTreatment } from "@/lib/guides";
import { locations } from "@/lib/locations";
import {
  breadcrumbSchema,
  faqSchema,
  medicalProcedureSchema,
  physicianSchema,
} from "@/lib/schema";

const SLUG = "children-dentistry";

const KIDS_WA_URL =
  "https://wa.me/918197280019?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kids%20dental%20appointment";

export const metadata: Metadata = (() => {
  const treatment = getTreatment(SLUG);
  if (!treatment) return { title: "Pediatric Dentistry" };
  const url = `${SITE_URL}/treatments/${SLUG}`;
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url,
      images: [{ url: `${SITE_URL}${treatment.image}`, alt: treatment.name }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      images: [`${SITE_URL}${treatment.image}`],
    },
  };
})();

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}

const TRUST_ITEMS = [
  { label: "MDS + KSDC Reg. 47094 A" },
  { label: "Child-friendly painless anaesthesia" },
  { label: "Digital X-ray" },
] as const;

export default function ChildrenDentistryPage() {
  const treatment = getTreatment(SLUG);
  if (!treatment) return null;

  const doctor = getDoctor(treatment.leadDoctor);
  const related = getRelatedTreatments(treatment);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pediatric Dentistry", path: `/treatments/${SLUG}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(treatment.faqs),
          medicalProcedureSchema(treatment, doctor),
          physicianSchema(doctor),
        ]}
      />

      {/* ── Hero ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
            {treatment.category}
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Pediatric Dentist in Yelahanka
          </h1>

          <p className="text-base sm:text-lg opacity-90 max-w-3xl mb-5">
            MDS Pediatric &amp; Preventive Dentist Dr. Prem Kumar R · Attur
            Main Road, Yelahanka New Town · Open till 9 pm, Sundays 10–6
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href="tel:+918197280019"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm shadow transition"
            >
              {/* phone icon */}
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call +91 81972 80019
            </a>

            <a
              href={KIDS_WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold text-sm shadow transition"
            >
              {/* whatsapp icon */}
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp to book
            </a>
          </div>

          {/* Trust row */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 text-sm font-medium opacity-95"
              >
                <span className="text-emerald-400 text-base leading-none">✓</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main content + sidebar ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[1fr_280px] gap-10">
        <article>
          <Breadcrumbs items={crumbs} />

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[460px] mb-8 rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/90 shadow-md">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 750px"
              priority
            />
          </div>

          <Section title="What is it?">
            <p className="text-gray-700 leading-relaxed">{treatment.overview}</p>
          </Section>

          <Section title="Who needs it?">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.whoNeedsIt.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Symptoms">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Causes">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.causes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Benefits">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Risks & considerations">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Treatment process">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {treatment.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Section>

          <Section title="Recovery">
            <p className="text-gray-700 leading-relaxed">{treatment.recovery}</p>
          </Section>

          <Section title="Duration">
            <p className="text-gray-700 leading-relaxed">{treatment.duration}</p>
          </Section>

          <Section title="Cost (Bangalore indicative)">
            <p className="text-gray-700 leading-relaxed">{treatment.costRange}</p>
            <p className="text-sm text-gray-500 mt-2">{SITE.costDisclaimer}</p>
          </Section>

          <Section title="Success & outcomes">
            <p className="text-gray-700 leading-relaxed">{treatment.successRate}</p>
          </Section>

          <Section title="Frequently asked questions">
            <div className="space-y-4">
              {treatment.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-gray-200 rounded-lg p-4 group"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Section>

          {related.length > 0 && (
            <Section title="Related treatments">
              <ul className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/treatments/${r.slug}`}
                      className="inline-block border border-gray-300 hover:border-red-600 text-gray-800 hover:text-red-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {r.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Related patient guides */}
          {(() => {
            const guides = getGuidesForTreatment(treatment.slug);
            return guides.length > 0 ? (
              <Section title="Related patient guides">
                <div className="grid sm:grid-cols-2 gap-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="border border-blue-100 bg-blue-50/50 hover:border-blue-500 rounded-xl p-4 transition block"
                    >
                      <span className="text-xs uppercase font-bold text-blue-700 block mb-1">
                        Guide
                      </span>
                      <p className="font-semibold text-gray-900 text-sm mb-1.5">
                        {g.title}
                      </p>
                      <span className="text-xs text-red-700 font-medium">
                        Read guide →
                      </span>
                    </Link>
                  ))}
                </div>
              </Section>
            ) : null;
          })()}

          {/* Location links */}
          <Section title="Serving North Bengaluru areas">
            <p className="text-sm text-gray-600 mb-3">
              Patients visit our Attur Main Road clinic in Yelahanka New Town
              from across North Bengaluru:
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {locations.slice(0, 3).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-block border border-gray-300 hover:border-red-600 bg-white text-gray-700 hover:text-red-700 px-3.5 py-1.5 rounded-lg text-xs font-medium"
                  >
                    Dentist near {loc.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </Section>

          <p className="text-xs text-gray-500 mt-8">
            {doctor.medicalReviewerLine} Last updated {treatment.lastUpdated}.
            Educational references include publicly available guidance from
            organisations such as the Indian Dental Association (IDA) and
            American Dental Association (ADA) patient education
            materials—adapted for general understanding, not as case-specific
            advice.
          </p>
        </article>

        {/* Sticky sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <div className="relative w-full h-40 mb-4 rounded overflow-hidden bg-white">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 280px"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold text-lg text-red-700">{doctor.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{doctor.credentials}</p>
            <p className="text-sm text-gray-600 mb-4">{doctor.authorityStatement}</p>
            <Link
              href={doctor.path}
              className="text-sm font-semibold text-red-700 hover:underline"
            >
              View full profile →
            </Link>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-red-50 space-y-3">
            <p className="font-bold text-gray-900">Book this treatment</p>
            <Link
              href="/appointments"
              className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
            >
              Book appointment
            </Link>
            <a
              href={whatsappBookingUrl(
                "Hi, I'd like to enquire about pediatric dentistry."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              WhatsApp clinic
            </a>
            <a
              href={`tel:${SITE.phones.primaryTel}`}
              className="block text-center border-2 border-red-600 text-red-700 font-semibold py-3 rounded-lg"
            >
              Call {SITE.phones.primary}
            </a>
          </div>

          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-1">Clinic hours</p>
            <p>
              Mon–Sat: 10:00 AM – 9:00 PM
              <br />
              Sunday: 10:00 AM – 6:00 PM
            </p>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
