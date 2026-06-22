import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Award, PhoneCall, MapPin, ArrowRight, Star, Leaf, Scissors, Building2, Sprout,
} from 'lucide-react';
import { SITE, AREA_NAV } from '@/data/site';
import { SERVICES } from '@/data/services';
import { REVIEWS } from '@/data/reviews';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import ReviewBadgeBar from '@/components/ReviewBadgeBar';

const serviceIcons: Record<string, React.ReactNode> = {
  'lawn-mowing': <Scissors className="h-6 w-6" />,
  'weed-control': <Sprout className="h-6 w-6" />,
  'landscape-design': <Leaf className="h-6 w-6" />,
  'commercial-grounds': <Building2 className="h-6 w-6" />,
};

const gallery = [
  { src: '/images/black-mulch-install-before-after.webp', alt: 'Before and after black mulch install on a Louisiana front bed by Southern Buck Lawn', w: 1344, h: 768 },
  { src: '/images/flower-bed-mulch-transformation-before-after-louisiana.webp', alt: 'Three-stage flower bed transformation with black mulch and stone border by Southern Buck Lawn in Louisiana', w: 900, h: 1600 },
  { src: '/images/mulch-install-side-yard-denham-springs.webp', alt: 'Fresh red mulch and boxwoods along a Denham Springs home', w: 800, h: 1776 },
  { src: '/images/hedge-trimming-bed-cleanup-baton-rouge.webp', alt: 'Overgrown bed before a Baton Rouge hedge trimming and cleanup', w: 800, h: 1422 },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-midnight-moss to-midnight-moss pt-20">
        {/* Real job-photo background with a dark overlay so the headline stays bold and readable.
            If the image is missing, the green gradient above still looks intentional. */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background-lawn-care-louisiana.webp"
            alt="Fresh mulch bed, stone border, and healthy green lawn by Southern Buck Lawn in Denham Springs, Louisiana"
            fill
            priority
            sizes="100vw"
            quality={50}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-midnight-moss/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-moss/85 via-midnight-moss/45 to-transparent" />
        </div>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#94e1aa 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20 lg:px-8">
          <div className="space-y-6 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded bg-safety-orange/90 px-4 py-1.5 font-barlow text-sm font-extrabold uppercase tracking-widest text-midnight-moss">
              <MapPin className="h-4 w-4" /> Walker &middot; Denham Springs &middot; Baton Rouge
            </span>
            <h1 className="font-anton text-4xl uppercase leading-tight tracking-wide text-white sm:text-6xl">
              Lawn Care and Curb Appeal <span className="text-safety-orange">Done Right</span> in Walker, Louisiana
            </h1>
            <p className="max-w-xl font-barlow text-xl leading-relaxed text-white/80">
              Weekly mowing, weed control, and landscape work from a crew that shows up the same day every week. Local, licensed, and insured, serving Walker, Denham Springs, Baton Rouge, and Livingston Parish.
            </p>

            <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-black/30 p-2.5 pr-6 backdrop-blur-sm">
              <Image
                src="/images/michael-dantone-southern-buck-lawn-walker.png"
                alt="Michael Dantone, owner of Southern Buck Lawn in Walker, Louisiana"
                width={56}
                height={56}
                loading="eager"
                className="h-14 w-14 rounded-full border-2 border-safety-orange object-cover object-top"
              />
              <div className="leading-tight">
                <p className="font-anton text-lg uppercase tracking-wide text-white">Michael Dantone</p>
                <p className="font-barlow text-sm font-semibold uppercase tracking-wider text-safety-orange">The Landscape Mayor</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link href="/quote" className="group flex items-center justify-center gap-2 rounded-lg bg-safety-orange px-8 py-4 font-anton text-lg uppercase tracking-wider text-midnight-moss shadow-xl transition-all hover:scale-105 active:scale-95">
                Get a Free Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-deep-forest px-8 py-4 font-anton text-lg uppercase tracking-wider text-white transition-all hover:bg-primary">
                <PhoneCall className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rotate-1 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
                src="/images/hero-lawn-care-denham-springs-louisiana.webp"
                alt="Fresh mulch bed and trimmed lawn at a Denham Springs home by Southern Buck Lawn"
                width={750}
                height={1665}
                priority
                sizes="(max-width: 640px) 92vw, 384px"
                quality={50}
                className="h-[520px] w-full rounded-xl object-cover"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-safety-orange px-4 py-1 font-barlow text-sm font-bold uppercase tracking-wide text-midnight-moss shadow-lg">
                Real work, Denham Springs
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="border-y border-white/10 bg-midnight-moss py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: <ShieldCheck className="h-7 w-7" />, t: 'Fully Licensed', s: 'Residential & commercial' },
            { icon: <Award className="h-7 w-7" />, t: 'Insured', s: 'Your property protected' },
            { icon: <PhoneCall className="h-7 w-7" />, t: '24-Hour Callback', s: 'We answer fast' },
            { icon: <MapPin className="h-7 w-7" />, t: 'Local & Hometown', s: 'Born and raised here' },
          ].map((item) => (
            <div key={item.t} className="flex items-center gap-3">
              <div className="rounded-xl bg-safety-orange/10 p-3 text-safety-orange">{item.icon}</div>
              <div>
                <p className="font-anton text-lg leading-tight text-white">{item.t}</p>
                <p className="font-barlow text-xs uppercase tracking-wider text-white/60">{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-mist-green py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="relative lg:col-span-5">
            <div className="-rotate-1 overflow-hidden rounded-2xl border border-primary/10 bg-white p-3 shadow-xl">
              <Image
                src="/images/commercial-grounds-night-entrance-livingston-la.webp"
                alt="Commercial building entrance with fresh landscaping and lawn lit up at night, by Southern Buck Lawn in Livingston, LA"
                width={900}
                height={1600}
                sizes="(max-width: 1024px) 92vw, 480px"
                quality={50}
                className="h-[460px] w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-2 max-w-[260px] rounded-xl border-l-4 border-safety-orange bg-midnight-moss p-5 text-white shadow-2xl sm:-right-6">
              <p className="font-anton text-lg uppercase italic text-safety-orange">The Landscape Mayor</p>
              <p className="font-barlow text-sm text-white/80">I look at every yard like it has my name on it, because it does.</p>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            <span className="block font-barlow text-sm font-bold uppercase tracking-[0.2em] text-safety-orange-deep">Local outdoor crew</span>
            <h2 className="font-anton text-4xl uppercase leading-none tracking-wide text-primary sm:text-5xl">Your Hometown Lawn Crew</h2>
            <div className="h-2 w-20 rounded-full bg-safety-orange" />
            <p className="font-barlow text-xl leading-relaxed text-midnight-moss">
              Thanks for stopping by. I am Michael Dantone, and I run Southern Buck Lawn out of Walker. Folks around here call me the Landscape Mayor, and I earned it one yard at a time.
            </p>
            <p className="font-barlow text-lg leading-relaxed text-gray-600">
              We are a tight crew, not a franchise, so when you call, you get me or somebody I trained. We mow, edge, and blow weekly, build flowerbeds, lay mulch, plant crape myrtles, and keep commercial grounds sharp from Walker to Denham Springs to Baton Rouge. Same crew, same day, every week. No runaround, no surprise charges, no gates left open.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 border-b-2 border-primary font-barlow text-lg font-extrabold uppercase text-primary transition-all hover:border-safety-orange-deep hover:text-safety-orange-deep">
              Schedule a free walk-through <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-midnight-moss py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 font-barlow text-sm font-bold uppercase tracking-[0.3em] text-safety-orange">What we do</p>
            <h2 className="font-anton text-4xl uppercase tracking-wide sm:text-5xl">Our Core Services</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded bg-safety-orange" />
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 300px"
                    quality={50}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="inline-flex rounded-lg bg-safety-orange/10 p-2 text-safety-orange">{serviceIcons[s.slug]}</div>
                  <h3 className="font-anton text-xl uppercase leading-tight">{s.title}</h3>
                  <p className="font-barlow text-base text-white/70">{s.quickSummary}</p>
                  <span className="inline-flex items-center gap-2 font-barlow font-extrabold uppercase text-safety-orange transition-all group-hover:gap-3">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section id="work" className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 font-barlow text-sm font-bold uppercase tracking-[0.3em] text-safety-orange-deep">Before &amp; after</p>
            <h2 className="font-anton text-4xl uppercase tracking-wide text-primary sm:text-5xl">Recent Work Around Town</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded bg-safety-orange" />
            <p className="mx-auto mt-4 max-w-2xl font-barlow text-lg text-gray-600">
              Every photo here is real work from right here in Livingston Parish and Baton Rouge. No stock photos, no filters.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((g) => (
              <div key={g.src} className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm">
                <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 640px) 92vw, 46vw" quality={50} className="h-72 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-mist-green py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="font-barlow text-sm font-bold uppercase tracking-[0.3em] text-safety-orange-deep">Where we work</p>
            <h2 className="font-anton text-4xl uppercase tracking-wide text-primary sm:text-5xl">We Cover Your Corner of Louisiana</h2>
            <div className="h-1 w-24 rounded bg-safety-orange" />
            <p className="font-barlow text-lg text-gray-600">
              Pick your town to see how we handle the soil, the weeds, and the grass right where you live.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {AREA_NAV.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="flex items-center justify-between rounded-xl border border-primary/10 bg-white px-5 py-4 font-anton text-lg uppercase text-midnight-moss shadow-sm transition-all hover:border-safety-orange hover:text-safety-orange-deep"
                >
                  {a.label} <ArrowRight className="h-5 w-5 text-safety-orange" />
                </Link>
              ))}
            </div>
          </div>
          <ServiceAreaMap />
        </div>
      </section>

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 font-barlow text-sm font-bold uppercase tracking-[0.3em] text-safety-orange-deep">What folks say</p>
            <h2 className="font-anton text-4xl uppercase tracking-wide text-primary sm:text-5xl">We Earn It One Yard at a Time</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded bg-safety-orange" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.author} className="flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5 text-safety-orange">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-safety-orange" />
                  ))}
                </div>
                <blockquote className="grow font-barlow text-lg leading-relaxed text-gray-700">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-primary/10 pt-3">
                  <span className="font-anton text-base uppercase text-midnight-moss">{r.author}</span>
                  <span className="font-barlow text-sm uppercase tracking-wider text-gray-600">{r.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12">
            <ReviewBadgeBar />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-safety-orange py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <div>
            <h2 className="font-anton text-3xl uppercase leading-tight text-midnight-moss sm:text-4xl">Ready for the Best Yard on the Street?</h2>
            <p className="mt-2 font-barlow text-lg text-midnight-moss">Free estimate, 24-hour callback, no pressure.</p>
          </div>
          <Link href="/quote" className="whitespace-nowrap rounded-lg bg-midnight-moss px-8 py-4 font-anton text-lg uppercase tracking-wider text-white shadow-xl transition-transform hover:scale-105">
            Get My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
