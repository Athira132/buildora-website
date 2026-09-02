import React from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
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
      aria-label={`View ${item.title} image`}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-300">
          {item.category}
        </span>
        <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 line-clamp-2">
          {item.title}
        </p>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/60 text-white flex items-center justify-center">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
