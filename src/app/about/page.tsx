import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Hammer,
  Layers,
  Ruler,
  Sparkles,
  ArrowRight,
  Building2,
  RefreshCw,
  Home,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Building Solutions & Construction Services | BUILDORA",
  },
  description:
    "BUILDORA delivers reliable building solutions covering construction, renovation, planning and design, interiors, and quality construction in Thrissur, Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "Building Solutions & Construction Services | BUILDORA",
    description:
      "BUILDORA delivers reliable building solutions covering construction, renovation, planning and design, interiors, and quality construction in Thrissur, Kerala.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const features = [
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

  const servicesOffered = [
    {
      title: "Residential Building",
      description:
        "Comprehensive residential construction and home building solutions tailored for structural strength, functional beauty, and lasting durability.",
      icon: Home,
    },
    {
      title: "Commercial Building",
      description:
        "Commercial infrastructure, retail showrooms, structural steel frameworks, and modern business facilities engineered to commercial standards.",
      icon: Building2,
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Turnkey building renovation, structural remodeling, exterior facade modernization, and property restoration services.",
      icon: RefreshCw,
    },
    {
      title: "Interior Works",
      description:
        "Complete interior works including bespoke living and bedroom spaces, modular kitchen cupboards, false ceilings, and glass partition works.",
      icon: Sparkles,
    },
    {
      title: "Quality Construction",
      description:
        "Precision craftsmanship, rigorous wall plumb testing, structural integrity inspections, and high-grade materials on every project.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Full-Width Edge-to-Edge Hero Banner with Single H1 */}
      <PageHero
        badge={siteConfig.specialization}
        title="Building Solutions"
        subtitle="BUILDORA • BUILDING SOLUTIONS"
        tagline={siteConfig.tagline}
        image="/images/heroes/about-hero.jpg"
        imageAlt="BUILDORA building solutions, construction, and ACP structural glazing specialists in Thrissur"
        shortDescription="BUILDORA delivers reliable building solutions covering construction, renovation, planning and design, interiors, and quality construction."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          {/* 2. Main Brand Statement Card */}
          <div className="bg-gray-50 border border-gray-200 p-6 sm:p-10 rounded-lg mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
              &ldquo;{siteConfig.slogan}&rdquo;
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
              Comprehensive Building Solutions &amp; Architectural Glazing
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
              BUILDORA delivers reliable building solutions covering construction, renovation, planning and design, interiors, and quality construction. With specialized expertise in ACP Structural Glazing, we build residential and commercial spaces engineered with precision, safety, and long-term durability in Thrissur, Kerala.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
              >
                <span>Explore our building solutions &amp; services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. Core Features Section */}
          <div className="mb-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Features
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Built on reliability, durability, and strict architectural standards across every phase.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white border border-gray-200 p-6 rounded-sm sm:rounded-md hover:border-gray-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-sm bg-gray-900 text-amber-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-wide text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Services Offered Section */}
          <div className="mb-12">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                What We Offer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Services Offered
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Complete building solutions spanning residential, commercial, renovation, interiors, and quality construction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesOffered.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-white border border-gray-200 p-6 rounded-sm sm:rounded-md hover:border-gray-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-sm bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors shadow-sm"
              >
                <span>VIEW ALL 18 BUILDING &amp; GLAZING SERVICES</span>
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
