import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, whatsappBookingUrl, SITE } from "@/lib/site";
import { doctors, getDoctorBySlug } from "@/lib/doctors";
import { treatments } from "@/lib/treatments";
import { breadcrumbSchema, personSchema, physicianSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Doctor Not Found" };
  const url = `${SITE_URL}${doctor.path}`;
  return {
    title: `${doctor.name} | ${doctor.credentials} | Bangalore`,
    description: doctor.authorityStatement,
    alternates: { canonical: url },
    openGraph: {
      title: doctor.name,
      description: doctor.authorityStatement,
      url,
      images: [{ url: doctor.image, alt: doctor.name }],
      type: "profile",
    },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const leadTreatments = treatments.filter((t) => t.leadDoctor === doctor.id);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: doctor.name, path: doctor.path },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          personSchema(doctor),
          physicianSchema(doctor),
        ]}
      />

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="relative w-48 h-56 mx-auto md:mx-0 rounded-lg overflow-hidden bg-white/10">
            <Image src={doctor.image} alt={doctor.name} fill className="object-contain" priority sizes="220px" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">{doctor.name}</h1>
            <p className="text-xl opacity-95 mb-4">{doctor.credentials}</p>
            <p className="text-base opacity-90 max-w-2xl">{doctor.authorityStatement}</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={crumbs} />

        {doctor.bio.map((p) => (
          <p key={p.slice(0, 32)} className="text-lg text-gray-700 leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <h2 className="text-2xl font-bold mt-10 mb-4">Qualifications</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          {doctor.qualifications.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Specializations</h2>
        <ul className="flex flex-wrap gap-2 mb-8">
          {doctor.specializations.map((s) => (
            <li key={s} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
              {s}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Focus areas</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          {doctor.focusAreas.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Knows about (entity topics)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          {doctor.knowsAbout.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Lead treatments</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mb-10">
          {leadTreatments.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="block border border-gray-200 hover:border-red-600 rounded-lg px-4 py-3 text-gray-800 font-medium"
              >
                {t.shortName}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 mb-6">
          Experience: {doctor.experienceYears}+ years specialised practice. Clinic rating{" "}
          {SITE.rating.display} ({SITE.rating.count}+ reviews).
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/appointments" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Book with {doctor.shortName}
          </Link>
          <a
            href={whatsappBookingUrl(`Hi, I'd like an appointment with ${doctor.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </SiteShell>
  );
}
