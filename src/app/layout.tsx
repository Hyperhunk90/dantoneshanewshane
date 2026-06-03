import type { Metadata } from 'next';
import { Anton, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { SITE } from '@/data/site';
import Script from "next/script";

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton-src',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
});

const barlow = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-src',
  display: 'swap',
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
    images: [{ url: '/images/hero-lawn-care-denham-springs-louisiana.webp', width: 750, height: 1665 }],
  },
  robots: { index: true, follow: true },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-HYJ6QH6Y1D"
  strategy="afterInteractive"
/>
<Script id="ga-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HYJ6QH6Y1D');
  `}
</Script>
      </body>
    </html>
  );
}
