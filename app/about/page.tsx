import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Kumar's Microscopic Dental Care Yelahanka",
  description:
    "Clinic philosophy, microscopic technology, and specialist doctors—Dr. Prem Kumar R (pediatric) and Dr. RV Roshini (crowns & prosthetics).",
  alternates: { canonical: `${SITE_URL}/about` },
};

const highlights = [
  {
    title: "Microscopic Precision",
    desc: "Magnification-guided protocols for root canals and complex visualisation.",
  },
  {
    title: "Pediatric Authority — Attur & Yelahanka",
    desc: "Dr. Prem Kumar R (formerly Associate Professor at Ramaiah) leads kids dentistry at our Attur Main Road / Yelahanka New Town clinic.",
  },
  {
    title: "Crowns & Prosthetics",
    desc: "Dr. RV Roshini leads crowns, bridges, implants, and smile design.",
  },
  {
    title: "Comfort First",
    desc: "Clear communication, anxiety-aware care, and transparent indicative fees.",
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <SiteShell>
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Kumar&apos;s Microscopic Dental Care
            </h1>
            <p className="text-lg opacity-95 mb-6">
              We combine advanced microscopic dentistry with specialist care at Attur Main
              Road, Yelahanka New Town—for Attur Layout families first, then North Bangalore
              and broader Bangalore patients.
            </p>
            <div className="space-y-2 text-white/90 text-sm sm:text-base">
              <p>{SITE.address.full}</p>
              <p>
                {SITE.hours.weekdays} · {SITE.hours.sunday}
              </p>
              <p>{SITE.phones.primary}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/appointments"
                className="bg-white text-red-700 font-bold py-3 px-6 rounded-lg"
              >
                Book appointment
              </Link>
              <Link
                href="/team"
                className="border-2 border-white font-bold py-3 px-6 rounded-lg"
              >
                Meet the doctors
              </Link>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/website-images/Frame_6945__1_.webp"
              alt="Kumar's Microscopic Dental Care clinic"
              fill
              className="rounded-lg object-cover shadow-xl"
              sizes="500px"
              priority
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {highlights.map((h) => (
            <div key={h.title} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{h.title}</h2>
              <p className="text-gray-700">{h.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our entity strategy is intentional:{" "}
          <Link href="/doctors/dr-prem-kumar" className="text-red-700 font-semibold hover:underline">
            Dr. Prem Kumar R
          </Link>{" "}
          as kids dentist / pediatric authority for Attur &amp; Yelahanka New Town first,
          then North Bangalore corridors, then Bangalore-wide for pediatric dentistry and
          microscopic RCT;{" "}
          <Link href="/doctors/dr-rv-roshini" className="text-red-700 font-semibold hover:underline">
            Dr. RV Roshini
          </Link>{" "}
          as authority for crowns, bridges, prosthodontics, implants, and smile design.
        </p>
        <p className="text-gray-700">
          Rated {SITE.rating.display} from {SITE.rating.count}+ reviews. Payments via UPI, cards,
          and cash.
        </p>
      </div>
    </SiteShell>
  );
}
