/**
 * Privacy Policy page for The Neuro Haven.
 * Design: matches "Calm Colour Blocks" — warm-white background, long-form readable layout.
 * Coverage: GDPR + CCPA basics, MailerLite email collection, cookies, analytics, user rights.
 *
 * NOTE: This is a generic, good-faith starter policy intended to cover common bases for
 * a static lead-capture site. It is NOT legal advice. The site owner should review and
 * have a lawyer adapt it to their jurisdiction before relying on it.
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Shield, ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function Privacy() {
  usePageMetadata(
    "Privacy Policy | The Neuro Haven",
    "How The Neuro Haven collects, uses, and protects your personal information.",
    "/privacy"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const lastUpdated = "May 25, 2026";

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

      {/* ─── Body ─── */}
      <main className="w-full py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B7A78]/10 text-[#2B7A78] mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Privacy Policy</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-[#2D2D2D]/50 mb-12">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-10 text-lg text-[#2D2D2D]/85 leading-relaxed">
              <section>
                <p className="text-xl text-[#2D2D2D]/75 italic">
                  The Neuro Haven ("we", "us", or "our") respects your privacy.
                  This policy explains, in plain language, what information we
                  collect, how we use it, and the rights you have over it.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  1. Who we are
                </h2>
                <p>
                  The Neuro Haven is an online resource and community providing
                  free tools, support, and educational content for neurodivergent
                  people. You can reach us any time at{" "}
                  <a
                    href="mailto:support@theneurohaven.com"
                    className="text-[#2B7A78] underline hover:text-[#E8755A]"
                  >
                    support@theneurohaven.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  2. What we collect
                </h2>
                <p className="mb-4">
                  We only collect information that you give us directly, plus
                  basic technical information needed to operate the site:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Email address and first name</strong> when you sign
                    up to receive our free Executive Function Checklist or join
                    our mailing list.
                  </li>
                  <li>
                    <strong>Email content</strong> if you choose to email us at
                    support@theneurohaven.com.
                  </li>
                  <li>
                    <strong>Anonymous analytics data</strong> such as pages
                    visited, referrer, country, and device type — collected via
                    privacy-friendly analytics. We do not sell or share this
                    data.
                  </li>
                  <li>
                    <strong>Cookies</strong> only as strictly necessary to make
                    the site function and to remember your preferences.
                  </li>
                </ul>
                <p className="mt-4">
                  We do <strong>not</strong> knowingly collect data from
                  children under 16, and we do not collect any sensitive
                  category data (such as health records or diagnoses) — even
                  though our content discusses neurodivergence.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  3. How we use your information
                </h2>
                <p className="mb-4">We use the information you provide to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send you the resources you signed up for.</li>
                  <li>
                    Send occasional emails with new articles, tools, and
                    community updates that may interest you.
                  </li>
                  <li>Respond to your support enquiries.</li>
                  <li>
                    Improve the website and content we publish (using
                    aggregated, anonymous analytics).
                  </li>
                </ul>
                <p className="mt-4">
                  Our legal basis for processing your data is your{" "}
                  <strong>consent</strong>, which you give when you submit a
                  form, and our <strong>legitimate interest</strong> in running
                  and improving the site.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  4. Who we share it with
                </h2>
                <p className="mb-4">
                  We never sell your personal information. We share it only with
                  trusted service providers who help us operate the site:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>MailerLite</strong> — our email marketing platform,
                    which stores your email and name and sends our newsletter on
                    our behalf. See{" "}
                    <a
                      href="https://www.mailerlite.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2B7A78] underline hover:text-[#E8755A]"
                    >
                      MailerLite's Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Hosting and analytics providers</strong> that
                    deliver and measure the site.
                  </li>
                  <li>
                    Authorities, only when legally required (for example, in
                    response to a valid court order).
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  5. How long we keep it
                </h2>
                <p>
                  We keep your email address on our list for as long as you
                  remain subscribed. You can unsubscribe at any time using the
                  link at the bottom of any email we send, and we will remove
                  your details promptly. Support emails are kept for a
                  reasonable period to help us follow up on your enquiry.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  6. Your rights
                </h2>
                <p className="mb-4">
                  Depending on where you live (including the EU/UK under GDPR
                  and California under the CCPA), you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you.</li>
                  <li>Correct inaccurate data.</li>
                  <li>Ask us to delete your data ("right to be forgotten").</li>
                  <li>
                    Withdraw your consent and unsubscribe at any time.
                  </li>
                  <li>Object to or restrict our processing of your data.</li>
                  <li>Request a portable copy of your data.</li>
                  <li>
                    Lodge a complaint with your local data protection authority.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, just email{" "}
                  <a
                    href="mailto:support@theneurohaven.com"
                    className="text-[#2B7A78] underline hover:text-[#E8755A]"
                  >
                    support@theneurohaven.com
                  </a>{" "}
                  and we'll respond within 30 days.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  7. Security
                </h2>
                <p>
                  We take reasonable technical and organisational measures to
                  protect your information, including HTTPS encryption,
                  reputable third-party providers, and limited access on a
                  need-to-know basis. No system is 100% secure, but we treat
                  your trust as a responsibility.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  8. International transfers
                </h2>
                <p>
                  Our service providers may store data on servers outside your
                  country. Where this happens, we rely on standard contractual
                  clauses or equivalent safeguards approved by data-protection
                  regulators.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  9. Changes to this policy
                </h2>
                <p>
                  We may update this policy from time to time as the site
                  evolves. The "Last updated" date at the top will always
                  reflect the latest version. Material changes will be
                  communicated by email to subscribers where appropriate.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  10. Contact us
                </h2>
                <p>
                  Any questions, concerns, or requests about your data? Email{" "}
                  <a
                    href="mailto:support@theneurohaven.com"
                    className="text-[#2B7A78] underline hover:text-[#E8755A]"
                  >
                    support@theneurohaven.com
                  </a>{" "}
                  and a real human will get back to you.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
