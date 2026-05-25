export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  outcomes: string[];
  industries: string[];
}

export const services: Service[] = [
  {
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    shortTitle: "Enterprise Architecture",
    tagline: "Design systems that scale with your ambition.",
    description:
      "We design robust, future-proof enterprise architectures that eliminate systemic risk and align technology investments with long-term business strategy. Our architects embed governance from day one.",
    icon: "grid-3x3",
    capabilities: [
      "Solution & Domain Architecture",
      "Architecture Governance Frameworks",
      "Technology Roadmapping",
      "Legacy Modernization Blueprint",
      "Microservices & API Strategy",
      "Integration Architecture",
    ],
    outcomes: [
      "Reduced technical debt by 40-60%",
      "Faster time-to-market for new features",
      "Improved system reliability and scalability",
      "Clear technology investment roadmap",
    ],
    industries: ["Banking", "Healthcare", "Manufacturing", "Telecom"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    tagline: "Intelligence that drives measurable business outcomes.",
    description:
      "We build AI-native solutions that move beyond hype to deliver measurable operational value. From intelligent process automation to predictive analytics, our AI practice is grounded in engineering rigour.",
    icon: "cpu",
    capabilities: [
      "Generative AI & LLM Integration",
      "Intelligent Process Automation (IPA)",
      "Predictive Analytics & ML Models",
      "AI Governance & Ethics Frameworks",
      "Computer Vision & NLP Solutions",
      "MLOps & AI Platform Engineering",
    ],
    outcomes: [
      "60-80% reduction in manual processing time",
      "Improved decision accuracy through data",
      "Scalable AI pipelines in production",
      "Compliant and auditable AI systems",
    ],
    industries: ["Financial Services", "Healthcare", "Retail", "Government"],
  },
  {
    slug: "cloud-transformation",
    title: "Cloud Transformation",
    shortTitle: "Cloud",
    tagline: "Cloud done right — strategically, securely, at scale.",
    description:
      "We guide enterprises through complex cloud journeys with a strategy-first approach. Whether migrating legacy workloads, building cloud-native platforms, or optimizing multi-cloud environments, we deliver resilient outcomes.",
    icon: "cloud",
    capabilities: [
      "Cloud Strategy & Assessment",
      "AWS, Azure & GCP Architecture",
      "Cloud-Native Application Development",
      "Infrastructure as Code (Terraform, Pulumi)",
      "FinOps & Cloud Cost Optimization",
      "Hybrid & Multi-Cloud Design",
    ],
    outcomes: [
      "30-50% infrastructure cost reduction",
      "99.99% uptime SLA achievement",
      "Accelerated innovation cycle",
      "Compliance-ready cloud environments",
    ],
    industries: ["Financial Services", "Healthcare", "Manufacturing", "Retail"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    shortTitle: "Data Engineering",
    tagline: "Turn raw data into your most strategic asset.",
    description:
      "We design and build enterprise-grade data platforms that give organizations reliable, governed, real-time access to their data. From data lakehouse architectures to streaming pipelines, we deliver the foundation for analytics maturity.",
    icon: "database",
    capabilities: [
      "Data Platform Architecture",
      "Data Lakehouse & Warehouse Design",
      "Real-time Streaming Pipelines",
      "Data Governance & Quality",
      "Analytics Engineering (dbt, Spark)",
      "Business Intelligence & Visualization",
    ],
    outcomes: [
      "Single source of truth for enterprise data",
      "Real-time analytics at enterprise scale",
      "Regulatory compliance and data lineage",
      "Self-service analytics capability",
    ],
    industries: ["Banking", "Healthcare", "Telecom", "Government"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    tagline: "Security embedded at every layer of your enterprise.",
    description:
      "We help enterprises build proactive security postures — not just reactive defenses. Our security practice spans architecture review, threat modelling, compliance engineering, and zero-trust implementation.",
    icon: "shield",
    capabilities: [
      "Security Architecture Review",
      "Zero Trust Implementation",
      "Cloud Security Posture Management",
      "Threat Modelling & Penetration Testing",
      "Compliance Engineering (SOC 2, ISO 27001, GDPR)",
      "Security Operations & SIEM",
    ],
    outcomes: [
      "Measurable reduction in attack surface",
      "Audit-ready compliance posture",
      "Accelerated security certification",
      "24/7 threat monitoring capability",
    ],
    industries: ["Financial Services", "Healthcare", "Government", "Telecom"],
  },
  {
    slug: "application-modernization",
    title: "Application Modernization",
    shortTitle: "App Modernization",
    tagline: "Breathe new life into legacy systems without disruption.",
    description:
      "We transform aging monolithic applications into modern, scalable architectures without disrupting business continuity. Our structured modernization approach minimizes risk while maximizing velocity.",
    icon: "layers",
    capabilities: [
      "Legacy Assessment & Roadmapping",
      "Monolith to Microservices Migration",
      "API-first Redesign",
      "Progressive Modernization Strategy",
      "Containerization & Kubernetes",
      "DevSecOps Pipeline Modernization",
    ],
    outcomes: [
      "50%+ faster feature delivery",
      "Significantly reduced maintenance costs",
      "Improved developer experience",
      "Modern, cloud-ready architecture",
    ],
    industries: ["Banking", "Insurance", "Manufacturing", "Retail"],
  },
  {
    slug: "erp-crm-consulting",
    title: "ERP / CRM Consulting",
    shortTitle: "ERP / CRM",
    tagline: "Enterprise platforms configured for operational excellence.",
    description:
      "We deliver end-to-end ERP and CRM implementations that go beyond vanilla configurations. Our team aligns platform capabilities with business processes, ensuring adoption, ROI, and long-term maintainability.",
    icon: "briefcase",
    capabilities: [
      "SAP & Oracle ERP Implementation",
      "Salesforce CRM Configuration & Integration",
      "Business Process Re-engineering",
      "Data Migration & Validation",
      "Custom Extension Development",
      "Post-implementation Support",
    ],
    outcomes: [
      "Accelerated time-to-value",
      "Higher user adoption rates",
      "Streamlined business processes",
      "Integrated enterprise data view",
    ],
    industries: ["Manufacturing", "Retail", "Financial Services", "Healthcare"],
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    shortTitle: "Managed Services",
    tagline: "Operational excellence as a continuous partnership.",
    description:
      "Our Managed Services practice provides enterprises with continuous technology operations support — from platform management to proactive monitoring. We act as an extension of your team, not just a vendor.",
    icon: "settings",
    capabilities: [
      "24/7 Infrastructure Monitoring",
      "Application Performance Management",
      "SRE & Reliability Engineering",
      "Patch Management & Updates",
      "Incident Response & RCA",
      "Capacity Planning & Optimization",
    ],
    outcomes: [
      "Reduced MTTR by 60%",
      "Proactive issue resolution",
      "Predictable operational costs",
      "SLA-backed reliability",
    ],
    industries: ["All Industries"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
