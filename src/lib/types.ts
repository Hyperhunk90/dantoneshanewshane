export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  navLabel: string;
  subtitle: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickSummary: string;
  detailedContent: string[];
  localBenefits: string[];
  pricingRange: string;
  faqs: FAQ[];
  image: string;
  imageAlt: string;
}

export interface Review {
  author: string;
  area: string;
  text: string;
  rating: number;
  source?: string;
}

export interface Location {
  slug: string;
  name: string;
  navLabel: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  soilNote: string;
  pestNote: string;
  neighborhoods: string[];
  image: string;
  imageAlt: string;
  reviews: Review[];
}
