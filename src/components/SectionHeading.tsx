import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`mb-10 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-sm mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
