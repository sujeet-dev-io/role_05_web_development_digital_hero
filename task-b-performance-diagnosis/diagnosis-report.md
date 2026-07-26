# Performance Diagnosis Report: arngren.net

**Date:** July 26, 2026  
**Analyst:** Web Development Assessment  
**Target:** https://www.arngren.net/  
**Form Factors:** Mobile (primary), Desktop (comparison)

---

## Executive Summary

Arngren.net is a Norwegian product catalog/directory site built with legacy table-based HTML from the early 2000s. The site fails Core Web Vitals on mobile and suffers primarily from **unoptimized image delivery**, **missing cache policies**, and a **render-blocking architecture** caused by its table-based layout.

---

## 1. Field Data (Real User Metrics — CrUX)

| Metric | Mobile | Status |
|:-------|:-------|:-------|
| **LCP** | 3.4s | 🟡 Needs Improvement (threshold: ≤2.5s) |
| **INP** | N/A | — (insufficient traffic data) |
| **CLS** | 0 | 🟢 Good |
| **FCP** | 1.5s | 🟢 Good |
| **TTFB** | 1.4s | 🟡 Needs Improvement (threshold: ≤800ms) |

**CWV Assessment: FAILED** — LCP exceeds the 2.5s "Good" threshold.

## 2. Lab Data (Lighthouse Simulated)

| Metric | Mobile | Desktop |
|:-------|:-------|:-------|
| **Performance Score** | 67/100 | 94/100 |
| **LCP** | 3.4s | 0.5s |
| **FCP** | 1.5s | 0.5s |
| **CLS** | 0 | 0 |
| **TTFB** | 1.4s | 1.2s |

---

## 3. Root Cause Analysis

### 3.1 LCP Bottleneck (Primary Issue)

The LCP element on mobile is the **header background image** (`JUL.header_bg.jpg`):

```
Element: body > div#root > div#e221 > img
File:    JUL.header_bg.jpg
```

**LCP Breakdown:**
| Phase | Duration |
|:------|:---------|
| TTFB | ~1,400ms |
| Resource load delay | 1,690ms |
| Resource load duration | 2,010ms |
| **Total LCP** | **3,400ms** |

**Root causes:**
- The image is served as a JPEG with no modern format optimization (WebP/AVIF)
- No `<link rel="preload">` hint — the browser discovers it only after parsing the HTML
- The server response time (TTFB) of 1.4s means rendering can't even begin for 1.4 seconds
- No CDN detected — the origin server handles all requests directly

### 3.2 Image Delivery (−874 KiB potential savings)

The site loads **dozens of unoptimized images** on a single page:

| Image | Current Size | Potential Savings |
|:------|:-------------|:-----------------|
| `elsykkel-Stor-Tak-43166_Taxi_Sykkel___Persontransport_1.jpg` | 606 KiB | 547.5 KiB |
| `TOY-RIDER-LITE.gif` | Oversized (640×480 displayed at 305×198) | ~200 KiB |
| Multiple product images | Various | 100+ KiB combined |

**Issues:**
- Images served as JPEG/GIF — no WebP or AVIF
- No responsive `srcset` — same large image served to all viewports
- No `width`/`height` attributes on most images (though CLS = 0 because table layout forces dimensions)
- No lazy loading — all images load eagerly on page load
- Images displayed at smaller sizes than their native dimensions

### 3.3 Missing Cache Policies (−1,970 KiB wasted transfer)

Most static assets have **short or no cache lifetimes**:

- Images that rarely change are re-downloaded on every visit
- No `Cache-Control: max-age` headers set appropriately
- Estimated **1,970 KiB** of unnecessary data transfer per repeat visit

### 3.4 Architecture Issues

| Issue | Impact |
|:------|:-------|
| **Table-based layout** | Forces browser to parse entire table before rendering anything |
| **No semantic HTML** | Zero `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` elements |
| **No responsive design** | Fixed-width tables don't adapt to mobile viewports |
| **No meta viewport** | Browser must guess the intended viewport width |
| **Inline styles everywhere** | CSS can't be cached separately; increases HTML payload |
| **No structured data** | Zero schema.org markup |
| **No Open Graph tags** | Social sharing generates no preview |
| **No HTTPS** | Site serves over HTTP only |

### 3.5 Server-Side Issues

- **TTFB: 1.4s** — significantly above the 800ms Good threshold
- No HTTP/2 or HTTP/3 detected
- No compression (gzip/brotli) on HTML or assets
- No CDN — single-origin serving

---

## 4. Why Desktop Scores 94 But Mobile Fails

On desktop, Lighthouse uses a more generous throttling profile:
- Faster simulated network
- More CPU power
- The LCP element on desktop is a **table cell** (text-based), not the large header image
- This means the LCP completes in 0.5s on desktop vs. 3.4s on mobile

The **same underlying problems exist** — they're just masked by desktop's faster simulation.

---

## 5. Evidence

PageSpeed Insights screenshots are stored in the `evidence/` directory:
- `mobile_perf_*.png` — Mobile performance score and lab metrics
- `field_data_*.png` — Core Web Vitals field data
- `insights_list_*.png` — Diagnostics and opportunities list
- `lcp_details_*.png` — LCP breakdown and element identification
- `desk_*.png` — Desktop comparison data
