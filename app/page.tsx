import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import LiveReviewMarquee from "@/components/LiveReviewMarquee";
import { SITE, SITE_URL, whatsappBookingUrl } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { doctors } from "@/lib/doctors";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Specialist Dental Clinic in Bangalore | Kumar's Microscopic Dental Care | Yelahanka",
  description:
    "Specialist dental clinic in Bangalore (Attur Main Road / Yelahanka New Town). Dr. Prem Kumar R (KSDC 47094 A) for pediatric dentistry & painless microscopic RCT; Dr. RV Roshini for dental implants, crowns & smile design. Call +91 81972 80019.",
  alternates: { canonical: SITE_URL },
};

const previewSlugs = [
  "invisible-aligners",
  "children-dentistry",
  "root-canal-treatment",
  "crowns",
  "dental-implants",
  "microscopic-dentistry",
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                      loading="lazy"
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

      {/* iTero 3D Intraoral Scanner & Invisalign Spotlight */}
      <section className="py-16 px-4 bg-linear-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
              <span>✨ New Technology at Kumar&apos;s Dental</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Invisalign® with Advanced <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-400">3D iTero® Scanning</span>
            </h2>
            <p className="text-lg text-slate-200 mb-6 leading-relaxed">
              No messy impression trays. Comfortable, impression-free scanning. Experience instant optical precision with our <strong>iTero® 3D Intraoral Scanner</strong>. In under 5 minutes, see a high-precision digital preview of your planned smile on screen before you begin treatment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <p className="font-bold text-amber-300 text-sm mb-1">⚡ Digital 3D Accuracy</p>
                <p className="text-xs text-slate-300">6,000 optical frames/sec for pinpoint digital precision.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <p className="font-bold text-amber-300 text-sm mb-1">🎯 Digital Smile Preview</p>
                <p className="text-xs text-slate-300">See a digital preview of your planned smile chairside.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <p className="font-bold text-amber-300 text-sm mb-1">✨ Removable &amp; Clear</p>
                <p className="text-xs text-slate-300">Virtually invisible SmartTrack clear aligners for easy brushing.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <p className="font-bold text-amber-300 text-sm mb-1">💳 Flexible Payment Options</p>
                <p className="text-xs text-slate-300">Customized treatment plans with convenient monthly payment options.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappBookingUrl("Hi Kumar's Dental, I would like to book a 3D iTero Scan and Invisalign consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 px-8 rounded-xl shadow-lg transition text-center text-base"
              >
                Book Your 3D Scan on WhatsApp →
              </a>
              <Link
                href="/treatments/invisible-aligners"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-xl transition text-center text-base"
              >
                Learn About Invisalign
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/website-images/itero-invisalign-banner.webp"
                alt="Invisalign with Advanced 3D iTero Scanning at Kumar's Microscopic Dental Care Yelahanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 max-w-xs">
              <div className="h-10 w-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                3D
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">iTero® Optical Technology</p>
                <p className="text-[11px] text-gray-500">Digital preview of your planned smile</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Auto-scrolling Patient Review Marquee */}
      <LiveReviewMarquee />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet our MDS specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {doctors.map((d) => (
              <div key={d.slug} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative w-full h-72 bg-gray-50">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
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

      {/* Local SEO & Neighborhood Footprint Hub */}
      <section className="py-14 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-3 py-1 rounded-full">
              📍 Serving North Bangalore
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
              Specialist Dental Care Near Your Neighborhood
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2">
              Patients across Bangalore visit our Attur Main Road clinic in Yelahanka New Town for specialist pediatric dentistry, microscopic root canals, and iTero 3D Invisalign.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs hover:border-red-600 hover:shadow-md transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-900 text-sm group-hover:text-red-700 transition">
                      {loc.name}
                    </span>
                    <span className="text-gray-400 group-hover:text-red-600 text-xs">→</span>
                  </div>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                    {loc.headline}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-blue-600 mt-2 block">
                  Pediatric &amp; RCT Hub
                </span>
              </Link>
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
