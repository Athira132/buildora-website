"use client";

import React, { useState } from "react";
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
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm">
            Work Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            PROJECT GALLERY
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Explore our completed ACP cladding, structural glazing, steel fabrication, and building renovation projects. Click any image to view in high resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
