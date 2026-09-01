import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const StickyWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with BUILDORA (+91 75590 85055)"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide uppercase pr-1">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
