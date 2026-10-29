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

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const treatment = getTreatment("root-canal-treatment")!;
  const url = `${SITE_URL}/treatments/root-canal-treatment`;
  return {
    title:
      "Microscopic Root Canal Bangalore | Painless Single-Sitting RCT | Dr. Prem Kumar",
    description: treatment.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title:
        "Microscopic Root Canal Bangalore | Painless Single-Sitting RCT | Dr. Prem Kumar",
      description: treatment.metaDescription,
      url,
      images: [{ url: `${SITE_URL}${treatment.image}`, alt: treatment.name }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Microscopic Root Canal Bangalore | Painless Single-Sitting RCT | Dr. Prem Kumar",
      description: treatment.metaDescription,
      images: [`${SITE_URL}${treatment.image}`],
    },
  };
}

// ---------------------------------------------------------------------------
// Shared layout helpers
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function RootCanalTreatmentPage() {
  const treatment = getTreatment("root-canal-treatment")!;
  const doctor = getDoctor(treatment.leadDoctor);
  const related = getRelatedTreatments(treatment);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: treatment.shortName, path: "/treatments/root-canal-treatment" },
  ];

  const microscopeBullets = [
    "Up to 25× magnification — reveals fine anatomical details",
    "Co-axial illumination — lights the canal directly",
    "Detects hidden and accessory canals invisible to routine endodontics",
    "Identifies calcified canals and micro-cracks that standard instruments miss",
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

      {/* ------------------------------------------------------------------ */}
      {/* Hero */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
            {treatment.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Microscopic Root Canal Treatment in Yelahanka
          </h1>
          <p className="text-lg opacity-95 max-w-3xl mt-2 mb-6">
            Microscope-assisted RCT by Dr. Prem Kumar R (MDS) · single-visit
            where clinically suitable · Attur Main Road
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="tel:+918197280019"
              className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              Call +91 81972 80019
            </a>
            <a
              href="https://wa.me/918197280019?text=Hi%2C%20I%20have%20tooth%20pain%20and%20need%20an%20RCT%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.107 1.518 5.834L.057 23.09a.75.75 0 00.921.919l5.444-1.428A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 01-5.073-1.424l-.363-.217-3.768.988.998-3.661-.237-.377A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              WhatsApp for RCT
            </a>
          </div>

          {/* Doctor credit */}
          <p className="mt-6 text-sm opacity-80">
            Led by{" "}
            <Link href={doctor.path} className="underline font-semibold">
              {doctor.name}
            </Link>{" "}
            · {doctor.credentials}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Main grid */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[1fr_280px] gap-10">
        <article>
          <Breadcrumbs items={crumbs} />

          {/* Treatment image */}
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

          {/* What is it? */}
          <Section title="What is it?">
            <p className="text-gray-700 leading-relaxed">{treatment.overview}</p>
          </Section>

          {/* Who needs it? */}
          <Section title="Who needs it?">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.whoNeedsIt.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Symptoms */}
          <Section title="Symptoms">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Causes */}
          <Section title="Causes">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.causes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Benefits */}
          <Section title="Benefits">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Risks */}
          <Section title="Risks &amp; considerations">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {treatment.risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Treatment process */}
          <Section title="Treatment process">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {treatment.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Section>

          {/* ---------------------------------------------------------------- */}
          {/* NEW — What to expect (visual step-by-step) */}
          {/* ---------------------------------------------------------------- */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What to expect
            </h2>
            <ol className="space-y-4" aria-label="RCT step-by-step process">
              {treatment.process.map((step, idx) => (
                <li key={step} className="flex gap-4 items-start">
                  {/* numbered badge */}
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-900 text-white text-sm font-bold flex items-center justify-center shadow"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  {/* card body */}
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <p className="text-gray-800 leading-relaxed">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------------------------------------------------------------- */}
          {/* NEW — Why a dental microscope? */}
          {/* ---------------------------------------------------------------- */}
          <section className="mb-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Why a dental microscope?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              At Kumar&apos;s Microscopic Dental Care, Dr. Prem Kumar R (MDS)
              uses high-power magnification to visualise the root canal system
              with precision that the naked eye cannot achieve.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {microscopeBullets.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 items-start bg-white border border-blue-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-800 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery */}
          <Section title="Recovery">
            <p className="text-gray-700 leading-relaxed">{treatment.recovery}</p>
          </Section>

          {/* Duration */}
          <Section title="Duration">
            <p className="text-gray-700 leading-relaxed">{treatment.duration}</p>
          </Section>

          {/* Cost */}
          <Section title="Cost (Bangalore indicative)">
            <p className="text-gray-700 leading-relaxed">{treatment.costRange}</p>
            <p className="text-sm text-gray-500 mt-2">{SITE.costDisclaimer}</p>
          </Section>

          {/* Success & outcomes */}
          <Section title="Success &amp; outcomes">
            <p className="text-gray-700 leading-relaxed">{treatment.successRate}</p>
          </Section>

          {/* FAQs */}
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
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Section>

          {/* Related treatments */}
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

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 mt-8">
            {doctor.medicalReviewerLine} Last updated {treatment.lastUpdated}.
            Educational references include publicly available guidance from
            organisations such as the Indian Dental Association (IDA) and
            American Dental Association (ADA) patient education
            materials—adapted for general understanding, not as case-specific
            advice.
          </p>
        </article>

        {/* ---------------------------------------------------------------- */}
        {/* Sidebar */}
        {/* ---------------------------------------------------------------- */}
        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          {/* Doctor card */}
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
            <p className="text-sm text-gray-600 mb-4">
              {doctor.authorityStatement}
            </p>
            <Link
              href={doctor.path}
              className="text-sm font-semibold text-red-700 hover:underline"
            >
              View full profile →
            </Link>
          </div>

          {/* Booking card */}
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
                `Hi, I'd like to enquire about ${treatment.shortName}.`
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

          {/* Clinic hours */}
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
