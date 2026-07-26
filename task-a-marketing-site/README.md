# NovaCraft — AI Workflow Automation Marketing Site

A production-quality, multi-page marketing site for a fictional B2B SaaS company. Built entirely by hand — no page builders, no CSS frameworks, no JavaScript frameworks.

## 🔗 Live URL

> Deploy to GitHub Pages: push this directory to a public repo and enable Pages from `main` branch.

## Pages

| Page | File | Description |
|:-----|:-----|:------------|
| Home | `index.html` | Hero, stats, features grid, how-it-works, testimonials, CTA |
| Product | `product.html` | Feature showcases, integrations grid, enterprise capabilities |
| Pricing | `pricing.html` | 3-tier pricing cards, billing toggle, FAQ accordion |
| Contact | `contact.html` | Validated form, contact info cards, mini FAQ |

## Architecture

```
task-a-marketing-site/
├── index.html           # Home
├── product.html         # Product
├── pricing.html         # Pricing
├── contact.html         # Contact
├── css/
│   ├── tokens.css       # Design tokens (colors, spacing, typography)
│   ├── base.css         # Reset, globals, utilities, scroll reveal
│   ├── components.css   # Shared components (navbar, footer, cards, buttons)
│   └── pages/
│       ├── home.css
│       ├── product.css
│       ├── pricing.css
│       └── contact.css
├── js/
│   ├── nav.js           # Mobile menu, scroll navbar (~1.5KB)
│   └── main.js          # IntersectionObserver, billing toggle, form validation (~2KB)
├── img/
│   └── product-dashboard.png
├── favicon.svg
└── README.md
```

### Extending Without Touching Layout Code

Content teams can:
- Add new pages by copying any existing page and changing the content sections
- Add new feature cards by duplicating `.card` blocks in HTML
- Add new pricing tiers by duplicating `.pricing-card` blocks
- Change colors/spacing/typography by editing only `tokens.css`
- Page-specific CSS is isolated in `css/pages/` — never affects other pages

## Accessibility & Semantics

- ✅ Single `<h1>` per page with logical heading hierarchy (`h1` → `h2` → `h3`)
- ✅ Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- ✅ Skip-to-content link on every page
- ✅ Full keyboard accessibility (all interactive elements focusable, visible focus rings)
- ✅ `aria-current="page"` on active nav links
- ✅ `aria-expanded`, `aria-controls`, `aria-label` on mobile menu toggle
- ✅ `aria-checked` on billing toggle switch
- ✅ `role="alert"` on form error messages, `aria-live="polite"` on success state
- ✅ `aria-hidden="true"` on decorative elements
- ✅ Color contrast ≥ 4.5:1 (WCAG AA)
- ✅ `prefers-reduced-motion` support

## Structured Data

Every page includes valid JSON-LD structured data using `@graph` to link entities:

| Page | Schema Types |
|:-----|:------------|
| All pages | `Organization`, `WebSite`, `BreadcrumbList` |
| Home | `SoftwareApplication` with `AggregateRating` and `AggregateOffer` |
| Product | `Product` with `AggregateOffer` |
| Pricing | 3× `Product` with individual `Offer`, `FAQPage` |
| Contact | `ContactPage`, `FAQPage` |

## Meta & Open Graph

Every page has:
- Unique `<title>` and `<meta name="description">`
- `<link rel="canonical">`
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

## Core Web Vitals Strategy

| Metric | Target | How We Achieve It |
|:-------|:-------|:-----------------|
| **LCP** | < 1.5s | No render-blocking JS (all `defer`), `font-display: swap`, minimal CSS, `loading="eager"` on hero images |
| **INP** | < 50ms | < 3.5KB total JS, no frameworks, `requestAnimationFrame` for scroll, passive event listeners |
| **CLS** | 0 | Explicit `width`/`height` on all images, no dynamic content injection, system font fallback stack |

### Performance Techniques Used
- Font preconnect + `font-display: swap` (eliminates FOIT)
- `defer` on all scripts (no render-blocking JS)
- IntersectionObserver for scroll animations (no scroll listeners for this)
- Passive scroll listener for navbar (doesn't block scrolling)
- SVG favicon (no extra image request)
- CSS custom properties (single source of truth, no duplication)
- Inline SVG icons (no icon font library to download)
- `prefers-reduced-motion` query disables all animations

## Deploy to GitHub Pages

```bash
cd task-a-marketing-site
git init
git add .
git commit -m "NovaCraft marketing site"
git remote add origin https://github.com/YOUR_USERNAME/novacraft-site.git
git push -u origin main
```

Then go to **Settings → Pages → Source: main branch** and your site will be live at `https://YOUR_USERNAME.github.io/novacraft-site/`.
