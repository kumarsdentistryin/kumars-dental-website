import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { patientReviews } from "@/lib/reviews";

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

function StarRating({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-yellow-500 text-lg">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
}

export default function TestimonialsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SITE.rating.value),
      reviewCount: String(SITE.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: patientReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: r.date,
      reviewBody: r.body,
      itemReviewed: {
        "@type": "Dentist",
        name: SITE.name,
        url: SITE_URL,
      },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={reviewSchema} />
      <section className="py-12 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Patient Testimonials</h1>
          <p className="text-lg opacity-95">
            Aggregate Google rating {SITE.rating.display} based on {SITE.rating.count}+ reviews.
          </p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />

        {/* Aggregate Rating Card */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-10 flex items-center gap-6">
          <div>
            <p className="text-4xl font-bold text-gray-900">{SITE.rating.display}</p>
            <p className="text-yellow-500 text-2xl mt-1">★★★★★</p>
          </div>
          <div>
            <p className="text-gray-800 font-semibold">Google Patient Rating</p>
            <p className="text-gray-600 text-sm">
              From {SITE.rating.count}+ verified patient reviews.
              Please verify the live Google Business Profile for the latest count.
            </p>
          </div>
        </div>

        {/* Review Summary Themes */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What patients say</h2>
        <ul className="space-y-4 mb-12">
          {themes.map((t) => (
            <li key={t.title} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-gray-700 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ul>

        {/* Individual Patient Reviews */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent patient reviews</h2>
        <ul className="space-y-5 mb-12">
          {patientReviews.map((review) => (
            <li
              key={`${review.author}-${review.date}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700 leading-relaxed">{review.body}</p>
              <span className="inline-block mt-3 text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                {review.category === "pediatric"
                  ? "Pediatric Dentistry"
                  : review.category === "prosthetic"
                  ? "Crowns & Prosthetics"
                  : "General Care"}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/appointments"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Book your visit
        </Link>
      </div>
    </SiteShell>
  );
}
