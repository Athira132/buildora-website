export interface ServiceItem {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Petrol Pump Construction Work",
    shortDescription:
      "Complete civil, structural, canopy, and fuel system installation solutions for modern petrol stations.",
    image: "/images/services/service-1-petrol-pump.jpg",
    category: "Civil & Commercial",
  },
  {
    id: 2,
    title: "Bus Stand Renovation & Fabrication",
    shortDescription:
      "Turnkey fabrication and structural renovation including ACP cladding, roofing, and precision steel works.",
    image: "/images/services/service-2-bus-stand.jpg",
    category: "Fabrication & Cladding",
  },
  {
    id: 3,
    title: "PVC Door",
    shortDescription:
      "Modern wood-finish PVC doors delivering durable construction, sleek panel aesthetics, and quality hardware.",
    image: "/images/services/service-3-pvc-door.jpg",
    category: "Doors & Interior",
  },
  {
    id: 4,
    title: "MS Safety Guard Fabrication & Painting",
    shortDescription:
      "Heavy-duty mild steel safety guards and railing systems engineered for maximum durability, strength, and safety.",
    image: "/images/services/service-4-ms-safety-guard.jpg",
    category: "Fabrication",
  },
  {
    id: 5,
    title: "ACP Work",
    shortDescription:
      "Exterior-grade aluminium composite panel cladding with precision framing, seamless joints, and architectural grooves.",
    image: "/images/services/service-5-acp-work.jpg",
    category: "Facade & Cladding",
  },
  {
    id: 6,
    title: "Tempered Glass Work",
    shortDescription:
      "Professional cutting, finishing, and secure installation of toughened glass for architectural and interior applications.",
    image: "/images/services/service-6-tempered-glass.jpg",
    category: "Glass Works",
  },
  {
    id: 7,
    title: "Signboard Work",
    shortDescription:
      "Custom architectural and commercial signboards engineered for high visibility, brand impact, and directional guidance.",
    image: "/images/services/service-7-signboard.jpg",
    category: "Signage & Branding",
  },
  {
    id: 8,
    title: "Scaffolding Work",
    shortDescription:
      "Safe and certified erection, alteration, and dismantling of heavy-duty temporary scaffolding structures.",
    image: "/images/services/service-8-scaffolding.jpg",
    category: "Site Services",
  },
  {
    id: 9,
    title: "Welding Work",
    shortDescription:
      "Expert metal welding and structural fabrication ensuring robust, durable joints for industrial and residential projects.",
    image: "/images/services/service-9-welding.jpg",
    category: "Fabrication",
  },
  {
    id: 10,
    title: "Interior Work",
    shortDescription:
      "Comprehensive interior design, renovation, and finishing solutions tailored for functional and elegant spaces.",
    image: "/images/services/service-10-interior-work.jpg",
    category: "Interiors",
  },
  {
    id: 11,
    title: "Wall Tester Work",
    shortDescription:
      "Precision wall inspection verifying alignment, levelness, structural strength, and surface finishing quality.",
    image: "/images/services/service-11-wall-tester.jpg",
    category: "Quality Control",
  },
  {
    id: 12,
    title: "Glass Shower Work",
    shortDescription:
      "Custom installation of premium toughened glass shower enclosures designed for modern, water-tight bathrooms.",
    image: "/images/services/service-12-glass-shower.jpg",
    category: "Glass Works",
  },
  {
    id: 13,
    title: "Waterproof & Heat Insulation Sheet Work",
    shortDescription:
      "Advanced roofing insulation and waterproofing membranes engineered to prevent leaks and significantly reduce indoor heat.",
    image: "/images/services/service-13-waterproof-sheet.jpg",
    category: "Roofing & Insulation",
  },
  {
    id: 14,
    title: "Wall & Floor Panels Work",
    shortDescription:
      "Accurate measurement, surface preparation, and seamless installation of modern decorative wall and floor panels.",
    image: "/images/services/service-14-wall-floor-panels.jpg",
    category: "Finishing & Paneling",
  },
  {
    id: 15,
    title: "Wood Staircase Work",
    shortDescription:
      "Custom structural wooden staircases designed with robust framing, premium hardwoods, and smooth hand-crafted finishes.",
    image: "/images/services/service-15-wood-staircase.jpg",
    category: "Woodwork",
  },
  {
    id: 16,
    title: "Ceiling Work",
    shortDescription:
      "Modern gypsum and PVC false ceiling installations designed for enhanced acoustics, ambient lighting, and aesthetic appeal.",
    image: "/images/services/service-16-ceiling-work.jpg",
    category: "Ceilings",
  },
];

export const keyFeaturedServices = [
  servicesData[0], // Petrol Pump Construction Work
  servicesData[4], // ACP Work
  servicesData[5], // Tempered Glass Work
  servicesData[1], // Bus Stand Renovation & Fabrication
  servicesData[9], // Interior Work
  servicesData[3], // MS Safety Guard
];
