import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/siteConfig";
import { keyFeaturedServices } from "@/data/services";
import { galleryData } from "@/data/gallery";

export default function HomePage() {
  const previewGallery = galleryData.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* 1. HOME HERO - 70-75vh desktop / 60-70vh mobile, 100% full image cover, 1px border, large typography */}
      <section className="container-custom pt-4 sm:pt-6 pb-6">
        <div className="relative w-full h-[65vh] sm:h-[68vh] lg:h-[72vh] min-h-[480px] max-h-[700px] flex items-center rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          {/* Full coverage Hero Image */}
          <Image
            src="/images/hero-banner.jpg"
            alt="BUILDORA Modern ACP & Structural Glazing Construction"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center w-full h-full"
          />

          {/* Clean High-Contrast Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35 pointer-events-none" />

          {/* Large Hero Typography */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-3xl text-white space-y-4 sm:space-y-5">
            <div className="space-y-2 sm:space-y-2.5">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3.5 py-1.5 rounded-sm shadow-sm">
                {siteConfig.specialization}
              </span>

              {/* Dominant Brand Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white drop-shadow-sm">
                {siteConfig.name}
              </h1>

              {/* Sub-heading */}
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase text-gray-100">
                {siteConfig.subHeading}
              </p>

              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl font-medium text-amber-400/90 pt-0.5">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Short Definition */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal">
              Professional construction, fabrication, ACP and glazing solutions built with quality and precision.
            </p>

            {/* Buttons: ENQUIRY & OUR SERVICES */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors shadow-sm"
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
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              {siteConfig.slogan}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Building Solutions Engineered With Precision & Trust
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
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

      {/* 3. KEY SERVICES (Spotlight on 6 major services) */}
      <section className="py-16 sm:py-20 bg-white">
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
              <span>VIEW ALL 18 SERVICES</span>
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
                className="group relative aspect-[4/3] w-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors"
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

      {/* 5. LIGHT THEMED "WE BUILD YOUR DREAMS" CTA */}
      <CTASection />
    </div>
  );
}
