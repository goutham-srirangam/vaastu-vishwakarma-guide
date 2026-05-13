## Vishwakarma Telugu Vaastu — Site Plan

A warm, traditional yet modern multi-page site for a Vaastu consultant, themed in saffron, orange, deep maroon (bindi), and gold accents on a soft cream background.

### Design direction

- **Palette**: Saffron `#FF9933`, deep orange, bindi maroon `#8B1A1A`, temple gold, cream `#FFF8EC`, ink brown for text.
- **Typography**: Display serif with a slight Indic feel (e.g. Marcellus / Cormorant) paired with Inter for body. Distinct from generic SaaS look.
- **Motifs**: Subtle mandala / lotus / kalasha SVG accents, dashed-gold dividers, om symbol used sparingly. No tacky clipart.
- **Tone**: Trustworthy, spiritual, calm — not flashy.

### Pages (separate routes for SEO)

```
/                  Home
/gallery           Gallery
/services          Services overview (lists all 7)
/services/vaastu-education
/services/residential
/services/commercial
/services/industrial
/services/farmhouse-plot
/services/restaurant
/services/hospital
/contact           Contact info + YouTube
```

Shared header (logo wordmark + nav with Services dropdown) and footer (YouTube link, contact placeholders, quick links) in `__root.tsx`.

### Home page sections

1. Hero — name, tagline ("Ancient Vaastu wisdom for modern spaces"), brief intro, CTA to Services and YouTube.
2. About the Poojari — short bio paragraph + credentials placeholder.
3. Services grid — 7 cards linking to each service page.
4. Why Vaastu — 3–4 benefit points with icons.
5. YouTube section — embedded channel feed / featured video link to `@vishwakarmateluguvastu` with subscribe CTA.
6. FAQ — accordion with 6–8 common questions (What is Vaastu, Do I need to demolish, Vaastu for rented home, Cost, Remote consultation, etc.).
7. Contact CTA strip.

### Service pages

Each service page uses a consistent template:
- Hero with service name + 1-line promise
- "What we cover" bullet list (specific to that service)
- Process (3–4 steps: Site visit → Analysis → Report → Remedies)
- Related FAQs (2–3)
- CTA back to contact

Hand-written, distinct content per service (not duplicated boilerplate).

### Gallery

Responsive masonry/grid of placeholder images (AI-generated: traditional homes, pooja rooms, mandala patterns, temple architecture, consultation scenes) with light captions. Lightbox on click.

### Contact page

- Placeholder phone / WhatsApp / email / address blocks
- YouTube channel card with embed
- Service area note placeholder
- No form (per your choice)

### SEO

Per-route `head()` with unique title, description, og tags. JSON-LD `LocalBusiness` on home and contact. Single H1 per page. Alt text on all images.

### Technical notes

- TanStack Start file-based routing under `src/routes/`.
- Theme tokens in `src/styles.css` using oklch (saffron, bindi, gold, cream).
- Reusable components: `Header`, `Footer`, `ServiceCard`, `FAQ` (shadcn Accordion), `YouTubeEmbed`, `Hero`, `SectionHeading`.
- Placeholder images generated to `src/assets/` (hero, about, gallery x ~9, service banners x 7).
- No backend / Lovable Cloud needed.

### Out of scope (for now)

- Real photos, real contact details, booking form, blog, multilingual content.
