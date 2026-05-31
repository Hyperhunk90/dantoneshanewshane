import { Location } from '@/lib/types';

// Reviews arrays are intentionally empty. Paste REAL client reviews here once
// you have them (from Google, Yelp, Nextdoor, or Facebook). Never invent reviews.
export const LOCATIONS: Location[] = [
  {
    slug: 'walker',
    name: 'Walker, LA',
    navLabel: 'Walker, LA',
    keywords: ['lawn care Walker LA', 'lawn service Walker Louisiana', 'landscaping Walker 70785'],
    metaTitle: 'Lawn Care in Walker, LA | Mowing, Weed Control & Mulch',
    metaDescription:
      'Lawn mowing, edging, and landscaping in Walker, LA, our home town. Southern Buck Lawn keeps new-build sod and established yards sharp. Free quote, same-day callback.',
    h1: 'Lawn Care in Walker, Louisiana',
    intro:
      'Walker is our home town, and it is growing fast. New subdivisions go in every year, which means a lot of fresh sod that needs the right start. We help homeowners here protect that investment before it yellows out, and we keep the established yards looking like they have been loved for years.',
    soilNote:
      'Walker sits on sandy clay loam. It drains a little better than the ground in Denham Springs, but the nutrients wash out quick in a hard rain, so we feed with slow-release nitrogen to keep the color steady through summer.',
    pestNote:
      'Chinch bugs are the big one here. They go after young Centipede sod and leave dry brown patches that look like drought damage. We spot them early and treat before they spread across the whole yard.',
    neighborhoods: ['Walker South Road', 'Cove Landing', 'Townwood', 'Milton Road area', 'Highway 447 corridor'],
    image: '/images/welcome-to-walker-louisiana-sign.webp',
    imageAlt: 'Welcome to the City of Walker, Louisiana road sign',
    reviews: [],
  },
  {
    slug: 'denham-springs',
    name: 'Denham Springs, LA',
    navLabel: 'Denham Springs, LA',
    keywords: ['lawn care Denham Springs', 'landscaping Denham Springs LA', 'lawn service 70726'],
    metaTitle: 'Lawn Care in Denham Springs, LA | Mowing, Weed Control & Mulch',
    metaDescription:
      'Weekly mowing, weed control, and mulch beds in Denham Springs, LA. A local crew that knows your clay soil and your weeds. Call Southern Buck Lawn for a free quote.',
    h1: 'Lawn Care in Denham Springs, Louisiana',
    intro:
      'Denham Springs runs a close second to home base for us, from the Antique District out to the new builds off Juban Road and Range Avenue. We are on these streets every week, so we know the soil, the weeds, and which yards hold water when the Amite gets up after a big rain.',
    soilNote:
      'The ground here is heavy silt and clay. It packs down tight, holds water after a storm, and starves roots of air if nobody aerates it. We aerate and feed on a schedule so your grass roots can breathe and drink the way they should.',
    pestNote:
      'Watch for armyworms that can strip a lawn overnight, mole crickets tearing up the root zone, and dollar spot fungus that loves the heavy July dew. We catch them early before they take the whole yard.',
    neighborhoods: ['Antique District', 'Juban Crossing area', 'Range Avenue corridor', 'Magnolia Beach', 'Watson line'],
    image: '/images/mulch-flowerbed-install-denham-springs.webp',
    imageAlt: 'Fresh red mulch bed and trimmed boxwoods installed by Southern Buck Lawn in Denham Springs, LA',
    reviews: [],
  },
  {
    slug: 'baton-rouge',
    name: 'Baton Rouge, LA',
    navLabel: 'Baton Rouge, LA',
    keywords: ['lawn care Baton Rouge', 'landscaping Baton Rouge LA', 'commercial lawn service Baton Rouge'],
    metaTitle: 'Lawn Care & Landscaping in Baton Rouge, LA',
    metaDescription:
      'High-standard lawn care, landscaping, and commercial grounds work across Baton Rouge, LA. Southern Buck Lawn serves homes, HOAs, and businesses. Free quote.',
    h1: 'Lawn Care and Landscaping in Baton Rouge, Louisiana',
    intro:
      'From the Garden District to the office corridors along Jefferson and Perkins, Baton Rouge holds a high bar for curb appeal. We meet it on custom homes and busy commercial properties alike, with the same crew and the same standard every visit.',
    soilNote:
      'Baton Rouge soil runs from heavy river clay to loam, and it leans acidic. Lime on a schedule unlocks the nutrients already sitting in the ground and keeps your grass a deep green instead of a tired pale.',
    pestNote:
      'Virginia buttonweed is the headache here, tough as nails against most herbicides, along with brown patch fungus during the warm wet stretch of fall. We treat both with the right product and the right timing.',
    neighborhoods: ['Garden District', 'Perkins Road corridor', 'Jefferson Highway', 'Shenandoah', 'Woodlawn'],
    image: '/images/baton-rouge-louisiana-state-capitol.webp',
    imageAlt: 'Louisiana State Capitol in Baton Rouge at sunset',
    reviews: [],
  },
  {
    slug: 'livingston-parish',
    name: 'Livingston Parish, LA',
    navLabel: 'Livingston Parish, LA',
    keywords: ['acreage mowing Livingston Parish', 'rural lawn service Livingston', 'brush clearing Livingston Parish'],
    metaTitle: 'Acreage & Large-Lot Lawn Care in Livingston Parish, LA',
    metaDescription:
      'Acreage mowing, brush clearing, and bed work across Livingston Parish, LA. Southern Buck Lawn brings commercial zero-turns to big rural lots. Free quote.',
    h1: 'Acreage and Large-Lot Lawn Care in Livingston Parish',
    intro:
      'Out in Livingston Parish the lots get big, from Watson down through Albany and Satsuma. A push mower will eat your whole Saturday and half your Sunday. We bring commercial zero-turns and knock out acreage in a fraction of the time, and it looks better when we leave.',
    soilNote:
      'The ground out here is forested silt loam with a lot of organic matter, which means weeds and wild growth move fast. We stay ahead of it with strong border trimming and a solid weed barrier in the beds.',
    pestNote:
      'Open rural land means fire ants, ticks, and fleas setting up in the warm sandy spots. We keep the turf tight and treated so they have nowhere good to settle in.',
    neighborhoods: ['Watson', 'Albany', 'Satsuma', 'French Settlement', 'Maurepas'],
    image: '/images/lawn-mowing-edging-walker-louisiana.webp',
    imageAlt: 'Neatly mowed green lawn with a clean edge, typical Southern Buck Lawn acreage work in Livingston Parish',
    reviews: [],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
