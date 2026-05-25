export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  useCases: string[];
}

export const industries: Industry[] = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    description:
      "Modernizing core banking systems, enabling real-time payments, and building compliant AI-driven risk platforms.",
    icon: "landmark",
    useCases: [
      "Core banking modernization",
      "Real-time fraud detection",
      "Regulatory compliance automation",
      "Digital lending platforms",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Transforming clinical operations, enabling interoperability, and building HIPAA-compliant AI solutions.",
    icon: "heart-pulse",
    useCases: [
      "Electronic Health Records integration",
      "Clinical AI & diagnostics support",
      "Healthcare data governance",
      "Patient engagement platforms",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Digitizing factory floors, enabling predictive maintenance, and building connected supply chain platforms.",
    icon: "factory",
    useCases: [
      "IoT & Industry 4.0 platforms",
      "Predictive maintenance AI",
      "Supply chain digitization",
      "ERP modernization",
    ],
  },
  {
    slug: "telecom",
    name: "Telecom",
    description:
      "Driving network modernization, 5G enablement, and customer experience transformation for telecoms.",
    icon: "signal",
    useCases: [
      "Network function virtualization",
      "BSS/OSS modernization",
      "Customer analytics platforms",
      "5G infrastructure planning",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    description:
      "Building omnichannel retail platforms, demand forecasting engines, and personalized customer experiences.",
    icon: "shopping-bag",
    useCases: [
      "Omnichannel commerce platforms",
      "AI-driven demand forecasting",
      "Loyalty & personalization engines",
      "Supply chain optimization",
    ],
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    description:
      "Modernizing government digital infrastructure with secure, accessible, and citizen-centric technology.",
    icon: "building-2",
    useCases: [
      "Citizen services digitization",
      "Secure cloud migration",
      "Data sharing & interoperability",
      "Compliance-first architecture",
    ],
  },
];
