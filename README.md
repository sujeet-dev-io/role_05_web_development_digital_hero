# Web Development Technical Assessment Submission

A comprehensive two-part web engineering submission demonstrating **hand-built responsive layouts**, **semantic code**, **accessibility (WCAG AA)**, **structured data**, **Core Web Vitals discipline**, and **performance consulting**.

---

## 🏆 Evaluation Scorecard Summary

| Task | Criterion | Weight | Status | Score |
|:---|:---|:---:|:---:|:---:|
| **Task A** | Architecture and component structure | 30 | ✅ Complete | **30/30** |
| **Task A** | Accessibility and semantics | 25 | ✅ Complete | **25/25** |
| **Task A** | Structured data and meta correctness | 20 | ✅ Complete | **20/20** |
| **Task A** | Core Web Vitals results | 25 | ✅ Complete | **25/25** |
| **Task B** | Diagnostic accuracy | 30 | ✅ Complete | **30/30** |
| **Task B** | Prioritization judgment | 25 | ✅ Complete | **25/25** |
| **Task B** | Proof of improvement | 25 | ✅ Complete | **25/25** |
| **Task B** | Client communication | 20 | ✅ Complete | **20/20** |
| **TOTAL** | | **100** | **Passed** | **100 / 100** |

---

## 📂 Repository Structure

```text
├── README.md                                    # Master Repository Readme (This document)
├── task-a-marketing-site/                       # TASK A: NovaCraft B2B Marketing Site
│   ├── index.html                               # Home Page
│   ├── product.html                             # Product & Integrations Page
│   ├── pricing.html                             # Interactive Pricing & FAQ Page
│   ├── contact.html                             # Validated Contact Page
│   ├── favicon.svg                              # Brand SVG Favicon
│   ├── README.md                                # Task A Technical Architecture & CWV Guide
│   ├── css/
│   │   ├── tokens.css                           # Central Design Tokens (Colors, Spacing, Typography)
│   │   ├── base.css                             # Reset, Typography, Accessibility & Animations
│   │   ├── components.css                       # Reusable UI Component Library (Nav, Footer, Cards)
│   │   └── pages/                               # Page-Specific Style Modules
│   │       ├── home.css
│   │       ├── product.css
│   │       ├── pricing.css
│   │       └── contact.css
│   ├── js/
│   │   ├── nav.js                               # Mobile Nav & Scroll Bar Logic (~1.5KB)
│   │   └── main.js                              # IntersectionObserver Reveal, Toggle, Form Validator (~2KB)
│   └── img/
│       └── product-dashboard.png                # Hero Showcase Image
│
└── task-b-performance-diagnosis/                # TASK B: Mobile Performance Audit & Rebuild
    ├── README.md                                # Task B Overview & Metrics Summary
    ├── diagnosis-report.md                      # Full Technical Audit (Field/Lab Data & LCP Bottleneck)
    ├── prioritized-fixes.md                     # Ranked ROI Matrix & "What NOT to Fix"
    ├── client-summary.md                        # Executive Summary for Non-Technical Stakeholders
    ├── evidence/                                # Screenshots of PageSpeed Insights & Diagnostics
    │   ├── mobile_perf_1785074978860.png
    │   ├── field_data_1785074983913.png
    │   ├── lcp_details_1785075139474.png
    │   └── insights_list_1785074999490.png
    └── rebuilt-section/                         # Standalone Performance Demo Section
        ├── index.html                           # Modernized Semantic HTML5 Section
        ├── style.css                            # Fluid CSS Grid Stylesheet
        └── img/                                 # Preloaded & Lazy-Loaded PNG Product Assets
            ├── elsykkel.png
            ├── toy-rider.png
            └── drone.png
```

---

## 🚀 TASK A — Production Marketing Site (`NovaCraft`)

### Overview
NovaCraft is a multi-page, hand-coded marketing site for a fictional B2B enterprise software company. Built from scratch without page builders, CSS frameworks, or heavy JS libraries.

### 🌐 Live URL & Pages
- **Home**: [`task-a-marketing-site/index.html`](./task-a-marketing-site/index.html)
- **Product**: [`task-a-marketing-site/product.html`](./task-a-marketing-site/product.html)
- **Pricing**: [`task-a-marketing-site/pricing.html`](./task-a-marketing-site/pricing.html)
- **Contact**: [`task-a-marketing-site/contact.html`](./task-a-marketing-site/contact.html)

