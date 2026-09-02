import React from "react";
import Image from "next/image";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle?: string;
  image: string;
  shortDescription?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  image,
  shortDescription,
}) => {
  return (
    <section className="container-custom pt-4 sm:pt-6 pb-8">
      {/* Subtle 1px Bordered Container */}
      <div className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[380px] flex items-center bg-gray-950 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-2xl text-white space-y-3 sm:space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/70 border border-amber-800/80 px-3 py-1 rounded-sm">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-gray-200">
              {subtitle}
            </p>
          )}
          {shortDescription && (
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed pt-1">
              {shortDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
