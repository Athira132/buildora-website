import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";
import { keyFeaturedServices } from "@/data/services";
import { galleryData } from "@/data/gallery";

export default function HomePage() {
  const previewGallery = galleryData.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (75-90vh desktop) */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center bg-gray-950 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="BUILDORA Modern ACP & Structural Glazing Construction"
            fill
            priority
            className="object-cover object-center opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl text-white space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3.5 py-1.5 rounded-sm">
                {siteConfig.specialization}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {siteConfig.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium tracking-wide text-gray-200 uppercase">
                {siteConfig.subHeading}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 font-normal">
              {siteConfig.tagline}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm border border-white/20 transition-colors"
              >
                <span>GET A QUOTE</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              {siteConfig.slogan}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Building Solutions Engineered With Precision & Trust
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              BUILDORA provides reliable building, renovation, fabrication, interior and structural solutions with a focus on quality and professional execution.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-amber-700 border-b-2 border-gray-900 hover:border-amber-700 pb-1 transition-colors"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Key Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
            >
              <span>VIEW ALL SERVICES</span>
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
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800"
            >
              <span>VIEW GALLERY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-[4/3] w-full bg-gray-100 border border-gray-200 rounded-sm overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-300">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {item.title}
                  </p>
                </div>
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

      {/* 5. SIMPLE HOME CTA */}
      <CTASection />
    </div>
  );
}
