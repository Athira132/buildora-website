import React from "react";
import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services | BUILDORA Building Solutions & Glazing",
  description:
    "Explore our complete range of 16 building solutions: ACP work, structural glazing, petrol pump construction, interior renovation, and metal fabrication in Thrissur.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
            All Building Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            OUR SERVICES
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            BUILDORA delivers 16 specialized building, glazing, fabrication, and finishing services with guaranteed structural integrity and professional execution.
          </p>
        </div>

        {/* 16 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} priority={index < 4} />
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
