import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";
import { keyFeaturedServices } from "@/data/services";
import { galleryData } from "@/data/gallery";

export default function HomePage() {
  const previewGallery = galleryData.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. HOME HERO - Standardized Full-Width PageHero */}
      <PageHero
        isHome
        badge={siteConfig.specialization}
        title={
          <>
            BUILDORA
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mt-2.5 tracking-tight font-sans">
              Interior Works &amp; Design Solutions
            </span>
          </>
        }
        tagline={siteConfig.tagline}
        shortDescription="Professional interior works, home interior design, modular kitchens, false ceilings, glass works, and custom fabrication built with quality and precision."
        image="/images/hero-banner.jpg"
        imageAlt="BUILDORA interior works, ACP structural glazing and building solutions in Thrissur"
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors shadow-sm"
          >
            <span>ENQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-sm border border-white/25 transition-colors"
          >
            <span>OUR SERVICES</span>
          </Link>
        </div>
      </PageHero>

      {/* 2. SHORT INTRODUCTION - H2: Interior Design Solutions */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              {siteConfig.slogan}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Interior Design Solutions &amp; Precision Building Services
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              BUILDORA provides complete interior works, home interior design, residential renovations, modular cabinetry, and architectural glazing in Thrissur, Kerala. We craft functional and modern living spaces with uncompromising attention to durability, material quality, and craftsmanship.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-amber-700 border-b-2 border-gray-900 hover:border-amber-700 pb-1 transition-colors"
              >
                <span>Explore our interior works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES - H2: Our Interior Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Our Interior Works &amp; Specialized Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
            >
              <span>View our interior design services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyFeaturedServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} priority={idx < 3} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors shadow-sm"
            >
              <span>VIEW ALL 18 SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW - H2: Recent Projects */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Recent Interior Works &amp; Glazing Projects
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
            >
              <span>Explore our recent projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-[4/3] w-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors"
                aria-label={`View gallery project ${item.id}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-900 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. READY TO BUILD - PREMIUM DARK BLACK CTA */}
      <CTASection />
    </div>
  );
}
