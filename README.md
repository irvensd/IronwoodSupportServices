# Ironwood Support Services

A complete marketing website built with Next.js App Router, TypeScript, and Tailwind CSS. Facilities and grounds services lead the brand; broader support services remain secondary. Includes Home, Capabilities, About, Contact, and a one-page printable Capability Statement.

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
3. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin (for example, `https://your-verified-domain.example`, without a trailing slash). Redeploy after changing it. This sets canonical URLs, Open Graph URLs, `sitemap.xml`, and `robots.txt`.
4. Replace owner placeholders, review the capability claims, and connect real contact delivery before announcing the site.

No Vercel-specific packages are required. Informational routes are prerendered. `/api/contact` runs as a server route on Vercel. **Do not enable `output: 'export'` while using this API route.** A fully static export requires moving form handling to an external service and removing the local POST route.

## Owner content checklist

Search for `TODO`, `[ADD`, and `pending` before launch.

- `lib/site.ts`: replace `[ADD UEI]`, `[ADD CAGE]`, `[ADD OWNER NAME]`, and `[ADD OWNER BIO]` with verified details. All shared contact and registration fields originate here.
- `app/about/page.tsx`: replace `[ADD VERIFIED COMMERCIAL EXPERIENCE]`; add an accurate principal biography. Clearly distinguish a principal's prior commercial experience from Ironwood's own past performance.
- `lib/site.ts`: once SAM.gov registration is confirmed active, fill both `uei` and `cage` and set `samActive: true`, then rebuild/redeploy. The shared registration configuration replaces pending wording throughout Capabilities, Contact, the footer, and the capability statement. Identifiers alone do not establish active registration; the site stays pending until all three values are configured. Confirm NAICS and PSC entries against the company's actual registration. IT codes are secondary/growth capability areas, not automatically claimed as registered.
- `app/page.tsx`, `public/images/grounds.jpg`: TODO(owner): replace illustrative stock photography with approved company imagery if available. Do not imply the photographed property is a client or completed project. Update the image alt text and credits when replacing it.
- `.env.local` / Vercel: set `RESEND_API_KEY`, verify `ironwoodsupportservices.com` in Resend, and set `NEXT_PUBLIC_SITE_URL` to the public origin. Do not commit credentials.
- If adding socioeconomic certifications or contract vehicles later, publish only verified, currently held credentials. None are claimed in this project.
- Snow/ice work is explicitly a future option, conditional on equipment, staffing, and requirements.

Placeholders are intentionally visible and not disguised as active phone/email links. Once real contact details are available, you may turn those displayed values into `tel:` and `mailto:` links.

## Contact form behavior

The form includes name, organization, email, optional phone, city/state, service needed, and project details. It has explicit labels, autocomplete, keyboard focus, client-side errors, a submitting state, an announced result, and a hidden honeypot. Validation runs again on the server. Malformed, oversized, and invalid submissions return errors.

Validated inquiries are emailed to `support@ironwoodsupportservices.com` with Resend. The visitor's address is used as `replyTo`, not the sender. The API does not store or log personal information. Delivery requires `RESEND_API_KEY` and a verified Resend sending domain. The form discloses the destination inbox and asks visitors not to include unnecessary sensitive information. A basic per-address rate limit is applied.

## Capability statement

Open `/capability-statement` and choose **Print / save as PDF**. Print CSS hides site navigation, footer, and toolbar and formats the statement for US Letter. In the browser print dialog, use Letter paper, default scale, and disable browser-added headers/footers. The content is structured to fit one page with the supplied placeholders. Recheck print length after adding longer company data.

## Structure

```text
app/                      App Router pages, metadata, route handler, styles
components/               Header, brand, shared footer/CTA, form, print button
lib/site.ts               Shared company fields, service copy, NAICS, metadata
lib/contact.ts            Shared client/server validation
public/images/grounds.jpg Bundled illustrative stock image
tests/contact.test.ts     Boundary tests for inquiry validation
```

## Accessibility and SEO

Semantic landmarks, skip navigation, visible focus states, accessible mobile menu, reduced-motion support, form error associations, and responsive layouts are included. Local font files avoid third-party font requests. Each page has its own title, description, canonical URL, Open Graph title/description, and Twitter summary metadata. No fictitious reviews, clients, past performance, certifications, or structured-data claims are included.

## Image credit

Illustrative stock photography: **Zifeng Xiong / Pexels**, [Modern Office Building with Green Lawn](https://www.pexels.com/photo/modern-office-building-with-green-lawn-32575068/). Used under the [Pexels license](https://www.pexels.com/license/). This photograph is not a representation of Ironwood's clients or past work. Fonts are provided through their respective `@fontsource` packages with bundled license information. Lucide icons use the ISC license.

## Reference documentation

[Next.js documentation](https://nextjs.org/docs) · [Tailwind CSS / Next.js setup](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
