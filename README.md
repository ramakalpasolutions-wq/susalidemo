# SUSALI — Cairns Glass Marketing Website

Static, frontend-only six-page Next.js website using App Router, JavaScript, Tailwind CSS 4, React Compiler and Lucide icons. Includes responsive Cairns Blue & Teal glass-style visuals, floating cards, a clickable eight-stage care journey, searchable categorized FAQs and a contact enquiry composer. **No database, patient accounts, clinical records, or admin panel are implemented in this promotional website.**

## Pages

- `/` — patient journey overview, six services, eight-stage interactive process, medical records and healthcare network
- `/about` — who SUSALI is, mission, vision, values, three-part operating approach
- `/services` — six service areas and eight-stage referral-to-follow-up journey
- `/healthcare-network` — patient, dispensary, superintendent, coordination and hospital roles; care pathways
- `/faqs` — search and filter through questions about registration, referrals, treatment and hospital-uploaded records
- `/contact` — official contact placeholders and copy/email enquiry composer

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to review. Validate a production static build with `npm run build`. Static export is enabled in `next.config.mjs`.

## Updating content

Most reusable copy is located in `src/data/site.js`:

- `site` contains the site tagline and **verified contact data** (currently blank).
- `services` contains the six published service descriptions and detailed points.
- `journey` contains eight stages used across the homepage and Services page.
- `recordTypes` contains the medical document overview.
- `networkGroups` lists healthcare roles, not named or presumed hospital partners.
- `faqs` contains the question-and-answer library with categories.

The six page components are located in `src/app/`. UI and interaction components are in `src/components/`. Changes to shared glass styles and additional content cards are in `src/app/globals.css`.

## Before publication: verify the following

1. SUSALI's official expanded name, background, legal identity and eligibility requirements.
2. The exact patient registration channel and the separate patient-portal URL (`site.patientPortalUrl`). Do not link to a guessed portal.
3. Whether a **doctor-recommended follow-up for the same condition** needs another superintendent referral. This is currently marked unconfirmed in the site content.
4. When, how, and through which channels hospital appointments are communicated.
5. Exactly which documents hospital staff must upload after treatment, and what patients may access.
6. Official partner hospitals, specialties, geographical coverage and any claimed security guarantees.
7. Official email, phone, WhatsApp, office address and map URL; edit `site` to display these.
8. Privacy Policy and Terms of Use reviewed for the real SUSALI operational platform. This marketing site does not receive medical data.

## Contact enquiry behavior

No external form endpoint is connected. When an official email is supplied in `site.email`, the contact form opens the visitor's email application with a prepared message. Without it, the form copies the enquiry or opens the visitor's email application with no recipient. It does **not** transmit or store messages. The page explicitly instructs visitors **not to include patient IDs, prescriptions, diagnoses or other sensitive medical details** in its public enquiry form.

## Project validation

All project JavaScript and JSX was syntax-checked using TypeScript's parser, and the CSS parsed with PostCSS. A full `npm install` / Next.js build could not be completed in the artifact environment because `registry.npmjs.org` was unreachable (DNS `EAI_AGAIN`). Run `npm install && npm run build` locally before deployment.
