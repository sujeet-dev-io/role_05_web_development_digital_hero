# Performance Diagnosis: arngren.net

A full performance audit of [arngren.net](https://www.arngren.net/), a real publicly accessible website that performs poorly on mobile. Includes diagnosis, prioritized fixes, a rebuilt section demo, and a client-facing summary.

## Deliverables

| File | Description |
|:-----|:------------|
| `diagnosis-report.md` | Full technical diagnosis with field/lab data, root cause analysis, and evidence |
| `prioritized-fixes.md` | Ranked fix list with impact, cost, and ROI for each recommendation |
| `client-summary.md` | Non-technical summary suitable for sending to a client |
| `rebuilt-section/` | Standalone demo proving the recommended fixes work |
| `evidence/` | PageSpeed Insights screenshots (mobile + desktop) |

## Key Findings

| Metric | Current (Mobile) | Target | Status |
|:-------|:-----------------|:-------|:-------|
| **LCP** | 3.4s | ≤ 2.5s | 🔴 Fail |
| **CLS** | 0 | ≤ 0.1 | 🟢 Pass |
| **Performance Score** | 67/100 | ≥ 90/100 | 🟡 Needs Improvement |

## Top 3 Fixes (by ROI)

1. **Preload LCP image** — 15 minutes of work, saves ~1.5s of LCP
2. **Convert images to WebP** — 3 hours, saves ~874 KiB
3. **Add cache headers** — 1 hour, eliminates ~1,970 KiB per repeat visit

## Rebuilt Section

The `rebuilt-section/` directory contains a rebuilt version of the arngren.net product catalog section using:
- Modern semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- CSS Grid responsive layout
- Zero unoptimized images
- Full keyboard accessibility
- `<meta name="viewport">` for mobile
- `prefers-reduced-motion` support

### Before vs. After

| Metric | arngren.net (Before) | Rebuilt (After) |
|:-------|:---------------------|:---------------|
| **Page weight** | ~2.5 MB | ~15 KB |
| **LCP** | 3.4s | < 0.5s |
| **Mobile-friendly** | No | Yes |
| **Accessibility** | Poor | Excellent |
| **Semantic HTML** | None | Full |
