"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { GalleryCard } from "@/components/GalleryCard";
import { Lightbox } from "@/components/Lightbox";
import { CTASection } from "@/components/CTASection";
import { galleryData } from "@/data/gallery";

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + galleryData.length) % galleryData.length);
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryData.length);
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero with Single H1 */}
      <PageHero
        badge="Project Portfolio"
        title="INTERIOR WORKS & FACADE GALLERY"
        subtitle="ACP Cladding, Structural Glazing & Metal Works"
        image="/images/heroes/gallery-hero.jpg"
        imageAlt="Completed architectural interior works, structural glazing and facade portfolio"
        shortDescription="Explore our completed commercial and residential projects in Thrissur. Every card features crisp framing, high-resolution details, and verified craftsmanship."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
              Portfolio of Completed Residential &amp; Commercial Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Click on any project to view high-resolution imagery showcasing our structural glazing, exterior ACP cladding, interior glass works, and precision metal fabrication.
            </p>
          </div>

          {/* Gallery Grid with 1px Subtle Borders and Descriptive Alts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryData.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                priority={index < 3}
                onClick={() => handleOpen(index)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-900 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>Contact us for interior works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={galleryData}
        currentIndex={activeImageIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <CTASection />
    </div>
  );
}
