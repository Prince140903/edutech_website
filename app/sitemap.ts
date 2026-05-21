import type { MetadataRoute } from 'next';
import { seo, streams } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${seo.siteUrl}/`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${seo.siteUrl}/online`, lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${seo.siteUrl}/distance`, lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${seo.siteUrl}/vocational`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${seo.siteUrl}/admissions`, lastModified: now, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${seo.siteUrl}/universities`, lastModified: now, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${seo.siteUrl}/contact`, lastModified: now, priority: 0.7, changeFrequency: 'yearly' },
    ...streams.map((s) => ({
      url: `${seo.siteUrl}/admissions/${s.slug}`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return entries;
}
