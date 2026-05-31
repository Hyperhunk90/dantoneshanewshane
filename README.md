# Southern Buck Lawn

Marketing and lead-generation website for Southern Buck Lawn, a lawn care and
landscaping business in Walker, Louisiana. Built with Next.js 15 (App Router),
React 19, Tailwind CSS v4, and TypeScript. Forms email leads to the owner via
SendGrid.

## What is in here

Real crawlable URLs, one per page, each with its own title, description, and
canonical tag:

- `/` Home
- `/services` Services hub
- `/services/lawn-mowing`
- `/services/weed-control`
- `/services/landscape-design`
- `/services/commercial-grounds`
- `/service-areas/walker`
- `/service-areas/denham-springs`
- `/service-areas/baton-rouge`
- `/service-areas/livingston-parish`
- `/quote` Free quote form
- `/contact` Contact form
- `/sitemap.xml` and `/robots.txt` generated automatically
- `/api/lead` server route that emails form submissions through SendGrid

SEO built in: one H1 per page, primary keyword in the first 100 words, internal
links between services and service areas, LocalBusiness and FAQ structured data,
local-keyword image alt text, and a generated sitemap.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build                # production build
npm start                    # serve the production build
```

## Environment variables

Set these in `.env.local` for local work and in the Hostinger hPanel for the
live site. The forms will not send email until SendGrid is configured.

| Variable | What it is |
| --- | --- |
| `SENDGRID_API_KEY` | API key from your SendGrid account |
| `LEAD_TO_EMAIL` | Where leads are delivered (SBL@Southernbucklawn.com) |
| `LEAD_FROM_EMAIL` | A verified SendGrid sender (for example noreply@southernbucklawn.com) |
| `NEXT_PUBLIC_SITE_URL` | https://southernbucklawn.com |

The `LEAD_FROM_EMAIL` address must be verified in SendGrid under Sender
Authentication, or SendGrid rejects the message and leads will not arrive.

## Deploy to Hostinger (Business plan, GitHub auto-deploy)

1. Push this folder to a GitHub repository.
2. In Hostinger hPanel, open your hosting plan and create a Node.js web app,
   then connect the GitHub repository.
3. Set the Node version to 20 or higher.
4. Build command: `npm run build`. Start command: `npm start`.
5. Add the environment variables from the table above in the hPanel
   environment settings, then redeploy.
6. Point the `southernbucklawn.com` domain at the app and add SSL.
7. Every push to the connected branch rebuilds and redeploys.

## Before go-live checklist

1. Phone number. Replace the placeholder `(225) 555-0123` in
   `src/data/site.ts` (`phone` and `phoneHref`) with the real business number.
2. SendGrid. Add the API key and verify the sender address, then send a test
   quote to confirm leads reach the inbox.
3. Reviews. Real client reviews go in the `reviews` arrays in
   `src/data/locations.ts`. They are empty on purpose. The review section on a
   location page only renders once real reviews are added. Do not invent any.
4. Social and review links. Update the `social` URLs in `src/data/site.ts`
   (Google, Facebook, Yelp, Nextdoor) once the profiles exist.
5. Map. The service-area map in `src/components/ServiceAreaMap.tsx` uses a
   generic Walker-centered embed. Swap in the Google Business Profile embed once
   the listing is live.

## Project structure

```
src/
  app/
    layout.tsx                 root layout, fonts, metadata, JSON-LD
    page.tsx                   home
    services/                  hub + [slug] silo template
    service-areas/[slug]/      location silo template
    quote/  contact/           form pages
    api/lead/route.ts          SendGrid email handler
    sitemap.ts  robots.ts      generated SEO files
  components/                  Navbar, Footer, QuoteForm, ContactForm, map
  data/                        site.ts, services.ts, locations.ts (edit content here)
  lib/types.ts                 shared types
public/images/                 optimized brand and job photos
```

All site copy lives in the `data` files, so updates to service descriptions,
local notes, FAQs, and reviews happen in one place without touching components.
