import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { getDoctor } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Dental Services & Treatments | Kumar's Microscopic Dental Care",
  description:
    "Full treatment hub: pediatric dentistry, microscopic RCT, crowns, bridges, implants, braces, cleaning, and more in Yelahanka, Bangalore.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dental Treatments</h1>
          <p className="text-lg opacity-95 max-w-3xl">
            Explore specialist-led care. Pediatric and RCT pages reinforce{" "}
            <Link href="/doctors/dr-prem-kumar" className="underline font-semibold">
              Dr. Prem Kumar R
            </Link>
            ; crown and prosthetic pages lead with{" "}
            <Link href="/doctors/dr-rv-roshini" className="underline font-semibold">
              Dr. RV Roshini
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => {
            const doctor = getDoctor(t.leadDoctor);
            return (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:border-red-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <div className="relative w-full h-40 bg-gray-100">
                  <Image
                    src={t.image}
                    alt={t.shortName}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-red-700 uppercase mb-1">{t.category}</p>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-700 mb-2">
                    {t.shortName}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{t.heroSubtitle}</p>
                  <p className="text-xs text-gray-500">Led by {doctor.shortName}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SiteShell>
  );
}