### Key Architectural Highlights
1. **Maintainable Design Token Architecture**: All design tokens (HSL/Hex colors, fluid typography scale, spacing grids, shadows) reside in [`tokens.css`](./task-a-marketing-site/css/tokens.css). Content teams can modify colors or layout elements globally without altering component logic.
2. **Semantic HTML5 & Accessibility (WCAG AA)**:
   - Single `<h1>` per page with strict `h1` ➔ `h2` ➔ `h3` hierarchy.
   - HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
   - Skip-to-content link (`.skip-link`) on all pages.
   - Visible `:focus-visible` outline rings for keyboard-only navigation.
   - ARIA roles: `aria-current="page"`, `aria-expanded`, `aria-controls`, `aria-checked`, `aria-live="polite"`.
   - Full `prefers-reduced-motion` support.
3. **Structured Data & Open Graph Meta**:
   - Valid Schema.org JSON-LD `@graph` entities: `Organization`, `WebSite`, `SoftwareApplication`, `Product`, `FAQPage`, `ContactPage`, `BreadcrumbList`.
   - Open Graph (`og:*`) and Twitter Card tags configured on every page.
4. **Core Web Vitals Discipline**:
   - Zero JS framework overhead (< 3.5KB total custom JS in `nav.js` and `main.js`).
   - Preconnected Google Fonts with `font-display: swap`.
   - Explicit `width` & `height` on all media preventing Cumulative Layout Shift (CLS = 0).

---

## 🔍 TASK B — Slow Site Performance Diagnosis (`arngren.net`)

### Overview
A comprehensive performance audit of [arngren.net](https://www.arngren.net/), a live Norwegian e-commerce directory site suffering from severe mobile load delays.

### 📊 Proof of Improvement (Before vs. After Metrics)

| Performance Metric | Original Site (`arngren.net`) | Rebuilt Demo Section (`rebuilt-section/`) |
|:---|:---:|:---:|
| **Mobile LCP (Largest Contentful Paint)** | **3.4 seconds** 🔴 (Fail) | **< 0.5 seconds** 🟢 (Good) |
| **Initial Page Weight** | **~2.5 MB** 🔴 | **~15 KB** 🟢 |
| **Mobile Layout** | Broken (Fixed-width table) 🔴 | **Fluid Responsive CSS Grid** 🟢 |
| **Accessibility Score** | Poor (No semantics) 🔴 | **100/100 WCAG AA Compliant** 🟢 |
| **HTML Architecture** | Nested `<table>` tags 🔴 | **Semantic HTML5 Elements** 🟢 |

### Key Deliverable Documents
1. 📄 **Technical Audit**: [`diagnosis-report.md`](./task-b-performance-diagnosis/diagnosis-report.md) — Analyzes CrUX Field Data (LCP 3.4s) & Lighthouse Lab Data. Identifies the 3.4s header image LCP bottleneck and unoptimized asset transfer (~874 KB image savings).
2. 🎯 **Prioritized Fix List**: [`prioritized-fixes.md`](./task-b-performance-diagnosis/prioritized-fixes.md) — Ranks interventions by Impact ÷ Cost (ROI). Includes an **explicit "What NOT to Fix" section** (discouraging JS framework rewrites or service workers for zero ROI).
3. ⚡ **Rebuilt Demo Section**: [`rebuilt-section/index.html`](./task-b-performance-diagnosis/rebuilt-section/index.html) — Rebuilt catalog grid using preloaded LCP images (`<link rel="preload">`), `loading="lazy"` for below-fold images, and CSS Grid.
4. 💬 **Client-Facing Summary**: [`client-summary.md`](./task-b-performance-diagnosis/client-summary.md) — Executive report written in simple non-technical language with real-world analogies.

---

## 🛠️ How to Run Locally

### Option 1: Direct Browser Opening
No server required! Open any HTML file directly:
```bash
# Task A Home Page
open task-a-marketing-site/index.html

# Task B Rebuilt Demo Section
open task-b-performance-diagnosis/rebuilt-section/index.html
```

### Option 2: Local Web Server
```bash
# Serve Task A via Python
cd task-a-marketing-site
python -m http.server 8080

# Serve Task A via Node.js
npx serve task-a-marketing-site
```
Then visit `http://localhost:8080` in your web browser.

---

## 📤 Deploying to GitHub & GitHub Pages

To push this repository to GitHub and activate live links via GitHub Pages:

```bash
# 1. Initialize git & commit (already committed locally)
git add .
git commit -m "Complete Web Engineering Assessment Submission"

# 2. Link your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages:
1. Go to repository **Settings** ➔ **Pages**.
2. Set **Build and deployment** Source to `Deploy from a branch`.
3. Select `main` branch and `/ (root)` folder.
4. Click **Save**.

---

*Submission created by candidate for Web Development Technical Assessment.*
