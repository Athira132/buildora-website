import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, priority = false }) => {
  return (
    <article className="group bg-white border border-gray-200 hover:border-gray-400 rounded-sm sm:rounded-md overflow-hidden flex flex-col h-full transition-all duration-200 shadow-none">
      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-sm">
          {service.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-amber-700 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
          {service.shortDescription}
        </p>
      </div>
    </article>
  );
};
