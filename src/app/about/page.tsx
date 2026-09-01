import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Hammer, Layers, Ruler, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us | BUILDORA Building Solutions",
  description:
    "Learn about BUILDORA - BUILDING SOLUTIONS. We provide construction, renovation, fabrication, interior and building-related solutions in Thrissur, Kerala.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "CONSTRUCTION",
      description:
        "Engineered civil and commercial building solutions delivered with architectural precision.",
      icon: Hammer,
    },
    {
      title: "RENOVATION",
      description:
        "Complete structural remodeling, facade upgrades, and building restorations.",
      icon: Layers,
    },
    {
      title: "PLAN & DESIGN",
      description:
        "Accurate planning, structural glazing layouts, and modern interior spatial planning.",
      icon: Ruler,
    },
    {
      title: "INTERIORS",
      description:
        "Modern false ceilings, PVC doors, glass showers, and customized interior panel works.",
      icon: Sparkles,
    },
    {
      title: "QUALITY ASSURED",
      description:
        "Rigorous wall inspection, safety standards, premium materials, and durable execution.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Page Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
            Company Overview
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            ABOUT BUILDORA
          </h1>
          <p className="text-base sm:text-lg font-medium text-amber-700 mt-2">
            &ldquo;{siteConfig.slogan}&rdquo;
          </p>
        </div>

        {/* Main Introduction Paragraph */}
        <div className="bg-gray-50 border border-gray-200 p-6 sm:p-10 rounded-sm mb-16">
          <p className="text-base sm:text-xl text-gray-800 leading-relaxed font-normal">
            BUILDORA – BUILDING SOLUTIONS provides construction, renovation, fabrication, interior and building-related solutions with a focus on quality, durability and professional execution.
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
        </div>

        {/* 5 Feature Pillars */}
        <div className="mb-16">
          <SectionHeading
            badge="Our Core Pillars"
            title="Comprehensive Building & Glazing Capabilities"
            subtitle="Built on reliability, durability, and strict quality assurance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white border border-gray-200 p-6 rounded-sm hover:border-gray-400 transition-colors"
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
        </div>
      </div>

      <CTASection />
    </div>
  );
}
