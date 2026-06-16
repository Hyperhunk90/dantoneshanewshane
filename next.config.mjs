/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure all URLs are served without trailing slashes. Next.js will 308-redirect
  // any request that includes a trailing slash (e.g. /services/ → /services) so
  // Google only ever indexes one canonical version of each URL.
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Quality values the optimizer may serve; photos of turf/mulch compress
    // poorly at the default 75, so big atmospheric shots use 50-60.
    qualities: [50, 60, 75],
  },
  async headers() {
    return [
      {
        // Tell crawlers (including Googlebot) to index every non-API page.
        // This header reinforces the robots.txt and helps if Hostinger's WAF
        // injects conflicting headers.
        source: '/((?!api/).*)',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ];
  },
  async redirects() {
    return [
      // Trailing-slash canonicalization — belt-and-suspenders alongside
      // trailingSlash:false above. Catches any edge-case the Next.js server
      // might miss and ensures a hard 301 appears in Googlebot's crawl log.
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Force non-www so Google sees one site, not two.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.southernbucklawn.com' }],
        destination: 'https://southernbucklawn.com/:path*',
        permanent: true,
      },
      // Common vanity URLs visitors (and old links) might try.
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/get-a-quote', destination: '/quote', permanent: true },
      { source: '/get-quote', destination: '/quote', permanent: true },
      { source: '/free-quote', destination: '/quote', permanent: true },
      { source: '/lawn-care', destination: '/services', permanent: true },
      { source: '/landscaping', destination: '/services', permanent: true },
      // Old pages from the previous build, still in Google's index.
      { source: '/walker-lawn-care', destination: '/service-areas/walker', permanent: true },
      { source: '/pages/walker-la', destination: '/service-areas/walker', permanent: true },
      { source: '/walker-landscaping', destination: '/landscape-design-walker', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
    ];
  },
};

export default nextConfig;
