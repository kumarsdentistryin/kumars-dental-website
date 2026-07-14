import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Testimonials | Kumar's Microscopic Dental Care",
  description:
    "Patient trust signals for Kumar's Dental in Yelahanka—4.9/5 rating from 250+ reviews. See how families describe pediatric and crown care.",
  alternates: { canonical: `${SITE_URL}/testimonials` },
};

const themes = [
  {
    title: "Parents on pediatric care",
    body: "Families often highlight gentle behaviour guidance during children's visits with Dr. Prem Kumar R—comforting anxious kids while completing needed care.",
  },
  {
    title: "Adults on crowns & smiles",
    body: "Patients describe careful crown and smile planning with Dr. RV Roshini, including material counselling and bite comfort after cementation.",
  },
  {
    title: "Precision & technology",
    body: "Reviewers mention microscopic root canal care and clear explanations before procedures—aligning with our magnification-focused clinic identity.",
  },
];

export default function TestimonialsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Patient Testimonials</h1>
          <p className="text-lg opacity-95">
            Aggregate Google rating {SITE.rating.display} based on {SITE.rating.count}+ reviews.
            We summarise themes rather than inventing individual quotes.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10">
          <p className="text-3xl font-bold text-gray-900">{SITE.rating.display}</p>
          <p className="text-gray-700">
            From {SITE.rating.count}+ patient reviews on Google (displayed consistently site-wide).
            Please verify the live Google Business Profile for the latest count.
          </p>
        </div>
        <ul className="space-y-6 mb-10">
          {themes.map((t) => (
            <li key={t.title} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h2>
              <p className="text-gray-700 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ul>
        <Link href="/appointments" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
          Book your visit
        </Link>
      </div>
    </SiteShell>
  );
}
