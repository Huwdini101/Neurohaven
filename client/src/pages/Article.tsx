/**
 * Article — individual blog post page at /blog/:slug
 * Design: "Calm Colour Blocks" — long-form reading layout on warm-white.
 * SEO: dynamic <title> + meta description per article on mount.
 */

import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { Shield, ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getArticleBySlug, getRecentArticles } from "@/data/articles";
import SiteFooter from "@/components/SiteFooter";
import EmailCapture from "@/components/EmailCapture";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function Article() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const [, navigate] = useLocation();
  const slug = params?.slug ?? "";
  const article = getArticleBySlug(slug);

  usePageMetadata(
    article ? `${article.title} | The Neuro Haven` : "Blog | The Neuro Haven",
    article?.metaDescription ?? "Practical articles for neurodivergent minds.",
    article ? `/blog/${article.slug}` : "/blog"
  );

  useEffect(() => {
    if (!article) {
      navigate("/blog");
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [article, navigate]);

  if (!article) return null;

  // Split body into paragraphs and render h2 for lines starting with "## "
  const blocks = article.body
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  // Related articles (exclude current)
  const related = getRecentArticles(4).filter((a) => a.slug !== article.slug).slice(0, 3);

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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#2D2D2D]/70 hover:text-[#2B7A78] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
        </div>
      </header>

      {/* ─── Article ─── */}
      <article className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta strip */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#2D2D2D]/60 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#2B7A78]/10 text-[#2B7A78] font-semibold text-xs">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTimeMinutes} min read
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {article.title}
            </h1>

            <p className="text-xl text-[#2D2D2D]/75 mb-10 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Cover */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={article.coverImage}
                alt={article.coverAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="prose-article">
              {blocks.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mt-12 mb-5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {block.replace(/^##\s+/, "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-lg text-[#2D2D2D]/85 leading-relaxed mb-6"
                  >
                    {block}
                  </p>
                );
              })}
            </div>

            {/* Email capture inline */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-[#F4E4C1] border border-[#2D2D2D]/5">
              <h3
                className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get the free ADHD checklist
              </h3>
              <p className="text-[#2D2D2D]/70 mb-6">
                Practical strategies delivered to your inbox. No spam, ever.
              </p>
              <EmailCapture variant="light" />
            </div>
          </div>
        </div>
      </article>

      {/* ─── Related articles ─── */}
      {related.length > 0 && (
        <section className="w-full py-16 bg-[#F4E4C1]/40 border-t border-[#2D2D2D]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Keep reading
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#2D2D2D]/5"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#F4E4C1]">
                      <img
                        src={a.coverImage}
                        alt={a.coverAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-[#2D2D2D]/50 mb-3">
                        <span className="px-2 py-1 rounded-full bg-[#2B7A78]/10 text-[#2B7A78] font-semibold">
                          {a.category}
                        </span>
                        <span>{a.readTimeMinutes} min read</span>
                      </div>
                      <h3
                        className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#2B7A78] transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {a.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-[#2B7A78] font-semibold group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
