import type { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { SITE } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const staticPages = ['', '/services', '/quote', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }));
  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));
  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/service-areas/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));
  return [...staticPages, ...servicePages, ...locationPages];
}
