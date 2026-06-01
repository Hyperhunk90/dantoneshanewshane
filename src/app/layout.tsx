import type { Metadata } from 'next';
import { Anton, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TextBubble from '@/components/TextBubble';
import { SITE } from '@/data/site';
import { GOOGLE_RATING, REVIEWS } from '@/data/reviews';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton-src',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-src',
  display: 'swap',
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
    images: [{ url: '/images/hero-lawn-care-denham-springs-louisiana.webp', width: 750, height: 1665 }],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/icon.png' },
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: SITE.name,
  image: `${SITE.url}/images/southern-buck-lawn-logo.png`,
  '@id': SITE.url,
  url: SITE.url,
  telephone: SITE.phone,
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING.score,
    reviewCount: GOOGLE_RATING.count,
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TextBubble />
      </body>
    </html>
  );
}
