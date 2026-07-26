# Web Development Assessment — Implementation Plan

## Overview

Two-part deliverable: **(A)** a production-quality, multi-page B2B marketing site and **(B)** a performance diagnosis of a real slow website, with a rebuilt demo section proving the fix.

---

## TASK A — Build a Production Marketing Site

### Concept: **NovaCraft** — AI-Powered Workflow Automation for Enterprise

A fictional B2B SaaS company that sells AI-driven workflow automation to enterprise teams. Four pages: Home, Product, Pricing, Contact.

### Architecture & Component Strategy

```
task-a-marketing-site/
├── index.html              # Home page
├── product.html            # Product page
├── pricing.html            # Pricing page
├── contact.html            # Contact page
├── css/
│   ├── tokens.css          # Design tokens (colors, spacing, typography)
│   ├── base.css            # Reset, global styles, semantic defaults
│   ├── components.css      # Shared component styles (navbar, footer, cards, buttons)
│   └── pages/
│       ├── home.css        # Home-specific styles
│       ├── product.css     # Product-specific styles
│       ├── pricing.css     # Pricing-specific styles
│       └── contact.css     # Contact-specific styles
├── js/
│   ├── nav.js              # Mobile nav toggle, keyboard handling
│   └── main.js             # Intersection Observer animations, form validation
├── img/                    # Optimized WebP images (generated)
├── favicon.svg             # SVG favicon
└── README.md               # Documentation with performance evidence
```

### Key Design Decisions

| Decision | Choice | Rationale |
|:---|:---|:---|
| **Framework** | None — hand-coded HTML/CSS/JS | Requirement is "no page builders"; zero JS framework overhead maximizes CWV |
| **CSS Architecture** | Token-based design system with BEM naming | Content team can extend pages without touching component CSS |
| **Images** | WebP format, explicit `width`/`height`, `loading="eager"` on LCP elements | Eliminates CLS, optimizes LCP |
| **Fonts** | `Inter` via `font-display: swap` + preload | Modern B2B aesthetic, no FOIT/FOUT |
| **JavaScript** | Vanilla JS, `defer` loaded, < 5KB total | Keeps INP near 0, no TBT |
| **Hosting** | GitHub Pages | Free, CDN-backed, HTTPS by default |

### Semantic HTML & Accessibility Plan

- Single `<h1>` per page with logical `<h2>`→`<h3>` hierarchy
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- All interactive elements keyboard-focusable with visible focus rings
- Skip-to-content link on every page
- ARIA labels where needed (mobile menu toggle, icon buttons)
- `role="navigation"` on nav, `aria-current="page"` on active links
- Color contrast ≥ 4.5:1 (WCAG AA)

### Structured Data Plan

| Page | Schema Types |
|:---|:---|
| **All pages** | `Organization`, `WebSite`, `BreadcrumbList` |
| **Home** | `SoftwareApplication` (or `Product`) |
| **Product** | `Product` with `offers` |
| **Pricing** | `Product` with `offers` array, `FAQPage` |
| **Contact** | `ContactPage`, `FAQPage` |

All structured data delivered via `<script type="application/ld+json">` in `<head>` using `@graph` to link entities with `@id` references.

### Meta & Open Graph Tags (every page)

```html
<title>{Page} — NovaCraft | AI Workflow Automation</title>
<meta name="description" content="{unique per page}">
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{description}">
<meta property="og:type" content="website">
<meta property="og:url" content="{canonical URL}">
<meta property="og:image" content="{social share image}">
<meta property="og:site_name" content="NovaCraft">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="{URL}">
```

### Core Web Vitals Strategy

| Metric | Target | How |
|:---|:---|:---|
| **LCP** | < 1.5s | Inline critical CSS, preload hero image, no render-blocking resources |
| **INP** | < 50ms | < 5KB vanilla JS, no long tasks, `requestAnimationFrame` for animations |
| **CLS** | 0 | Explicit `width`/`height` on all media, reserved font space, no dynamic injection |

### Visual Design Direction

