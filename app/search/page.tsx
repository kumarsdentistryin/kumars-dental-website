'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtas from "@/components/StickyCtas";
import { treatments } from "@/lib/treatments";
import { blogPosts } from "@/lib/blog/posts";
import { locations } from "@/lib/locations";
import { doctors } from "@/lib/doctors";

type Hit = { type: string; title: string; href: string; blurb: string };

function buildIndex(): Hit[] {
  return [
    ...treatments.map((t) => ({
      type: "Treatment",
      title: t.name,
      href: `/treatments/${t.slug}`,
      blurb: t.heroSubtitle,
    })),
    ...blogPosts.map((p) => ({
      type: "Blog",
      title: p.title,
      href: `/blog/${p.slug}`,
      blurb: p.excerpt,
    })),
    ...locations.map((l) => ({
      type: "Location",
      title: `Dentist for ${l.name}`,
      href: `/locations/${l.slug}`,
      blurb: l.headline,
    })),
    ...doctors.map((d) => ({
      type: "Doctor",
      title: d.name,
      href: d.path,
      blurb: d.authorityStatement,
    })),
    {
      type: "Page",
      title: "FAQs",
      href: "/faqs",
      blurb: "Common questions about hours, doctors, and booking",
    },
    {
      type: "Page",
      title: "Appointments",
      href: "/appointments",
      blurb: "Book via WhatsApp-backed form",
    },
  ];
}

export default function SearchPage() {
  const [q, setQ] = useState("");
  const index = useMemo(() => buildIndex(), []);
  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return index.slice(0, 12);
    return index.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.blurb.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );
  }, [q, index]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Search</h1>
        <p className="text-gray-600 mb-6">
          Find treatments, doctors, locations, and articles. Try “pediatric”, “crowns”, or
          “Yelahanka”.
        </p>
        <label htmlFor="site-search" className="sr-only">
          Search the site
        </label>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search treatments, doctors, blogs…"
          className="w-full border-2 border-gray-300 focus:border-red-600 rounded-lg px-4 py-3 text-gray-900 mb-8 focus:outline-none"
        />
        <ul className="space-y-4">
          {results.map((hit) => (
            <li key={hit.href} className="border border-gray-200 rounded-lg p-4">
              <p className="text-xs uppercase font-semibold text-red-700 mb-1">{hit.type}</p>
              <Link href={hit.href} className="text-lg font-bold text-gray-900 hover:text-red-700">
                {hit.title}
              </Link>
              <p className="text-sm text-gray-600 mt-1">{hit.blurb}</p>
            </li>
          ))}
          {results.length === 0 && (
            <li className="text-gray-600">No matches. Try another keyword or browse <Link href="/services" className="text-red-700 underline">services</Link>.</li>
          )}
        </ul>
      </main>
      <Footer />
      <StickyCtas />
    </div>
  );
}
