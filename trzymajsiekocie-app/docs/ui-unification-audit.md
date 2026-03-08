# UI Unification Audit — Trzymaj Się, Kocie!

**Branch:** `ui-unification`  
**Date started:** 2026-03-08  
**Status:** Complete

---

## 1. Current UI Architecture Overview

### Tech Stack
- **Framework:** React 19 + React Router 7
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Build:** Vite 7
- **Icons:** lucide-react
- **No custom theme file** — all styling is inline Tailwind classes

### Style Entry Points
- `src/index.css` — imports Tailwind, defines custom animations & scroll-reveal utility classes
- No `tailwind.config.js` — uses Tailwind v4 CSS-based config (no token file)
- No CSS modules, no styled-components, no SCSS
- All styling is done via Tailwind utility classes directly in JSX

### Layout Architecture
- `App.jsx` wraps everything in `flex flex-col min-h-screen bg-gray-50 font-sans`
- `<Header>` is sticky top nav
- `<main className="flex-grow">` wraps all routes
- `<Footer>` at bottom
- `<AIAssistant>` fixed bottom-right

---

## 2. Where Styling Is Defined Today

| Location | Purpose |
|----------|---------|
| `src/index.css` | Animations (fade-in-up, fade-in, fade-in-scale, float), scroll-reveal classes, stagger delays |
| `src/App.jsx` | Root layout wrapper |
| Individual page files | Page-level containers, section spacing, all visual styles |
| Component files | Component-specific Tailwind classes inline |
| `src/components/Form.jsx` | Shared `labelClass`, `inputClass`, `radioLabelClass` constants |
| `src/components/Footer.jsx` | Shared `socialLinkClass` constant |

**No CSS custom properties / design tokens exist.**

---

## 3. Inventory of Shared Components and Layout Primitives

### Shared Components
| Component | Used By | Purpose |
|-----------|---------|---------|
| `Header` | App (global) | Sticky top navigation |
| `Footer` | App (global) | Site footer |
| `FadeIn` | Home | Scroll-triggered reveal animation |
| `CatImage` | Adopcja, GaleriaKotow, AdopcjaWirtualna, HistorieGrid | Fallback image component |
| `AIAssistant` | App (global) | Fixed chat widget |
| `ScrollToTop` | App (global) | Scroll reset on route change |
| `NavDropdown` | Header | Dropdown menu |
| `SocialIcons` | Header, Footer | Custom SVG icons |
| `Form` (AdoptionForm) | AdopcjaAnkieta | Multi-step adoption form |

### Layout Primitives (repeated patterns, NOT abstracted)
- **Page container:** `max-w-7xl mx-auto px-4 xl:px-8` (repeated ~20 times)
- **Hero section:** `bg-gradient-to-br from-orange-50 via-white to-amber-50` (repeated 6 times)
- **Section spacing:** `py-14`, `py-16`, `py-20 lg:py-24` (inconsistent)
- **Card pattern:** `bg-white rounded-2xl shadow-sm border border-gray-100 p-6` (repeated ~15 times)

---

## 4. Inventory of Inconsistencies Across Pages

### 4.1 Page Container Widths
| Page | Max Width | Notes |
|------|-----------|-------|
| Most pages | `max-w-7xl` | Standard |
| Kadra, Dokumenty | `max-w-6xl` | Narrower for no clear reason |
| FAQAccordion | `max-w-3xl` | Intentionally narrow (OK) |
| AdopcjaAnkieta | `max-w-3xl` | Intentionally narrow (OK) |

### 4.2 Hero Section Patterns
| Page | Hero Pattern |
|------|-------------|
| Kontakt | gradient bg + 2-col grid with image |
| FAQ | gradient bg + 3-col grid with image |
| SzczesliweHistorie | gradient bg + 3-col grid with image |
| Wolontariat | gradient bg + 2-col grid with image |
| Wsparcie | gradient bg + 3-col grid with image |
| DomTymczasowy | gradient bg + custom grid ratios |
| Aktualnosci | gradient bg (slate variant!) + single col |
| Home | **orange gradient** hero (unique) |
| Adopcja | plain `bg-white` + `bg-orange-100` (different!) |
| Kadra | gradient bg but `max-w-6xl` |
| Kalendarz | **No hero** — just a section |
| GaleriaKotow | **No hero** — just h1 |
| Adoptuj | **No hero** — just h1 |
| AdopcjaWirtualna | **No hero** — just h1 |
| Dokumenty | gradient bg but `max-w-6xl` |

