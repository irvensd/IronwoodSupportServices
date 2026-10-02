# Ironwood Support Services

A complete marketing website built with Next.js App Router, TypeScript, and Tailwind CSS. Grounds maintenance, janitorial, and facilities support lead the brand for Greater Houston, TX. IT support is also available. Includes Home, Capabilities, About, Contact, Privacy, and a one-page printable Capability Statement.

## Run locally

Use Node.js 20.9 or newer (Node.js 22 or 24 LTS recommended) and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp` if preferred. Visit http://localhost:3000. If that port is in use, use the address printed by Next.js.

```bash
npm run build
npm start
npm run typecheck
```

Run the validation tests with Node.js 22.18+ or 24+: `npm test`. The application itself supports Node.js 20.9+, but the tests use Node's native TypeScript runner.

## Deploy to Vercel

1. Push this project folder to a Git repository and import it into Vercel. If it is nested in a larger repository, choose this folder as the Root Directory.
2. Select the Next.js framework preset. Default install/build settings work (`npm ci`, `npm run build`); leave Output Directory at its Next.js default.
3. `NEXT_PUBLIC_SITE_URL` defaults to `https://www.ironwoodsupportservices.com`. Set that same value in the Vercel project if an older localhost value is still saved there, then redeploy. This sets canonical URLs, Open Graph URLs, `sitemap.xml`, and `robots.txt`.
4. Replace owner placeholders, review the capability claims, and connect real contact delivery before announcing the site.

No Vercel-specific packages are required. Informational routes are prerendered. `/api/contact` runs as a server route on Vercel. **Do not enable `output: 'export'` while using this API route.** A fully static export requires moving form handling to an external service and removing the local POST route.

## Owner content checklist

Search for `TODO` and `[ADD` before launch.

- `lib/site.ts`: replace `[ADD UEI]` and `[ADD CAGE]` when those identifiers are issued. Replace `TODO_BIO` with a verified principal biography. The name on the about page is Irvens Dupuy. The bio stays hidden while it is still `TODO_BIO`. Do not add commercial experience until it is verified.
- `lib/site.ts`: `phoneNumber` is `TODO_LOCAL_HOUSTON_NUMBER` until a local Houston number (713, 281, 832, or 346) is available. While the value contains `TODO`, the site shows email and the quote form only.
- `lib/site.ts`: once SAM.gov registration is confirmed active, fill both `uei` and `cage` and set `samActive: true`, then rebuild/redeploy. Until then the site says registration has not yet been submitted. Identifiers alone do not establish active registration. Confirm NAICS and PSC entries against the company's actual registration. IT codes stay secondary.
- `app/page.tsx`, `public/images/grounds.jpg`: TODO(owner): replace illustrative stock photography with approved company imagery if available. Do not imply the photographed property is a client or completed project. Update the image alt text and credits when replacing it.
- `.env.local` / Vercel: set `RESEND_API_KEY`, verify `ironwoodsupportservices.com` in Resend, and set `NEXT_PUBLIC_SITE_URL` to `https://www.ironwoodsupportservices.com`. Do not commit credentials. If Vercel still has this variable set to localhost, change it and redeploy.
- If adding socioeconomic certifications or contract vehicles later, publish only verified, currently held credentials. None are claimed in this project.

The public phone number stays hidden until `phoneNumber` is a real number. Email links are active.

## Contact form behavior

The form includes name, organization, email, optional phone, city/state, service needed, and project details. It has explicit labels, autocomplete, keyboard focus, client-side errors, a submitting state, an announced result, and a hidden honeypot. Validation runs again on the server. Malformed, oversized, and invalid submissions return errors.

Validated inquiries are emailed to `support@ironwoodsupportservices.com` with Resend. The visitor's address is used as `replyTo`, not the sender. The API does not store or log personal information. Delivery requires `RESEND_API_KEY` and a verified Resend sending domain. The form discloses the destination inbox and asks visitors not to include unnecessary sensitive information. A basic per-address rate limit is applied.

## Capability statement

Open `/capability-statement` and choose **Print / save as PDF**. Print CSS hides site navigation, footer, and toolbar and formats the statement for US Letter. In the browser print dialog, use Letter paper, default scale, and disable browser-added headers/footers. The content is structured to fit one page with the supplied placeholders. Recheck print length after adding longer company data.

## Structure

```text
app/                      App Router pages, metadata, route handler, styles
app/privacy/page.tsx      Plain-language privacy note for the contact form
components/               Header, brand, shared footer/CTA, form, print button
lib/site.ts               Shared company fields, service copy, NAICS, metadata
lib/contact.ts            Shared client/server validation
public/images/grounds.jpg Bundled illustrative stock image
tests/contact.test.ts     Boundary tests for inquiry validation
```

## Accessibility and SEO

Semantic landmarks, skip navigation, visible focus states, accessible mobile menu, reduced-motion support, form error associations, and responsive layouts are included. Local font files avoid third-party font requests. Each page has its own title, description, canonical URL, Open Graph title/description/image, and Twitter large-image metadata. JSON-LD names the business, email, Greater Houston service area, and services. It does not include a street address, phone number, reviews, or certifications.

## Image credit

Illustrative stock photography: **Rodolfo Gaion / Pexels**, [Back View of a Person Mowing Grass](https://www.pexels.com/photo/back-view-of-a-person-mowing-grass-20534859/). Used under the [Pexels license](https://www.pexels.com/license/). This photograph is not a representation of Ironwood's clients or past work. Real job photos can replace it later. Fonts are provided through their respective `@fontsource` packages with bundled license information. Lucide icons use the ISC license.

## Reference documentation

[Next.js documentation](https://nextjs.org/docs) · [Tailwind CSS / Next.js setup](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
