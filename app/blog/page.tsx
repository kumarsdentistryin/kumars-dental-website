import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Dental Blog | Pediatric, Crowns, RCT & Oral Health | Kumar's Dental",
  description:
    "Educational dental articles reinforcing Dr. Prem Kumar R's pediatric expertise and Dr. RV Roshini's crowns & smile authority in Bangalore.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  const sorted = [...blogPosts].sort((a, b) =>
    a.datePublished < b.datePublished ? 1 : -1
  );

  return (
    <SiteShell>
      <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dental Health Blog</h1>
          <p className="text-lg opacity-95">
            Pediatric dentistry, microscopic RCT, crowns, implants, braces, and prevention—
            medically reviewed by our MDS specialists.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        <ul className="grid md:grid-cols-2 gap-6">
          {sorted.map((post) => (
            <li key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:border-red-600 transition">
              <p className="text-xs font-semibold uppercase text-red-700 mb-2">{post.category}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-red-700">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <p className="text-xs text-gray-500">
                {post.datePublished} · Reviewed by {post.reviewerName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
