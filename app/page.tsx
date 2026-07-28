import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, whatsappBookingUrl } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Kumar's Microscopic Dental Care | Pediatric Dentist Attur & Yelahanka",
  description:
    "Kids dentist on Attur Main Road, Yelahanka New Town. Dr. Prem Kumar R — pediatric dentistry & microscopic RCT (formerly Associate Professor at Ramaiah). Dr. RV Roshini — crowns & implants. Call +91 81972 80019.",
  alternates: { canonical: SITE_URL },
};

const previewSlugs = [
  "children-dentistry",
  "root-canal-treatment",
  "crowns",
  "dental-implants",
  "microscopic-dentistry",
  "smile-designing",
];

export default function Home() {
  const preview = previewSlugs
    .map((s) => treatments.find((t) => t.slug === s))
    .filter(Boolean);

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: SITE.name,
          description:
            "Specialist dental clinic on Attur Main Road, Yelahanka New Town—pediatric dentistry, microscopic RCT, crowns, and implants.",
          url: SITE_URL,
          dateModified: "2026-07-01",
        }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-800 to-blue-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-200 mb-3">
              {SITE.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Advanced Dental Care with Microscopic Precision
            </h1>
            <p className="text-xl mb-4 opacity-95">
              Pediatric dentistry & microscopic RCT with{" "}
              <Link href="/doctors/dr-prem-kumar" className="underline font-semibold">
                Dr. Prem Kumar R
              </Link>
              — kids dentist for Attur &amp; Yelahanka New Town, Bangalore pediatric &amp;
              microscopic authority. Crowns, bridges, implants &amp; smile design with{" "}
              <Link href="/doctors/dr-rv-roshini" className="underline font-semibold">
                Dr. RV Roshini
              </Link>
              .
            </p>
            <p className="text-lg mb-2 opacity-90">{SITE.address.full}</p>
            <p className="text-sm mb-8 opacity-80">
              Rated {SITE.rating.display} · {SITE.rating.count}+ reviews · {SITE.hours.weekdays}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-center text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                Book Now
              </Link>
              <a
                href={`tel:${SITE.phones.primaryTel}`}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition text-center text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                {SITE.phones.primary}
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-5/4">
            <Image
              src="/website-images/Frame_6945__1_.webp"
              alt="Modern dental clinic with microscopic technology at Kumar's Dental Yelahanka"
              fill
              className="rounded-lg shadow-2xl object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Flagship specialist care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {preview.map((t) =>
              t ? (
                <div key={t.slug} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="relative w-full h-44 mb-4">
                    <Image
                      src={t.image}
                      alt={t.shortName}
                      fill
                      className="rounded-lg object-cover"
                      sizes="300px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{t.shortName}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{t.heroSubtitle}</p>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="text-red-700 font-bold hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              ) : null
            )}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700"
            >
              View all treatments
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet our MDS specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {doctors.map((d) => (
              <div key={d.slug} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative w-full h-72 bg-gray-50">
                  <Image src={d.image} alt={d.name} fill className="object-contain" sizes="400px" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-1">{d.name}</h3>
                  <p className="font-semibold text-gray-800 mb-3">{d.credentials}</p>
                  <p className="text-gray-600 text-sm mb-4">{d.authorityStatement}</p>
                  <Link href={d.path} className="text-red-700 font-bold hover:underline">
                    Full profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to book?</h2>
          <p className="mb-6 opacity-95">
            WhatsApp or call — we confirm promptly during clinic hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments" className="bg-white text-red-700 font-bold py-3 px-8 rounded-lg">
              Book appointment
            </Link>
            <a
              href={whatsappBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white font-bold py-3 px-8 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
