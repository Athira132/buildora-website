"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 border-b ${
        scrolled ? "border-gray-200 shadow-sm" : "border-gray-100"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo - Enlarged & Prominent */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-sm py-1"
            aria-label="BUILDORA Home"
          >
            <div className="relative h-12 sm:h-16 w-40 sm:w-56">
              <Image
                src="/images/logo.png"
                alt="BUILDORA - Building Solutions"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 160px, 224px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                    isActive
                      ? "text-gray-900 font-bold border-b-2 border-amber-600 rounded-none pb-1.5"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons: Compact Phone Icon + ENQUIRY */}
          <div className="hidden md:flex items-center gap-3">
            {/* Compact Phone Icon Button (No phone text) */}
            <a
              href={siteConfig.contact.phoneHref}
              aria-label="Call BUILDORA"
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-200 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
              title="Call BUILDORA"
            >
              <Phone className="w-4 h-4 text-amber-700" />
            </a>

            {/* ENQUIRY Primary CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-sm transition-colors"
            >
              ENQUIRY
            </Link>
          </div>

          {/* Mobile Actions: Phone Button + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={siteConfig.contact.phoneHref}
              aria-label="Call BUILDORA"
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <Phone className="w-4 h-4 text-amber-700" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-sm"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-base font-medium rounded-sm ${
                    isActive
                      ? "bg-gray-100 text-gray-900 font-bold border-l-4 border-amber-600 pl-3"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full text-center text-sm font-bold uppercase tracking-wider bg-gray-900 text-white py-3 px-4 rounded-sm hover:bg-black"
            >
              <span>ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
