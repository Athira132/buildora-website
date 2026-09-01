import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-20 border-t border-gray-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            {siteConfig.slogan}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            READY TO BUILD?
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Let&apos;s discuss your project. We provide end-to-end building, fabrication, ACP and glazing solutions.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