### 4.3 Section Spacing
Highly inconsistent vertical padding:
- `py-12`, `py-14`, `py-16`, `py-20`, `py-20 lg:py-24`
- No clear rules for which sections get which padding

### 4.4 Button Styles
| Variant | Classes | Used In |
|---------|---------|---------|
| Primary CTA | `bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg` | KontaktForm, FAQAccordion, WolontariatContent |
| Primary CTA (rounded-full) | `bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full` | DomTymczasowy, Kadra, Dokumenty |
| Large CTA | `bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg` | Adoptuj, AdopcjaWirtualna |
| Secondary | `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold` | AdopcjaWirtualna modal |
| Ghost/outline | `border border-orange-200 text-orange-600 hover:border-orange-300 rounded-full` | DomTymczasowy |
| Form nav | `bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-lg` | Form.jsx |
| Submit green | `bg-green-600 hover:bg-green-700 text-white rounded-lg` | Form.jsx |

**Problem:** Buttons use 3 different border-radius values (`rounded-lg`, `rounded-xl`, `rounded-full`), 3 different padding sizes, and 2 different font-weights (`font-semibold`, `font-bold`).

### 4.5 Card Border Radius
- `rounded-xl` — some cards
- `rounded-2xl` — most cards
- `rounded-3xl` — Kadra, DomTymczasowy
- `rounded-[2rem]` — Aktualnosci articles

### 4.6 Typography
- H1: `text-4xl lg:text-5xl font-bold` vs `text-5xl font-bold` vs `text-4xl md:text-5xl lg:text-6xl font-extrabold`
- H2: `text-2xl lg:text-3xl font-bold` vs `text-3xl md:text-4xl font-bold` vs `text-3xl font-bold`
- Section subhead color: `text-gray-800` everywhere (consistent ✓)
- Body text: `text-gray-500` vs `text-gray-600` vs `text-gray-700` (inconsistent)

### 4.7 Form Fields
| Location | Input Style |
|----------|-------------|
| Form.jsx | `p-2.5 border-gray-300 rounded-lg focus:ring-orange-500 bg-gray-50` |
| KontaktForm | `px-4 py-3 border-gray-200 rounded-lg focus:ring-orange-400 bg-gray-50` |
| AdopcjaWirtualna modal | `px-4 py-3 border-gray-300 rounded-lg focus:ring-orange-500` (no bg-gray-50) |
| AIAssistant | `border-gray-200 px-2 py-1 text-sm focus:ring-orange-400` |

### 4.8 Color Outliers
- `text-[#07105d]` — hardcoded dark blue in Aktualnosci (should be a standard gray/brand color)
- `text-sky-700`, `text-rose-700` — one-off accent colors in Aktualnosci badges
- `text-slate-900` — used only in Kadra member names (vs `text-gray-800` everywhere else)
- `shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]` — custom shadow only in Aktualnosci

---

## 5. Repeated Anti-Patterns and Duplication

1. **Container padding copy-pasted everywhere:** `max-w-7xl mx-auto px-4 xl:px-8` appears ~20+ times
2. **Hero gradient duplicated:** `bg-gradient-to-br from-orange-50 via-white to-amber-50` repeated 6+ times
3. **Card base pattern duplicated:** `bg-white rounded-2xl shadow-sm border border-gray-100 p-6` ~15 times
4. **Button classes not standardized:** 6+ different button combinations, each with slightly different padding/radius/weight
5. **Input classes defined differently** in Form.jsx vs KontaktForm.jsx vs AdopcjaWirtualna modal
6. **Section label pattern duplicated:** `text-sm font-semibold text-orange-500 uppercase tracking-wider` ~8 times
7. **No CSS custom properties** for colors or spacing tokens

---

## 6. Proposed Target Design System / Standardization Strategy

### Approach
Use **Tailwind CSS v4's CSS custom properties** (`@theme`) to define design tokens, then create **utility CSS classes** for repeated patterns. Keep all styling in Tailwind — no new libraries.

### Design Tokens (CSS Custom Properties)
Define in `index.css` using `@theme`:
- **Colors:** Codify orange-500 as primary, gray-800 as text-primary, etc.
- **Spacing:** Standardize section padding to 2 tiers
- **Border radius:** Standardize to 3 tiers (sm, md, lg)
- **Shadows:** Standardize to 3 tiers

