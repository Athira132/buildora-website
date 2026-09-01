import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CreditCard, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-sm inline-block max-w-[200px]">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/logo.jpg"
                  alt="BUILDORA"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                {siteConfig.specialization}
              </p>
              <p className="text-sm font-medium text-gray-200">
                {siteConfig.tagline}
              </p>
              <p className="text-xs text-gray-400 italic pt-1">
                &ldquo;{siteConfig.slogan}&rdquo;
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white transition-colors inline-flex items-start gap-2.5"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:text-white transition-colors inline-flex items-start gap-2.5 break-all"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.displayAddress}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links & Visiting Card */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Follow our project updates and access our official digital visiting card.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BUILDORA Instagram page"
                className="w-9 h-9 rounded-sm bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BUILDORA Facebook page"
                className="w-9 h-9 rounded-sm bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.visitingCard}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Digital Visiting Card"
                className="inline-flex items-center gap-1.5 px-3 h-9 rounded-sm bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white text-xs font-semibold transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Visiting Card</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 BUILDORA - Building Solutions. All Rights Reserved.</p>
          <p className="text-gray-500">
            Thrissur, Kerala • ACP & Structural Glazing Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};
