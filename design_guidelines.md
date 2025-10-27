# Design Guidelines for Nini | Niniverse Bilingual Profile Site

## Design Approach: Reference-Based (Influencer Portfolio)

Drawing inspiration from Instagram's visual-first approach, Behance's portfolio layouts, and modern creator platforms like Patreon and Kit. This design prioritizes visual storytelling, elegant product showcasing, and personal brand presence.

**Key Design Principles:**
- Visual-first storytelling with high-quality imagery
- Elegant minimalism that lets content breathe
- Seamless bilingual experience with intuitive language switching
- Sophisticated yet approachable influencer aesthetic

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode):**
- Background: 15 8% 12% (deep charcoal)
- Surface: 20 6% 18% (elevated charcoal)
- Text Primary: 30 5% 95% (warm white)
- Text Secondary: 30 4% 70% (muted gray)

**Primary Colors (Light Mode):**
- Background: 30 15% 98% (warm white)
- Surface: 30 10% 100% (pure white)
- Text Primary: 20 8% 15% (deep brown-black)
- Text Secondary: 25 6% 45% (warm gray)

**Brand Accent:**
- Primary: 25 60% 55% (warm terracotta/coral - Georgian warmth)
- Secondary: 145 25% 45% (sage green - natural, artisan)

### B. Typography

**Font Families:**
- Headings: 'Playfair Display' (serif, elegant)
- Body: 'Inter' (sans-serif, clean readability)
- Georgian: 'BPG Nino Mtavruli' or system Georgian fonts

**Hierarchy:**
- Hero Title: text-6xl to text-7xl, font-bold
- Section Headers: text-4xl to text-5xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body: text-base to text-lg, font-normal
- Captions: text-sm, tracking-wide

### C. Layout System

**Spacing Units:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for harmony
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6

**Grid Strategy:**
- Portfolio: Masonry/Pinterest-style grid (2-3 columns desktop, 1 mobile)
- Content: Asymmetric layouts with image-text splits
- Mobile-first responsive breakpoints

### D. Component Library

**Navigation:**
- Sticky header with blur backdrop
- Language toggle (🇬🇪/🇬🇧 flags or KA/EN text)
- Minimal menu: About, Portfolio, Contact
- Mobile: Slide-in drawer

**Hero Section:**
- Full-width hero with portrait image of Nini (70vh)
- Overlay gradient (subtle dark vignette)
- Centered text: "Nini" + "Visual Storyteller & Educator" tagline
- Dual-language intro text
- Soft scroll indicator

**Portfolio Grid:**
- Pinterest-inspired masonry layout
- Hover effects: subtle scale + overlay with product name
- Lightbox modal for full-view images
- Category filters (Gifts, Custom, Featured)

**About/Bio Section:**
- Split layout: Image left (60%) + Bio right (40%)
- Dual-column text (Georgian | English side-by-side on desktop)
- Authentic, personal photography

**Contact Section:**
- Social links (Instagram, LinkedIn prominent)
- Contact form with minimal styling
- Georgian location badge/map reference

**Footer:**
- Bilingual copyright
- Quick links
- Social icons
- "Handcrafted in Georgia 🇬🇪" tagline

### E. Interactions

**Language Switching:**
- Toggle animates content fade-out/fade-in (200ms)
- Preserves scroll position
- Visual indicator of active language

**Minimal Animations:**
- Subtle parallax on hero (if any)
- Fade-in on scroll for portfolio items (stagger 50ms)
- Smooth hover transitions (200-300ms)
- No distracting motion - elegance over flashiness

---

## Images

**Hero Image:**
- Portrait-orientation professional photo of Nini (lifestyle shot, natural setting)
- Resolution: 1920x1280px minimum
- Placement: Full-width hero, 70vh height
- Treatment: Slight vignette overlay, warm color grading

**Portfolio Gallery:**
- 12-20 product/gift images
- Mix of detail shots and lifestyle contexts
- Square or vertical orientations preferred
- High resolution for lightbox viewing

**About Section:**
- Candid workspace photo or portrait
- Shows Nini in creative environment
- Authentic, unposed aesthetic

---

## Accessibility & Responsiveness

- Color contrast ratio 4.5:1+ for all text
- RTL considerations for Georgian text flow
- Touch targets minimum 44x44px
- Keyboard navigation for all interactive elements
- Focus indicators matching brand accent color
- Semantic HTML with proper lang attributes (ka/en)

---

## Content Architecture

**JSON Structure Strategy:**
- `en.json` and `ka.json` with identical keys
- Nested structure: nav, hero, about, portfolio, contact, footer
- Image paths remain consistent (language-agnostic)
- Easy GitHub mobile editing with clear key names