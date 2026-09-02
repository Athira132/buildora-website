import React from "react";
import Image from "next/image";

export interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  tagline?: string;
  image: string;
  imageAlt?: string;
  shortDescription?: string;
  objectPosition?: string;
  children?: React.ReactNode;
  isHome?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  tagline,
  image,
  imageAlt,
  shortDescription,
  objectPosition = "center",
  children,
  isHome = false,
}) => {
  return (
    <section
      className="hero-banner-frame relative w-full h-[52vh] sm:h-[56vh] md:h-[60vh] lg:h-[62vh] min-h-[440px] max-h-[620px] flex items-center overflow-hidden border-b border-gray-200"
      aria-label={typeof title === "string" ? title : "Hero Banner"}
    >
      {/* 100% Full-Width Edge-to-Edge Hero Image */}
      <Image
        src={image}
        alt={imageAlt || (typeof title === "string" ? title : "BUILDORA Hero Banner")}
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full"
        style={{ objectPosition }}
      />

      {/* Clean High-Contrast Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35 pointer-events-none" />

      {/* Hero Content - Vertically centered, aligned to site layout grid */}
      <div className="relative z-10 w-full py-8 sm:py-12">
        <div className="container-custom">
          <div className="max-w-3xl text-white space-y-3.5 sm:space-y-4">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3.5 py-1.5 rounded-sm shadow-sm">
                {badge}
              </span>
            </div>

            {/* Semantic Primary H1 */}
            {isHome ? (
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white drop-shadow-sm">
                {title}
              </h1>
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-gray-200">
                {subtitle}
              </p>
            )}

            {tagline && (
              <p className="text-base sm:text-lg md:text-xl font-medium text-amber-400/90 pt-0.5">
                {tagline}
              </p>
            )}

            {shortDescription && (
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl leading-relaxed font-normal">
                {shortDescription}
              </p>
            )}

            {children && <div className="pt-2">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