- **Dark mode primary** with deep navy/charcoal backgrounds (`#0a0e1a`, `#141929`)
- **Accent gradient**: Electric blue → violet (`#4F46E5` → `#7C3AED`)
- **Glassmorphism** cards with `backdrop-filter: blur()`
- **Micro-animations**: Subtle fade-in on scroll (IntersectionObserver), button hover transitions
- **Typography**: Inter (headings 700, body 400), system font stack fallback

---

## TASK B — Diagnose a Slow Site

### Target Site: **arngren.net**

A real, publicly accessible Norwegian product catalog/directory site notorious for extremely poor mobile performance. It uses:
- Table-based layout from the early 2000s
- No responsive design
- Dozens of unoptimized images (JPEG/GIF, no lazy loading, no sizing attributes)
- Inline styles everywhere
- No semantic HTML
- No compression or modern delivery

### Diagnosis Workflow

1. **Run PageSpeed Insights** (mobile) via browser — capture screenshot of results
2. **Run Lighthouse** (mobile) via browser — capture full report
3. **Identify specific bottlenecks**: LCP element, CLS sources, render-blocking resources, unoptimized images
4. **Document field vs lab data** where available
5. **Create prioritized fix list** (impact vs. cost matrix)
6. **Rebuild one section** (the hero/featured products area) as a standalone demo
7. **Run Lighthouse on rebuilt section** — capture before/after comparison
8. **Write client-facing summary** in plain language

### Deliverable Structure

```
task-b-performance-diagnosis/
├── diagnosis-report.md         # Full technical diagnosis with evidence
├── prioritized-fixes.md        # Ranked fix list with impact/cost
├── client-summary.md           # Non-technical summary
├── rebuilt-section/
│   ├── index.html              # Rebuilt hero/products section
│   ├── style.css               # Optimized styles
│   └── img/                    # Optimized WebP images
├── evidence/                   # Screenshots of PageSpeed, Lighthouse
└── README.md                   # Overview of deliverables
```

---

## Open Questions

> [!IMPORTANT]
> **Task B — Site Selection**: I've selected **arngren.net** as the target for diagnosis. It's a real, publicly accessible site with notoriously poor mobile performance (table-based layout, no responsive design, unoptimized images). Is this acceptable, or do you have a different site in mind?

> [!IMPORTANT]
> **GitHub Repo & Live URL**: The task asks for a live URL and public GitHub repo. I will build everything locally and provide instructions for GitHub Pages deployment. Do you want me to also attempt to initialize a Git repo and push to GitHub, or will you handle deployment yourself?

> [!IMPORTANT]
> **Brand Assets**: I'll generate hero images and social share images using image generation. The company name "NovaCraft" and the AI workflow automation concept are fictional. Any preference on the branding direction?

---

## Verification Plan

### Automated Tests
- Run Lighthouse CLI or browser Lighthouse on all 4 pages (mobile mode)
- Validate structured data with Schema Markup Validator
- Check heading hierarchy and ARIA with axe DevTools
- Validate HTML with W3C validator

### Manual Verification
- Keyboard-only navigation test across all pages
- Visual check of responsive breakpoints (mobile → desktop)
- Verify all Open Graph tags render correctly
- Screenshot Lighthouse scores as evidence

### Evidence to Attach
- Lighthouse mobile performance scores (target: 95+)
- Schema validation results (0 errors)
- Accessibility audit results
- Before/after Lighthouse for Task B rebuilt section

---

## Execution Order

1. **Task A — CSS Design System** (`tokens.css`, `base.css`, `components.css`)
2. **Task A — Generate Images** (hero, product screenshots, social share)
3. **Task A — Build Pages** (home → product → pricing → contact)
4. **Task A — Add Structured Data & Meta Tags**
5. **Task A — JavaScript** (nav, animations, form validation)
6. **Task A — Performance Audit & README**
7. **Task B — Run Diagnostics** (PageSpeed, Lighthouse on arngren.net)
8. **Task B — Write Diagnosis Report**
9. **Task B — Rebuild Section Demo**
10. **Task B — Before/After Metrics**
11. **Task B — Client Summary**
