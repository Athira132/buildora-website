import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
  priority?: boolean;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick, priority = false }) => {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-[4/3] w-full bg-white border border-gray-200 hover:border-gray-400 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all duration-200"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View gallery project ${item.id}`}
    >
      <Image
        src={item.image}
        alt={item.alt || item.title}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
