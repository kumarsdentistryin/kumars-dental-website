import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { locations } from "@/lib/locations";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve | Kumar's Microscopic Dental Care Yelahanka",
  description:
    "Kumar's Dental on Attur Main Road, Yelahanka New Town serves Bangalore's North Corridor—Attur, Yelahanka, Vidyaranyapura, Sahakar Nagar, Jakkur, Hebbal, and more. Find your area.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Areas We Serve | Kumar's Dental Yelahanka",
    description:
      "Specialist dental clinic serving Attur, Yelahanka New Town, and North Bangalore communities. Pediatric & Microscopic RCT (Dr. Prem Kumar R) · Crowns & Implants (Dr. RV Roshini).",
    url: `${SITE_URL}/locations`,
    images: [{ url: `${SITE_URL}${SITE.defaultOgImage}` }],
  },
};

export default function LocationsIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="py-12 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Areas We Serve</h1>
          <p className="text-lg opacity-95 max-w-3xl">
            Our clinic is at Attur Main Road, Yelahanka New Town — serving families from
            across North Bangalore. Find your neighbourhood below.
          </p>
          <p className="mt-3 text-sm opacity-80">{SITE.address.full}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group border border-gray-200 rounded-xl p-5 hover:border-red-600 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-700 mb-1">
                Dentist for {loc.name}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">{loc.metaDescription}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-red-700">
                View page →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to book?</h2>
          <p className="text-gray-600 mb-6">
            Call, WhatsApp, or book online — we serve patients from all the areas above.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Book appointment
            </Link>
            <a
              href={`tel:${SITE.phones.primaryTel}`}
              className="border-2 border-red-600 text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-red-50"
            >
              Call {SITE.phones.primary}
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