### Utility CSS Classes (in index.css)
Create composable utility classes for the most repeated patterns:
- `.section-container` — standard max-width + horizontal padding
- `.section-padding` — standard vertical section spacing
- `.hero-gradient` — standard hero background gradient
- `.card-base` — standard card appearance
- `.btn-primary`, `.btn-secondary`, `.btn-outline` — button variants
- `.input-base` — form input base styles
- `.section-label` — uppercase label above headings
- `.heading-page` — page title (H1)
- `.heading-section` — section title (H2)

### Standardization Rules
1. **Page container:** `max-w-7xl mx-auto px-4 xl:px-8` for all standard pages; `max-w-3xl` only for narrow-content pages (FAQ accordion, forms)
2. **Section padding:** `py-16 lg:py-20` for hero sections, `py-14 lg:py-16` for content sections
3. **Buttons:** `rounded-full` for primary CTAs, `rounded-lg` for form/utility buttons; always `font-semibold`
4. **Cards:** `rounded-2xl` everywhere (remove `rounded-3xl` and `rounded-[2rem]`)
5. **Body text:** `text-gray-600` as standard (normalize from mix of 500/600/700)
6. **Form inputs:** Unified input class with `px-4 py-3 border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500`
7. **No hardcoded colors:** Replace `#07105d` with `text-gray-900`
8. **Heading hierarchy:** H1 = `text-4xl lg:text-5xl font-bold`, H2 = `text-2xl lg:text-3xl font-bold`

---

## 7. Phased Implementation Plan

### Phase 1: Design Tokens & Global Styles
- Add CSS custom properties and utility classes to `index.css`
- Define standardized animation classes

### Phase 2: Page Containers & Heroes
- Replace all container class duplications with utility class
- Standardize hero section backgrounds and spacing
- Normalize section padding across all pages

### Phase 3: Typography & Colors
- Standardize H1/H2/H3 classes across all pages
- Normalize body text colors
- Remove hardcoded color values

### Phase 4: Buttons
- Unify all button patterns to 3 variants (primary-pill, primary-rect, secondary, outline)
- Apply consistently across all pages

### Phase 5: Cards & Panels
- Normalize card appearance (radius, shadow, border, padding)
- Apply card utility class across all components

### Phase 6: Form Fields
- Create single input base class
- Apply to Form.jsx, KontaktForm.jsx, AdopcjaWirtualna.jsx
- Normalize label styles

### Phase 7: Component-Level Cleanup
- Remove duplicate class definitions (socialLinkClass in Footer, inputClass in multiple places)
- Standardize uppercase tracking labels
- Normalize Aktualnosci custom styles

---

## 8. Progress Log

| Date | Action | Status |
|------|--------|--------|
| 2026-03-08 | Full codebase audit completed | ✅ |
| 2026-03-08 | Audit document created | ✅ |
| 2026-03-08 | Phase 1: Design tokens & global styles | 🔄 |

---

## 9. Changed Files

### Design System Foundation
- `src/index.css` — Complete rewrite with design tokens: `.section-container`, `.section-container-narrow`, `.section-hero`, `.section-content`, `.hero-gradient`, `.card-base`, `.card-base-hover`, `.btn`, `.btn-primary`, `.btn-rect`, `.btn-outline`, `.btn-secondary`, `.btn-lg`, `.input-base`, `.section-label`, `.heading-page`, `.heading-section`, `.text-body`, `.text-muted`

### Hero Sections (unified with `hero-gradient`, `section-container`, `section-hero`, `section-label`, `heading-page`)
- `src/components/FAQ/FAQHero.jsx`
- `src/components/SzczesliweHistorie/HistorieHero.jsx`
- `src/components/Wolontariat/WolontariatHero.jsx`
- `src/components/Wsparcie/WsparcieHero.jsx`
- `src/pages/Kontakt.jsx` (inline hero)
- `src/pages/DomTymczasowy.jsx` (inline hero)
- `src/pages/Aktualnosci.jsx` (inline hero)
- `src/pages/Kadra.jsx` (inline hero)
- `src/pages/Dokumenty.jsx` (inline hero)

