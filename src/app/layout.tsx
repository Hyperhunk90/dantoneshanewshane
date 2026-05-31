import type { Metadata } from 'next';
import { Anton, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/data/site';

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
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: 'US',
  },
  areaServed: SITE.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
