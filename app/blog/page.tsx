import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Blog | Kumar's Microscopic Dental Care",
  description: "Dental tips, pediatric care guides, and treatment insights from our doctors in Yelahanka.",
};

const posts = [
  {
    title: "Best Pediatric Dental Care Guide - Yelahanka",
    href: "/blog/pediatric-dental-care-guide-yelahanka",
    excerpt: "Everything parents need to know about finding the best kids dentist near me. Complete guide to pediatric dental care.",
    tag: "Pediatric Dentistry",
  },
  {
    title: "Microscopic Root Canal Treatment in Bangalore",
    href: "/blog/microscopic-root-canal-treatment-bangalore",
    excerpt: "Advanced painless RCT with microscope technology. Learn why Kumar's is the best dental clinic near me for root canals.",
    tag: "Microscopic RCT",
  },
  {
    title: "Dental Braces & Clear Aligners - Complete Guide",
    href: "/blog/dental-braces-aligners-bangalore",
    excerpt: "Compare braces vs aligners. Find the best dentist near me for orthodontic treatment in Yelahanka, Bangalore.",
    tag: "Orthodontics",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dental Insights & Tips</h1>
          <p className="text-lg opacity-95">Learn how to care for your smile with expert guidance from our doctors.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.href} className="border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition p-6">
              <div className="text-blue-600 text-sm font-semibold mb-2">{post.tag}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={post.href} className="text-blue-600 font-semibold hover:text-blue-700">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
