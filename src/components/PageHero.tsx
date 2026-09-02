import React from "react";
import Image from "next/image";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  shortDescription?: string;
  objectPosition?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  image,
  imageAlt,
  shortDescription,
  objectPosition = "center",
}) => {
  return (
    <section className="container-custom pt-4 sm:pt-6 pb-6">
      {/* 1px subtle border container with overflow:hidden and 100% image fill */}
      <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] flex items-center rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        {/* Full coverage Image (100% width & height, object-fit: cover) */}
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover w-full h-full"
          style={{ objectPosition }}
        />

        {/* Crisp Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-2xl text-white space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3 py-1 rounded-sm shadow-sm">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-gray-200">
              {subtitle}
            </p>
          )}
          {shortDescription && (
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed pt-1 font-normal">
              {shortDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
