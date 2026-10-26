import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";
import { patientReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Patient Experiences | Kumar's Microscopic Dental Care",
  description:
    "Patient accounts and experiences at Kumar's Microscopic Dental Care in Yelahanka New Town.",
  alternates: { canonical: `${SITE_URL}/testimonials` },
  robots: {
    index: false,
    follow: true,
  },
};

const themes = [
  {
    title: "Children's dental visits",
    body: "Families note patient behavior guidance during pediatric visits with Dr. Prem Kumar R, helping children feel at ease during routine checkups and care.",
  },
  {
    title: "Prosthodontics & restorations",
    body: "Adult patients describe crown, bridge, and restorative consultations with Dr. RV Roshini, emphasizing clear material discussions and comfortable fitting.",
  },
  {
    title: "Operating microscope explanations",
    body: "Patients mention step-by-step procedure explanations and the use of operating microscopes for root canal treatments.",
  },
];

export default function TestimonialsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Patient Experiences</h1>
          <p className="text-lg opacity-95">
            Verified patient reflections on care received at our Yelahanka New Town clinic.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />

        {/* Review Summary Themes */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Experiences Overview</h2>
        <ul className="space-y-4 mb-12">
          {themes.map((t) => (
            <li key={t.title} className="border border-gray-200 rounded-lg p-6 bg-white shadow-xs">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-gray-700 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ul>

        {/* Individual Patient Reviews */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reflections</h2>
        <ul className="space-y-5 mb-12">
          {patientReviews.map((review) => (
            <li
              key={`${review.author}-${review.date}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.body}</p>
              <span className="inline-block mt-3 text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-1 rounded">
                {review.category === "pediatric"
                  ? "Pediatric Care"
                  : review.category === "prosthetic"
                  ? "Restorative Care"
                  : "General Care"}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/appointments"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Book your consultation
        </Link>
      </div>
    </SiteShell>
  );
}
