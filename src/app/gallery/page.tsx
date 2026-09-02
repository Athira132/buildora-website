"use client";

import React, { useState } from "react";
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
      {/* Consistent Hero Banner with 1px Subtle Border */}
      <PageHero
        badge="Project Portfolio"
        title="PROJECT GALLERY"
        subtitle="ACP Cladding, Structural Glazing & Metal Works"
        image="/images/heroes/gallery-hero.jpg"
        shortDescription="Explore our completed commercial and residential facade works. Every card features crisp framing and high-resolution details."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          {/* Gallery Grid with 1px Subtle Borders on all cards */}
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
