import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | BUILDORA Interior Works",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "BUILDORA" }],
  creator: "BUILDORA",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "BUILDORA",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "BUILDORA Interior Works & Building Solutions Thrissur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        legalName: "BUILDORA Building Solutions",
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        image: `${siteConfig.url}/images/hero-banner.jpg`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.state,
          postalCode: siteConfig.contact.address.pincode,
          addressCountry: siteConfig.contact.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.contact.geo.latitude,
          longitude: siteConfig.contact.geo.longitude,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Thrissur",
          },
          {
            "@type": "AdministrativeArea",
            name: "Kerala",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.visitingCard,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Works & Building Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Complete Interior Works",
                description: "Residential and commercial interior design solutions, modular cabinetry, and turnkey styling.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "False Ceiling Work",
                description: "Gypsum and PVC false ceilings with cove LED strip lighting.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tempered Glass & Shower Enclosures",
                description: "Architectural glass works, toughened glass partitions, and frameless shower enclosures.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "MS Safety Guard & Metal Fabrication",
                description: "Heavy-duty mild steel safety grills, railings, and structural steel fabrication.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ACP Work & Structural Glazing",
                description: "Aluminium composite panel cladding and modern commercial structural glazing facades.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#business`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
