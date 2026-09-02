import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | BUILDORA Building Solutions & Glazing",
  description:
    "Explore our complete range of 18 building solutions: ACP work, structural glazing, petrol pump construction, interior renovation, aluminum cupboard work, and CNC cutting in Thrissur.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Consistent Hero Banner with 1px Subtle Border & 100% Image Coverage */}
      <PageHero
        badge="All Building Solutions"
        title="OUR SERVICES"
        subtitle="18 Specialized Building, Glazing & Fabrication Solutions"
        image="/images/heroes/services-hero.jpg"
        shortDescription="Delivering end-to-end building excellence with certified structural integrity, precision craftsmanship, and professional execution."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          {/* Exactly 18 Services Grid */}
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
