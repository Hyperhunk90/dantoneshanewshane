// Central business info. Update the two TODO values before launch.
export const SITE = {
  name: 'Southern Buck Lawn',
  owner: 'Michael Dantone',
  tagline: 'Southern Care. The Landscape Mayor.',
  // TODO: replace with the real business phone number before go-live.
  phone: '(225) 555-0123',
  phoneHref: 'tel:+12255550123',
  email: 'SBL@Southernbucklawn.com',
  emailHref: 'mailto:SBL@Southernbucklawn.com',
  city: 'Walker',
  region: 'LA',
  regionFull: 'Louisiana',
  postalCode: '70785',
  url: 'https://southernbucklawn.com',
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
  serviceAreas: ['Walker', 'Denham Springs', 'Baton Rouge', 'Livingston Parish'],
  // Drop your real profile URLs in once they exist.
  social: {
    google: '#',
    facebook: '#',
    yelp: '#',
    nextdoor: '#',
  },
};

export const SERVICE_NAV = [
  { label: 'Lawn Mowing & Edging', href: '/services/lawn-mowing' },
  { label: 'Weed Control & Fertilization', href: '/services/weed-control' },
  { label: 'Landscape Design & Mulch', href: '/services/landscape-design' },
  { label: 'Commercial Grounds', href: '/services/commercial-grounds' },
];

export const AREA_NAV = [
  { label: 'Walker, LA', href: '/service-areas/walker' },
  { label: 'Denham Springs, LA', href: '/service-areas/denham-springs' },
  { label: 'Baton Rouge, LA', href: '/service-areas/baton-rouge' },
  { label: 'Livingston Parish, LA', href: '/service-areas/livingston-parish' },
];
