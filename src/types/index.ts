export type SectionId =
  | 'the-beginning'
  | 'our-philosophy'
  | 'what-we-do'
  | 'what-we-build'
  | 'our-approach'
  | 'engineering-intelligence'
  | 'creative-studio'
  | 'a-world-of-possibilities'
  | 'about-vantixio'
  | 'the-next-chapter';

export interface SectionMeta {
  id: SectionId;
  index: number; // 1 to 10
  code: string;  // e.g. "01 / 10"
  name: string;  // e.g. "The Beginning"
  kicker: string;
  headline: string;
  highlightWords: string;
  subtext: string;
}

export interface CameraPose {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export interface ProjectEnquiryFormData {
  serviceTypes: string[];
  projectDescription: string;
  budgetRange: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  href?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  client: string;
  impactMetrics: { label: string; value: string }[];
  description: string;
  previewImage?: string;
  linkText?: string;
}
