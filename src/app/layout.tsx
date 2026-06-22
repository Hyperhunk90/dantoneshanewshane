import type { Metadata } from 'next';
import { Anton, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import GaTracker from '@/components/GaTracker';
import { SITE } from '@/data/site';
import { REVIEWS, GOOGLE_RATING } from '@/data/reviews';
import Script from 'next/script';

// Landscape image used as the default social-share preview. 1920x1080 (16:9)
// renders cleanly as a large summary card on Facebook, X, and LinkedIn.
const OG_IMAGE = {
  url: '/images/hero-background-lawn-care-louisiana.webp',
  width: 1920,
  height: 1080,
  alt: 'Fresh mulch bed, stone border, and healthy green lawn by Southern Buck Lawn in Louisiana',
};

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton-src',
  display: 'optional',
  preload: true,
  adjustFontFallback: true,
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
});

const barlow = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-src',
  display: 'optional',
  preload: true,
  adjustFontFallback: true,
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Southern Buck Lawn | Lawn Care & Landscaping in Walker, LA',
    template: '%s | Southern Buck Lawn',
  },
  description:
    'Southern Buck Lawn delivers weekly mowing, weed control, and landscape design across Walker, Denham Springs, Baton Rouge, and Livingston Parish. Local, licensed, and insured. Free quotes.',
  keywords: [
    'lawn care Walker LA',
    'lawn service Baton Rouge',
    'landscaping Denham Springs',
    'lawn mowing Livingston Parish',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Southern Buck Lawn | Lawn Care & Landscaping in Walker, LA',
    description:
      'Weekly mowing, weed control, and landscape design across Walker, Denham Springs, Baton Rouge, and Livingston Parish.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Buck Lawn | Lawn Care & Landscaping in Walker, LA',
    description:
      'Weekly mowing, weed control, and landscape design across Walker, Denham Springs, Baton Rouge, and Livingston Parish.',
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  robots: { index: true, follow: true },
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: SITE.name,
  image: `${SITE.url}/images/southern-buck-lawn-logo.png`,
  '@id': `${SITE.url}/#business`,
  url: SITE.url,
  telephone: '+12253694434',
  email: SITE.email,
  founder: SITE.owner,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: SITE.social.google,
  sameAs: [SITE.social.google, SITE.social.facebook, SITE.social.yelp, SITE.social.bbb],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING.score,
    reviewCount: GOOGLE_RATING.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    reviewBody: r.text,
  })),
  areaServed: SITE.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '06:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '07:00',
      closes: '16:00',
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#business` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
        <GaTracker />
        {/* lazyOnload keeps gtag.js off the critical path; lib/ga.ts queues any
            events fired before it arrives, so nothing is lost. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HYJ6QH6Y1D"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
