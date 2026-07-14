import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { personSchema, physicianSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Dental Team | Dr. Prem Kumar R & Dr. RV Roshini | Attur Yelahanka",
  description:
    "Meet MDS specialists at Attur Main Road, Yelahanka New Town: Dr. Prem Kumar R (Pediatric & Microscopic RCT; formerly Associate Professor at Ramaiah) and Dr. RV Roshini (Crowns, Bridges, Implants, Smile Design).",
  alternates: { canonical: `${SITE_URL}/team` },
};

export default function TeamPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          ...doctors.map((d) => personSchema(d)),
          ...doctors.map((d) => physicianSchema(d)),
        ]}
      />
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Dental Experts</h1>
          <p className="text-xl opacity-95">
            Practising at Attur Main Road, Yelahanka New Town—clear authority roles for
            pediatric/microscopic care and crowns/prosthetics.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <div className="grid md:grid-cols-2 gap-10">
          {doctors.map((d) => (
            <article key={d.slug} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative w-full h-80 bg-gray-50">
                <Image src={d.image} alt={d.name} fill className="object-contain" sizes="500px" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-red-700 mb-2">{d.name}</h2>
                <p className="text-xl font-semibold text-gray-800 mb-3">{d.credentials}</p>
                <p className="text-gray-700 mb-4">{d.authorityStatement}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {d.specializations.map((s) => (
                    <li key={s} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={d.path}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg"
                >
                  View full profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
