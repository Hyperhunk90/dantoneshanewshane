/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Quality values the optimizer may serve; photos of turf/mulch compress
    // poorly at the default 75, so big atmospheric shots use 50-60.
    qualities: [50, 60, 75],
  },
  async redirects() {
    return [
      // Force non-www so Google sees one site, not two.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.southernbucklawn.com' }],
        destination: 'https://southernbucklawn.com/:path*',
        permanent: true,
      },
      // Old pages from the previous build, still in Google's index.
      { source: '/walker-lawn-care', destination: '/service-areas/walker', permanent: true },
      { source: '/pages/walker-la', destination: '/service-areas/walker', permanent: true },
      { source: '/walker-landscaping', destination: '/landscape-design-walker', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
    ];
  },
};

export default nextConfig;
