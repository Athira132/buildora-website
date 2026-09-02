import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Interior Works, Glazing & Fabrication Services",
  description:
    "Explore our 18 specialized services: complete interior works, false ceiling, tempered glass, aluminum cupboard work, PVC doors, and metal fabrication in Thrissur.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Interior Works, Glazing & Fabrication Services | BUILDORA",
    description:
      "Explore our 18 specialized services: complete interior works, false ceiling, tempered glass, aluminum cupboard work, PVC doors, and metal fabrication in Thrissur.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero with Single H1 */}
      <PageHero
        badge="All Building Solutions"
        title="OUR INTERIOR WORKS & SERVICES"
        subtitle="18 Specialized Solutions for Residential & Commercial Spaces"
        image="/images/heroes/services-hero.jpg"
        imageAlt="Commercial construction site featuring structural steel fabrication and interior works"
        shortDescription="Delivering end-to-end building excellence with certified structural integrity, precision craftsmanship, and professional execution in Thrissur, Kerala."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
              Complete Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
              Residential &amp; Commercial Interior Works in Thrissur
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              From contemporary home interior designs and modular kitchen cupboards to heavy-duty MS safety fabrication, tempered glass works, and exterior ACP cladding, browse our complete range of 18 building and interior solutions below.
            </p>
          </div>

          {/* Exactly 18 Services Grid with Semantic h3 Headings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} priority={index < 4} />
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
