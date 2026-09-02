import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, CreditCard, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Interior Works & Glazing in Thrissur",
  description:
    "Get in touch with BUILDORA for consultations on interior works, home interior design, modular kitchens, false ceilings, and structural glazing in Thrissur.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact BUILDORA | Interior Works & Glazing in Thrissur",
    description:
      "Get in touch with BUILDORA for consultations on interior works, home interior design, modular kitchens, false ceilings, and structural glazing in Thrissur.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero with Single H1 */}
      <PageHero
        badge="Reach Out"
        title="CONTACT BUILDORA"
        subtitle="Discuss Your Interior Works & Construction Needs"
        image="/images/heroes/contact-hero.jpg"
        imageAlt="BUILDORA commercial office entrance and customer service desk in Thrissur"
        shortDescription="Have a project in mind or need an enquiry for interior works, ACP, structural glazing, fabrication, or construction? Contact our team in Thrissur today."
      />

      <div className="py-8 sm:py-12">
        <div className="container-custom">
          {/* Main Grid: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-sm transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-gray-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      Call Us
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-sm transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-emerald-950">
                      +91 75590 85055
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-sm transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-gray-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      Email Us
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 truncate block">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Location Card */}
              <div className="p-6 bg-white border border-gray-200 rounded-sm space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      Location / Office Address
                    </h3>
                    <div className="mt-2 text-sm text-gray-700 space-y-1">
                      <p>{siteConfig.contact.address.line1}</p>
                      <p>{siteConfig.contact.address.line2}</p>
                      <p>PIN: {siteConfig.contact.address.pincode}</p>
                      <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Visiting Card Banner */}
              <div className="p-5 bg-gray-900 text-white rounded-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                      Digital Visiting Card
                    </p>
                    <p className="text-xs text-gray-300">
                      Save official contact details directly
                    </p>
                  </div>
                </div>
                <a
                  href={siteConfig.social.visitingCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold px-3 py-2 rounded-sm transition-colors shrink-0"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Contact Form Column with Semantic H2 */}
            <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-8 rounded-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Send an Enquiry for Interior Works
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fill out the form below with your project requirements and our team will get in touch with you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
