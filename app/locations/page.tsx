import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { locations } from "@/lib/locations";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve in North Bengaluru | Kumar's Microscopic Dental Care",
  description:
    "Kumar's Microscopic Dental Care on Attur Main Road, Yelahanka New Town serves families across North Bengaluru including Yelahanka, Attur, Jakkur, Thanisandra, Hebbal, Sahakar Nagar, Vidyaranyapura, RT Nagar, and Kogilu.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Areas We Serve in North Bengaluru | Kumar's Dental",
    description:
      "Specialist dental clinic serving Yelahanka New Town, Attur, and surrounding North Bengaluru neighborhoods. Pediatric Dentistry (Dr. Prem Kumar R) & Prosthodontics (Dr. RV Roshini).",
    url: `${SITE_URL}/locations`,
    images: [{ url: `${SITE_URL}${SITE.defaultOgImage}` }],
  },
};

export default function LocationsIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ];

  const coreTreatments = [
    {
      name: "Microscope-Assisted Root Canal Treatment",
      slug: "microscopic-dentistry",
      desc: "Single-sitting precision root canal treatment performed under 25x surgical magnification to preserve natural tooth structure.",
    },
    {
      name: "Pediatric Dentistry",
      slug: "children-dentistry",
      desc: "Specialist children's dental care led by Dr. Prem Kumar R (MDS) with gentle behavioral guidance and preventive treatments.",
    },
    {
      name: "Clear Aligners & Invisalign",
      slug: "invisible-aligners",
      desc: "Virtually invisible teeth alignment planned with digital 3D scans and customized transparent aligner sets.",
    },
    {
      name: "iTero 3D Intraoral Scan",
      slug: "itero-3d-scanner",
      desc: "Comfortable, impression-free optical scanning generating digital 3D smile simulations in under 5 minutes.",
    },
  ];

  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="py-12 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Areas We Serve Across North Bengaluru
          </h1>
          <p className="text-base sm:text-lg opacity-95 max-w-3xl leading-relaxed">
            Our clinic is centrally located at No. 12, Attur Main Road, Yelahanka New Town — providing specialist pediatric dentistry, microscopic root canals, and digital 3D orthodontics to families throughout North Bengaluru.
          </p>
          <p className="mt-3 text-sm opacity-80">{SITE.address.full}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />

        {/* 4 Core Treatments Navigation */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Core Specialized Treatments</h2>
          <p className="text-gray-600 text-sm mb-6">
            Patients from across North Bengaluru visit our Yelahanka New Town clinic for these advanced treatments:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {coreTreatments.map((t) => (
              <div
                key={t.slug}
                className="border border-gray-200 rounded-xl p-5 hover:border-red-600 transition bg-white"
              >
                <h3 className="font-bold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{t.desc}</p>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="text-red-700 font-semibold text-sm hover:underline"
                >
                  Explore {t.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Location Cards */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Find Dental Care for Your Neighborhood
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group border border-gray-200 rounded-xl p-5 hover:border-red-600 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 flex flex-col justify-between bg-white"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 mb-2">
                  Dentist near {loc.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Specialized pediatric dentistry, microscope-assisted root canal therapy, and prosthodontics for families in {loc.name}.
                </p>
              </div>
              <span className="inline-block mt-4 text-xs font-semibold text-red-700 group-hover:underline">
                View {loc.name} guide &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Book Your Appointment</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Call, WhatsApp, or schedule online — our clinic is open Monday through Saturday 10:00 AM – 9:00 PM and Sunday 10:00 AM – 6:00 PM.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base"
            >
              Book appointment
            </Link>
            <a
              href={`tel:${SITE.phones.primaryTel}`}
              className="border-2 border-red-600 text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 text-sm sm:text-base"
            >
              Call {SITE.phones.primary}
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
