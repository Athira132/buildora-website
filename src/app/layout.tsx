import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BUILDORA | Building Solutions & ACP Structural Glazing",
    template: "%s | BUILDORA Building Solutions",
  },
  description: siteConfig.description,
  keywords: [
    "BUILDORA",
    "BUILDING SOLUTIONS",
    "ACP STRUCTURAL GLAZING",
    "Construction",
    "Building Solutions",
    "Renovation",
    "Interior Works",
    "Fabrication",
    "Glass Works",
    "Thrissur",
    "Kerala Construction",
  ],
  authors: [{ name: "BUILDORA" }],
  creator: "BUILDORA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "BUILDORA | Building Solutions & ACP Structural Glazing",
    description: siteConfig.description,
    siteName: "BUILDORA",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "BUILDORA - Building Solutions & ACP Structural Glazing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUILDORA | Building Solutions & ACP Structural Glazing",
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
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
