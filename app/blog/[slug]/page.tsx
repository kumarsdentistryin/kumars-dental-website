import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE } from "@/lib/site";
import { blogPosts, getPost, getAllPostSlugs } from "@/lib/blog/posts";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Kumar's Dental Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: post.image ? [{ url: `${SITE_URL}${post.image}` }] : [{ url: `${SITE_URL}${SITE.defaultOgImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`${SITE_URL}${post.image}`] : [`${SITE_URL}${SITE.defaultOgImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(post)]} />

      <section className="py-12 px-4 bg-linear-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm opacity-80 mb-2">{post.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="opacity-90 mb-2">{post.excerpt}</p>
          <p className="text-sm opacity-75">
            Published {post.datePublished} · {post.readMinutes} min read · Reviewed by{" "}
            {post.reviewerName}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={crumbs} />
        {post.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p.slice(0, 48)} className="text-lg text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="text-sm text-gray-500 mb-8">
          Medically reviewed by {post.reviewerName}. Educational content only—not a substitute for
          personal clinical advice.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/appointments" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Book appointment
          </Link>
          <Link href="/blog" className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-800">
            More articles
          </Link>
        </div>

        {related.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-4">Related reading</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="text-red-700 hover:underline font-medium">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </SiteShell>
  );
}
