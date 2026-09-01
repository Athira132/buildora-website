"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null) return null;
  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white hover:text-amber-400 p-2 rounded-sm bg-black/40 hover:bg-black/60 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-3 rounded-sm bg-black/40 hover:bg-black/60 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-3 rounded-sm bg-black/40 hover:bg-black/60 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content wrapper */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] bg-black/50 rounded-sm overflow-hidden">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>
        <div className="mt-4 text-center text-white space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            {currentItem.category} ({currentIndex + 1} / {items.length})
          </span>
          <p className="text-sm sm:text-base font-medium">{currentItem.title}</p>
        </div>
      </div>
    </div>
  );
};
