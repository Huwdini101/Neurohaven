/**
 * Blog Index — lists all published articles.
 * Design: "Calm Colour Blocks" — warm-white background, plum accent for editorial tone.
 * SEO: sets document.title and meta description on mount.
 */

import { Link } from "wouter";
import { Shield, ArrowLeft, BookOpen } from "lucide-react";
import { articles } from "@/data/articles";
import SiteFooter from "@/components/SiteFooter";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function Blog() {
  usePageMetadata(
    "Blog | The Neuro Haven — ADHD & Neurodivergent Articles",
    "Practical articles on ADHD, autism, executive function, and neurodivergent life — from The Neuro Haven.",
    "/blog"
  );

  const sorted = [...articles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <div className="min-h-screen flex flex-col block-warm-white">
      {/* ─── Header ─── */}
      <header className="w-full py-6 border-b border-[#2D2D2D]/10 bg-[#FFF8F2]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#2B7A78] flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg font-bold text-[#2D2D2D] group-hover:text-[#2B7A78] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Neuro Haven
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#2D2D2D]/70 hover:text-[#2B7A78] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* ─── Hero / Page title ─── */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B2D5B]/10 text-[#6B2D5B] mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">The Neuro Haven Blog</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Honest writing for{" "}
              <span className="text-[#6B2D5B]">neurodivergent</span> brains.
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2D]/70 max-w-2xl">
              Practical articles on ADHD, autism, executive function, sensory
              regulation, and the strategies that actually work — written by and for
              people who think differently.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Articles grid ─── */}
      <section className="w-full pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#2D2D2D]/5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F4E4C1]">
                  <img
                    src={article.coverImage}
                    alt={article.coverAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#2D2D2D]/50 mb-3">
                    <span className="px-2 py-1 rounded-full bg-[#2B7A78]/10 text-[#2B7A78] font-semibold">
                      {article.category}
                    </span>
                    <span>{article.readTimeMinutes} min read</span>
                  </div>
                  <h2
                    className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#2B7A78] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#2D2D2D]/70 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <time
                    dateTime={article.publishedAt}
                    className="text-xs text-[#2D2D2D]/40"
                  >
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
