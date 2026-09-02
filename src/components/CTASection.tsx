import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="cta-heading">
      <div className="container-custom">
        <div className="relative bg-[#080808] border border-neutral-800 rounded-lg sm:rounded-xl p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl overflow-hidden">
          {/* Subtle architectural ambient glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3.5 py-1.5 rounded-sm shadow-sm">
              {siteConfig.slogan}
            </span>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready to Build Your Interior Space?
            </h2>
          </div>

          <p className="relative z-10 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Let&apos;s discuss your project. From bespoke home interior works, modular kitchens, and false ceilings to commercial structural glazing and MS fabrication in Thrissur, we bring your vision to reality with lasting precision.
          </p>

          <div className="relative z-10 pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors shadow-lg"
            >
              <span>ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>CONNECT WITH US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
