export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  services: string[];
  tags: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}
