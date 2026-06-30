/**
 * The Neuro Haven Landing Page
 * Design: "Calm Colour Blocks" — Neo-Memphis meets Universal Design
 * Brand: The Neuro Haven — theneurohaven.com
 *
 * Structure:
 * 1. Hero (warm-white) — headline + email capture
 * 2. Problem/Empathy (coral) — "You're not broken"
 * 3. Lead Magnet (sand) — Executive Function Checklist showcase
 * 4. Community (teal) — Free group value proposition
 * 5. Digital Tools (plum) — Future products teaser
 * 6. Social Proof (mint) — Stats + testimonial
 * 7. Blog (warm-white) — Latest articles (SEO)
 * 8. Final CTA (warm-white) — Email capture repeat
 * 9. Footer — no Privacy/Terms; mailto contact
 */

import { useInView } from "@/hooks/useInView";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import EmailCapture from "@/components/EmailCapture";
import SiteFooter from "@/components/SiteFooter";
import {
  CheckCircle,
  Users,
  Sparkles,
  Heart,
  ArrowDown,
  Shield,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Link } from "wouter";
import { getRecentArticles } from "@/data/articles";

// ─── Section Component ───────────────────────────────────────────────────────
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isInView } = useInView<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`w-full py-16 md:py-24 lg:py-32 ${className} ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
}

// ─── Progress Indicator ──────────────────────────────────────────────────────
function ProgressIndicator() {
  const sections = [
    { id: "hero", color: "#FFF8F2" },
    { id: "empathy", color: "#E8755A" },
    { id: "checklist", color: "#E8D5A3" },
    { id: "community", color: "#2B7A78" },
    { id: "tools", color: "#6B2D5B" },
    { id: "proof", color: "#6BC4A6" },
    { id: "blog", color: "#F4E4C1" },
    { id: "cta", color: "#FFF8F2" },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="w-3 h-3 rounded-full border-2 border-white/50 transition-all duration-300 hover:scale-150"
          style={{ backgroundColor: section.color }}
          aria-label={`Jump to ${section.id} section`}
        />
      ))}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  usePageMetadata(
    "The Neuro Haven | Education & Support for Neurodivergent Minds",
    "Free ADHD and autism tools, community support, and practical strategies for neurodivergent minds. Join The Neuro Haven today.",
    "/"
  );

  const recentArticles = getRecentArticles(3);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ProgressIndicator />

      {/* ═══ HERO SECTION ═══ */}
      <section
        id="hero"
        className="relative w-full min-h-[90vh] flex items-center block-warm-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
          src="/assets/hero-abstract.webp"
            alt="Abstract neurodivergent brain connections illustration with soft teal and coral tones"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#2B7A78] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                The Neuro Haven
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your brain works <span className="text-[#2B7A78]">differently.</span>
              <br />
              That's your <span className="text-[#E8755A]">superpower.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2D2D2D]/80 mb-8 max-w-xl">
              Free tools, community support, and practical strategies for everyday
              people living with ADHD, autism, and other neurodivergent conditions.
            </p>

            <EmailCapture variant="light" />

            <div className="mt-12 flex items-center gap-2 text-[#2D2D2D]/40">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span className="text-sm">Scroll to learn more</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EMPATHY SECTION (CORAL) ═══ */}
      <Section className="block-coral" id="empathy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 mb-8">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">You're not alone in this</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              You're not broken.
              <br />
              You're just wired differently.
            </h2>

            <div className="space-y-6 text-lg text-white/90 max-w-2xl mx-auto text-left">
              <p>
                Struggling to start tasks even though you know they're important?
                Feeling overwhelmed by a world that wasn't designed for your brain?
                You're not lazy. You're not "too much." You're neurodivergent.
              </p>
              <p>
                <strong className="text-white">1 in 5 people</strong> are
                neurodivergent — that's ADHD, autism, dyslexia, dyspraxia, and more.
                Yet most of us were never given the tools to actually thrive with our
                unique wiring.
              </p>
              <p>
                <strong className="text-white">That changes today.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ CHECKLIST SECTION (SAND) ═══ */}
      <Section className="block-sand" id="checklist">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img
                  src="/assets/checklist-mockup.webp"
                alt="ADHD Executive Function Checklist displayed on a tablet"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B7A78]/10 text-[#2B7A78] mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Free Download</span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Your ADHD Executive Function Checklist
              </h2>

              <p className="text-lg text-[#2D2D2D]/80 mb-6">
                A science-backed daily checklist designed specifically for ADHD brains.
                Break your day into manageable blocks, build routines that stick, and
                finally feel in control.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Morning, focus, and wind-down routines",
                  "Colour-coded priority system",
                  "Built-in flexibility (because rigid plans don't work for us)",
                  "Celebration checkpoints to build momentum",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2B7A78] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2D]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <EmailCapture variant="light" />
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ COMMUNITY SECTION (TEAL) ═══ */}
      <Section className="block-teal" id="community">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Free Community</span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Find your people.
                <br />
                Build together.
              </h2>

              <p className="text-lg text-white/85 mb-8">
                Join The Neuro Haven — a free community where neurodivergent people
                support each other, share strategies, and show up together. No
                judgement. No pressure. Just genuine connection.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Body Doubling Sessions",
                    desc: "Show up together to tackle life admin — because everything's easier with company",
                  },
                  {
                    title: "Peer Support & Connection",
                    desc: "Connect with others who truly understand your experience",
                  },
                  {
                    title: "Practical Resources",
                    desc: "Strategies for executive function, sensory regulation, and daily life",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6BC4A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-[#2D2D2D]">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                  src="/assets/community-illustration.webp"
                alt="Diverse group of people connecting in a supportive community"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ DIGITAL TOOLS SECTION (PLUM) ═══ */}
      <Section className="block-plum relative overflow-hidden" id="tools">
        <div className="absolute inset-0 opacity-20">
          <img
                  src="/assets/brain-pattern.webp"
            alt="Neurodivergent brain pattern background with interconnected neural pathways"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Tools designed for
                <br />
                the way you think.
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We're building a collection of digital tools, planners, and resources
                specifically designed for neurodivergent brains. Not adapted from
                neurotypical systems — built from scratch for us.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <img
                  src="/assets/tools-showcase.webp"
                alt="Collection of neurodivergent-friendly organizational tools and planners"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <p className="text-center text-white/60 mt-8 text-sm">
              Sign up above to be first to know when our digital tools launch.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ SOCIAL PROOF SECTION (MINT) ═══ */}
      <Section className="block-mint" id="proof">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-12"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Built by neurodivergent minds,
              <br />
              for neurodivergent minds.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { number: "1 in 5", label: "People are neurodivergent" },
                { number: "80%", label: "Feel unsupported at work" },
                { number: "2x", label: "More likely to experience burnout" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/40 backdrop-blur-sm"
                >
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#2B7A78] mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-[#2D2D2D]/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/50 backdrop-blur-sm">
              <p className="text-lg text-[#2D2D2D] italic mb-4">
                "I've tried every productivity system out there. This is the first one
                that actually works with my ADHD brain instead of against it. Finally,
                something designed for the way I actually think."
              </p>
              <p className="text-sm text-[#2D2D2D]/60 font-medium">
                — Diagnosed ADHD at 32
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ BLOG SECTION (WARM-WHITE) ═══ */}
      <Section className="block-warm-white" id="blog">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B2D5B]/10 text-[#6B2D5B] mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-semibold">From the Blog</span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Articles for{" "}
                  <span className="text-[#6B2D5B]">neurodivergent</span> minds.
                </h2>
                <p className="text-lg text-[#2D2D2D]/70">
                  Honest, practical writing on ADHD, autism, executive function,
                  and the strategies that actually work.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#2B7A78] font-semibold hover:gap-3 transition-all"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                View all articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
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
                    <h3
                      className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#2B7A78] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#2D2D2D]/70 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ FINAL CTA SECTION ═══ */}
      <Section className="block-warm-white" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to work <span className="text-[#2B7A78]">with</span> your brain?
            </h2>

            <p className="text-lg text-[#2D2D2D]/70 mb-8">
              Get your free Executive Function Checklist and join a community that
              understands. No pressure. No judgement. Just support.
            </p>

            <div className="flex justify-center">
              <EmailCapture variant="light" />
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
