/**
 * SiteFooter — shared footer used across Home, Blog, and Article pages.
 * Design: matches "Calm Colour Blocks" — dark ink background, mint accent on logo.
 * Notes: Footer includes a prominent Facebook group CTA, Blog, Privacy, and a mailto contact link.
 */

import { Shield, Facebook, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FACEBOOK_GROUP_URL =
  "https://www.facebook.com/share/g/1BYQ6gxsyg/?mibextid=wwXIfr";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#2D2D2D] text-white/60">
      {/* ─── Facebook Group CTA banner ─── */}
      <div className="w-full bg-gradient-to-r from-[#2B7A78] via-[#2B7A78] to-[#6BC4A6]">
        <div className="container mx-auto px-4 py-8">
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-center justify-between gap-4 text-white"
          >
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/15 items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <div>
                <p
                  className="text-lg md:text-xl font-bold leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Join our private Facebook community
                </p>
                <p className="text-sm md:text-base text-white/85 mt-1">
                  Connect with other neurodivergent adults in a safe, supportive space.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#2B7A78] font-semibold text-sm shadow-md group-hover:shadow-lg group-hover:scale-[1.02] transition-all duration-200">
              Join the group
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* ─── Footer links row ─── */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-5 h-5 text-[#6BC4A6]" />
            <span
              className="font-semibold text-white group-hover:text-[#6BC4A6] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Neuro Haven
            </span>
          </Link>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Neuro Haven. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <a
              href={FACEBOOK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Facebook Group
            </a>
            <a
              href="mailto:support@theneurohaven.com"
              className="hover:text-white transition-colors"
            >
              support@theneurohaven.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
