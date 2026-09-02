import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Hammer, Layers, Ruler, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Interior Works & Building Solutions",
  description:
    "Learn about BUILDORA - Thrissur's trusted specialist for complete interior works, home interior design, structural glazing, and architectural renovations.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us | Interior Works & Building Solutions | BUILDORA",
    description:
      "Learn about BUILDORA - Thrissur's trusted specialist for complete interior works, home interior design, structural glazing, and architectural renovations.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const pillars = [
    {
      title: "CONSTRUCTION",
      description:
        "Engineered civil and commercial building solutions delivered with architectural precision and durability.",
      icon: Hammer,
    },
    {
      title: "RENOVATION",
      description:
        "Complete structural remodeling, facade upgrades, and building restorations across Thrissur and Kerala.",
      icon: Layers,
    },
    {
      title: "PLAN & DESIGN",
      description:
        "Accurate planning, structural glazing layouts, and modern interior spatial planning for homes and offices.",
      icon: Ruler,
    },
    {
      title: "INTERIORS",
      description:
        "Custom home interior design, modular kitchen cabinets, false ceilings, PVC doors, and tempered glass works.",
      icon: Sparkles,
    },
    {
      title: "QUALITY ASSURED",
      description:
        "Rigorous wall inspection, safety standards, premium materials, and certified execution.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Consistent Hero Banner with Single H1 */}
      <PageHero
        badge="About BUILDORA"
        title="ABOUT BUILDORA INTERIOR WORKS"
        subtitle={siteConfig.tagline}
        image="/images/heroes/about-hero.jpg"
        imageAlt="BUILDORA architectural design studio, interior planning and engineering office"
        shortDescription="Building trust and creating spaces through quality execution, durability, and architectural precision."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          {/* Main Statement Card with Semantic H2 */}
          <div className="bg-gray-50 border border-gray-200 p-6 sm:p-10 rounded-lg mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
              &ldquo;{siteConfig.slogan}&rdquo;
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
              Interior Design Solutions &amp; Architectural Standards
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
              BUILDORA provides complete interior works, residential renovations, metal fabrication, and building-related solutions with a dedicated focus on quality, durability, and professional execution in Thrissur, Kerala.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Specialization: <span className="font-normal text-gray-700">{siteConfig.specialization}</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-gray-900">
                Tagline: <span className="font-normal text-gray-700">{siteConfig.tagline}</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-gray-900">
                Location: <span className="font-normal text-gray-700">Thrissur, Kerala</span>
              </span>
            </div>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
              >
                <span>View our interior design services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 5 Feature Pillars with Semantic H2 */}
          <div className="mb-12">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Our Core Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Why Choose BUILDORA for Your Interior Works
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Built on reliability, durability, and strict quality assurance for every project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white border border-gray-200 p-6 rounded-sm sm:rounded-md hover:border-gray-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-sm bg-gray-900 text-amber-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-wide text-gray-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
              >
                <span>Contact us for interior works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
