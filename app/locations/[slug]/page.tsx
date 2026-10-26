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
  const title = `Dentist near ${location.name}, Bengaluru | Pediatric & Microscopic Dental Care | Kumar's Dental`;
  return {
    title,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: location.metaDescription,
      url,
      images: [{ url: `${SITE_URL}${SITE.defaultOgImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
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

  const coreTreatments = [
    {
      name: "Microscope-Assisted Root Canal Treatment",
      slug: "microscopic-dentistry",
      desc: "Single-sitting precision RCT performed under 25x surgical magnification to preserve natural tooth structure.",
    },
    {
      name: "Pediatric Dentistry",
      slug: "children-dentistry",
      desc: "Specialist children's dental care led by Dr. Prem Kumar R (MDS) with gentle behavioral guidance.",
    },
    {
      name: "Clear Aligners & Invisalign",
      slug: "invisible-aligners",
      desc: "Virtually invisible teeth straightening planned with digital 3D scans and customized aligner sets.",
    },
    {
      name: "iTero 3D Intraoral Scan",
      slug: "itero-3d-scanner",
      desc: "Comfortable, impression-free optical scanning generating digital 3D smile simulations in minutes.",
    },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(location.faqs),
          locationDentistSchema(location),
        ]}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
            Serving {location.name}, Bengaluru
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Dental care for families in {location.name}
          </h1>
          <p className="text-base sm:text-lg opacity-95 leading-relaxed">
            Specialist dental clinic at No. 12, Attur Main Road, Yelahanka New Town — MDS specialists{" "}
            <Link href="/doctors/dr-prem-kumar" className="underline font-semibold hover:text-blue-200">
              Dr. Prem Kumar R
            </Link>{" "}
            (Pediatric Dentistry &amp; Microscopic RCT) &middot;{" "}
            <Link href="/doctors/dr-rv-roshini" className="underline font-semibold hover:text-blue-200">
              Dr. RV Roshini
            </Link>{" "}
            (Crowns, Bridges &amp; Implants).
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={crumbs} />

        {/* Intro */}
        <div className="space-y-4 mb-8">
          {location.intro.map((p, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {p}
            </p>
          ))}
        </div>

        {/* Unique Area Overview & Commute Details */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Visiting from {location.name}
          </h2>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>Distance &amp; Drive Time:</strong> {location.distanceDriveTime}
            </p>
            <div>
              <strong>Common Routes &amp; Landmarks:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {location.routeLandmarks.map((route, i) => (
                  <li key={i}>{route}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Communities &amp; Enclaves Served:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {location.techParksAndCommunities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Parking &amp; Timing Tips:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {location.parkingAndTimingTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Core Treatments Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Core Specialized Dental Treatments
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {coreTreatments.map((t) => (
              <div
                key={t.slug}
                className="border border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-sm transition bg-white"
              >
                <h3 className="font-bold text-gray-900 mb-1.5">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{t.desc}</p>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="text-red-700 font-semibold text-sm hover:underline"
                >
                  Learn more about {t.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Specialist Doctor Angles */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="border border-blue-200 bg-blue-50/70 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Pediatric Dentistry</h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{location.pediatricAngle}</p>
            <Link
              href="/treatments/children-dentistry"
              className="text-red-700 font-semibold text-sm hover:underline"
            >
              Children&apos;s dentistry &rarr;
            </Link>
          </div>
          <div className="border border-amber-200 bg-amber-50/70 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Crowns &amp; Prosthetics</h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{location.crownsAngle}</p>
            <Link
              href="/treatments/crowns"
              className="text-red-700 font-semibold text-sm hover:underline"
            >
              Dental crowns &amp; prosthetics &rarr;
            </Link>
          </div>
        </div>

        {/* Google Map Embed & Clinic Location */}
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Clinic Location &amp; Directions</h2>
          <address className="not-italic text-gray-700 text-sm mb-4 leading-relaxed">
            Kumar&apos;s Microscopic Dental Care<br />
            No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru, Karnataka 560064<br />
            Phone:{" "}
            <a className="text-red-700 hover:underline font-semibold" href={`tel:${SITE.phones.primaryTel}`}>
              {SITE.phones.primary}
            </a>{" "}
            &middot; Front desk:{" "}
            <a className="text-red-700 hover:underline font-semibold" href={`tel:${SITE.phones.secondaryTel}`}>
              {SITE.phones.secondary}
            </a><br />
            Hours: Mon–Sat 10:00 AM – 9:00 PM &middot; Sun 10:00 AM – 6:00 PM
          </address>

          {/* Embedded Google Map */}
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-gray-200 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008398418086!2d77.56442087599026!3d13.101625487225722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.10!3m3!1m2!1s0x3bae190013b5bf0b%3A0x7d022ff77dfa8ba8!2sKumar&#39;s%20Microscopic%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map - Kumar's Dental clinic near ${location.name}`}
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://maps.app.goo.gl/UyHu7aUWt7zMUQHa8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition"
            >
              <span>📍 Get directions on Google Maps</span>
            </a>
            <Link
              href="/appointments"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition"
            >
              Book appointment
            </Link>
            <a
              href={whatsappBookingUrl(`Hi, I'm enquiring about an appointment from ${location.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions for {location.name} Patients
        </h2>
        <div className="space-y-4 mb-12">
          {location.faqs.map((faq) => (
            <details key={faq.question} className="border border-gray-200 rounded-xl p-4 bg-white">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Nearby Slugs */}
        {nearby.length > 0 && (
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby Areas Served</h2>
            <ul className="flex flex-wrap gap-2.5">
              {nearby.map((n) =>
                n ? (
                  <li key={n.slug}>
                    <Link
                      href={`/locations/${n.slug}`}
                      className="border border-gray-300 bg-gray-50 px-3.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:border-red-600 hover:text-red-700 transition"
                    >
                      Dentist near {n.name} &rarr;
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}

        <p className="text-xs text-gray-500">
          Last updated {location.lastUpdated}. Clinic physical address remains No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru 560064.
        </p>
      </div>
    </SiteShell>
  );
}
