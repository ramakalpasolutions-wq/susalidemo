# SUSALI — Dedicated Pages (Cairns Glass Edition)

This is a **real Next.js multi-page website**, not one long page with anchor navigation. Each of the six destinations is a separate App Router page.

| URL | Source | Purpose |
|---|---|---|
| `/` | `src/app/page.js` | Short homepage introduction, mini previews, links to other pages |
| `/about` | `src/app/about/page.js` | Mission, vision, story, values |
| `/services` | `src/app/services/page.js` | Full six services and eight-step care journey |
| `/healthcare-network` | `src/app/healthcare-network/page.js` | Dispensary, superintendent, hospital and coordination roles |
| `/faqs` | `src/app/faqs/page.js` | Searchable categorized FAQs |
| `/contact` | `src/app/contact/page.js` | Enquiry composer, verified contact methods when configured |

- Homepage links use Next.js `<Link href="/about">`-style navigation to actual routes.
- FAQ and care-journey interactions live on their dedicated pages.
- Existing Cairns palette, glass panels, animations and responsive layout retained.
- No database, admin panel, or patient login on this marketing site.
- Set verified values in `src/data/site.js` before publishing.
- The same-issue follow-up referral policy is still awaiting confirmation.

## Run

```bash
npm install
npm run dev
```

Go to `http://localhost:3000`, then click menu links to test all pages.

To check production build: `npm run build`.
