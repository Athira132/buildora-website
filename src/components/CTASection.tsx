import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-lg sm:rounded-xl p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-sm">
              {siteConfig.slogan}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              READY TO BUILD?
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Let&apos;s discuss your project. We provide reliable building, fabrication, ACP and structural glazing solutions tailored with precision and durability.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors shadow-none"
            >
              <span>ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 text-gray-900 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>CONNECT WITH US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
