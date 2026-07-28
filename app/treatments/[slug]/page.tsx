import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, whatsappBookingUrl } from "@/lib/site";
import { getDoctor } from "@/lib/doctors";
import {
  getTreatment,
  getAllTreatmentSlugs,
  getRelatedTreatments,
} from "@/lib/treatments";
import {
  breadcrumbSchema,
  faqSchema,
  medicalProcedureSchema,
  physicianSchema,
} from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatment Not Found" };
  const url = `${SITE_URL}/treatments/${treatment.slug}`;
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    keywords: treatment.keywords,
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
}

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

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const doctor = getDoctor(treatment.leadDoctor);
  const related = getRelatedTreatments(treatment);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: treatment.shortName, path: `/treatments/${treatment.slug}` },
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

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-2">
            {treatment.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{treatment.name}</h1>
          <p className="text-lg opacity-95 max-w-3xl">{treatment.heroSubtitle}</p>
          <p className="mt-4 text-sm opacity-80">
            Led by{" "}
            <Link href={doctor.path} className="underline font-semibold">
              {doctor.name}
            </Link>{" "}
            · {doctor.credentials}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[1fr_280px] gap-10">
        <article>
          <Breadcrumbs items={crumbs} />
          <div className="relative w-full h-56 sm:h-72 mb-8 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 700px"
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

          <p className="text-xs text-gray-500 mt-8">
            {doctor.medicalReviewerLine} Last updated {treatment.lastUpdated}. Educational
            references include publicly available guidance from organisations such as the
            Indian Dental Association (IDA) and American Dental Association (ADA) patient
            education materials—adapted for general understanding, not as case-specific advice.
          </p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <div className="relative w-full h-40 mb-4 rounded overflow-hidden bg-white">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-contain"
                sizes="280px"
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
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-1">Clinic rating</p>
            <p>
              {SITE.rating.display} from {SITE.rating.count}+ patient reviews
            </p>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
