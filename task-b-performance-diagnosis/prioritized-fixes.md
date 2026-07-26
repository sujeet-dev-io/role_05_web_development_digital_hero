# Prioritized Fix List: arngren.net

Fixes ranked by **impact ÷ implementation cost**. Impact is measured by expected improvement to LCP and overall performance score. Cost is measured in developer hours.

---

## Priority 1 — High Impact, Low Cost (Do First)

### 1.1 ✅ Optimize and convert images to WebP/AVIF
| | |
|:--|:--|
| **Impact** | 🔴 Critical — saves ~874 KiB on first load |
| **Metric affected** | LCP, Total Page Weight |
| **Cost** | 2–4 hours |
| **Expected improvement** | LCP: −1.0–1.5s, Score: +10–15 |
| **How** | Batch convert all JPEG/GIF images to WebP using `cwebp` or Squoosh. Serve via `<picture>` element with JPEG fallback. Resize to actual display dimensions. |

### 1.2 ✅ Add cache headers to static assets
| | |
|:--|:--|
| **Impact** | 🟡 High for repeat visitors — saves ~1,970 KiB per revisit |
| **Metric affected** | LCP (repeat visits), Total transfer |
| **Cost** | 1 hour |
| **Expected improvement** | Repeat-visit load time: −50–70% |
| **How** | Set `Cache-Control: public, max-age=31536000, immutable` for images and static assets. Use content hashing for cache-busting. |

### 1.3 ✅ Preload the LCP image
| | |
|:--|:--|
| **Impact** | 🟡 High — eliminates 1,690ms resource load delay |
| **Metric affected** | LCP |
| **Cost** | 15 minutes |
| **Expected improvement** | LCP: −1.0–1.5s |
| **How** | Add `<link rel="preload" as="image" href="JUL.header_bg.jpg">` to `<head>`. This lets the browser start downloading the LCP image during HTML parsing instead of waiting until it discovers the `<img>` tag. |

---

## Priority 2 — High Impact, Medium Cost

### 2.1 ✅ Add responsive images with srcset
| | |
|:--|:--|
| **Impact** | 🟡 High on mobile — serves appropriately sized images |
| **Metric affected** | LCP, Total transfer |
| **Cost** | 4–6 hours |
| **Expected improvement** | Mobile payload: −40–60% |
| **How** | Create multiple sizes (320w, 640w, 1024w) for each product image. Use `srcset` and `sizes` attributes. |

### 2.2 ✅ Add lazy loading to below-fold images
| | |
|:--|:--|
| **Impact** | 🟡 High — prevents loading dozens of off-screen images at page load |
| **Metric affected** | Total page weight on initial load, Time to Interactive |
| **Cost** | 1–2 hours |
| **Expected improvement** | Initial transfer: −500 KiB+ |
| **How** | Add `loading="lazy"` to all `<img>` tags below the first viewport. Keep the hero/header image as `loading="eager"`. |

### 2.3 ✅ Enable gzip/brotli compression
| | |
|:--|:--|
| **Impact** | 🟡 Medium — compresses HTML transfer |
| **Metric affected** | TTFB, FCP |
| **Cost** | 30 minutes (server config) |
| **Expected improvement** | HTML transfer: −60–70% |
| **How** | Enable gzip or brotli on the web server (Apache: `mod_deflate`, Nginx: `gzip on`). |

---

## Priority 3 — Medium Impact, Higher Cost

### 3.1 ✅ Replace table layout with semantic HTML + CSS Grid
| | |
|:--|:--|
| **Impact** | 🟢 Medium — improves render performance and accessibility |
| **Metric affected** | LCP (render path), Accessibility score |
| **Cost** | 16–24 hours |
| **Expected improvement** | Score: +5–10, Accessibility: +30–40 |
| **How** | Rewrite page structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Use CSS Grid for layout. This is the "rebuilt section" demo. |

### 3.2 ✅ Add viewport meta tag
| | |
|:--|:--|
| **Impact** | 🟢 Medium — enables proper mobile rendering |
| **Metric affected** | All mobile metrics |
| **Cost** | 5 minutes |
| **How** | Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to `<head>`. |

### 3.3 ✅ Move to HTTPS
| | |
|:--|:--|
| **Impact** | 🟢 Medium — security, SEO ranking, required for HTTP/2 |
| **Cost** | 2–4 hours (Let's Encrypt + server config) |
| **How** | Install TLS certificate via Let's Encrypt. Redirect HTTP → HTTPS. |

---

## Priority 4 — Low Impact or Out of Scope (Would NOT Bother)

### 4.1 ❌ JavaScript optimization
**Why skip:** The site has virtually no JavaScript. There's no TBT or INP problem to solve. Any JS optimization effort would yield near-zero returns.

### 4.2 ❌ Font optimization
**Why skip:** The site uses only system/default fonts. There are no web fonts to optimize. This is actually one of the few things it gets right.

### 4.3 ❌ Service Worker / PWA features
**Why skip:** The site is a simple product catalog. The implementation cost of a service worker far exceeds the benefit for this type of content.

### 4.4 ❌ Framework migration
**Why skip:** There is no JavaScript framework to migrate from. The site is static HTML. Adding React/Vue would make performance *worse*, not better.

### 4.5 ❌ Server-side rendering optimization
**Why skip:** The content is already server-rendered static HTML. SSR optimization provides no benefit here — the problem is asset delivery, not rendering strategy.

---

## Summary: ROI Priority Matrix

| Fix | Impact | Cost | ROI |
|:----|:-------|:-----|:----|
| Preload LCP image | 🔴 High | ⏱ 15 min | ⭐⭐⭐⭐⭐ |
| Add viewport meta | 🟡 Med | ⏱ 5 min | ⭐⭐⭐⭐⭐ |
| Image optimization (WebP) | 🔴 High | ⏱ 3 hrs | ⭐⭐⭐⭐ |
| Cache headers | 🟡 High | ⏱ 1 hr | ⭐⭐⭐⭐ |
| Lazy loading | 🟡 High | ⏱ 1 hr | ⭐⭐⭐⭐ |
| gzip/brotli | 🟡 Med | ⏱ 30 min | ⭐⭐⭐⭐ |
| Responsive images | 🟡 High | ⏱ 5 hrs | ⭐⭐⭐ |
| Semantic HTML rewrite | 🟢 Med | ⏱ 20 hrs | ⭐⭐ |
| HTTPS | 🟢 Med | ⏱ 3 hrs | ⭐⭐ |