### Page Containers & Content Spacing (unified with `section-container`, `section-content`, `heading-section`)
- `src/pages/Home.jsx`
- `src/pages/Adopcja.jsx`
- `src/pages/Adoptuj.jsx`
- `src/pages/AdopcjaWirtualna.jsx`
- `src/pages/GaleriaKotow.jsx`
- `src/pages/Kalendarz.jsx`
- `src/pages/DomTymczasowy.jsx`
- `src/pages/Aktualnosci.jsx`
- `src/components/Wolontariat/WolontariatContent.jsx`
- `src/components/Wsparcie/WsparcieCards.jsx`
- `src/components/SzczesliweHistorie/HistorieGrid.jsx`
- `src/components/FAQ/FAQAccordion.jsx`

### Buttons (unified with `btn btn-primary`, `btn-rect`, `btn-outline`, `btn-secondary`, `btn-lg`)
- `src/pages/Adoptuj.jsx`
- `src/pages/AdopcjaWirtualna.jsx`
- `src/pages/DomTymczasowy.jsx`
- `src/pages/Kadra.jsx`
- `src/pages/Dokumenty.jsx`
- `src/components/Kontakt/KontaktForm.jsx`
- `src/components/FAQ/FAQAccordion.jsx`
- `src/components/Wolontariat/WolontariatContent.jsx`

### Cards (unified with `card-base`, `card-base-hover`)
- `src/components/Wsparcie/WsparcieCards.jsx`
- `src/components/SzczesliweHistorie/HistorieCard.jsx`
- `src/components/Wolontariat/WolontariatContent.jsx`
- `src/components/Kontakt/KontaktForm.jsx`
- `src/components/Kontakt/KontaktInfo.jsx`
- `src/components/Kontakt/KontaktLocation.jsx`
- `src/pages/Adoptuj.jsx`
- `src/pages/GaleriaKotow.jsx`

### Form Inputs (unified with `input-base`)
- `src/components/Kontakt/KontaktForm.jsx`
- `src/components/Form.jsx`
- `src/pages/AdopcjaWirtualna.jsx`

### Typography & Color Normalization
- `text-gray-500` → `text-muted` in: FAQAccordion, HistorieCard, WsparcieCards, KontaktInfo, KontaktLocation, Form, Home, GaleriaKotow, DomTymczasowy, Aktualnosci, Adopcja, AdopcjaWirtualna, Adoptuj
- `text-gray-700` body → `text-body` in: Aktualnosci, Adoptuj, AdopcjaWirtualna, Adopcja, DomTymczasowy
- `rounded-[2rem]` → `rounded-3xl` in: DomTymczasowy
- Removed hardcoded `#07105d` → `text-gray-800` in: Aktualnosci
- Removed `text-slate-900` → `text-gray-800` in: Kadra

---

## 10. Open Issues / Risks / Follow-ups

1. ~~**Aktualnosci page** has unique design (article cards with `rounded-[2rem]`, custom shadows, hardcoded `#07105d`).~~ **Resolved** — normalized colors and rounded values.
2. ~~**Kadra page** uses `max-w-6xl`~~ — **Resolved** — changed to `section-container`.
3. **Home hero** is intentionally different (orange gradient vs light gradient). This is correct — it's the landing page CTA.
4. **Adopcja page** uses `bg-orange-100` for its steps section — unique but intentional.
5. **Dynamic colors** in category tags (from koty.json) use inline `style` — cannot be tokenized in Tailwind. This is acceptable.
6. **Form.jsx** has many disabled inputs (demo form). Styling is fine but form is not functional.
7. **Tailwind v4** uses CSS-based config. No `@theme` directive needed for basic custom properties — we can use `@utility` and standard CSS.
8. **Pre-existing lint errors** (7 total): unused variables in KontaktInfo, WolontariatContent, WsparcieCards, DomTymczasowy, Adoptuj; `setState` in effects in CatImage, Adoptuj. These are unrelated to UI changes.
9. **Header/Footer/AIAssistant** were not modified — they have consistent styling already. `text-gray-500`/`text-gray-700` on interactive nav elements was intentionally left as-is.
10. **NavDropdown.jsx** `text-gray-700` on menu items left as-is (interactive element, not body text).

---

## 11. Verification Results

- **Build:** `npm run build` — ✅ Success (1.74s, 0 errors)
- **Lint:** `npm run lint` — 7 pre-existing errors (none introduced by UI changes)
- **No regressions** in CSS output (52.01 kB gzip: 9.09 kB)
