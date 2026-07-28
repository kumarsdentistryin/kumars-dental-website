import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, whatsappBookingUrl } from "@/lib/site";
import { getLocation, getAllLocationSlugs, locations } from "@/lib/locations";
import {
  breadcrumbSchema,
  faqSchema,
  locationDentistSchema,
} from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location Not Found" };
  const url = `${SITE_URL}/locations/${location.slug}`;
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url,
      images: [{ url: `${SITE_URL}${SITE.defaultOgImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [`${SITE_URL}${SITE.defaultOgImage}`],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: location.name, path: `/locations/${location.slug}` },
  ];

  const nearby = location.nearbySlugs
    .map((s) => locations.find((l) => l.slug === s))
    .filter(Boolean);

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(location.faqs),
          locationDentistSchema(location),
        ]}
      />

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm opacity-80 mb-2">Serving {location.name}, Bangalore</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{location.headline}</h1>
          <p className="text-lg opacity-95">
            Specialist clinic in Yelahanka New Town — pediatric authority{" "}
            <Link href="/doctors/dr-prem-kumar" className="underline font-semibold">
              Dr. Prem Kumar R
            </Link>{" "}
            · crowns authority{" "}
            <Link href="/doctors/dr-rv-roshini" className="underline font-semibold">
              Dr. RV Roshini
            </Link>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={crumbs} />

        {location.intro.map((p) => (
          <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4 text-lg">
            {p}
          </p>
        ))}

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to reach us from {location.name}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          {location.travelNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why {location.name} patients choose us</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          {location.localHooks.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Pediatric dentistry</h3>
            <p className="text-gray-700 text-sm mb-4">{location.pediatricAngle}</p>
            <Link href="/treatments/children-dentistry" className="text-red-700 font-semibold text-sm hover:underline">
              Children&apos;s dentistry →
            </Link>
          </div>
          <div className="border border-red-200 bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Crowns & prosthetics</h3>
            <p className="text-gray-700 text-sm mb-4">{location.crownsAngle}</p>
            <Link href="/treatments/crowns" className="text-red-700 font-semibold text-sm hover:underline">
              Dental crowns →
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinic details</h2>
        <p className="text-gray-700 mb-1">{SITE.address.full}</p>
        <p className="text-gray-700 mb-1">
          Phone:{" "}
          <a className="text-red-700 hover:underline" href={`tel:${SITE.phones.primaryTel}`}>
            {SITE.phones.primary}
          </a>
        </p>
        <p className="text-gray-700 mb-6">
          {SITE.hours.weekdays} · {SITE.hours.sunday}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/appointments" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Book appointment
          </Link>
          <a
            href={whatsappBookingUrl(`Hi, I'm enquiring from ${location.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
          <Link href="/treatments/emergency-dentistry" className="border-2 border-red-600 text-red-700 font-semibold px-6 py-3 rounded-lg">
            Emergency dentistry
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs for {location.name} patients</h2>
        <div className="space-y-4 mb-12">
          {location.faqs.map((faq) => (
            <details key={faq.question} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        {nearby.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby service pages</h2>
            <ul className="flex flex-wrap gap-3">
              {nearby.map((n) =>
                n ? (
                  <li key={n.slug}>
                    <Link
                      href={`/locations/${n.slug}`}
                      className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-red-600"
                    >
                      Dentist for {n.name}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </>
        )}

        <p className="text-xs text-gray-500 mt-10">
          Last updated {location.lastUpdated}. Clinic address remains Yelahanka New Town;
          these pages describe reachability and specialty fit for {location.name} residents.
        </p>
      </div>
    </SiteShell>
  );
}
